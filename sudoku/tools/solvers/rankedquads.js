// Ranked Quads (Marty Sears, 6×6) — verificación de solución y unicidad.
const N = 6;
const sol = "143265625314264153531426316542452631";
// círculos: [rTL, cTL del 2×2, rango, dígitos requeridos]
const clues = [
  [1, 0, 22, [2, 2]],
  [3, 1, 11, [1, 1]],
  [1, 1, 6, [6]],
  [4, 1, 5, [5]]
];

function quadNum(g, r, c) {
  return g[r*N+c]*1000 + g[r*N+c+1]*100 + g[(r+1)*N+c]*10 + g[(r+1)*N+c+1];
}

function fullCheck(g) {
  const nums = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) nums.push(quadNum(g, r, c));
  if (new Set(nums).size !== 25) return false;
  const sorted = [...nums].sort((a, b) => a - b);
  for (const [r, c, rank] of clues) {
    if (sorted.indexOf(quadNum(g, r, c)) + 1 !== rank) return false;
  }
  return true;
}

function quadDigitsOk(g, r, c) {
  // poda: al completar la casilla (r,c), revisa círculos cuyo 2×2 ya está lleno
  for (const [qr, qc, _rank, req] of clues) {
    if (r === qr + 1 && c === qc + 1) {
      const cells = [g[qr*N+qc], g[qr*N+qc+1], g[(qr+1)*N+qc], g[(qr+1)*N+qc+1]];
      for (const d of new Set(req)) {
        const need = req.filter(x => x === d).length;
        if (cells.filter(x => x === d).length < need) return false;
      }
    }
  }
  return true;
}

// 1) verificar la solución del metadata
const gSol = [...sol].map(Number);
console.log("metadata válida:", fullCheck(gSol) &&
  clues.every(([r, c, _k, req]) => quadDigitsOk(gSol, r + 1, c + 1)));

// 2) unicidad por búsqueda exhaustiva
let count = 0, nodes = 0, found = null;
const g = new Array(N * N).fill(0);
function ok(i, v) {
  const r = Math.floor(i / N), c = i % N;
  for (let k = 0; k < N; k++) if (g[r*N+k] === v || g[k*N+c] === v) return false;
  const br = Math.floor(r/2)*2, bc = Math.floor(c/3)*3;
  for (let rr = br; rr < br+2; rr++) for (let cc = bc; cc < bc+3; cc++)
    if (g[rr*N+cc] === v) return false;
  return true;
}
(function dfs(i) {
  if (count > 1) return;
  nodes++;
  if (i === N * N) { if (fullCheck(g)) { count++; found = g.join(""); } return; }
  const r = Math.floor(i / N), c = i % N;
  for (let v = 1; v <= N; v++) {
    if (!ok(i, v)) continue;
    g[i] = v;
    if (quadDigitsOk(g, r, c)) dfs(i + 1);
    g[i] = 0;
  }
})(0);
console.log("soluciones:", count, "| nodos:", nodes, "| coincide:", found === sol);
