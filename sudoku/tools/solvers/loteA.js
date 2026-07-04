// Verificador del LOTE A: backtracking genérico + constraints por puzzle.
// Para cada puzzle: comprueba que la solución del metadata satisface todo
// y busca hasta 2 soluciones para confirmar unicidad.
'use strict';

const N = 6;
const idx = (r, c) => r * N + c;
const inG = (r, c) => r >= 0 && r < N && c >= 0 && c < N;

// Cajas 2x3 estándar
const BOXES = [];
for (let br = 0; br < 3; br++) for (let bc = 0; bc < 2; bc++) {
  const cells = [];
  for (let r = br * 2; r < br * 2 + 2; r++) for (let c = bc * 3; c < bc * 3 + 3; c++) cells.push(idx(r, c));
  BOXES.push(cells);
}
const ROWS = [...Array(N)].map((_, r) => [...Array(N)].map((_, c) => idx(r, c)));
const COLS = [...Array(N)].map((_, c) => [...Array(N)].map((_, r) => idx(r, c)));

// Backtracking: units = grupos all-different; onAssign(g, i, v, unids) => false poda;
// final(g) => true acepta. Devuelve {solutions, metaOK}.
function solve({ domain = 6, units = [], givens = {}, onAssign = null, final = null, meta = null, maxSol = 2, cap = 3e7 }) {
  const unitOf = [...Array(N * N)].map(() => []);
  units.forEach((u, ui) => u.forEach(i => unitOf[i].push(ui)));
  const used = units.map(() => new Set());
  const g = new Array(N * N).fill(0);
  const sols = [];
  let nodes = 0, capped = false;

  function bt(pos) {
    if (sols.length >= maxSol || capped) return;
    if (++nodes > cap) { capped = true; return; }
    if (pos === N * N) {
      if (!final || final(g)) sols.push(g.slice());
      return;
    }
    const forced = givens[pos];
    for (let v = 1; v <= domain; v++) {
      if (forced && v !== forced) continue;
      if (unitOf[pos].some(ui => used[ui].has(v))) continue;
      g[pos] = v;
      if (!onAssign || onAssign(g, pos, v)) {
        unitOf[pos].forEach(ui => used[ui].add(v));
        bt(pos + 1);
        unitOf[pos].forEach(ui => used[ui].delete(v));
      }
      g[pos] = 0;
    }
  }
  bt(0);

  let metaOK = null;
  if (meta) {
    const mg = meta.split('').map(Number);
    metaOK = true;
    for (const u of units) {
      const vals = u.map(i => mg[i]);
      if (new Set(vals).size !== vals.length) metaOK = false;
    }
    for (let p = 0; p < N * N; p++) {
      const test = mg.slice(0, p + 1).concat(new Array(N * N - p - 1).fill(0));
      if (onAssign && !onAssign(test, p, mg[p])) { metaOK = false; break; }
    }
    if (metaOK && final && !final(mg)) metaOK = false;
    if (givens && metaOK) for (const [p, v] of Object.entries(givens)) if (mg[p] !== v) metaOK = false;
  }
  return { sols, metaOK, nodes, capped };
}

function report(name, res) {
  const u = res.capped ? 'INDETERMINADO (cap)' : res.sols.length === 1 ? 'ÚNICA' : res.sols.length + ' SOLUCIONES';
  console.log(`${name}: metadata ${res.metaOK === null ? '—' : res.metaOK ? 'OK' : '**FALLA**'} | ${u} | nodos ${res.nodes}`);
  if (res.sols.length) console.log('   sol:', res.sols[0].join(''));
}

const std = [...ROWS, ...COLS, ...BOXES];

// ---------- 1. ftar5lqcoq — Peeking Snowman ----------
{
  const segsBig = [[[3,1],[3,2]], [[3,3]], [[4,3],[5,3]], [[4,1],[5,1],[5,2]]].map(s => s.map(([r,c]) => idx(r,c)));
  const segsHead = [[[1,2]], [[2,3]], [[2,1],[3,2]]].map(s => s.map(([r,c]) => idx(r,c)));
  const arms = [[idx(3,3), idx(3,4)], [idx(3,1), idx(3,0)]];
  const head = idx(2,2), flakes = [idx(1,3), idx(0,4)];
  function segOK(g, segs) {
    let target = -1;
    for (const s of segs) {
      if (s.some(i => !g[i])) continue;
      const sum = s.reduce((a, i) => a + g[i], 0);
      if (target < 0) target = sum; else if (sum !== target) return false;
    }
    return true;
  }
  const res = solve({
    units: std, givens: { [idx(1,5)]: 4 },
    meta: '254136163524516342342651625413431265',
    onAssign: g => segOK(g, segsBig) && segOK(g, segsHead) &&
      arms.every(([a,b]) => !g[a] || !g[b] || Math.abs(g[a]-g[b]) === 1),
    final: g => flakes.some(f => g[f] === 2*g[head] || g[head] === 2*g[f])
  });
  report('ftar5lqcoq  Peeking Snowman', res);
}

// ---------- 2. kmwut11gkh — Silent Sweeper ----------
{
  const circles = [[0,1],[3,1],[4,0],[4,2],[1,2],[2,4],[3,5]].map(([r,c]) => idx(r,c));
  const nbrs = i => {
    const r = Math.floor(i/N), c = i%N, out = [];
    for (let dr=-1; dr<=1; dr++) for (let dc=-1; dc<=1; dc++)
      if ((dr||dc) && inG(r+dr,c+dc)) out.push(idx(r+dr,c+dc));
    return out;
  };
  const NB = {}; circles.forEach(i => NB[i] = nbrs(i));
  const res = solve({
    units: std, meta: '321456645213532164164532213645456321',
    onAssign: g => circles.every(ci => {
      if (!g[ci]) return true;
      let far = 0, open = 0;
      for (const n of NB[ci]) { if (!g[n]) open++; else if (Math.abs(g[n]-g[ci]) >= 3) far++; }
      return far <= g[ci] && g[ci] <= far + open;
    })
  });
  report('kmwut11gkh  Silent Sweeper', res);
}

// ---------- 3. nycgqk4mcz — Party Snack ----------
{
  const regs = [[[0,0],[0,1],[0,2],[1,0],[1,1],[2,0]],[[0,3],[0,4],[0,5],[1,4],[1,5],[2,5]],[[2,1],[2,2],[3,1],[3,2],[4,2],[4,3]],[[1,2],[1,3],[2,3],[2,4],[3,3],[3,4]],[[3,0],[4,0],[4,1],[5,0],[5,1],[5,2]],[[3,5],[4,4],[4,5],[5,3],[5,4],[5,5]]]
    .map(rg => rg.map(([r,c]) => idx(r,c)));
  const segs = [[[4,5],[3,5]], [[2,4],[2,3]], [[2,2]]].map(s => s.map(([r,c]) => idx(r,c)));
  const KN = {};
  for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
    KN[idx(r,c)] = [];
    for (const [dr,dc] of [[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]])
      if (inG(r+dr,c+dc)) KN[idx(r,c)].push(idx(r+dr,c+dc));
  }
  function segOK(g) {
    let t = -1;
    for (const s of segs) {
      if (s.some(i => !g[i])) continue;
      const sum = s.reduce((a,i) => a+g[i], 0);
      if (t < 0) t = sum; else if (sum !== t) return false;
    }
    return true;
  }
  const b = [idx(0,0), idx(0,1)], w = [idx(4,1), idx(5,1)];
  const res = solve({
    units: [...ROWS, ...COLS, ...regs], meta: '362145156432415326623514234651541263',
    onAssign: (g, p, v) => KN[p].every(n => g[n] !== v) && segOK(g) &&
      (!g[b[0]] || !g[b[1]] || g[b[0]] === 2*g[b[1]] || g[b[1]] === 2*g[b[0]]) &&
      (!g[w[0]] || !g[w[1]] || Math.abs(g[w[0]]-g[w[1]]) === 1)
  });
  report('nycgqk4mcz  Party Snack', res);
}

// ---------- 4. nzfy94z0eg — Pumpkin Patch ----------
{
  const pumps = [[0,3],[3,2],[4,2],[4,0],[5,0],[2,0]].map(([r,c]) => idx(r,c));
  const diagCells = {};
  for (const p of pumps) {
    const r = Math.floor(p/N), c = p%N, set = new Set([p]);
    for (const [dr,dc] of [[1,1],[1,-1],[-1,1],[-1,-1]])
      for (let k=1; inG(r+dr*k, c+dc*k); k++) set.add(idx(r+dr*k, c+dc*k));
    diagCells[p] = [...set];
  }
  const res = solve({
    units: std, meta: '512436634125123654456312365241241563',
    onAssign: g => pumps.every(p => {
      if (!g[p]) return true;
      let eq = 0, open = 0;
      for (const d of diagCells[p]) { if (!g[d]) open++; else if (g[d] === g[p]) eq++; }
      return eq <= g[p] && g[p] <= eq + open;
    }),
    final: g => new Set(pumps.map(p => g[p])).size === pumps.length
  });
  report('nzfy94z0eg  Pumpkin Patch', res);
}

// ---------- 5. adventure_566 — Local Negativity ----------
{
  const cage = new Set([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[1,3],[1,4],[2,2],[2,3],[3,3],[4,2],[4,3],[4,4]].map(([r,c]) => idx(r,c)));
  const dots = [
    { a: idx(0,0), b: idx(0,1), t: 'b' },
    { a: idx(0,1), b: idx(1,1), t: 'b' },
    { a: idx(3,5), b: idx(4,5), t: 'w' }
  ];
  const dotSet = new Set(dots.map(d => Math.min(d.a,d.b) + ':' + Math.max(d.a,d.b)));
  const negPairs = [];
  for (const i of cage) {
    const r = Math.floor(i/N), c = i%N;
    for (const [dr,dc] of [[0,1],[1,0]]) {
      if (!inG(r+dr, c+dc)) continue;
      const j = idx(r+dr, c+dc);
      if (cage.has(j) && !dotSet.has(Math.min(i,j) + ':' + Math.max(i,j))) negPairs.push([i,j]);
    }
  }
  const res = solve({
    units: std, meta: '425631613524561342342156236415154263',
    onAssign: g =>
      dots.every(d => !g[d.a] || !g[d.b] ||
        (d.t === 'b' ? (g[d.a] === 2*g[d.b] || g[d.b] === 2*g[d.a]) : Math.abs(g[d.a]-g[d.b]) === 1)) &&
      negPairs.every(([a,b]) => !g[a] || !g[b] ||
        (Math.abs(g[a]-g[b]) !== 1 && g[a] !== 2*g[b] && g[b] !== 2*g[a]))
  });
  report('adv566      Local Negativity', res);
}

// ---------- 6. adventure_527 — Friendly Void ----------
{
  const circ = new Set([[1,1],[1,3],[0,5],[2,5],[5,5],[5,4],[5,0],[3,0],[4,2],[5,2]].map(([r,c]) => idx(r,c)));
  const res = solve({
    units: std, givens: { [idx(4,3)]: 1 },
    meta: '654321321465512643436512265134143256',
    onAssign: (g, p, v) => {
      const r = Math.floor(p/N)+1, c = p%N+1;
      return circ.has(p) ? (v === r || v === c) : (v !== r && v !== c);
    }
  });
  report('adv527      Friendly Void', res);
}

// ---------- 7. koyrm4s7co — What a Narcissist ----------
{
  const cell = s => { const m = s.match(/R(\d)C(\d)/); return idx(+m[1]-1, +m[2]-1); };
  const white = [['R5C4','R4C4'],['R6C4','R5C4']].map(p => p.map(cell));
  const black = [['R6C3','R6C4'],['R6C2','R6C3']].map(p => p.map(cell));
  const lines = [
    ['R6C2','R6C1','R5C1','R4C1','R4C2','R5C3','R6C2'],
    ['R2C6','R2C5','R2C4','R3C4','R4C4','R4C5','R4C6'],
    ['R1C3','R1C2','R1C1','R2C1','R3C1','R3C2','R3C3','R2C3','R2C2']
  ].map(l => l.map(cell));
  const mod = v => (v - 1) % 3;
  const res = solve({
    units: std,
    meta: '621345435261264153153624346512512436',
    onAssign: g =>
      white.every(([a,b]) => !g[a] || !g[b] || Math.abs(g[a]-g[b]) === 1) &&
      black.every(([a,b]) => !g[a] || !g[b] || g[a] === 2*g[b] || g[b] === 2*g[a]) &&
      lines.every(l => {
        for (let k = 0; k + 2 < l.length; k++) {
          const t = [l[k], l[k+1], l[k+2]];
          if (t.some(i => !g[i])) continue;
          if (new Set(t.map(i => mod(g[i]))).size !== 3) return false;
        }
        return true;
      })
  });
  report('koyrm4s7co  What a Narcissist', res);
}

// ---------- 8. 1ru4mm2uq3 — Minesweeper (digits+shading conjunto) ----------
{
  // Búsqueda conjunta: dígitos por backtracking; al completar, contar shadings válidos.
  const cleared = [idx(3,1), idx(4,5)];
  const meta = '521436463152345261612543234615156324';
  const nbrs = i => {
    const r = Math.floor(i/N), c = i%N, out = [];
    for (let dr=-1; dr<=1; dr++) for (let dc=-1; dc<=1; dc++)
      if ((dr||dc) && inG(r+dr,c+dc)) out.push(idx(r+dr,c+dc));
    return out;
  };
  const NB = [...Array(N*N)].map((_, i) => nbrs(i));
  const boxOf = new Array(N*N);
  BOXES.forEach((b, bi) => b.forEach(i => boxOf[i] = bi));

  // Cuenta shadings válidos para un grid de dígitos completo (hasta max)
  function countShadings(g, max) {
    let count = 0;
    const mine = new Array(N*N).fill(-1);
    cleared.forEach(i => mine[i] = 0);
    function ok(pos) {
      // poda: para cada celda limpia ya decidida con vecindario parcial
      for (let i = 0; i <= pos; i++) {
        if (mine[i] !== 0) continue;
        let m = 0, open = 0;
        for (const n of NB[i]) { if (mine[n] === -1 || n > pos) open++; else if (mine[n] === 1) m++; }
        if (m > g[i] || g[i] > m + open) return false;
      }
      // cajas completas: cuentas distintas
      const done = [], counts = [];
      for (let bi = 0; bi < 6; bi++) {
        if (BOXES[bi].every(i => i <= pos && mine[i] !== -1)) {
          const cnt = BOXES[bi].reduce((a,i) => a + (mine[i] === 1 ? 1 : 0), 0);
          if (counts.includes(cnt)) return false;
          counts.push(cnt);
        }
      }
      return true;
    }
    function bt(pos) {
      if (count >= max) return;
      if (pos === N*N) { count++; return; }
      for (const v of (mine[pos] === 0 ? [0] : [0,1])) {
        mine[pos] = v;
        if (ok(pos)) bt(pos + 1);
        if (cleared.includes(pos)) mine[pos] = 0; else mine[pos] = -1;
      }
    }
    bt(0);
    return count;
  }

  // Verificar metadata
  const mg = meta.split('').map(Number);
  const metaShadings = countShadings(mg, 2);
  console.log(`1ru4mm2uq3  Minesweeper: metadata dígitos sudoku ${std.every(u => new Set(u.map(i=>mg[i])).size === 6) ? 'OK' : 'FALLA'} | shadings para metadata: ${metaShadings}`);

  // Unicidad del par (dígitos, shading): búsqueda sobre dígitos, para cada
  // solución sudoku completa contamos shadings. Con poda sudoku 6x6 + given.
  let pairs = 0, grids = 0;
  const res = solve({
    units: std, givens: { [idx(3,1)]: 1 }, maxSol: 1e9, cap: 5e7,
    final: g => {
      grids++;
      const s = countShadings(g, 2 - pairs);
      pairs += s;
      return false; // no acumular soluciones, solo contar
    }
  });
  console.log(`   pares (dígitos,shading) encontrados: ${pairs} | grids sudoku probados: ${grids} ${res.capped ? '(CAP alcanzado, incompleto)' : '(búsqueda completa)'}`);
}

console.log('\n(fillomino Onimollif va en solver aparte: loteA_fillomino.js)');
