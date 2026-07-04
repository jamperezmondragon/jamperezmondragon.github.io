// Perfect Triple (Dorlir) — verifica solución y unicidad.
// 6×6 con cajas 2×3, usando 6 dígitos de 1-9 (a elegir).
// El dígito en un rombo es la raíz cuadrada de la suma de la flecha.
const N = 6;
const expected = '528413431825814532352148183254245381';

// cajas 2 filas × 3 columnas
const boxOf = new Array(36).fill(-1);
for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++)
  boxOf[r * 6 + c] = Math.floor(r / 2) * 2 + Math.floor(c / 3);

// [rombo, celdas de la flecha]
const arrows = [
  [[0,3], [[1,3],[1,2],[0,1],[1,0],[2,1]]],
  [[1,1], [[2,2],[2,3]]],
  [[3,4], [[2,4],[1,4],[0,4],[0,5],[1,5],[2,5]]],
  [[4,4], [[4,3],[4,2],[4,1],[4,0],[3,0],[3,1],[3,2],[3,3]]],
  [[5,3], [[5,4],[5,5]]],
].map(([d, cells]) => [d[0] * 6 + d[1], cells.map(([r, c]) => r * 6 + c)]);

// elegir 6 dígitos de 1..9 y resolver
const results = [];
function combos(arr, k, start = 0, cur = []) {
  if (cur.length === k) { results.push(cur.slice()); return; }
  for (let i = start; i < arr.length; i++) { cur.push(arr[i]); combos(arr, k, i + 1, cur); cur.pop(); }
}
combos([1,2,3,4,5,6,7,8,9], 6);

const sols = new Set();
for (const digits of results) {
  const dset = new Set(digits);
  const grid = new Array(36).fill(0);
  const rowM = new Array(6).fill(0), colM = new Array(6).fill(0), boxM = new Array(6).fill(0);
  function ok(idx, d) {
    // poda de flechas: rombo colocado y flecha completa/parcial
    for (const [dia, cells] of arrows) {
      if (grid[dia] === 0 && dia !== idx) continue;
      const dv = dia === idx ? d : grid[dia];
      let sum = 0, missing = 0, minD = Math.min(...digits), maxD = Math.max(...digits);
      for (const cc of cells) {
        const v = cc === idx ? d : grid[cc];
        if (v) sum += v; else missing++;
      }
      if (cells.includes(idx) || dia === idx) {
        const target = dv * dv;
        if (sum + missing * minD > target) return false;
        if (sum + missing * maxD < target) return false;
      }
    }
    return true;
  }
  function dfs(idx) {
    if (idx === 36) {
      for (const [dia, cells] of arrows) {
        const s = cells.reduce((a, cc) => a + grid[cc], 0);
        if (grid[dia] * grid[dia] !== s) return;
      }
      sols.add(digits.join('') + ':' + grid.join(''));
      return;
    }
    const r = (idx / 6) | 0, c = idx % 6;
    for (const d of digits) {
      const bit = 1 << d;
      if (rowM[r] & bit || colM[c] & bit || boxM[boxOf[idx]] & bit) continue;
      grid[idx] = d;
      if (ok(idx, d)) {
        rowM[r] |= bit; colM[c] |= bit; boxM[boxOf[idx]] |= bit;
        dfs(idx + 1);
        rowM[r] &= ~bit; colM[c] &= ~bit; boxM[boxOf[idx]] &= ~bit;
      }
      grid[idx] = 0;
      if (sols.size > 2) return;
    }
  }
  dfs(0);
  if (sols.size > 2) break;
}

console.log('soluciones:', sols.size);
for (const s of sols) {
  const [dig, g] = s.split(':');
  console.log('dígitos {' + dig + '}:', g.split(',').join(''), g.split(',').join('') === expected ? '== metadata ✓' : '');
}
