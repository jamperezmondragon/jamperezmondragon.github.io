// Librería mínima de resolución para verificar los sudokus del lote.
// Backtracking con MRV sobre unidades (máscaras de bits) y constraints
// enchufables (pares y grupos) validados al ramificar.
'use strict';

function idx(r, c, N) { return r * N + c; }

function makeSolver({ N, digits, units, pairs = [], groups = [], givens = {}, staticOrder = null }) {
  const DIGS = digits;
  const ALL = DIGS.reduce((m, d) => m | (1 << d), 0);
  const unitOf = Array.from({ length: N * N }, () => []);
  units.forEach((u, ui) => u.forEach(i => unitOf[i].push(ui)));
  const pairsOf = Array.from({ length: N * N }, () => []);
  pairs.forEach(p => { pairsOf[p.a].push(p); pairsOf[p.b].push(p); });
  const groupsOf = Array.from({ length: N * N }, () => []);
  groups.forEach(g => g.cells.forEach(i => groupsOf[i].push(g)));

  function solve(limit = 2, budgetMs = 120000) {
    const vals = new Array(N * N).fill(null);
    const used = new Array(units.length).fill(0);   // máscara por unidad
    const solutions = [];
    const t0 = Date.now();
    let timedOut = false, nodes = 0;

    function place(i, d) { vals[i] = d; for (const u of unitOf[i]) used[u] |= (1 << d); }
    function unplace(i, d) {
      vals[i] = null;
      for (const u of unitOf[i]) {
        let m = 0;
        for (const j of units[u]) if (vals[j] !== null) m |= (1 << vals[j]);
        used[u] = m;
      }
    }

    for (const k in givens) place(+k, givens[k]);

    function unitMask(i) {
      let m = 0;
      for (const u of unitOf[i]) m |= used[u];
      return ALL & ~m;
    }

    function okHere(i) {
      for (const p of pairsOf[i]) {
        const va = vals[p.a], vb = vals[p.b];
        if (va !== null && vb !== null && !p.fn(va, vb)) return false;
      }
      for (const g of groupsOf[i]) if (!g.partial(vals)) return false;
      return true;
    }

    function realCands(i, mask) {
      const out = [];
      for (const d of DIGS) {
        if (!(mask & (1 << d))) continue;
        place(i, d);
        if (okHere(i)) out.push(d);
        unplace(i, d);
      }
      return out;
    }

    function dfs() {
      if (solutions.length >= limit || timedOut) return;
      if (++nodes % 2048 === 0 && Date.now() - t0 > budgetMs) { timedOut = true; return; }

      // 0) orden estático: primero las celdas listadas (constraints densos)
      if (staticOrder) {
        for (const i of staticOrder) {
          if (vals[i] !== null) continue;
          const cs = realCands(i, unitMask(i));
          if (cs.length === 0) return;
          for (const d of cs) {
            place(i, d);
            dfs();
            unplace(i, d);
            if (solutions.length >= limit || timedOut) return;
          }
          return;
        }
      }

      // 1) MRV barato con máscaras de unidad; desempate: celdas con más
      // constraints de grupo/pares primero (ahí la poda muerde)
      const top = [];   // [score, i, mask]
      for (let i = 0; i < N * N; i++) {
        if (vals[i] !== null) continue;
        const m = unitMask(i);
        let cnt = 0; for (const d of DIGS) if (m & (1 << d)) cnt++;
        if (cnt === 0) return;
        const deg = Math.min(groupsOf[i].length * 2 + pairsOf[i].length, 9);
        top.push([cnt * 10 - deg, i, m]);
      }
      if (top.length === 0) {
        for (const g of groups) if (!g.partial(vals)) return;
        for (const pr of pairs) if (!pr.fn(vals[pr.a], vals[pr.b])) return;
        solutions.push(vals.slice());
        return;
      }
      top.sort((a, b) => a[0] - b[0]);

      // 2) candidatos REALES (pares+grupos) para las K celdas más apretadas
      const K = Math.min(8, top.length);
      let best = -1, bestCands = null;
      for (let k = 0; k < K; k++) {
        const [, i, m] = top[k];
        const cs = realCands(i, m);
        if (cs.length === 0) return;
        if (bestCands === null || cs.length < bestCands.length) { best = i; bestCands = cs; }
        if (bestCands.length === 1) break;
      }
      for (const d of bestCands) {
        place(best, d);
        dfs();
        unplace(best, d);
        if (solutions.length >= limit || timedOut) return;
      }
    }

    dfs();
    return { solutions, timedOut, nodes };
  }

  return { solve };
}

// ---- constraints de grupo reutilizables ----

function sumExact(cells, S, dmin, dmax) {
  return {
    cells,
    partial(vals) {
      let sum = 0, empty = 0;
      for (const i of cells) { const v = vals[i]; if (v === null) empty++; else sum += v; }
      return sum + empty * dmin <= S && S <= sum + empty * dmax;
    }
  };
}

function renban(cells) {
  const L = cells.length;
  return {
    cells,
    partial(vals) {
      let mn = Infinity, mx = -Infinity, n = 0;
      const seen = new Set();
      for (const i of cells) {
        const v = vals[i];
        if (v === null) continue;
        if (seen.has(v)) return false;
        seen.add(v); n++;
        if (v < mn) mn = v;
        if (v > mx) mx = v;
      }
      return n === 0 || mx - mn <= L - 1;
    }
  };
}

function exactCounts(cells, counts) {
  return {
    cells,
    partial(vals) {
      const have = {};
      let vacias = 0;
      for (const i of cells) {
        const v = vals[i];
        if (v === null) { vacias++; continue; }
        have[v] = (have[v] || 0) + 1;
      }
      for (const d in counts) {
        const k = counts[d], h = have[d] || 0;
        if (h > k || h + vacias < k) return false;
      }
      return true;
    }
  };
}

function expandLine(wayPoints, N) {
  const cells = [];
  const push = (r, c) => {
    const i = idx(r, c, N);
    if (!cells.includes(i)) cells.push(i);
  };
  for (let k = 0; k + 1 < wayPoints.length; k++) {
    let [y1, x1] = wayPoints[k], [y2, x2] = wayPoints[k + 1];
    let r1 = Math.floor(y1), c1 = Math.floor(x1), r2 = Math.floor(y2), c2 = Math.floor(x2);
    const dr = Math.sign(r2 - r1), dc = Math.sign(c2 - c1);
    let r = r1, c = c1;
    push(r, c);
    while (r !== r2 || c !== c2) { r += dr; c += dc; push(r, c); }
  }
  return cells;
}

function boxesRect(N, bh, bw) {
  const out = [];
  for (let br = 0; br < N / bh; br++) for (let bc = 0; bc < N / bw; bc++) {
    const u = [];
    for (let r = 0; r < bh; r++) for (let c = 0; c < bw; c++) u.push(idx(br * bh + r, bc * bw + c, N));
    out.push(u);
  }
  return out;
}

function rowsCols(N) {
  const out = [];
  for (let r = 0; r < N; r++) out.push(Array.from({ length: N }, (_, c) => idx(r, c, N)));
  for (let c = 0; c < N; c++) out.push(Array.from({ length: N }, (_, r) => idx(r, c, N)));
  return out;
}

module.exports = { idx, makeSolver, sumExact, renban, exactCounts, expandLine, boxesRect, rowsCols };
