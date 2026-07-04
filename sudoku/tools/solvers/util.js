// Utilidades comunes de los solvers de verificación
function makeLatin(N, boxes) {
  // boxes: array de arrays de [r,c] o null (solo filas/columnas)
  const boxOf = boxes ? Array.from({ length: N * N }, () => -1) : null;
  if (boxes) boxes.forEach((b, k) => b.forEach(([r, c]) => { boxOf[r * N + c] = k; }));
  return { N, boxOf };
}

// DFS genérico: order = lista de índices de casilla; domains(idx, grid) → array de dígitos;
// place/unplace hooks opcionales; onSolution(grid) → true para seguir buscando
function solve({ N, boxOf, order, extraOK, onSolution, maxSol = 2, domainMax = null }) {
  const grid = new Array(N * N).fill(0);
  const rowMask = new Array(N).fill(0), colMask = new Array(N).fill(0);
  const boxMask = boxOf ? new Array(N + 9).fill(0) : null;
  const sols = [];
  const DMAX = domainMax || N;
  function dfs(k) {
    if (sols.length >= maxSol) return;
    if (k === order.length) {
      const g = grid.slice();
      if (!onSolution || onSolution(g)) sols.push(g);
      return;
    }
    const idx = order[k], r = (idx / N) | 0, c = idx % N;
    for (let d = 1; d <= DMAX; d++) {
      const bit = 1 << d;
      if (rowMask[r] & bit || colMask[c] & bit) continue;
      if (boxMask && boxOf[idx] >= 0 && boxMask[boxOf[idx]] & bit) continue;
      grid[idx] = d;
      if (!extraOK || extraOK(idx, d, grid, k)) {
        rowMask[r] |= bit; colMask[c] |= bit;
        if (boxMask && boxOf[idx] >= 0) boxMask[boxOf[idx]] |= bit;
        dfs(k + 1);
        rowMask[r] &= ~bit; colMask[c] &= ~bit;
        if (boxMask && boxOf[idx] >= 0) boxMask[boxOf[idx]] &= ~bit;
      }
      grid[idx] = 0;
    }
    grid[idx] = 0;
  }
  dfs(0);
  return sols;
}

const boxes9 = [];
for (let br = 0; br < 3; br++) for (let bc = 0; bc < 3; bc++) {
  const b = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) b.push([br * 3 + r, bc * 3 + c]);
  boxes9.push(b);
}

module.exports = { makeLatin, solve, boxes9 };
