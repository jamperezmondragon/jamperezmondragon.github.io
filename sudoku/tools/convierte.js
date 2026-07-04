#!/usr/bin/env node
// Convierte los JSON SCL decodificados (tools/puzzles_json/*.json) a nuestros
// archivos de datos (puzzles/*.js). Diseño: los elementos visuales del SCL
// (lines/overlays/underlays/cages) se pasan TAL CUAL y el motor los dibuja
// genéricamente; aquí solo extraemos la semántica que el motor necesita:
// tamaño, cajas/regiones, dados, solución, niebla.
//
// Uso: node tools/convierte.js [id ...]   (sin args = todos)
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'puzzles_json');
const OUT = path.join(__dirname, '..', 'puzzles');

// Soluciones derivadas por los solvers (el metadata no las traía)
const DERIVED = {
  o3tnx9fkub: '642531531462265143413625126354354216',
  JqQHr2HJjg: '659843217134792856287615439321579684596481723748326195863257941972134568415968372',
  HhQT427HGN: '945836172837152496261947853476591238328674519519283647782419365694325781153768924',
  hfpFTGNLrr: '874192356396578124521346798768923541245781963913465287689217435457639812132854679',
  // identificadas en el transcript del agente D1 y verificadas contra dados/jaulas
  T3ttPM3pH8: '862493157973215468154687932647932581318756249295841376781324695539168724426579813',
  '8HQfQ4tD9q': '572946381634851297981732564768429153459318672213567948825194736197683425346275819'
};

// f-puzzles → estructura tipo SCL (solo lo que usa koyrm4s7co)
function fpuzToScl(fp) {
  const N = fp.size;
  const parse = ref => { const m = ref.match(/R(\d+)C(\d+)/); return [+m[1] - 1, +m[2] - 1]; };
  const cells = [];
  for (let r = 0; r < N; r++) {
    cells.push([]);
    for (let c = 0; c < N; c++) {
      const g = fp.grid[r][c] || {};
      cells[r].push(g.given && g.value ? { value: g.value } : {});
    }
  }
  const overlays = [];
  for (const d of fp.difference || []) {
    const [a, b] = d.cells.map(parse);
    overlays.push({ center: [(a[0] + b[0]) / 2 + 0.5, (a[1] + b[1]) / 2 + 0.5],
      width: 0.3, height: 0.3, rounded: true, backgroundColor: '#FFFFFF',
      borderColor: '#000000', thickness: 1.5 });
  }
  for (const d of fp.ratio || []) {
    const [a, b] = d.cells.map(parse);
    overlays.push({ center: [(a[0] + b[0]) / 2 + 0.5, (a[1] + b[1]) / 2 + 0.5],
      width: 0.3, height: 0.3, rounded: true, backgroundColor: '#000000',
      borderColor: '#000000', thickness: 1.5 });
  }
  const lines = [];
  for (const l of fp.line || []) {
    for (const seg of l.lines || []) {
      lines.push({ wayPoints: seg.map(ref => parse(ref).map(x => x + 0.5)),
        color: l.outlineC || '#c791f2', thickness: 8 });
    }
  }
  return {
    metadata: { title: fp.title, author: fp.author, rules: fp.ruleset,
      solution: (fp.solution || []).join('') },
    cellSize: 50,
    cells,
    regions: [],   // 6×6 estándar: cajas 2×3 se infieren abajo
    overlays, lines, underlays: [], cages: [], arrows: [],
    _fpuzBoxes: N === 6 ? [2, 3] : (N === 9 ? [3, 3] : null)
  };
}

// ¿las regiones del SCL son las cajas regulares de un tablero N×N?
function regularBoxes(regions, N) {
  if (!regions || !regions.length) return null;
  for (const [h, w] of [[2, 3], [3, 3], [2, 4], [3, 2], [4, 2], [2, 2]]) {
    if (h * w !== N || regions.length !== N) continue;
    const match = regions.every(reg =>
      reg.length === N && (() => {
        const rs = reg.map(c => c[0]), cs = reg.map(c => c[1]);
        const r0 = Math.min(...rs), c0 = Math.min(...cs);
        if (r0 % h !== 0 || c0 % w !== 0) return false;
        return reg.every(([r, c]) => r >= r0 && r < r0 + h && c >= c0 && c < c0 + w);
      })()
    );
    if (match) return [h, w];
  }
  return null;
}

function convert(id) {
  let scl = JSON.parse(fs.readFileSync(path.join(SRC, id + '.json'), 'utf8'));
  if (scl.grid && scl.size) scl = fpuzToScl(scl);   // formato f-puzzles
  const meta = scl.metadata || {};
  const cells = scl.cells || [];
  const N = cells.length;
  const aviso = [];

  const givens = [];
  cells.forEach((row, r) => row.forEach((cell, c) => {
    if (cell && cell.value !== undefined && cell.value !== null && cell.value !== '') {
      givens.push([r, c, +cell.value]);
    }
  }));

  // niebla y metadatos: jaulas especiales; el resto son visuales/de suma.
  // Algunos setters guardan title/author/rules en jaulas "title: …" etc.
  const lights = [], visualCages = [];
  for (const cage of scl.cages || []) {
    const raw = String(cage.value ?? '');
    const v = raw.toUpperCase();
    const mMeta = raw.match(/^(title|author|rules|msgcorrect)\s*:\s*([\s\S]*)$/i);
    if (v === 'FOGLIGHT') { (cage.cells || []).forEach(c => lights.push(c)); }
    else if (mMeta) {
      const key = mMeta[1].toLowerCase();
      if (key === 'title' && !meta.title) meta.title = mMeta[2].trim();
      if (key === 'author' && !meta.author) meta.author = mMeta[2].trim();
      if (key === 'rules' && !meta.rules) meta.rules = mMeta[2].trim();
    }
    else if (v.startsWith('FOG') || v === 'HIDDEN') {
      aviso.push('jaula especial no manejada: ' + v);
    } else visualCages.push(cage);
  }

  let solution = meta.solution || DERIVED[id] || null;
  if (!solution) aviso.push('SIN SOLUCIÓN: página no publicable hasta derivarla');
  if (solution && solution.length !== N * N)
    aviso.push('solución de largo ' + solution.length + ' para tablero de ' + (N * N));

  const boxes = scl._fpuzBoxes || regularBoxes(scl.regions, N);
  const puzzle = {
    id,
    title: meta.title || '(sin título)',
    author: meta.author || '',
    urlOriginal: 'https://sudokupad.app/' + id.replace('_', '/'),
    size: N,
    boxes,
    regions: boxes ? null : (scl.regions && scl.regions.length ? scl.regions : null),
    rules: '',            // traducción al español: se llena a mano
    hints: [],            // pistas progresivas: se llenan a mano
    _rulesOrig: meta.rules || '',
    givens,
    solution,
    fog: lights.length ? { lights } : null,
    sclCellSize: scl.cellSize || 50,
    visuals: {
      underlays: scl.underlays || [],
      overlays: scl.overlays || [],
      lines: scl.lines || [],
      arrows: scl.arrows || [],
      cages: visualCages
    }
  };

  const js = '// Generado por tools/convierte.js desde el SCL de SudokuPad.\n' +
    '// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.\n' +
    'window.PUZZLE = ' + JSON.stringify(puzzle, null, 1) + ';\n';
  const dest = path.join(OUT, id + '.js');
  if (fs.existsSync(dest)) {
    // no pisar traducciones: conservar rules/hints existentes
    const prev = fs.readFileSync(dest, 'utf8');
    const mR = prev.match(/"rules":\s*("(?:[^"\\]|\\.)*")/);
    const mH = prev.match(/"hints":\s*(\[[^\]]*\])/s);
    let out = js;
    if (mR && mR[1] !== '""') out = out.replace(/"rules": ""/, '"rules": ' + mR[1]);
    if (mH && mH[1].trim() !== '[]') out = out.replace(/"hints": \[\]/, '"hints": ' + mH[1]);
    fs.writeFileSync(dest, out);
  } else {
    fs.writeFileSync(dest, js);
  }
  return { id, N, givens: givens.length, fog: lights.length > 0, sol: !!solution, aviso };
}

const ids = process.argv.length > 2
  ? process.argv.slice(2)
  : fs.readdirSync(SRC).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));

for (const id of ids) {
  try {
    const r = convert(id);
    console.log(r.id.padEnd(32), r.N + '×' + r.N,
      'dados:' + String(r.givens).padStart(2),
      r.fog ? 'niebla' : '      ',
      r.sol ? 'sol✓' : 'SIN-SOL',
      r.aviso.length ? ' ⚠️ ' + r.aviso.join('; ') : '');
  } catch (e) {
    console.log(id.padEnd(32), 'ERROR:', e.message);
  }
}
