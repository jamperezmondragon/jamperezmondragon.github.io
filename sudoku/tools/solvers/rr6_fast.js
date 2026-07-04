// RR6 (Equilibrium): búsqueda en dos fases con poda de alcanzabilidad.
// Fase 1: rata -> teleport (sin pisar el pastel). Fase 2: gemelo -> pastel.
// Balance: suma(fase 1) == suma(fase 2). Ambas fases con BFS de poda.
const fs = require("fs");
const p = JSON.parse(fs.readFileSync(__dirname + "/../puzzles_json/3xa2x14bxe.json", "utf8"));
const N = 9, WALL = "#6a7246ff";
const sol = p.metadata.solution;
const grid = [];
for (let r = 0; r < N; r++) grid.push([...sol.slice(r * N, r * N + N)].map(Number));

const near = (a, b) => Math.abs(a - b) < 1e-6;
const isInt = x => near(x, Math.round(x));

const blockedV = new Set(), blockedH = new Set();
for (const l of p.lines || []) {
  if (l.color !== WALL || (l.thickness || 0) < 11) continue;
  const wp = l.wayPoints;
  for (let i = 0; i + 1 < wp.length; i++) {
    let [r1, c1] = wp[i], [r2, c2] = wp[i + 1];
    if (near(c1, c2) && isInt(c1)) {
      const c = Math.round(c1);
      for (let r = Math.min(r1, r2); r < Math.max(r1, r2) - 1e-6; r++)
        if (c > 0 && c < N) blockedV.add(Math.floor(r + 1e-6) + "," + c);
    } else if (near(r1, r2) && isInt(r1)) {
      const r = Math.round(r1);
      for (let c = Math.min(c1, c2); c < Math.max(c1, c2) - 1e-6; c++)
        if (r > 0 && r < N) blockedH.add(r + "," + Math.floor(c + 1e-6));
    }
  }
}
const cornerDots = new Set();
for (const o of p.overlays || []) {
  if (o.backgroundColor === WALL && near(o.width, 0.32) && isInt(o.center[0]) && isInt(o.center[1]))
    cornerDots.add(Math.round(o.center[0]) + "," + Math.round(o.center[1]));
}
const doors = [];
for (const l of p.lines || []) {
  if (l.color !== "#730dc5ff") continue;
  const [a, tip, b] = l.wayPoints;
  const base = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const d = [tip[0] - base[0], tip[1] - base[1]];
  if (Math.abs(d[0]) > Math.abs(d[1])) {
    const key = Math.round(tip[0]) + "," + Math.floor(tip[1]);
    doors.push({ t: "H", key, dir: Math.sign(d[0]) });
    blockedH.delete(key);
  } else {
    const key = Math.floor(tip[0]) + "," + Math.round(tip[1]);
    doors.push({ t: "V", key, dir: Math.sign(d[1]) });
    blockedV.delete(key);
  }
}

function orthOpen(r1, c1, r2, c2) {
  if (r1 === r2) return !blockedV.has(r1 + "," + Math.max(c1, c2));
  return !blockedH.has(Math.max(r1, r2) + "," + c1);
}
function doorAllows(r1, c1, r2, c2) {
  for (const d of doors) {
    const [r, c] = d.key.split(",").map(Number);
    if (d.t === "V" && r1 === r2 && r1 === r && Math.max(c1, c2) === c) return Math.sign(c2 - c1) === d.dir;
    if (d.t === "H" && c1 === c2 && c1 === c && Math.max(r1, r2) === r) return Math.sign(r2 - r1) === d.dir;
  }
  return true;
}
function diagOpen(r1, c1, r2, c2) {
  const rp = Math.max(r1, r2), cp = Math.max(c1, c2);
  if (cornerDots.has(rp + "," + cp)) return false;
  const rt = rp - 1, ct = cp - 1;
  if (blockedV.has(rt + "," + cp) || blockedV.has(rp + "," + cp)) return false;
  if (blockedH.has(rp + "," + ct) || blockedH.has(rp + "," + cp)) return false;
  for (const d of doors) {
    const [r, c] = d.key.split(",").map(Number);
    if (d.t === "V" && c === cp && (r === rt || r === rp)) return false;
    if (d.t === "H" && r === rp && (c === ct || c === cp)) return false;
  }
  return true;
}
const nbrCache = new Map();
function neighbors(r, c) {
  const k = r + "," + c;
  if (nbrCache.has(k)) return nbrCache.get(k);
  const out = [];
  for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
    const nr = r + dr, nc = c + dc;
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
    if (orthOpen(r, c, nr, nc) && doorAllows(r, c, nr, nc)) out.push([nr, nc]);
  }
  for (const [dr, dc] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const nr = r + dr, nc = c + dc;
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
    if (diagOpen(r, c, nr, nc)) out.push([nr, nc]);
  }
  nbrCache.set(k, out);
  return out;
}

const RAT = [6, 7], CAKE = [4, 7], TPA = [0, 0], TPB = [8, 8];

// BFS: ¿se puede llegar de (r,c) a target sin pisar visited?
function reachable(r, c, target, visited) {
  if (r === target[0] && c === target[1]) return true;
  const seen = new Set([r + "," + c]);
  const q = [[r, c]];
  while (q.length) {
    const [cr, cc] = q.pop();
    for (const [nr, nc] of neighbors(cr, cc)) {
      const k = nr + "," + nc;
      if (seen.has(k) || visited.has(k)) continue;
      if (nr === target[0] && nc === target[1]) return true;
      seen.add(k);
      q.push([nr, nc]);
    }
  }
  return false;
}

// distancia BFS optimista al pastel (ignora visitados y sentido de puertas)
const distCake = (() => {
  const D = new Map(); D.set(CAKE[0] + "," + CAKE[1], 0);
  const q = [CAKE];
  while (q.length) {
    const [r, c] = q.shift(); const d = D.get(r + "," + c);
    for (const [nr, nc] of neighbors(r, c)) {
      const k = nr + "," + nc;
      if (!D.has(k)) { D.set(k, d + 1); q.push([nr, nc]); }
    }
  }
  return D;
})();
let nodes = 0;
const solutions = [];

// Fase 2: desde el gemelo hasta el pastel, suma exacta objetivo
function dfs2(r, c, visited, path, sum, target) {
  nodes++;
  const dk = distCake.get(r + "," + c);
  if (dk === undefined || sum + dk > target) return;
  if (path.length > 60) return;
  if (r === CAKE[0] && c === CAKE[1]) {
    if (sum === target) solutions.push(path.slice());
    return;
  }
  if (!reachable(r, c, CAKE, visited)) return;
  for (const [nr, nc] of neighbors(r, c)) {
    const k = nr + "," + nc;
    if (visited.has(k)) continue;
    visited.add(k); path.push([nr, nc]);
    dfs2(nr, nc, visited, path, sum + grid[nr][nc], target);
    path.pop(); visited.delete(k);
  }
}

// Fase 1: de la rata a un teleport (sin pisar pastel ni el otro teleport antes)
function dfs1(r, c, visited, path, sum) {
  nodes++;
  if (path.length > 60) return;
  const atA = r === TPA[0] && c === TPA[1], atB = r === TPB[0] && c === TPB[1];
  if (atA || atB) {
    const twin = atA ? TPB : TPA;
    const twinK = twin[0] + "," + twin[1];
    if (!visited.has(twinK)) {
      visited.add(twinK);
      path.push(twin);
      dfs2(twin[0], twin[1], visited, path, grid[twin[0]][twin[1]], sum);
      path.pop();
      visited.delete(twinK);
    }
    return;   // al entrar al teleport, se teletransporta obligatoriamente
  }
  if (!reachable(r, c, TPA, visited) && !reachable(r, c, TPB, visited)) return;
  for (const [nr, nc] of neighbors(r, c)) {
    const k = nr + "," + nc;
    if (visited.has(k)) continue;
    if (nr === CAKE[0] && nc === CAKE[1]) continue;   // el pastel es el final
    visited.add(k); path.push([nr, nc]);
    dfs1(nr, nc, visited, path, sum + grid[nr][nc]);
    path.pop(); visited.delete(k);
  }
}

// chequeos estáticos
const errs = [];
for (let r = 0; r < N; r++) {
  if (new Set(grid[r]).size !== N) errs.push("fila " + r);
  if (new Set(grid.map(row => row[r])).size !== N) errs.push("col " + r);
}
for (const reg of p.regions || []) if (new Set(reg.map(([r, c]) => grid[r][c])).size !== reg.length) errs.push("caja");
if (grid[TPA[0]][TPA[1]] !== grid[TPB[0]][TPB[1]]) errs.push("teleports distintos");
for (const o of p.overlays || []) {
  if (o.backgroundColor === "#000000" && o.width >= 0.2 && o.width <= 0.27) {
    const [y, x] = o.center;
    let a, b;
    if (isInt(y)) { a = grid[Math.round(y) - 1][Math.floor(x)]; b = grid[Math.round(y)][Math.floor(x)]; }
    else { a = grid[Math.floor(y)][Math.round(x) - 1]; b = grid[Math.floor(y)][Math.round(x)]; }
    if (a !== 2 * b && b !== 2 * a) errs.push("grosella " + JSON.stringify(o.center));
  }
}
for (const d of doors) {
  const [r, c] = d.key.split(",").map(Number);
  const [A, B] = d.t === "H" ? [[r - 1, c], [r, c]] : [[r, c - 1], [r, c]];
  const va = grid[A[0]][A[1]], vb = grid[B[0]][B[1]];
  const pointsTo = d.dir > 0 ? vb : va, other = d.dir > 0 ? va : vb;
  if (pointsTo >= other) errs.push("puerta " + d.t + d.key);
}
console.log("estáticos:", errs.length ? "ERRORES: " + errs.join("; ") : "OK");

const vis = new Set([RAT[0] + "," + RAT[1]]);
dfs1(RAT[0], RAT[1], vis, [[RAT[0], RAT[1]]], grid[RAT[0]][RAT[1]]);
console.log("CAMINOS VÁLIDOS:", solutions.length, "(nodos:", nodes + ")");
if (solutions.length && solutions.length <= 3) {
  for (const s of solutions) {
    const half = s.findIndex(([r, c]) => (r === TPB[0] && c === TPB[1]) || (r === TPA[0] && c === TPA[1]));
    console.log("camino:", s.map(([a, b]) => "r" + (a + 1) + "c" + (b + 1)).join("→"));
    const sum1 = s.slice(0, half + 1).reduce((a, [r, c]) => a + grid[r][c], 0);
    const sum2 = s.slice(half + 1).reduce((a, [r, c]) => a + grid[r][c], 0);
    console.log("suma antes:", sum1, "después:", sum2);
  }
}
