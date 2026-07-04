// Nadir (Barrels) — deriva la solución y verifica unicidad.
// Sudoku normal + 3 termómetros + nadir: una casilla desde la cual los
// valores crecen estrictamente en las 8 direcciones hasta el borde.
const { solve, boxes9 } = require('./util');
const N = 9;
const boxOf = new Array(81).fill(-1);
boxes9.forEach((b, k) => b.forEach(([r, c]) => { boxOf[r * 9 + c] = k; }));

// Termómetros (celdas en orden desde el bulbo)
const thermos = [
  [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]],
  [[0,7],[0,6],[0,5],[0,4],[0,3],[0,2]],
  [[2,7],[2,6],[3,6],[3,5]],
].map(t => t.map(([r,c]) => r * 9 + c));

const allFills = new Set();
let nadirsOK = [];

for (let nr = 0; nr < 9; nr++) for (let nc = 0; nc < 9; nc++) {
  // cadenas crecientes: termos + 8 rayos desde el nadir
  const chains = thermos.map(t => t.slice());
  for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
    const ray = [nr * 9 + nc];
    let r = nr + dr, c = nc + dc;
    while (r >= 0 && r < 9 && c >= 0 && c < 9) { ray.push(r * 9 + c); r += dr; c += dc; }
    if (ray.length > 1) chains.push(ray);
  }
  // cotas estáticas por casilla a partir de las cadenas
  const lo = new Array(81).fill(1), hi = new Array(81).fill(9);
  for (const ch of chains) for (let i = 0; i < ch.length; i++) {
    lo[ch[i]] = Math.max(lo[ch[i]], i + 1);
    hi[ch[i]] = Math.min(hi[ch[i]], 9 - (ch.length - 1 - i));
  }
  if (lo.some((v, i) => v > hi[i])) continue;
  // aristas de orden: sucesor inmediato en cada cadena
  const succ = Array.from({ length: 81 }, () => []);
  const pred = Array.from({ length: 81 }, () => []);
  for (const ch of chains) for (let i = 0; i + 1 < ch.length; i++) {
    succ[ch[i]].push(ch[i + 1]); pred[ch[i + 1]].push(ch[i]);
  }
  const sols = solve({
    N, boxOf,
    order: Array.from({ length: 81 }, (_, i) => i),
    extraOK: (idx, d, grid) => {
      if (d < lo[idx] || d > hi[idx]) return false;
      for (const s of succ[idx]) if (grid[s] && grid[s] <= d) return false;
      for (const p of pred[idx]) if (grid[p] && grid[p] >= d) return false;
      return true;
    },
    maxSol: 3,
  });
  if (sols.length) {
    nadirsOK.push([nr, nc, sols.length]);
    sols.forEach(s => allFills.add(s.join('')));
  }
}

console.log('nadires con solución:', JSON.stringify(nadirsOK));
console.log('soluciones distintas:', allFills.size);
for (const f of allFills) console.log(f);
