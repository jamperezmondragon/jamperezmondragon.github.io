// CC flechas 6x6 — solver conjunto v2, ahora con FUSIÓN de regiones
// (necesaria para regiones en U que se conectan más abajo).
const N = 6;
const arrows = [
  [0,1,0,1],[0,3,1,0],[1,1,0,1],[1,4,0,-1],[1,5,-1,0],
  [2,0,0,1],[2,1,1,0],[3,1,0,-1],[3,4,-1,0],[3,5,-1,0],
  [4,2,-1,0],[4,3,-1,0],[4,5,0,-1],[5,0,0,1],[5,2,0,-1],[5,3,0,-1],[5,4,0,-1]
];
const givens = { 13: 1, 20: 6 };
const expected = "345126634512213654526431451263162345";

const g = new Array(N * N).fill(0);
const reg = new Array(N * N).fill(-1);
let nextId = 0;
const size = {}, digs = {};
let nodes = 0;
const sols = new Set();

function arrowsOk(k) {
  for (const [r, c, dr, dc] of arrows) {
    const b = r * N + c;
    if (b > k) continue;
    const d = g[b];
    for (let t = 1; t < d; t++) {
      const rr = r + dr * t, cc = c + dc * t;
      if (rr < 0 || rr >= N || cc < 0 || cc >= N) return false;
      const j = rr * N + cc;
      if (j <= k && reg[j] !== reg[b]) return false;
    }
    const rE = r + dr * d, cE = c + dc * d;
    if (rE >= 0 && rE < N && cE >= 0 && cE < N) {
      const j = rE * N + cE;
      if (j <= k && reg[j] === reg[b]) return false;
    }
  }
  return true;
}

function openOrDone(k) {
  // cada región con casillas debe estar completa (6) o tener frontera > k;
  // además: regiones usadas ≤ 6 y celdas restantes alcanzan para completar
  const ids = Object.keys(size).filter(id => size[id] > 0);
  if (ids.length > 6) return false;
  let deficit = 0;
  for (const id of ids) {
    if (size[id] === 6) continue;
    deficit += 6 - size[id];
    let open = false;
    for (let i = 0; i <= k && !open; i++) {
      if (reg[i] != id) continue;
      const r = Math.floor(i / N), c = i % N;
      for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const rr = r + dr, cc = c + dc;
        if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
        if (rr * N + cc > k) { open = true; break; }
      }
    }
    if (!open) return false;
  }
  const restantes = N * N - 1 - k;
  const porAbrir = 6 - ids.length;           // regiones que aún no existen
  if (deficit + porAbrir * 6 > restantes) return false;
  return true;
}

function dfs(i) {
  nodes++;
  if (sols.size > 1) return;
  if (i === N * N) {
    const ids = Object.keys(size).filter(id => size[id] > 0);
    if (ids.length === 6 && ids.every(id => size[id] === 6)) sols.add(g.join(""));
    return;
  }
  const r = Math.floor(i / N), c = i % N;
  const cands = givens[i] ? [givens[i]] : [1, 2, 3, 4, 5, 6];
  for (const v of cands) {
    let ok = true;
    for (let kk = 0; kk < N; kk++) {
      if (g[r * N + kk] === v && kk !== c) { ok = false; break; }
      if (g[kk * N + c] === v && kk !== r) { ok = false; break; }
    }
    if (!ok) continue;
    g[i] = v;
    const L = c > 0 ? reg[i - 1] : -1;
    const U = r > 0 ? reg[i - N] : -1;
    // opciones: nueva / unir L / unir U / fusionar L+U
    const options = [];
    options.push({ type: "new" });
    if (L >= 0 && size[L] < 6 && !digs[L].has(v)) options.push({ type: "join", id: L });
    if (U >= 0 && U !== L && size[U] < 6 && !digs[U].has(v)) options.push({ type: "join", id: U });
    if (L >= 0 && U >= 0 && L !== U && size[L] + size[U] + 1 <= 6 &&
        !digs[L].has(v) && !digs[U].has(v) &&
        [...digs[L]].every(d => !digs[U].has(d))) options.push({ type: "merge" });
    for (const opt of options) {
      let id, undo = null;
      if (opt.type === "new") {
        id = nextId++;
        size[id] = 0; digs[id] = new Set();
      } else if (opt.type === "join") {
        id = opt.id;
      } else {
        // fusionar U dentro de L: reetiquetar
        id = L;
        undo = [];
        for (let j = 0; j < i; j++) if (reg[j] === U) { reg[j] = L; undo.push(j); }
        size[L] += size[U];
        for (const d of digs[U]) digs[L].add(d);
        var mergedU = U, mergedUSize = size[U], mergedUDigs = new Set(digs[U]);
        size[U] = 0;
      }
      reg[i] = id; size[id]++; digs[id].add(v);
      if (arrowsOk(i) && (c !== N - 1 || openOrDone(i))) dfs(i + 1);
      // deshacer
      reg[i] = -1; size[id]--; digs[id].delete(v);
      if (opt.type === "new") { delete size[id]; delete digs[id]; nextId--; }
      else if (opt.type === "merge") {
        for (const j of undo) reg[j] = mergedU;
        size[mergedU] = mergedUSize;
        size[L] -= mergedUSize;
        for (const d of mergedUDigs) digs[L].delete(d);
      }
    }
    g[i] = 0;
  }
}
console.time("total");
dfs(0);
console.timeEnd("total");
console.log("soluciones de dígitos:", sols.size, "| nodos:", nodes);
console.log("¿publicada entre ellas?:", sols.has(expected));
for (const s of sols) console.log(s);
