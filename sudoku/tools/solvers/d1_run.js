// Corre la verificación de UN puzzle del lote D1: node d1_run.js <nombre> [budgetMs]
'use strict';
const { idx, makeSolver, sumExact, renban, exactCounts, rowsCols, boxesRect } = require('./lib');
const fs = require('fs');
const P = id => JSON.parse(fs.readFileSync(__dirname + '/../puzzles_json/' + id + '.json', 'utf8'));
const D9 = [1,2,3,4,5,6,7,8,9];
const I = (r,c) => idx(r,c,9);
const fmt = sol => sol.join('');
const budget = +(process.argv[3] || 240000);

function reporte(nombre, res, esperada) {
  const { solutions: sols, timedOut, nodes } = res;
  const n = sols.length;
  let linea = `${nombre}: `;
  if (timedOut) linea += `TIMEOUT tras ${nodes} nodos (${n} sol encontradas) `;
  else linea += n === 0 ? 'SIN SOLUCION' : n === 1 ? 'UNICA' : n + '+ SOLUCIONES';
  if (n >= 1) {
    linea += ' | ' + fmt(sols[0]);
    if (esperada) linea += fmt(sols[0]) === esperada ? ' | == metadata OK' : ' | != METADATA!!';
  }
  console.log(linea);
}

const jobs = {
  dancing() {
    const units = [...rowsCols(9), ...boxesRect(9, 3, 3)];
    const pairs = [];
    const whLoop = cells => {
      for (let k = 0; k < cells.length; k++) {
        const a = I(...cells[k]), b = I(...cells[(k + 1) % cells.length]);
        pairs.push({ a, b, fn: (x, y) => Math.abs(x - y) >= 5 });
      }
    };
    whLoop([[5,2],[5,3],[6,3],[6,2]]);
    whLoop([[5,5],[6,5],[6,6],[5,6]]);
    whLoop([[2,5],[2,6],[3,6],[3,5]]);
    whLoop([[2,2],[2,3],[3,3],[3,2]]);
    const dot = (a, b, negro) => pairs.push({ a: I(...a), b: I(...b),
      fn: negro ? (x, y) => x === 2*y || y === 2*x : (x, y) => Math.abs(x - y) === 1 });
    dot([7,1],[8,1],true); dot([7,1],[7,2],true); dot([1,7],[2,7],true); dot([0,2],[0,3],true);
    dot([1,6],[1,7],false); dot([4,1],[4,2],false); dot([1,4],[2,4],false); dot([8,4],[8,5],false);
    const groups = [
      renban([[7,7],[7,8],[8,8],[8,7]].map(x=>I(...x))),
      renban([[0,7],[0,8],[1,8],[1,7]].map(x=>I(...x))),
      renban([[0,0],[0,1],[1,1],[1,0]].map(x=>I(...x))),
      renban([[2,4],[3,4],[4,4],[5,4],[6,4],[4,2],[4,3],[4,5],[4,6]].map(x=>I(...x)))
    ];
    const orden = [];
    const add = cells => cells.forEach(x => { const i = I(...x); if (!orden.includes(i)) orden.push(i); });
    add([[2,4],[3,4],[4,4],[5,4],[6,4],[4,2],[4,3],[4,5],[4,6]]);
    add([[5,2],[5,3],[6,3],[6,2],[5,5],[6,5],[6,6],[5,6],[2,5],[2,6],[3,6],[3,5],[2,2],[2,3],[3,3],[3,2]]);
    add([[7,7],[7,8],[8,8],[8,7],[0,7],[0,8],[1,8],[1,7],[0,0],[0,1],[1,1],[1,0]]);
    add([[7,1],[8,1],[7,2],[2,7],[0,2],[0,3],[1,6],[4,1],[1,4],[8,4],[8,5]]);
    for (let i = 0; i < 81; i++) if (!orden.includes(i)) orden.push(i);
    const s = makeSolver({ N: 9, digits: D9, units, pairs, groups, staticOrder: orden });
    reporte('Dancing in a ring', s.solve(2, budget),
      '974851632863927541251634987736189425489562713512743869697218354148395276325476198');
  },

  overlap() {
    const units = [...rowsCols(9), ...boxesRect(9, 3, 3)];
    units.push([0,1,2,3,4,5,6,7,8].map(k => I(k,k)));
    units.push([0,1,2,3,4,5,6,7,8].map(k => I(8-k,k)));
    const R = cells => renban(cells.map(x => I(...x)));
    const groups = [
      R([[8,0],[7,0],[7,1]]), R([[8,0],[8,1],[7,1]]),
      R([[1,7],[0,7],[0,8]]), R([[0,8],[1,8],[1,7]]),
      R([[1,1],[0,1],[0,0]]), R([[1,1],[1,0],[0,0]]),
      R([[7,7],[8,7],[8,8]]), R([[8,8],[7,8],[7,7]]),
      R([[2,3],[2,2],[3,2],[4,2],[5,2]]),
      R([[5,2],[6,2],[6,3],[6,4],[6,5]]),
      R([[6,5],[6,6],[5,6],[4,6],[3,6]]),
      R([[3,6],[2,6],[2,5],[2,4],[2,3]]),
      R([[7,8],[8,8],[8,7],[7,7]]),
      R([[1,1],[1,0],[0,0],[0,1]]),
      R([[8,0],[8,1],[7,1],[7,0]]),
      R([[0,7],[1,7],[1,8],[0,8]])
    ];
    const givens = {}; [[1,4,1],[4,0,3],[4,4,5],[4,7,4],[8,4,7]].forEach(([r,c,v]) => givens[I(r,c)] = v);
    const orden = [];
    const add = cells => cells.forEach(x => { const i = I(...x); if (!orden.includes(i)) orden.push(i); });
    add([[8,0],[7,0],[7,1],[8,1],[1,7],[0,7],[0,8],[1,8],[1,1],[0,1],[0,0],[1,0],[7,7],[8,7],[8,8],[7,8]]);
    add([[2,3],[2,2],[3,2],[4,2],[5,2],[6,2],[6,3],[6,4],[6,5],[6,6],[5,6],[4,6],[3,6],[2,6],[2,5],[2,4]]);
    for (let k = 0; k < 9; k++) { add([[k,k]]); add([[8-k,k]]); }
    for (let i = 0; i < 81; i++) if (!orden.includes(i)) orden.push(i);
    const s = makeSolver({ N: 9, digits: D9, units, groups, givens, staticOrder: orden });
    reporte('Overlap', s.solve(2, budget),
      '862493157973215468154687932647932581318756249295841376781324695539168724426579813');
  },

  dutch() {
    const units = [...rowsCols(9), ...boxesRect(9, 3, 3)];
    const pairs = [];
    for (let s0 = 0; s0 <= 16; s0++) {
      const diag = [];
      for (let r = 8; r >= 0; r--) { const c = s0 - r; if (c >= 0 && c < 9) diag.push(I(r, c)); }
      if (diag.length >= 2) {
        units.push(diag);
        for (let k = 0; k + 1 < diag.length; k++)
          pairs.push({ a: diag[k], b: diag[k+1], fn: (x, y) => Math.abs(x - y) >= 4 });
      }
    }
    const givens = {}; givens[I(8,0)] = 1; givens[I(8,2)] = 2;
    const s = makeSolver({ N: 9, digits: D9, units, pairs, givens });
    reporte('Dutch Miracle', s.solve(2, budget), null);
  },

  renbanmode() {
    const units = [...rowsCols(9), ...boxesRect(9, 3, 3)];
    const R = cells => renban(cells.map(x => I(...x)));
    const groups = [
      R([[7,0],[8,1]]), R([[5,0],[4,0],[3,0]]), R([[2,0],[1,1]]),
      R([[2,1],[1,2],[0,3]]), R([[0,4],[1,4],[2,4]]), R([[0,5],[1,6],[2,7]]),
      R([[3,1],[3,2],[3,3]]), R([[3,5],[3,6],[3,7]]), R([[3,8],[4,8],[5,8]]),
      R([[5,7],[6,6],[7,5]]), R([[8,3],[8,4],[8,5]]), R([[8,7],[7,8]]),
      R([[7,3],[6,2],[5,1]]), R([[4,2],[4,3],[4,4],[4,5],[4,6]])
    ];
    const S = (cells, v) => sumExact(cells.map(x => I(...x)), v, 1, 9);
    groups.push(S([[3,8],[2,7],[1,6],[0,5]], 23));
    groups.push(S([[3,0],[2,1],[1,2],[0,3]], 25));
    groups.push(S([[8,4],[7,5],[6,6],[5,7],[4,8]], 27));
    groups.push(S([[8,4],[7,3],[6,2],[5,1],[4,0]], 15));
    // orden estático: diagonales con suma primero, luego renbans, luego el resto
    const orden = [];
    const add = cells => cells.forEach(x => { const i = I(...x); if (!orden.includes(i)) orden.push(i); });
    add([[8,4],[7,3],[6,2],[5,1],[4,0]]);            // 15
    add([[7,5],[6,6],[5,7],[4,8]]);                  // resto del 27
    add([[3,0],[2,1],[1,2],[0,3]]);                  // 25
    add([[3,8],[2,7],[1,6],[0,5]]);                  // 23
    add([[4,2],[4,3],[4,4],[4,5],[4,6]]);            // renban de 5
    add([[5,0],[3,1],[3,2],[3,3],[3,5],[3,6],[3,7],[4,8],[5,8],[3,8]]);
    add([[7,0],[8,1],[2,0],[1,1],[0,4],[1,4],[2,4],[8,3],[8,5],[8,7],[7,8]]);
    for (let i = 0; i < 81; i++) if (!orden.includes(i)) orden.push(i);
    const s = makeSolver({ N: 9, digits: D9, units, groups, staticOrder: orden });
    reporte('Renban ModE', s.solve(2, budget), null);
  },

  squares() {
    const esperada = '572946381634851297981732564768429153459318672213567948825194736197683425346275819';
    const baseUnits = [...rowsCols(9), ...boxesRect(9, 3, 3)];
    const R = cells => renban(cells.map(x => I(...x)));
    const arrowSum = (bulb, cells) => ({
      cells: [I(...bulb), ...cells.map(x => I(...x))],
      partial(vals) {
        const b = vals[I(...bulb)];
        let sum = 0, empty = 0;
        for (const x of cells) { const v = vals[I(...x)]; if (v === null) empty++; else sum += v; }
        if (b === null) return sum + empty <= 9;
        return sum + empty <= b && b <= sum + empty * 9;
      }
    });
    const todas = [];
    let anyTimeout = false;
    for (let X = 4; X <= 9; X++) for (let Y = 3; Y < X && Y <= 7; Y++) {
      const S = (cells, v) => sumExact(cells.map(x => I(...x)), v, 1, 9);
      const groups = [
        S([[6,0],[6,1],[6,2]], 15),
        S([[0,8],[1,8]], X),
        S([[0,3],[1,3],[2,3],[3,0],[3,1],[3,2],[3,3]], Y * Y),
        S([[6,3]], X - Y), S([[8,7]], X - Y),
        S([[8,0],[8,1]], Y),
        S([[4,4],[4,5],[4,6],[5,4],[5,5],[5,6],[5,7],[6,4],[6,5],[6,6],[7,5]], X * X),
        R([[0,1],[0,0],[1,0]]), R([[0,3],[1,3],[2,3]]), R([[3,2],[3,1],[3,0]]),
        R([[0,7],[1,8]]), R([[3,4],[4,3],[4,4]]), R([[7,3],[8,4]]), R([[8,5],[7,6]]),
        arrowSum([4,7], [[3,8],[2,8]]), arrowSum([7,4], [[8,3],[8,2]]),
        arrowSum([8,8], [[7,7],[6,7],[7,6]]), arrowSum([2,6], [[1,5],[0,4]]),
        arrowSum([3,3], [[2,2],[1,1]]), arrowSum([6,2], [[5,1],[4,0]])
      ];
      const s = makeSolver({ N: 9, digits: D9, units: baseUnits, groups });
      const res = s.solve(2, Math.min(budget / 4, 60000));
      if (res.timedOut) { anyTimeout = true; console.log(`  (X=${X},Y=${Y}: timeout, ${res.solutions.length} sols)`); }
      res.solutions.forEach(x => todas.push({ X, Y, sol: fmt(x) }));
    }
    const n = todas.length;
    let linea = `Difference Of Squares: ${n === 0 ? 'SIN SOLUCION' : n === 1 ? 'UNICA' : n + '+ SOLUCIONES'}${anyTimeout ? ' (con timeouts)' : ''}`;
    if (n >= 1) linea += ` | X=${todas[0].X} Y=${todas[0].Y} | ` + todas[0].sol +
      (todas[0].sol === esperada ? ' | == metadata OK' : ' | != METADATA!!');
    console.log(linea);
  },

  hypnotic() {
    const N = 8, D8 = [1,2,3,4,5,6,7,8];
    const I8 = (r,c) => idx(r,c,8);
    const p = P('qt0xjevecl');
    const units = [...rowsCols(8)];
    p.regions.forEach(reg => units.push(reg.map(x => I8(...x))));
    const reales = p.cages.filter(c => c.cells && c.cells.length);
    const groups = [
      exactCounts(reales[0].cells.map(x => I8(...x)), { 7: 8, 5: 6, 3: 4, 1: 2 }),
      exactCounts(reales[1].cells.map(x => I8(...x)), { 2: 1, 4: 3, 6: 5, 8: 7 })
    ];
    const s = makeSolver({ N: 8, digits: D8, units, groups });
    reporte('Hypnotic Suggestion', s.solve(2, budget),
      '7153462828463157137524864268173535178264648275135731684286245371');
  }
};

const job = process.argv[2];
if (!jobs[job]) { console.log('jobs:', Object.keys(jobs).join(' ')); process.exit(1); }
jobs[job]();
