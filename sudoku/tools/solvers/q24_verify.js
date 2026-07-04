// "24 / 4" (Marty Sears) — Quattroquadri + Full Rank, 6x6 con dígitos 1-9.
// Verifica la solución y busca unicidad por backtracking.
// Pistas: rango 24 = fila 1 hacia adelante (la mayor de las 24),
//         rango 4 = columna 4 hacia abajo,
//         y el círculo en r3c6: su dígito es el rango de la fila 3 al revés.
const fs = require("fs");
const p = JSON.parse(fs.readFileSync(__dirname + "/../puzzles_json/bpxci0jt2o.json", "utf8"));
const N = 6;
const sol = p.metadata.solution;
const target = [];
for (let r = 0; r < N; r++) target.push([...sol.slice(r * N, r * N + N)].map(Number));

// puntos: [r1,c1,r2,c2,tipo]
const DOTS = [
  [0, 0, 0, 1, "black"], [0, 0, 1, 0, "red"], [1, 0, 1, 1, "red"],
  [0, 1, 1, 1, "red"], [1, 1, 2, 1, "red"], [1, 1, 1, 2, "red"],
  [2, 1, 2, 2, "yellow"], [1, 2, 2, 2, "red"], [3, 2, 3, 3, "black"],
  [2, 3, 3, 3, "red"], [2, 2, 2, 3, "yellow"], [2, 2, 3, 2, "black"]
];

function dotOk(a, b, t) {
  if (t === "black") return a === 2 * b || b === 2 * a;
  if (t === "red") return (a + b) % 2 === 1;
  return Math.abs(a - b) !== 1;   // yellow: NO consecutivos
}

const boxOf = (r, c) => Math.floor(r / 3) * 2 + Math.floor(c / 3);

function the24(g) {
  const nums = [];
  for (let r = 0; r < N; r++) {
    const f = g[r].join("");
    nums.push(["f" + r + "+", +f], ["f" + r + "-", +[...f].reverse().join("")]);
  }
  for (let c = 0; c < N; c++) {
    const d = g.map(row => row[c]).join("");
    nums.push(["c" + c + "v", +d], ["c" + c + "^", +[...d].reverse().join("")]);
  }
  return nums;
}

function ranksOk(g) {
  const nums = the24(g);
  const vals = nums.map(n => n[1]);
  if (new Set(vals).size !== 24) return false;         // sin empates
  const sorted = [...vals].sort((a, b) => a - b);
  const rank = v => sorted.indexOf(v) + 1;
  const get = id => nums.find(n => n[0] === id)[1];
  if (rank(get("f0+")) !== 24) return false;           // fila 1 → rango 24
  if (rank(get("c3v")) !== 4) return false;            // col 4 ↓ → rango 4
  if (rank(get("f4-")) !== g[2][5]) return false;      // r3c6 = rango fila 5 ←
  return true;
}

// --- verificar la solución dada ---
const errs = [];
for (let r = 0; r < N; r++) if (new Set(target[r]).size !== N) errs.push("fila " + r);
for (let c = 0; c < N; c++) if (new Set(target.map(row => row[c])).size !== N) errs.push("col " + c);
for (let b = 0; b < 4; b++) {
  const cells = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (boxOf(r, c) === b) cells.push(target[r][c]);
  if (new Set(cells).size !== 9) errs.push("caja " + b);
}
for (const [r1, c1, r2, c2, t] of DOTS)
  if (!dotOk(target[r1][c1], target[r2][c2], t)) errs.push("punto " + t + " " + r1 + c1 + "-" + r2 + c2);
if (!ranksOk(target)) errs.push("rangos");
console.log("solución dada:", errs.length ? "ERRORES: " + errs.join("; ") : "OK");

// --- unicidad por backtracking ---
const g = Array.from({ length: N }, () => new Array(N).fill(0));
const rowUsed = Array.from({ length: N }, () => new Set());
const colUsed = Array.from({ length: N }, () => new Set());
const boxUsed = Array.from({ length: 4 }, () => new Set());
const dotsAt = new Map();
for (const d of DOTS) {
  const k2 = d[2] + "," + d[3];
  (dotsAt.get(k2) || dotsAt.set(k2, []).get(k2)).push(d);
}
let found = 0, nodes = 0;
const foundGrids = [];

function bt(pos) {
  if (found > 1) return;
  nodes++;
  if (pos === N * N) {
    if (ranksOk(g)) { found++; foundGrids.push(g.map(r => r.join("")).join("")); }
    return;
  }
  const r = Math.floor(pos / N), c = pos % N;
  const b = boxOf(r, c);
  for (let v = 1; v <= 9; v++) {
    if (rowUsed[r].has(v) || colUsed[c].has(v) || boxUsed[b].has(v)) continue;
    g[r][c] = v;
    // puntos cuyo segundo extremo es esta casilla (el primero ya está puesto)
    let ok = true;
    for (const [r1, c1, , , t] of dotsAt.get(r + "," + c) || [])
      if (!dotOk(g[r1][c1], v, t)) { ok = false; break; }
    // poda de rango 24: la fila 1 leída al derecho es la MAYOR de las 24;
    // en particular r0c0 >= primer dígito de cualquier número → todos los
    // dígitos de borde que inician número deben ser <= g[0][0]
    if (ok && pos > 0 && g[0][0]) {
      if ((c === 0 || c === N - 1 || r === 0 || r === N - 1) && v > g[0][0]) ok = false;
      // fila 1 al revés empieza en r0c5: si la fila 1 fwd es la mayor,
      // también g[0][0] > g[0][5] cuando ambas están
      if (r === 0 && c === N - 1 && v >= g[0][0]) ok = false;
    }
    if (ok) {
      rowUsed[r].add(v); colUsed[c].add(v); boxUsed[b].add(v);
      bt(pos + 1);
      rowUsed[r].delete(v); colUsed[c].delete(v); boxUsed[b].delete(v);
    }
    g[r][c] = 0;
  }
}
console.time("búsqueda");
bt(0);
console.timeEnd("búsqueda");
console.log("soluciones encontradas:", found, "(nodos:", nodes + ")");
console.log("coincide con metadata:", foundGrids[0] === sol);
if (found > 1) console.log("¡NO ÚNICA!", foundGrids.slice(0, 2));
