// The Warden's Sudoku (cld7ibcwqs) — verificación del meta-puzzle epistémico.
// 4×4, 4 dígitos distintos de 0-9, cajas 2×2, (2,0) < (2,1),
// jaulas sin repetir: A={(1,1),(1,2),(1,3),(2,2)}, B={(3,1),(3,2)}, C={(0,0),(1,0)}.
// Tres prisioneros: cada uno recibe un número distinto = suma de exactamente una jaula.
// 6 días de silencio; el día 7 exactamente dos se adelantan; el tercero resuelve el grid.
'use strict';

const CAGES = [
  [[1,1],[1,2],[1,3],[2,2]],
  [[3,1],[3,2]],
  [[0,0],[1,0]]
];

// 1) enumerar todos los tableros válidos
function* latin4(digits) {
  // permutaciones fila por fila con chequeo col/caja
  const grid = Array.from({ length: 4 }, () => new Array(4).fill(-1));
  function* fill(pos) {
    if (pos === 16) { yield grid.map(r => r.slice()); return; }
    const r = Math.floor(pos / 4), c = pos % 4;
    for (const d of digits) {
      let ok = true;
      for (let k = 0; k < 4; k++) {
        if (grid[r][k] === d || grid[k][c] === d) { ok = false; break; }
      }
      const br = r < 2 ? 0 : 2, bc = c < 2 ? 0 : 2;
      if (ok) for (let rr = br; rr < br + 2 && ok; rr++) for (let cc = bc; cc < bc + 2; cc++)
        if (grid[rr][cc] === d) { ok = false; break; }
      if (!ok) continue;
      grid[r][c] = d;
      yield* fill(pos + 1);
      grid[r][c] = -1;
    }
  }
  yield* fill(0);
}

function validGrids() {
  const out = [];
  // elegir 4 dígitos distintos de 0..9
  for (let a = 0; a <= 6; a++) for (let b = a+1; b <= 7; b++)
  for (let c = b+1; c <= 8; c++) for (let d = c+1; d <= 9; d++) {
    for (const g of latin4([a,b,c,d])) {
      if (!(g[2][0] < g[2][1])) continue;                    // el < apunta al menor
      const cageVals = CAGES.map(cells => cells.map(([r,cc]) => g[r][cc]));
      if (cageVals.some(vs => new Set(vs).size !== vs.length)) continue;  // sin repetir en jaula
      const sums = cageVals.map(vs => vs.reduce((x,y)=>x+y, 0));
      out.push({ g, sums, key: g.flat().join('') });
    }
  }
  return out;
}

// 2) simulación epistémica
// Un prisionero con número n y conocimiento público S deduce su jaula si
// todos los mundos de S en los que n es suma de exactamente una jaula
// señalan la misma jaula (y existe al menos uno).
function deduces(n, S) {
  let cage = -1;
  for (const w of S) {
    const matches = [0,1,2].filter(k => w.sums[k] === n);
    if (matches.length !== 1) continue;      // mundo inconsistente con "exactamente una"
    if (cage === -1) cage = matches[0];
    else if (cage !== matches[0]) return false;
  }
  return cage !== -1;
}

function simulate() {
  // mundos iniciales: sumas de jaulas distintas dos a dos (números distintos,
  // cada uno suma de exactamente una jaula)
  let S = validGrids().filter(w => new Set(w.sums).size === 3);
  console.log('mundos válidos iniciales:', S.length);

  // días 1..6: nadie se adelanta => sobreviven los mundos en los que NINGÚN
  // prisionero (tenedor de cada suma) habría deducido
  for (let day = 1; day <= 6; day++) {
    const S2 = S.filter(w => w.sums.every(n => !deduces(n, S)));
    console.log(`día ${day}: nadie se mueve → quedan ${S2.length} mundos`);
    if (S2.length === S.length) { console.log('  (sin progreso: el silencio ya no informa)'); }
    S = S2;
  }

  // día 7: exactamente dos se adelantan
  const T = S.filter(w => w.sums.filter(n => deduces(n, S)).length === 2);
  console.log('día 7 (exactamente dos se adelantan):', T.length, 'mundos');
  for (const w of T.slice(0, 10)) console.log('  grid:', w.key, 'sumas A,B,C =', w.sums.join(','));

  // el tercero (el de la suma no deducible) ahora resuelve el sudoku:
  // con la información pública T y su número n, el grid debe ser único
  if (T.length > 1) {
    console.log('refinamiento por el tercero:');
    for (const w of T) {
      const n3 = w.sums.find(n => !deduces(n, S));
      const consistentes = T.filter(w2 => w2.sums.includes(n3));
      const unicos = new Set(consistentes.map(w2 => w2.key));
      console.log(`  mundo ${w.key}: n3=${n3} → ve ${unicos.size} grids posibles`);
    }
  }
  const esperada = '3027723003722703';
  if (T.length && T[0].key === esperada) console.log('== metadata OK');
  else console.log('metadata esperada:', esperada);
}

simulate();
