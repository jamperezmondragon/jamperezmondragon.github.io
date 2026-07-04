// RR6: prueba de EXISTENCIA de un camino válido (no unicidad).
// DFS dirigido: fase 1 ordena vecinos hacia el teleport más cercano,
// fase 2 hacia el pastel; podas bilaterales de suma/largo; para en la 1.ª solución.
const fs = require("fs");
const p = JSON.parse(fs.readFileSync(__dirname + "/../puzzles_json/3xa2x14bxe.json", "utf8"));
const N = 9, WALL = "#6a7246ff";
const sol = p.metadata.solution;
const grid = [];
for (let r = 0; r < N; r++) grid.push([...sol.slice(r * N, r * N + N)].map(Number));
const near = (a, b) => Math.abs(a - b) < 1e-6, isInt = x => near(x, Math.round(x));

const bV = new Set(), bH = new Set();
for (const l of p.lines || []) {
  if (l.color !== WALL || (l.thickness || 0) < 11) continue;
  const wp = l.wayPoints;
  for (let i = 0; i + 1 < wp.length; i++) {
    let [r1, c1] = wp[i], [r2, c2] = wp[i + 1];
    if (near(c1, c2) && isInt(c1)) {
      const c = Math.round(c1);
      for (let r = Math.min(r1, r2); r < Math.max(r1, r2) - 1e-6; r++)
        if (c > 0 && c < N) bV.add(Math.floor(r + 1e-6) + "," + c);
    } else if (near(r1, r2) && isInt(r1)) {
      const r = Math.round(r1);
      for (let c = Math.min(c1, c2); c < Math.max(c1, c2) - 1e-6; c++)
        if (r > 0 && r < N) bH.add(r + "," + Math.floor(c + 1e-6));
    }
  }
}
const cornerDots = new Set();
for (const o of p.overlays || [])
  if (o.backgroundColor === WALL && near(o.width, 0.32) && isInt(o.center[0]) && isInt(o.center[1]))
    cornerDots.add(Math.round(o.center[0]) + "," + Math.round(o.center[1]));
const doors = [];
for (const l of p.lines || []) {
  if (l.color !== "#730dc5ff") continue;
  const [a, tip, b] = l.wayPoints;
  const base = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], d = [tip[0] - base[0], tip[1] - base[1]];
  if (Math.abs(d[0]) > Math.abs(d[1])) { const key = Math.round(tip[0]) + "," + Math.floor(tip[1]); doors.push({ t: "H", key, dir: Math.sign(d[0]) }); bH.delete(key); }
  else { const key = Math.floor(tip[0]) + "," + Math.round(tip[1]); doors.push({ t: "V", key, dir: Math.sign(d[1]) }); bV.delete(key); }
}
function orthOpen(r1, c1, r2, c2) { return r1 === r2 ? !bV.has(r1 + "," + Math.max(c1, c2)) : !bH.has(Math.max(r1, r2) + "," + c1); }
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
  if (bV.has(rt + "," + cp) || bV.has(rp + "," + cp) || bH.has(rp + "," + ct) || bH.has(rp + "," + cp)) return false;
  for (const d of doors) {
    const [r, c] = d.key.split(",").map(Number);
    if (d.t === "V" && c === cp && (r === rt || r === rp)) return false;
    if (d.t === "H" && r === rp && (c === ct || c === cp)) return false;
  }
  return true;
}
const nbrs = [];
for (let r = 0; r < N; r++) {
  nbrs.push([]);
  for (let c = 0; c < N; c++) {
    const out = [];
    for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < N && nc >= 0 && nc < N && orthOpen(r, c, nr, nc) && doorAllows(r, c, nr, nc)) out.push([nr, nc]);
    }
    for (const [dr, dc] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < N && nc >= 0 && nc < N && diagOpen(r, c, nr, nc)) out.push([nr, nc]);
    }
    nbrs[r].push(out);
  }
}
const RAT = [6, 7], CAKE = [4, 7], TPA = [0, 0], TPB = [8, 8];
function bfsFrom(t) {
  const D = Array.from({ length: N }, () => new Array(N).fill(Infinity));
  D[t[0]][t[1]] = 0;
  const q = [t];
  while (q.length) {
    const [r, c] = q.shift();
    for (const [nr, nc] of nbrs[r][c]) if (D[nr][nc] === Infinity) { D[nr][nc] = D[r][c] + 1; q.push([nr, nc]); }
  }
  return D;
}
const dCake = bfsFrom(CAKE), dA = bfsFrom(TPA), dB = bfsFrom(TPB);

let nodes = 0, best = null;
const visited = new Set([RAT.join(",")]);
const path = [RAT];
const LEN = 44;   // largo del camino según el mensaje de victoria del original

function dfs2(r, c, sum, target) {
  if (best) return;
  nodes++;
  if (r === CAKE[0] && c === CAKE[1]) {
    if (sum === target && path.length === LEN) best = path.slice();
    return;
  }
  const restLen = LEN - path.length, restSum = target - sum;
  if (restLen <= 0 || dCake[r][c] > restLen) return;
  if (restSum < restLen || restSum > 9 * restLen) return;
  const opts = [...nbrs[r][c]].sort((u, v) => dCake[u[0]][u[1]] - dCake[v[0]][v[1]]);
  for (const [nr, nc] of opts) {
    const k = nr + "," + nc;
    if (visited.has(k)) continue;
    if ((nr === TPA[0] && nc === TPA[1]) || (nr === TPB[0] && nc === TPB[1])) continue;
    visited.add(k); path.push([nr, nc]);
    dfs2(nr, nc, sum + grid[nr][nc], target);
    path.pop(); visited.delete(k);
    if (best) return;
  }
}
function dfs1(r, c, sum) {
  if (best) return;
  nodes++;
  const atA = r === TPA[0] && c === TPA[1], atB = r === TPB[0] && c === TPB[1];
  if (atA || atB) {
    const twin = atA ? TPB : TPA;
    const tk = twin.join(",");
    if (!visited.has(tk)) {
      visited.add(tk); path.push(twin);
      dfs2(twin[0], twin[1], grid[twin[0]][twin[1]], sum);
      path.pop(); visited.delete(tk);
    }
    return;
  }
  if (path.length > LEN - 2) return;
  const dT = Math.min(dA[r][c], dB[r][c]);
  if (dT === Infinity || path.length + dT > LEN - 2) return;
  const opts = [...nbrs[r][c]].sort((u, v) =>
    Math.min(dA[u[0]][u[1]], dB[u[0]][u[1]]) - Math.min(dA[v[0]][v[1]], dB[v[0]][v[1]]));
  for (const [nr, nc] of opts) {
    const k = nr + "," + nc;
    if (visited.has(k)) continue;
    if (nr === CAKE[0] && nc === CAKE[1]) continue;
    visited.add(k); path.push([nr, nc]);
    dfs1(nr, nc, sum + grid[nr][nc]);
    path.pop(); visited.delete(k);
    if (best) return;
  }
}
console.time("existencia");
dfs1(RAT[0], RAT[1], grid[RAT[0]][RAT[1]]);
console.timeEnd("existencia");
if (best) {
  const half = best.findIndex(([r, c]) => (r === TPA[0] && c === TPA[1]) || (r === TPB[0] && c === TPB[1]));
  const s1 = best.slice(0, half + 1).reduce((a, [r, c]) => a + grid[r][c], 0);
  const s2 = best.slice(half + 1).reduce((a, [r, c]) => a + grid[r][c], 0);
  console.log("CAMINO ENCONTRADO ✓ largo:", best.length, "| suma antes:", s1, "| después:", s2, "| nodos:", nodes);
  console.log(best.map(([a, b]) => "r" + (a + 1) + "c" + (b + 1)).join(">"));
} else {
  console.log("sin camino con largo", LEN, "| nodos:", nodes);
}
