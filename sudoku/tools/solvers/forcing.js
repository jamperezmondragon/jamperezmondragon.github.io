// Forcing (Kaktuslav) — verifica: dados los dígitos de la solución, busca
// las particiones válidas en 9 regiones conexas de 9 casillas.
// Círculo = casilla más a la izquierda de la fila superior de su región
// (al rellenar en orden de lectura, es la primera casilla libre);
// su dígito = casillas de su región visibles hacia abajo en su columna
// (las fronteras de región bloquean la vista). Los 9 círculos forman una
// región extra (conexa, dígitos 1-9).
const sol = '918765432187654329876543291765432918654329187543291876432918765329187654291876543';
const g = sol.split('').map(Number);

const regionOf = new Array(81).fill(-1);   // -1 libre, -2 prohibida (región actual), >=0 asignada
const partitions = [];
const seeds = [];

function firstFree() {
  for (let i = 0; i < 81; i++) if (regionOf[i] === -1) return i;
  return -1;
}

function neighbors(i) {
  const r = (i / 9) | 0, c = i % 9, out = [];
  if (c < 8) out.push(i + 1);
  if (c > 0) out.push(i - 1);
  if (r < 8) out.push(i + 9);
  if (r > 0) out.push(i - 9);
  return out;
}

function circleOK(cells, seed) {
  const set = new Set(cells);
  const sc = seed % 9;
  let run = 0;
  for (let r = (seed / 9) | 0; r < 9; r++) {
    if (set.has(r * 9 + sc)) run++; else break;
  }
  return run === g[seed];
}

function growRegion(regId, cells, digits, banned, seed) {
  if (cells.length === 9) {
    if (!circleOK(cells, seed)) return;
    banned.forEach(i => { regionOf[i] = -1; });     // liberar para las siguientes
    assignNext(regId + 1);
    banned.forEach(i => { regionOf[i] = -2; });     // restaurar al backtrackear
    return;
  }
  // frontera: vecinos libres de las celdas actuales
  let cand = -1;
  for (const cc of cells) {
    for (const j of neighbors(cc)) {
      if (regionOf[j] === -1 && (cand === -1 || j < cand)) cand = j;
    }
  }
  if (cand === -1) return;
  // rama 1: incluir cand (si su dígito no choca)
  if (!digits.has(g[cand])) {
    regionOf[cand] = regId;
    cells.push(cand); digits.add(g[cand]);
    growRegion(regId, cells, digits, banned, seed);
    cells.pop(); digits.delete(g[cand]);
    regionOf[cand] = -1;
  }
  // rama 2: prohibir cand para esta región
  regionOf[cand] = -2;
  banned.push(cand);
  growRegion(regId, cells, digits, banned, seed);
  banned.pop();
  regionOf[cand] = -1;
}

function assignNext(regId) {
  if (regId === 9) {
    const ds = new Set(seeds.map(i => g[i]));
    if (ds.size !== 9) return;
    const set = new Set(seeds), seen = new Set([seeds[0]]), q = [seeds[0]];
    while (q.length) {
      for (const j of neighbors(q.pop())) if (set.has(j) && !seen.has(j)) { seen.add(j); q.push(j); }
    }
    if (seen.size !== 9) return;
    partitions.push(regionOf.slice());
    return;
  }
  const seed = firstFree();
  if (seed === -1) return;
  seeds[regId] = seed;
  regionOf[seed] = regId;
  growRegion(regId, [seed], new Set([g[seed]]), [], seed);
  regionOf[seed] = -1;
  seeds.length = regId;
}

assignNext(0);
console.log('particiones válidas con estos dígitos:', partitions.length);
partitions.slice(0, 2).forEach(P => {
  console.log('---');
  for (let r = 0; r < 9; r++) console.log(P.slice(r * 9, r * 9 + 9).join(''));
});
