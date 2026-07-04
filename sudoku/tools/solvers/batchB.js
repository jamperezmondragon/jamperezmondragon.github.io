// Verificador del LOTE B: enumera todas las soluciones de sudoku 6×6
// (cajas 2 filas × 3 columnas) y aplica el checker de cada puzzle.
// Reporta: nº de soluciones que pasan (1 = única) y si la del metadata pasa.
'use strict';

const N = 6;
const boxOf = (r, c) => Math.floor(r / 2) * 2 + Math.floor(c / 3);

// --- enumera todas las cuadrículas 6×6 válidas, llamando cb(grid) ---
function enumerate(cb, partialCheck) {
  const g = Array.from({ length: N }, () => new Array(N).fill(0));
  const rows = Array.from({ length: N }, () => new Set());
  const cols = Array.from({ length: N }, () => new Set());
  const boxes = Array.from({ length: N }, () => new Set());
  function rec(pos) {
    if (pos === 36) { cb(g); return; }
    const r = Math.floor(pos / 6), c = pos % 6, b = boxOf(r, c);
    for (let d = 1; d <= 6; d++) {
      if (rows[r].has(d) || cols[c].has(d) || boxes[b].has(d)) continue;
      g[r][c] = d; rows[r].add(d); cols[c].add(d); boxes[b].add(d);
      if (!partialCheck || partialCheck(g, r, c)) rec(pos + 1);
      rows[r].delete(d); cols[c].delete(d); boxes[b].delete(d); g[r][c] = 0;
    }
  }
  rec(0);
}

function gridFromString(s) {
  const g = [];
  for (let r = 0; r < N; r++) g.push([...s.slice(r * 6, r * 6 + 6)].map(Number));
  return g;
}

const isPrime = n => [2,3,5,7,11,13,17,19,23,29,31].includes(n);

// ============ Checkers por puzzle ============

// --- drmveil1q1: Index Fingers ---
const FINGERS = [
  [[5,5],[4,5],[3,5]], [[0,0],[0,1],[1,1]], [[2,1],[1,2],[2,3]],
  [[5,4],[5,3],[4,3]], [[2,4],[1,4],[0,3]], [[4,2],[3,2],[3,3]]
];
const FINGER_CELLS = new Set(FINGERS.flat().map(([r,c]) => r * 6 + c));
function checkFingers(g) {
  const rings = [];
  for (const f of FINGERS) {
    const [X, Y, Z] = f.map(([r, c]) => g[r][c]);
    const rr = X - 1, cc = Y - 1;
    if (g[rr][cc] !== Z) return false;
    if (FINGER_CELLS.has(rr * 6 + cc)) return false;
    rings.push([rr, cc, Z]);
  }
  // uno por fila, columna y caja; dígitos distintos
  for (const k of [0, 1]) if (new Set(rings.map(x => x[k])).size !== 6) return false;
  if (new Set(rings.map(x => boxOf(x[0], x[1]))).size !== 6) return false;
  if (new Set(rings.map(x => x[2])).size !== 6) return false;
  return true;
}

// --- s8v9vyl2h8: Parity Hexagons ---
const LOOP1 = [[4,2],[5,3],[5,4],[4,5],[3,4],[3,3]];
const LOOP2 = [[0,1],[1,0],[2,0],[3,1],[2,2],[1,2]];
const KNIGHT = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
function checkParityHex(g) {
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++)
    for (const [dr, dc] of KNIGHT) {
      const rr = r + dr, cc = c + dc;
      if (rr >= 0 && rr < 6 && cc >= 0 && cc < 6 && g[rr][cc] === g[r][c]) return false;
    }
  for (const loop of [LOOP1, LOOP2])
    for (let i = 0; i < loop.length; i++) {
      const [r1, c1] = loop[i], [r2, c2] = loop[(i + 1) % loop.length];
      if ((g[r1][c1] + g[r2][c2]) % 2 === 0) return false;
    }
  if (g[1][1] + g[2][1] !== 5) return false;            // V
  if (g[1][3] + g[1][4] !== 5) return false;            // V
  if (Math.max(g[5][0], g[5][1]) !== 2 * Math.min(g[5][0], g[5][1])) return false; // kropki negro
  return true;
}

// --- o3tnx9fkub: Partially Permanent Fog (cages + kropki) ---
const O3_CAGES = [
  [21, [[2,2],[3,0],[3,2],[4,0],[4,1],[4,2]]],
  [21, [[3,5],[4,3],[4,5],[5,3],[5,4],[5,5]]],
  [13, [[0,3],[1,1],[1,2],[1,3]]],
  [12, [[0,0],[0,1],[0,2]]]
];
function checkO3(g) {
  for (const [total, cells] of O3_CAGES) {
    const ds = cells.map(([r, c]) => g[r][c]);
    if (new Set(ds).size !== ds.length) return false;
    if (ds.reduce((a, b) => a + b, 0) !== total) return false;
  }
  const ratio = (a, b) => Math.max(a, b) === 2 * Math.min(a, b);
  if (!ratio(g[3][1], g[4][1])) return false;
  if (!ratio(g[2][0], g[3][0])) return false;
  if (!ratio(g[5][2], g[5][3])) return false;
  if (!ratio(g[0][4], g[1][4])) return false;
  if (Math.abs(g[2][4] - g[2][5]) !== 1) return false;
  return true;
}

// --- hx8auhnjpp: Cross Product ---
const DIAGS = [
  [[0,4],[1,5]],
  [[2,0],[3,1],[4,2],[5,3]],
  [[4,0],[3,1],[2,2],[1,3],[0,4]],
  [[5,1],[4,2],[3,3],[2,4],[1,5]]
];
function checkCrossProduct(g) {
  const prods = DIAGS.map(d => d.reduce((a, [r, c]) => a * g[r][c], 1));
  return prods.every(p => p === prods[0]);
}

// --- igzcothc9f: Two Arrows and a Tenline ---
const ARR1 = { circle: [4,0], cells: [[4,1],[3,2],[2,3]] };
const ARR2 = { circle: [5,5], cells: [[5,4],[4,3],[3,4]] };
// la línea gris se reconstruye en runtime (ver abajo); TENLINE se rellena
let TENLINE = null;
function checkTenline(g) {
  for (const A of [ARR1, ARR2]) {
    if (A.cells.reduce((a, [r, c]) => a + g[r][c], 0) !== g[A.circle[0]][A.circle[1]]) return false;
  }
  // la línea se parte en segmentos contiguos que suman 10 cada uno:
  // los prefijos deben ir tocando 10, 20, 30, … exactamente
  for (const line of TENLINE) {
    let acc = 0;
    for (const [r, c] of line) {
      acc += g[r][c];
      if (acc % 10 === 0) acc = 0;
      else if (acc > 10) return false;
    }
    if (acc !== 0) return false;
  }
  return true;
}

// --- 0210je1r90: 4 / 13 ---
const L413 = [
  { cells: [[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]], party: [3,0] },
  { cells: [[0,1],[1,1],[1,2],[0,2]], party: [0,2] },
  { cells: [[2,2],[3,2],[3,1],[2,1]], party: [2,1] },
  { cells: [[4,1],[5,1],[5,2],[4,2],[4,3],[5,3],[5,4],[5,5]], party: [4,1] },
  { cells: [[4,4],[4,5],[3,5],[3,4],[2,4],[2,5],[1,5],[0,5],[1,4],[0,3],[1,3],[2,3],[3,3]], party: [3,3] }
];
function segCounts(vals) {
  // regresa el conjunto de números de segmentos posibles (cada segmento suma 4 o 13)
  const n = vals.length;
  const memo = Array.from({ length: n + 1 }, () => null);
  function counts(i) {
    if (memo[i]) return memo[i];
    const out = new Set();
    if (i === n) { out.add(0); memo[i] = out; return out; }
    let s = 0;
    for (let j = i; j < n; j++) {
      s += vals[j];
      if (s === 4 || s === 13) for (const k of counts(j + 1)) out.add(k + 1);
      if (s > 13) break;
    }
    memo[i] = out; return out;
  }
  return counts(0);
}
function check413(g) {
  for (const L of L413) {
    const vals = L.cells.map(([r, c]) => g[r][c]);
    if (!segCounts(vals).has(g[L.party[0]][L.party[1]])) return false;
  }
  return true;
}

// --- m4gbwkzg4n: The Concatenation Game ---
const CONCAT = [
  { cell: [4,5], targets: [[0,5],[1,5],[2,5],[3,5]] },
  { cell: [5,5], targets: [[0,5],[1,5],[2,5],[3,5],[4,5]] },
  { cell: [0,2], targets: [[0,3],[0,4],[0,5]] },
  { cell: [1,2], targets: [[1,3],[1,4],[1,5]] },
  { cell: [3,2], targets: [[3,3],[3,4],[3,5]] },
  { cell: [5,2], targets: [[5,3],[5,4],[5,5]] },
  { cell: [4,3], targets: [[4,0],[4,1],[4,2]] },
  { cell: [4,1], targets: [[4,2],[4,3],[4,4],[4,5]] },
  { cell: [1,3], targets: [[1,4],[1,5]] }
];
function checkConcat(g) {
  for (const A of CONCAT) {
    const s = A.targets.reduce((a, [r, c]) => a + g[r][c], 0);
    if (s < 10 || s > 99) return false;
    if (Math.floor(s / 10) + (s % 10) !== g[A.cell[0]][A.cell[1]]) return false;
  }
  return true;
}

// --- 3u3dus8t3a: Ovary Action ---
const THERMOS = [
  [[2,1],[2,2],[3,2],[3,3]],
  [[3,1],[4,1],[4,2],[5,2]],
  [[1,2],[1,3],[2,3],[2,4]],
  [[0,3],[0,4],[1,5]],
  [[3,4],[4,3],[5,4],[5,3]]
];
function checkOvary(g) {
  for (const t of THERMOS)
    for (let i = 1; i < t.length; i++)
      if (g[t[i][0]][t[i][1]] <= g[t[i-1][0]][t[i-1][1]]) return false;
  if (g[1][0] + g[2][0] !== 10) return false;   // X en el borde r1/r2 col 0
  if (g[1][0] + g[1][1] !== 10) return false;   // X en fila 1 borde c0/c1
  // huevo: círculo radio 1.35 centrado en la esquina (2,0);
  // arriba: (0,0),(1,0),(1,1)  abajo: (2,0),(2,1),(3,0)
  const arriba = g[0][0] + g[1][0] + g[1][1];
  const abajo = g[2][0] + g[2][1] + g[3][0];
  return arriba === abajo;
}

// --- 9mthkftlh5: 10X+Y ---
const TENXY = [
  { pill: [[0,0],[0,1]], cells: [[0,2],[0,3],[0,4],[0,5]] },
  { pill: [[1,0],[1,1]], cells: [[1,2],[2,2],[2,1],[2,0],[3,0],[3,1],[3,2]] },
  { pill: [[4,0],[4,1]], cells: [[4,2],[4,3],[4,4],[5,5],[5,4],[5,3],[5,2],[5,1],[5,0]] },
  { pill: [[3,3],[3,4]], cells: [[4,5],[3,5],[2,5]] },
  { pill: [[1,4],[1,5]], cells: [[1,3],[2,3],[2,4]] }
];
function check10XY(g) {
  for (const A of TENXY) {
    const t = 10 * g[A.pill[0][0]][A.pill[0][1]] + g[A.pill[1][0]][A.pill[1][1]];
    if (A.cells.reduce((a, [r, c]) => a + g[r][c], 0) !== t) return false;
  }
  return true;
}

// --- iu50qghplg: RAT RUN 1 (camino de la rata) ---
const WALLS = new Set();   // "r1,c1|r2,c2" ordenado
function addWall(r1, c1, r2, c2) {
  const a = r1 * 6 + c1, b = r2 * 6 + c2;
  WALLS.add(Math.min(a, b) + "|" + Math.max(a, b));
}
[[3,0,3,1],[3,1,4,1],[3,2,4,2],
 [4,4,5,4],[4,4,4,5],[3,4,4,4],[3,3,3,4],
 [0,1,0,2],[0,2,0,3],
 [2,1,2,2],[1,2,2,2],[1,3,2,3],[1,4,2,4],[2,4,2,5],
 [1,1,2,1],[1,0,1,1],
 [0,4,1,4]].forEach(w => addWall(...w));
const WALL_CORNERS = new Set([
  "3,1","4,1","4,2","4,3","5,4","5,5","4,5","4,4","3,4","1,2","0,2","0,3","1,3",
  "3,2","2,2","2,3","2,4","2,5","3,5","2,1","1,1","1,4","1,5"
]);
function blocked(r1, c1, r2, c2) {
  const a = r1 * 6 + c1, b = r2 * 6 + c2;
  return WALLS.has(Math.min(a, b) + "|" + Math.max(a, b));
}
function ratNeighbors(r, c) {
  const out = [];
  for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
    const rr = r + dr, cc = c + dc;
    if (rr < 0 || rr > 5 || cc < 0 || cc > 5) continue;
    if (!blocked(r, c, rr, cc)) out.push([rr, cc]);
  }
  for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1]]) {
    const rr = r + dr, cc = c + dc;
    if (rr < 0 || rr > 5 || cc < 0 || cc > 5) continue;
    // esquina (punto de rejilla) que se cruza:
    const cornerR = Math.max(r, rr), cornerC = Math.max(c, cc);
    if (WALL_CORNERS.has(cornerR + "," + cornerC)) continue;
    // espacio 2×2: las 4 aristas internas libres
    const r0 = Math.min(r, rr), c0 = Math.min(c, cc);
    if (blocked(r0, c0, r0, c0 + 1) || blocked(r0, c0, r0 + 1, c0) ||
        blocked(r0 + 1, c0, r0 + 1, c0 + 1) || blocked(r0, c0 + 1, r0 + 1, c0 + 1)) continue;
    out.push([rr, cc]);
  }
  return out;
}
function ratPaths(g, maxCount) {
  // DFS desde (0,2) hasta (4,4); suma de pares consecutivos prima;
  // al final, suma de dígitos del camino en cada caja prima.
  const paths = [];
  const visited = Array.from({ length: 6 }, () => new Array(6).fill(false));
  const path = [[0, 2]];
  visited[0][2] = true;
  function dfs(r, c) {
    if (paths.length >= maxCount) return;
    if (r === 4 && c === 4) {
      const boxSum = new Array(6).fill(0);
      for (const [pr, pc] of path) boxSum[boxOf(pr, pc)] += g[pr][pc];
      if (boxSum.every(s => s === 0 || isPrime(s))) paths.push(path.map(p => p.slice()));
      return;
    }
    for (const [rr, cc] of ratNeighbors(r, c)) {
      if (visited[rr][cc]) continue;
      if (!isPrime(g[r][c] + g[rr][cc])) continue;
      visited[rr][cc] = true; path.push([rr, cc]);
      dfs(rr, cc);
      visited[rr][cc] = false; path.pop();
    }
  }
  dfs(0, 2);
  return paths;
}
function checkRatRun(g) { return ratPaths(g, 1).length > 0; }

// ============ Ejecución ============
const SOLS = {
  drmveil1q1: "362415415623256341143256621534534162",
  s8v9vyl2h8: "146523523146632415415632251364364251",
  o3tnx9fkub: "642531531462265143413625126354354216",
  hx8auhnjpp: "143562625134452316316245261453534621",
  igzcothc9f: "153642624531246153531426315264462315",
  "0210je1r90": "241365635241512634364512123456456123",
  m4gbwkzg4n: "641235532164165342423651256413314526",
  "3u3dus8t3a": "253146461325612453534612345261126534",
  "9mthkftlh5": "156342243516412653635124321465564231",
  iu50qghplg: "142635635214254163361452413526526341"
};

// reconstruir la tenline desde los trazos grises (unión de aristas + camino euleriano)
function buildTenline() {
  // una sola línea de 28 celdas, reconstruida con camino euleriano sobre
  // la unión de los trazos grises (verificada: 11 segmentos de suma 10)
  TENLINE = [[[4,4],[4,5],[3,5],[2,5],[1,5],[2,4],[1,4],[0,5],[0,4],[0,3],[1,3],[0,2],[1,1],[1,2],[0,1],[0,0],[1,0],[2,1],[2,0],[3,0],[3,1],[2,2],[3,3],[4,2],[5,3],[5,2],[5,1],[5,0]]];
}
buildTenline();

const CHECKERS = {
  drmveil1q1: checkFingers,
  s8v9vyl2h8: checkParityHex,
  o3tnx9fkub: checkO3,
  hx8auhnjpp: checkCrossProduct,
  igzcothc9f: checkTenline,
  "0210je1r90": check413,
  m4gbwkzg4n: checkConcat,
  "3u3dus8t3a": checkOvary,
  "9mthkftlh5": check10XY,
  iu50qghplg: checkRatRun
};

const which = process.argv[2] || Object.keys(CHECKERS).join(",");
for (const id of which.split(",")) {
  const check = CHECKERS[id];
  const t0 = Date.now();
  const winners = [];
  enumerate(g => { if (check(g)) winners.push(g.flat().join("")); });
  const sol = SOLS[id];
  const okMeta = check((function () { return gridFromString(sol); })());
  console.log(id + ": pasan=" + winners.length +
    " | metadata pasa=" + okMeta +
    " | coincide=" + (winners.length === 1 ? winners[0] === sol : "n/a") +
    " | " + (Date.now() - t0) + "ms" +
    (winners.length === 1 ? "" : " !!"));
  if (winners.length > 1 && winners.length <= 5) winners.forEach(w => console.log("   ", w));
}
