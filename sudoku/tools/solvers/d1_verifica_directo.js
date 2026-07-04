// Verificación DIRECTA de las soluciones embebidas contra todos los constraints
// (validez; la unicidad va por separado con el solver).
'use strict';

const G = (sol, N) => Array.from({ length: N }, (_, r) => Array.from({ length: N }, (_, c) => +sol[r * N + c]));
const chk = (nombre, cond) => console.log('  ' + (cond ? 'OK ' : 'FALLA ') + nombre);

function unidades9(g) {
  let ok = true;
  for (let r = 0; r < 9; r++) if (new Set(g[r]).size !== 9) ok = false;
  for (let c = 0; c < 9; c++) if (new Set(g.map(row => row[c])).size !== 9) ok = false;
  for (let br = 0; br < 3; br++) for (let bc = 0; bc < 3; bc++) {
    const s = new Set();
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s.add(g[br*3+r][bc*3+c]);
    if (s.size !== 9) ok = false;
  }
  return ok;
}
const renbanOk = vs => new Set(vs).size === vs.length && Math.max(...vs) - Math.min(...vs) === vs.length - 1;

// ---- Dancing in a ring ----
{
  const g = G('974851632863927541251634987736189425489562713512743869697218354148395276325476198', 9);
  console.log('Dancing in a ring:');
  chk('sudoku', unidades9(g));
  const loops = [
    [[5,2],[5,3],[6,3],[6,2]], [[5,5],[6,5],[6,6],[5,6]],
    [[2,5],[2,6],[3,6],[3,5]], [[2,2],[2,3],[3,3],[3,2]]
  ];
  chk('whispers', loops.every(L => L.every((p, k) => {
    const q = L[(k+1) % L.length];
    return Math.abs(g[p[0]][p[1]] - g[q[0]][q[1]]) >= 5;
  })));
  chk('renban anillos', [
    [[7,7],[7,8],[8,8],[8,7]], [[0,7],[0,8],[1,8],[1,7]], [[0,0],[0,1],[1,1],[1,0]]
  ].every(L => renbanOk(L.map(([r,c]) => g[r][c]))));
  chk('cruz 9', renbanOk([[2,4],[3,4],[4,4],[5,4],[6,4],[4,2],[4,3],[4,5],[4,6]].map(([r,c]) => g[r][c])));
  const negro = (a,b) => g[a[0]][a[1]] === 2*g[b[0]][b[1]] || g[b[0]][b[1]] === 2*g[a[0]][a[1]];
  const blanco = (a,b) => Math.abs(g[a[0]][a[1]] - g[b[0]][b[1]]) === 1;
  chk('puntos', negro([7,1],[8,1]) && negro([7,1],[7,2]) && negro([1,7],[2,7]) && negro([0,2],[0,3]) &&
    blanco([1,6],[1,7]) && blanco([4,1],[4,2]) && blanco([1,4],[2,4]) && blanco([8,4],[8,5]));
}

// ---- Overlap ----
{
  const g = G('862493157973215468154687932647932581318756249295841376781324695539168724426579813', 9);
  console.log('Overlap:');
  chk('sudoku', unidades9(g));
  chk('diagonales', new Set([0,1,2,3,4,5,6,7,8].map(k => g[k][k])).size === 9 &&
    new Set([0,1,2,3,4,5,6,7,8].map(k => g[8-k][k])).size === 9);
  const lineas = [
    [[8,0],[7,0],[7,1]], [[8,0],[8,1],[7,1]], [[1,7],[0,7],[0,8]], [[0,8],[1,8],[1,7]],
    [[1,1],[0,1],[0,0]], [[1,1],[1,0],[0,0]], [[7,7],[8,7],[8,8]], [[8,8],[7,8],[7,7]],
    [[2,3],[2,2],[3,2],[4,2],[5,2]], [[5,2],[6,2],[6,3],[6,4],[6,5]],
    [[6,5],[6,6],[5,6],[4,6],[3,6]], [[3,6],[2,6],[2,5],[2,4],[2,3]],
    [[7,8],[8,8],[8,7],[7,7]], [[1,1],[1,0],[0,0],[0,1]],
    [[8,0],[8,1],[7,1],[7,0]], [[0,7],[1,7],[1,8],[0,8]]
  ];
  chk('16 renbans', lineas.every(L => renbanOk(L.map(([r,c]) => g[r][c]))));
  chk('dados', g[1][4] === 1 && g[4][0] === 3 && g[4][4] === 5 && g[4][7] === 4 && g[8][4] === 7);
}

// ---- Difference Of Squares (X=8, Y=7 leído de la solución) ----
{
  const g = G('572946381634851297981732564768429153459318672213567948825194736197683425346275819', 9);
  console.log('Difference Of Squares:');
  chk('sudoku', unidades9(g));
  const S = cells => cells.reduce((s, [r,c]) => s + g[r][c], 0);
  const X = S([[0,8],[1,8]]), Y = S([[8,0],[8,1]]);
  console.log('  X=' + X + ' Y=' + Y);
  chk('X>Y', X > Y);
  chk('15', S([[6,0],[6,1],[6,2]]) === 15);
  chk('Y^2', S([[0,3],[1,3],[2,3],[3,0],[3,1],[3,2],[3,3]]) === Y*Y);
  chk('X^2', S([[4,4],[4,5],[4,6],[5,4],[5,5],[5,6],[5,7],[6,4],[6,5],[6,6],[7,5]]) === X*X);
  chk('X-Y (x2)', g[6][3] === X-Y && g[8][7] === X-Y);
  const flechas = [
    [[4,7],[[3,8],[2,8]]], [[7,4],[[8,3],[8,2]]], [[8,8],[[7,7],[6,7],[7,6]]],
    [[2,6],[[1,5],[0,4]]], [[3,3],[[2,2],[1,1]]], [[6,2],[[5,1],[4,0]]]
  ];
  chk('flechas', flechas.every(([b, cs]) => g[b[0]][b[1]] === S(cs)));
  const renbans = [
    [[0,1],[0,0],[1,0]], [[0,3],[1,3],[2,3]], [[3,2],[3,1],[3,0]],
    [[0,7],[1,8]], [[3,4],[4,3],[4,4]], [[7,3],[8,4]], [[8,5],[7,6]]
  ];
  chk('renbans', renbans.every(L => renbanOk(L.map(([r,c]) => g[r][c]))));
}

// ---- Hypnotic Suggestion ----
{
  const fs = require('fs');
  const p = JSON.parse(fs.readFileSync(__dirname + '/../puzzles_json/qt0xjevecl.json', 'utf8'));
  const g = G('7153462828463157137524864268173535178264648275135731684286245371', 8);
  console.log('Hypnotic Suggestion:');
  let ok = true;
  for (let r = 0; r < 8; r++) if (new Set(g[r]).size !== 8) ok = false;
  for (let c = 0; c < 8; c++) if (new Set(g.map(row => row[c])).size !== 8) ok = false;
  p.regions.forEach(reg => { if (new Set(reg.map(([r,c]) => g[r][c])).size !== 8) ok = false; });
  chk('latin+cajas', ok);
  const reales = p.cages.filter(c => c.cells && c.cells.length);
  const cuenta = (cage, d) => cage.cells.filter(([r,c]) => g[r][c] === d).length;
  chk('87654321', cuenta(reales[0], 7) === 8 && cuenta(reales[0], 5) === 6 && cuenta(reales[0], 3) === 4 && cuenta(reales[0], 1) === 2);
  chk('12345678', cuenta(reales[1], 2) === 1 && cuenta(reales[1], 4) === 3 && cuenta(reales[1], 6) === 5 && cuenta(reales[1], 8) === 7);
}
