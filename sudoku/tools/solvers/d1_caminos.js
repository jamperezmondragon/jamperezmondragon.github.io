// Verificación de los dos puzzles con camino del lote D1.
'use strict';
const { idx, makeSolver, rowsCols, boxesRect } = require('./lib');
const fs = require('fs');
const P = id => JSON.parse(fs.readFileSync(__dirname + '/../puzzles_json/' + id + '.json', 'utf8'));

// ---------- Modular Zigzag (urooueeutg) ----------
function zigzag() {
  const sol = '564897231789123456312645978231564897456789123978312645897231564123456789645978312';
  const G = Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => +sol[r * 9 + c]));

  // 1) constraints base sobre la solución dada
  let ok = true;
  for (let r = 0; r < 9; r++) {
    if (new Set(G[r]).size !== 9) ok = false;
    if (new Set(G.map(row => row[r])).size !== 9) ok = false;
  }
  for (let br = 0; br < 3; br++) for (let bc = 0; bc < 3; bc++) {
    const s = new Set();
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s.add(G[br*3+r][bc*3+c]);
    if (s.size !== 9) ok = false;
  }
  const anti = new Set(); for (let r = 0; r < 9; r++) anti.add(G[r][8 - r]);
  if (anti.size !== 9) ok = false;
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const mods = new Set([G[r][c], G[r][c+1], G[r+1][c], G[r+1][c+1]].map(v => v % 3));
    if (mods.size !== 3) ok = false;
  }
  console.log('Zigzag base (filas/cols/cajas/diagonal/mod2x2):', ok ? 'OK' : 'FALLA');

  // 2) caminos monótonos (0,0)→(8,8), pasos E o SW
  const buenos = [];
  let total = 0;
  const boxOf = (r, c) => Math.floor(r / 3) * 3 + Math.floor(c / 3);
  (function dfs(r, c, camino) {
    if (r === 8 && c === 8) {
      total++;
      const digs = camino.map(([rr, cc]) => G[rr][cc]);
      for (let k = 0; k + 2 < digs.length; k++) {
        if (new Set([digs[k] % 3, digs[k+1] % 3, digs[k+2] % 3]).size !== 3) return;
      }
      // segmentos por caja: renban + toca las 9 cajas
      const cajas = new Set();
      let segInicio = 0;
      const segs = [];
      for (let k = 0; k < camino.length; k++) {
        cajas.add(boxOf(...camino[k]));
        if (k + 1 === camino.length || boxOf(...camino[k+1]) !== boxOf(...camino[k])) {
          segs.push(digs.slice(segInicio, k + 1));
          segInicio = k + 1;
        }
      }
      if (cajas.size !== 9) return;
      for (const s of segs) {
        if (new Set(s).size !== s.length) return;
        if (Math.max(...s) - Math.min(...s) !== s.length - 1) return;
      }
      buenos.push(camino.slice());
      return;
    }
    // este
    if (c + 1 < 9) { camino.push([r, c+1]); dfs(r, c+1, camino); camino.pop(); }
    // suroeste
    if (r + 1 < 9 && c - 1 >= 0) { camino.push([r+1, c-1]); dfs(r+1, c-1, camino); camino.pop(); }
  })(0, 0, [[0, 0]]);
  console.log(`Zigzag caminos: ${total} monótonos posibles, ${buenos.length} válidos con la solución dada`);
  if (buenos.length) {
    console.log('  camino:', buenos[0].map(([r,c]) => 'r'+(r+1)+'c'+(c+1)).join(' '));
  }
}

// ---------- Hamiltonian Killer Thermo (wcq666h4y2) ----------
function hamkiller() {
  const p = P('wcq666h4y2');
  const sol = p.metadata.solution;
  const G = Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => +sol[r * 9 + c]));
  const cages = p.cages.filter(c => c.cells && c.cells.length).map(c => c.cells);

  // 1) latin + jaulas sin repetir + celdas cubren todo
  let ok = true;
  for (let r = 0; r < 9; r++) {
    if (new Set(G[r]).size !== 9) ok = false;
    if (new Set(G.map(row => row[r])).size !== 9) ok = false;
  }
  const cubiertas = new Set();
  for (const cage of cages) {
    const vs = cage.map(([r, c]) => G[r][c]);
    if (new Set(vs).size !== vs.length) ok = false;
    cage.forEach(([r, c]) => cubiertas.add(r * 9 + c));
  }
  console.log('HamKiller: latin', ok ? 'OK' : 'FALLA', '| jaulas cubren', cubiertas.size, 'celdas de 81');

  // 2) sumas de jaulas: deben ser todas distintas (termómetro estricto)
  const sums = cages.map(cage => cage.reduce((s, [r, c]) => s + G[r][c], 0));
  const distintas = new Set(sums).size === sums.length;
  console.log('  sumas:', sums.join(','), '| todas distintas:', distintas ? 'sí' : 'NO');

  // 3) camino hamiltoniano con jaulas contiguas en orden de suma creciente
  const orden = sums.map((s, i) => [s, i]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  const cellCage = {};
  cages.forEach((cage, i) => cage.forEach(([r, c]) => { cellCage[r * 9 + c] = i; }));
  const ady = (a, b) => Math.abs(Math.floor(a/9) - Math.floor(b/9)) + Math.abs(a%9 - b%9) === 1;

  // caminos hamiltonianos internos por jaula: entrada→salida
  function internos(cage) {
    const cells = cage.map(([r, c]) => r * 9 + c);
    const out = [];
    (function dfs(camino, resto) {
      if (resto.length === 0) { out.push(camino.slice()); return; }
      const ult = camino[camino.length - 1];
      for (const n of resto) {
        if (ady(ult, n)) dfs([...camino, n], resto.filter(x => x !== n));
      }
    })([], cells);
    // arrancar de cada celda
    const res = [];
    for (const c0 of cells) {
      (function dfs(camino, resto) {
        if (resto.length === 0) { res.push(camino.slice()); return; }
        const ult = camino[camino.length - 1];
        for (const n of resto) if (ady(ult, n)) dfs([...camino, n], resto.filter(x => x !== n));
      })([c0], cells.filter(x => x !== c0));
    }
    return res;
  }
  const rutasPorJaula = orden.map(i => internos(cages[i]));
  console.log('  rutas internas por jaula (en orden):', rutasPorJaula.map(r => r.length).join(','));

  // DFS jaula por jaula conectando salida→entrada
  let solucionCamino = null;
  (function dfs(k, prevExit, acumulado) {
    if (solucionCamino) return;
    if (k === orden.length) { solucionCamino = acumulado.slice(); return; }
    for (const ruta of rutasPorJaula[k]) {
      if (prevExit !== null && !ady(prevExit, ruta[0])) continue;
      dfs(k + 1, ruta[ruta.length - 1], [...acumulado, ...ruta]);
      if (solucionCamino) return;
    }
  })(0, null, []);
  if (solucionCamino) {
    console.log('  CAMINO HAMILTONIANO ENCONTRADO (' + solucionCamino.length + ' celdas)');
    console.log('  inicia r' + (Math.floor(solucionCamino[0]/9)+1) + 'c' + (solucionCamino[0]%9+1) +
      ', termina r' + (Math.floor(solucionCamino[80]/9)+1) + 'c' + (solucionCamino[80]%9+1));
  } else {
    console.log('  NO se encontró camino hamiltoniano con ese orden de jaulas');
  }
}

zigzag();
hamkiller();
