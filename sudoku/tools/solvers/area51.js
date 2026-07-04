// Area 51 (Michael Lefkowitz) — deriva solución y unicidad.
// Latino 5×5. Extender la cerca dada a un lazo cerrado que no se toca.
// En el área encerrada: si aparece el dígito N, aparece exactamente N veces.
// El área suma 51.
const fs = require('fs');
const p = JSON.parse(fs.readFileSync(__dirname + '/../puzzles_json/575wand8lt.json', 'utf8'));
const N = 5;
const expected = p.metadata.solution;

// Cerca dada: los 9 tramos de "alambre de púas" grises. Extraídos por
// votación de los trazos del achurado y confirmados contra la captura
// de pantalla del puzzle real (las líneas blancas son decorativas).
const fenceEdges = [
  ['V',0,3],
  ['H',1,1], ['V',1,1],
  ['H',2,3], ['V',2,4],
  ['H',4,1], ['H',4,2], ['V',4,1], ['V',4,3],
];
console.log('aristas de cerca:', fenceEdges.length);

const inS = (S, r, c) => (r >= 0 && r < N && c >= 0 && c < N) ? ((S >> (r * N + c)) & 1) : 0;

function boundaryOK(S) {
  // cada arista de la cerca debe estar en la frontera de S
  for (const [t, a, b] of fenceEdges) {
    // H,y,x separa (y-1,x) de (y,x); V,y,x separa (y,x-1) de (y,x)
    const p1 = t === 'H' ? inS(S, a - 1, b) : inS(S, a, b - 1);
    const p2 = t === 'H' ? inS(S, a, b) : inS(S, a, b);
    if (p1 === p2) return false;
  }
  return true;
}

function connected(cells) {
  if (!cells.length) return false;
  const set = new Set(cells), seen = new Set([cells[0]]), q = [cells[0]];
  while (q.length) {
    const i = q.pop(), r = (i / N) | 0, c = i % N;
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
      const rr = r + dr, cc = c + dc, j = rr * N + cc;
      if (rr >= 0 && rr < N && cc >= 0 && cc < N && set.has(j) && !seen.has(j)) { seen.add(j); q.push(j); }
    }
  }
  return seen.size === cells.length;
}

// La frontera de S debe ser UN solo ciclo simple: todo vértice de la
// retícula con grado 0 o 2, y todas las aristas de frontera conectadas.
function singleLoop(S) {
  const edges = [];
  for (let y = 0; y <= N; y++) for (let x = 0; x < N; x++)
    if (inS(S, y - 1, x) !== inS(S, y, x)) edges.push([[y, x], [y, x + 1]]);
  for (let y = 0; y < N; y++) for (let x = 0; x <= N; x++)
    if (inS(S, y, x - 1) !== inS(S, y, x)) edges.push([[y, x], [y + 1, x]]);
  if (!edges.length) return false;
  const deg = {}, adj = {};
  const key = v => v[0] + ',' + v[1];
  for (const [a, b] of edges) {
    deg[key(a)] = (deg[key(a)] || 0) + 1;
    deg[key(b)] = (deg[key(b)] || 0) + 1;
    (adj[key(a)] = adj[key(a)] || []).push(key(b));
    (adj[key(b)] = adj[key(b)] || []).push(key(a));
  }
  for (const v in deg) if (deg[v] !== 2) return false;
  // conectividad de las aristas
  const start = key(edges[0][0]), seen = new Set([start]), q = [start];
  while (q.length) for (const w of adj[q.pop()]) if (!seen.has(w)) { seen.add(w); q.push(w); }
  return seen.size === Object.keys(deg).length;
}

// enumerar S candidatos
const candidates = [];
for (let S = 1; S < (1 << 25); S++) {
  if (!boundaryOK(S)) continue;
  const cells = [];
  for (let i = 0; i < 25; i++) if ((S >> i) & 1) cells.push(i);
  if (!connected(cells) || !singleLoop(S)) continue;
  candidates.push(S);
}
console.log('áreas geométricamente válidas:', candidates.length);

// para cada S, buscar latinos válidos
const sols = new Set();
for (const S of candidates) {
  const grid = new Array(25).fill(0);
  const rowM = new Array(5).fill(0), colM = new Array(5).fill(0);
  const cntS = new Array(6).fill(0);
  let sumS = 0, cellsLeftS = 0;
  for (let i = 0; i < 25; i++) if ((S >> i) & 1) cellsLeftS++;
  function dfs(idx) {
    if (idx === 25) {
      if (sumS !== 51) return;
      for (let d = 1; d <= 5; d++) if (cntS[d] !== 0 && cntS[d] !== d) return;
      sols.add(grid.join('') + '|' + S);
      return;
    }
    const r = (idx / 5) | 0, c = idx % 5, s = (S >> idx) & 1;
    for (let d = 1; d <= 5; d++) {
      const bit = 1 << d;
      if (rowM[r] & bit || colM[c] & bit) continue;
      if (s) {
        if (cntS[d] >= d) continue;
        if (sumS + d + (cellsLeftS - 1) * 5 < 51) continue;
        if (sumS + d > 51) continue;
      }
      grid[idx] = d;
      rowM[r] |= bit; colM[c] |= bit;
      if (s) { cntS[d]++; sumS += d; cellsLeftS--; }
      dfs(idx + 1);
      if (s) { cntS[d]--; sumS -= d; cellsLeftS++; }
      rowM[r] &= ~bit; colM[c] &= ~bit;
      grid[idx] = 0;
    }
  }
  dfs(0);
  if (sols.size > 3) break;
}

console.log('soluciones (dígitos+área):', sols.size);
const digitSols = new Set([...sols].map(s => s.split('|')[0]));
console.log('rellenos de dígitos distintos:', digitSols.size);
for (const s of sols) {
  const [g, S] = s.split('|');
  console.log(g, g === expected ? '== metadata ✓' : '', 'área bits:', (+S).toString(2).padStart(25, '0'));
}
