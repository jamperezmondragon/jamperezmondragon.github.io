// Onimollif (40z7jh544j): fillomino 1-9 en 6x6 + líneas nabner.
// Backtracking fila por fila con poda de componentes:
// - componente de dígito d nunca puede exceder d celdas
// - componente cerrado (sin vecinos libres) debe tener exactamente d celdas
// - nabner: en cada línea, todo par difiere en >= 2
'use strict';
const N = 6;
const idx = (r, c) => r * N + c;
const inG = (r, c) => r >= 0 && r < N && c >= 0 && c < N;

const LINES = [
  [[2,0],[3,0],[4,0],[4,1]],
  [[1,2],[1,3],[0,3],[0,4],[1,4]],
  [[3,2],[3,3]],
  [[3,5],[4,5],[4,4]],
  [[0,0],[1,0],[1,1],[0,1]]
].map(l => l.map(([r,c]) => idx(r,c)));
const META = '133355599175559975155975399971339777';

const g = new Array(N * N).fill(0);
const sols = [];
let nodes = 0;

function compOf(start, grid) {
  const v = grid[start], seen = new Set([start]), stack = [start];
  let open = false;
  while (stack.length) {
    const i = stack.pop(), r = Math.floor(i / N), c = i % N;
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
      if (!inG(r + dr, c + dc)) continue;
      const j = idx(r + dr, c + dc);
      if (grid[j] === 0) { open = true; continue; }
      if (grid[j] === v && !seen.has(j)) { seen.add(j); stack.push(j); }
    }
  }
  return { size: seen.size, open };
}

function ok(pos, v) {
  // nabner
  for (const l of LINES) {
    if (!l.includes(pos)) continue;
    for (const i of l) if (i !== pos && g[i] && Math.abs(g[i] - v) < 2) return false;
  }
  // componentes: revisar la del propio pos y las de vecinos ya cerrados
  const { size, open } = compOf(pos, g);
  if (size > v) return false;
  if (!open && size !== v) return false;
  // un vecino con distinto dígito pudo quedar cerrado por esta asignación
  const r = Math.floor(pos / N), c = pos % N;
  for (const [dr, dc] of [[0,-1],[-1,0]]) {
    if (!inG(r + dr, c + dc)) continue;
    const j = idx(r + dr, c + dc);
    if (g[j] && g[j] !== v) {
      const cj = compOf(j, g);
      if (!cj.open && cj.size !== g[j]) return false;
    }
  }
  return true;
}

function bt(pos) {
  if (sols.length >= 2) return;
  nodes++;
  if (pos === N * N) { sols.push(g.join('')); return; }
  for (let v = 1; v <= 9; v++) {
    g[pos] = v;
    if (ok(pos, v)) bt(pos + 1);
    g[pos] = 0;
  }
}

// verificar metadata
const mg = META.split('').map(Number);
let metaOK = true;
const seen = new Set();
for (let i = 0; i < N * N && metaOK; i++) {
  if (seen.has(i)) continue;
  const v = mg[i], comp = new Set([i]), stack = [i];
  while (stack.length) {
    const j = stack.pop(), r = Math.floor(j / N), c = j % N;
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
      if (!inG(r + dr, c + dc)) continue;
      const k = idx(r + dr, c + dc);
      if (mg[k] === v && !comp.has(k)) { comp.add(k); stack.push(k); }
    }
  }
  if (comp.size !== v) metaOK = false;
  comp.forEach(j => seen.add(j));
}
for (const l of LINES) for (const a of l) for (const b of l)
  if (a < b && Math.abs(mg[a] - mg[b]) < 2) metaOK = false;

bt(0);
console.log(`40z7jh544j  Onimollif: metadata ${metaOK ? 'OK' : '**FALLA**'} | ${sols.length === 1 ? 'ÚNICA' : sols.length + ' SOLUCIONES'} | nodos ${nodes}`);
sols.forEach(s => console.log('   sol:', s));
