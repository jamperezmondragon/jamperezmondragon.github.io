// Miracle Of Eleven (Aad van de Wetering) — verifica solución y unicidad.
// Sudoku normal + vecinos ortogonales nunca consecutivos +
// en las diagonales positivas (SW→NE), cada par de vecinos suma ≤ 11.
const { solve, boxes9 } = require('./util');
const N = 9;
const boxOf = new Array(81).fill(-1);
boxes9.forEach((b, k) => b.forEach(([r, c]) => { boxOf[r * 9 + c] = k; }));

const givens = { [3 * 9 + 4]: 3, [5 * 9 + 4]: 8 };
const expected = '752693184184275369369418527527936841841752693693184275275369418418527936936841752';

const sols = solve({
  N, boxOf,
  order: Array.from({ length: 81 }, (_, i) => i),
  extraOK: (idx, d, grid) => {
    if (givens[idx] && givens[idx] !== d) return false;
    const r = (idx / 9) | 0, c = idx % 9;
    // vecinos ya colocados: arriba e izquierda (orden fila por fila)
    if (c > 0 && grid[idx - 1] && Math.abs(grid[idx - 1] - d) === 1) return false;
    if (r > 0 && grid[idx - 9] && Math.abs(grid[idx - 9] - d) === 1) return false;
    // diagonal positiva: vecino NE (r-1, c+1) ya colocado
    if (r > 0 && c < 8 && grid[idx - 9 + 1] && grid[idx - 9 + 1] + d > 11) return false;
    return true;
  },
  maxSol: 3,
});

console.log('soluciones:', sols.length);
sols.forEach(s => console.log(s.join(''), s.join('') === expected ? '== metadata ✓' : '(distinta)'));
