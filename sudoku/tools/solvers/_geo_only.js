// Verificador de la saga RAT RUN (Marty Sears).
// Modelo: casilla (r,c) ocupa [r,r+1]x[c,c+1]; bordes en enteros.
// - Paredes: líneas gruesas del color del laberinto -> bloquean movimientos ortogonales.
// - Diagonal (2x2 libre): las 4 aristas internas del 2x2 sin pared y sin
//   "punto redondo" de pared en la esquina compartida.
// - Puertas moradas: chevron #730dc5ff; abren hueco en la pared pero solo
//   se cruzan en el sentido de la flecha; la flecha apunta al dígito menor.
// - Grosellas: proporción 1:2 entre casillas ortogonales.
// Verifica: sudoku válido + constraints estáticos + número de caminos válidos.
const fs = require("fs");
const DIR = __dirname + "/../puzzles_json/";

const CFG = {
  r8rkmo7jaz: { name: "RR2", wall: "#c6a149ff", thMin: 13, diag: true,
    test: "sum10" },
  "5b1du6ra7d": { name: "RR3", wall: "#de7507ff", thMin: 11, diag: true,
    test: "dutch" },
  wv8l8x67dy: { name: "RR4", wall: "#3059f3ff", thMin: 11, diag: false,
    test: "regionsum" },
  wv01avmfs9: { name: "RR5", wall: "#d00303ff", thMin: 11, diag: true,
    test: "parity" },
  "3xa2x14bxe": { name: "RR6", wall: "#6a7246ff", thMin: 11, diag: true,
    test: "teleport", tp: [[0, 0], [8, 8]] }
};

function near(a, b) { return Math.abs(a - b) < 1e-6; }
function isInt(x) { return near(x, Math.round(x)); }

function analyze(id) {
  const cfg = CFG[id];
  const p = JSON.parse(fs.readFileSync(DIR + id + ".json", "utf8"));
  const N = p.cells.length;
  const sol = p.metadata.solution;
  const grid = [];
  for (let r = 0; r < N; r++) grid.push([...sol.slice(r * N, r * N + N)].map(Number));

  // --- sudoku válido (filas, columnas, cajas de regions) ---
  const errs = [];
  for (let r = 0; r < N; r++) {
    if (new Set(grid[r]).size !== N) errs.push("fila " + r);
    if (new Set(grid.map(row => row[r])).size !== N) errs.push("col " + r);
  }
  for (const reg of p.regions || []) {
    if (new Set(reg.map(([r, c]) => grid[r][c])).size !== reg.length) errs.push("caja");
  }

  // --- paredes -> aristas bloqueadas ---
  // vert.get("r,c") = pared entre (r,c-1) y (r,c); horiz: entre (r-1,c) y (r,c)
  const blockedV = new Set(), blockedH = new Set();
  for (const l of p.lines || []) {
    if (l.color !== cfg.wall || (l.thickness || 0) < cfg.thMin) continue;
    const wp = l.wayPoints;
    for (let i = 0; i + 1 < wp.length; i++) {
      let [r1, c1] = wp[i], [r2, c2] = wp[i + 1];
      if (near(c1, c2) && isInt(c1)) {          // tramo vertical en borde c
        const c = Math.round(c1);
        for (let r = Math.min(r1, r2); r < Math.max(r1, r2) - 1e-6; r++)
          if (c > 0 && c < N) blockedV.add(Math.floor(r + 1e-6) + "," + c);
      } else if (near(r1, r2) && isInt(r1)) {   // tramo horizontal en borde r
        const r = Math.round(r1);
        for (let c = Math.min(c1, c2); c < Math.max(c1, c2) - 1e-6; c++)
          if (r > 0 && r < N) blockedH.add(r + "," + Math.floor(c + 1e-6));
      }
    }
  }

  // --- puntos redondos (bloquean diagonales en esa esquina) ---
  const cornerDots = new Set();
  for (const o of p.overlays || []) {
    if (o.backgroundColor === cfg.wall && near(o.width, 0.32) &&
        isInt(o.center[0]) && isInt(o.center[1]))
      cornerDots.add(Math.round(o.center[0]) + "," + Math.round(o.center[1]));
  }

  // --- puertas de un sentido ---
  // chevron [a, punta, b]; la punta cae en el centro de una arista
  const doors = [];  // {edge:"V|H,r,c", dir:[dr,dc]} dir = sentido permitido
  for (const l of p.lines || []) {
    if (l.color !== "#730dc5ff") continue;
    const [a, tip, b] = l.wayPoints;
    const base = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const d = [tip[0] - base[0], tip[1] - base[1]];
    if (Math.abs(d[0]) > Math.abs(d[1])) {      // apunta vertical -> arista H
      const r = Math.round(tip[0]), c = Math.floor(tip[1]);
      const key = r + "," + c;
      doors.push({ t: "H", key, dir: Math.sign(d[0]) });
      blockedH.delete(key);                     // la puerta abre la pared
    } else {
      const r = Math.floor(tip[0]), c = Math.round(tip[1]);
      const key = r + "," + c;
      doors.push({ t: "V", key, dir: Math.sign(d[1]) });
      blockedV.delete(key);
    }
  }

  // --- grosellas ---
  const currants = [];
  for (const o of p.overlays || []) {
    const bg = o.backgroundColor || "";
    if ((bg === "#0f0019ff" || bg === "#000000") && o.width >= 0.2 && o.width <= 0.27) {
      const [y, x] = o.center;
      if (isInt(y)) currants.push([[Math.round(y) - 1, Math.floor(x)], [Math.round(y), Math.floor(x)]]);
      else currants.push([[Math.floor(y), Math.round(x) - 1], [Math.floor(y), Math.round(x)]]);
    }
  }
  for (const [[r1, c1], [r2, c2]] of currants) {
    const a = grid[r1][c1], b = grid[r2][c2];
    if (a !== 2 * b && b !== 2 * a) errs.push("grosella (" + r1 + "," + c1 + ")-(" + r2 + "," + c2 + ")=" + a + "," + b);
  }

  // --- puertas: la flecha apunta al menor ---
  for (const d of doors) {
    const [r, c] = d.key.split(",").map(Number);
    const [A, B] = d.t === "H" ? [[r - 1, c], [r, c]] : [[r, c - 1], [r, c]];
    const va = grid[A[0]][A[1]], vb = grid[B[0]][B[1]];
    const pointsTo = d.dir > 0 ? vb : va, other = d.dir > 0 ? va : vb;
    if (pointsTo >= other) errs.push("puerta " + d.t + d.key + " apunta a " + pointsTo + " vs " + other);
  }

  // --- rata y pastelito ---
  let rat, cake;
  for (const o of p.overlays || []) {
    if (o.text === "🐀") rat = [Math.floor(o.center[0]), Math.floor(o.center[1])];
    if (o.text === "🧁") cake = [Math.floor(o.center[0]), Math.floor(o.center[1])];
  }

  // --- movimiento ---
  function orthOpen(r1, c1, r2, c2) {
    if (r1 === r2) return !blockedV.has(r1 + "," + Math.max(c1, c2));
    return !blockedH.has(Math.max(r1, r2) + "," + c1);
  }
  function doorAllows(r1, c1, r2, c2) {
    for (const d of doors) {
      const [r, c] = d.key.split(",").map(Number);
      if (d.t === "V" && r1 === r2 && r1 === r && Math.max(c1, c2) === c) {
        return Math.sign(c2 - c1) === d.dir;
      }
      if (d.t === "H" && c1 === c2 && c1 === c && Math.max(r1, r2) === r) {
        return Math.sign(r2 - r1) === d.dir;
      }
    }
    return true;
  }
  function diagOpen(r1, c1, r2, c2) {
    const rp = Math.max(r1, r2), cp = Math.max(c1, c2);   // esquina pivote
    if (cornerDots.has(rp + "," + cp)) return false;
    const rt = rp - 1, ct = cp - 1;                        // 2x2 = filas rt,rp-?; cols
    // las 4 aristas internas del 2x2 [rt..rt+1]x[ct..ct+1]
    if (blockedV.has(rt + "," + cp) || blockedV.has(rp + "," + cp)) return false;
    if (blockedH.has(rp + "," + ct) || blockedH.has(rp + "," + cp)) return false;
    // no cruzar puertas en diagonal (las 4 aristas con puerta: prohibido)
    for (const d of doors) {
      const [r, c] = d.key.split(",").map(Number);
      if (d.t === "V" && c === cp && (r === rt || r === rp)) return false;
      if (d.t === "H" && r === rp && (c === ct || c === cp)) return false;
    }
    return true;
  }

  function neighbors(r, c) {
    const out = [];
    for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
      if (orthOpen(r, c, nr, nc) && doorAllows(r, c, nr, nc)) out.push([nr, nc]);
    }
    if (cfg.diag) {
      for (const [dr, dc] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
        if (diagOpen(r, c, nr, nc)) out.push([nr, nc]);
      }
    }
    return out;
  }

  // --- test constraint incremental ---
  function pairOk(v1, v2) { return true;
    if (cfg.test === "sum10") return v1 + v2 >= 10;
    if (cfg.test === "dutch") return Math.abs(v1 - v2) >= 4;
    if (cfg.test === "parity") return (v1 + v2) % 2 === 1;
    return true;
  }

  const boxOf = [];
  if (cfg.test === "regionsum") {
    for (let r = 0; r < N; r++) { boxOf.push([]); for (let c = 0; c < N; c++) boxOf[r].push(-1); }
    (p.regions || []).forEach((reg, i) => reg.forEach(([r, c]) => { boxOf[r][c] = i; }));
  }

  // --- búsqueda de caminos ---
  const paths = [];
  const visited = new Set();
  const tpA = cfg.tp ? cfg.tp[0] : null, tpB = cfg.tp ? cfg.tp[1] : null;
  const LIMIT = 5000000;
  let nodes = 0;

  function dfs(r, c, path, segSum, sums, tpUsed, preSum) {
    if (++nodes > LIMIT) throw new Error("límite de búsqueda");
    if (cfg.test === "teleport" && tpUsed) {
      // poda: tras el teleport, el total no puede exceder 2*preSum
      const total = path.reduce((a, [rr, cc]) => a + grid[rr][cc], 0);
      if (total > 2 * preSum) return;
    }
    if (r === cake[0] && c === cake[1]) {
      let ok = true;
      if (cfg.test === "regionsum") {
        const all = [...sums, segSum];
        ok = all.every(s => s === all[0]);
      }
      if (cfg.test === "teleport") {
        // exigir teleport usado y suma antes == suma después
        const total = path.reduce((a, [rr, cc]) => a + grid[rr][cc], 0);
        ok = tpUsed && preSum === total - preSum;
      }
      if (ok) paths.push(path.slice());
      return;
    }
    for (const [nr, nc] of neighbors(r, c)) {
      const key = nr + "," + nc;
      if (visited.has(key)) continue;
      const v1 = grid[r][c], v2 = grid[nr][nc];
      if (!pairOk(v1, v2)) continue;
      let nSeg = segSum, nSums = sums;
      if (cfg.test === "regionsum") {
        if (boxOf[nr][nc] !== boxOf[r][c]) {
          if (sums.length && segSum !== sums[0]) continue;   // poda
          nSums = [...sums, segSum]; nSeg = v2;
        } else nSeg = segSum + v2;
      }
      // teleport: al ENTRAR a un teleport saltas al gemelo
      let tr = nr, tc = nc, nTp = tpUsed, nPre = preSum;
      if (cfg.test === "teleport" && !tpUsed &&
          ((nr === tpA[0] && nc === tpA[1]) || (nr === tpB[0] && nc === tpB[1]))) {
        const twin = (nr === tpA[0] && nc === tpA[1]) ? tpB : tpA;
        const twinKey = twin[0] + "," + twin[1];
        if (visited.has(twinKey)) continue;
        // suma antes de teletransportar = camino hasta el teleport de entrada
        nPre = path.reduce((a, [rr, cc]) => a + grid[rr][cc], 0) + grid[nr][nc];
        visited.add(key);
        path.push([nr, nc]);
        visited.add(twinKey);
        path.push(twin);
        nTp = true;
        dfs(twin[0], twin[1], path, nSeg, nSums, nTp, nPre);
        path.pop(); visited.delete(twinKey);
        path.pop(); visited.delete(key);
        continue;
      }
      visited.add(key);
      path.push([nr, nc]);
      dfs(tr, tc, path, nSeg, nSums, nTp, nPre);
      path.pop();
      visited.delete(key);
    }
  }

  visited.add(rat[0] + "," + rat[1]);
  const segSum0 = cfg.test === "regionsum" ? grid[rat[0]][rat[1]] : 0;
  try {
    dfs(rat[0], rat[1], [[rat[0], rat[1]]], segSum0, [], false, 0);
  } catch (e) { errs.push(e.message); }

  // teleports contienen el mismo dígito
  if (cfg.tp) {
    const [a, b] = cfg.tp;
    if (grid[a[0]][a[1]] !== grid[b[0]][b[1]]) errs.push("teleports distintos");
  }

  return {
    id, name: cfg.name, N, errs, rat, cake,
    walls: blockedV.size + blockedH.size, doors: doors.length,
    currants: currants.length, corners: cornerDots.size,
    pathCount: paths.length, nodes,
    path: paths[0]
  };
}

module.exports = { analyze, CFG };