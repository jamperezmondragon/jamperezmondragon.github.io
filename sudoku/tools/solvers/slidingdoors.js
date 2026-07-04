// dx2flehouq «Sliding Doors» (Michael Lefkowitz), 7×7.
// Dígitos 1-6 + una celda vacía por fila/columna; 7 regiones conexas de 6
// celdas (algunas fronteras dadas); pistas tipo sándwich: suma desde el
// borde hasta la celda vacía.
'use strict';

const N = 7;
// pistas: [tipo, índice, valor]  tipo: L=fila izq, R=fila der, T=col arriba
const CLUES = [["R",4,9],["L",1,6],["L",3,15],["L",5,14],["R",6,12],["T",4,13]];
// paredes dadas entre pares de celdas
const GIVEN_WALLS = [[[5,1],[6,1]],[[0,2],[0,3]],[[1,6],[2,6]],[[1,4],[1,5]]];
const SOL = "432156.6.54123.21643521453.61632.54356.24154.3612";

function checkClues(g) {
  for (const [type, idx, val] of CLUES) {
    let s = 0, ok = false;
    const range = [...Array(N).keys()];
    const cells = type === "L" ? range.map(c => [idx, c])
      : type === "R" ? range.map(c => [idx, N - 1 - c])
      : range.map(r => [r, idx]);
    for (const [r, c] of cells) {
      if (g[r][c] === 0) { ok = s === val; break; }
      s += g[r][c];
    }
    if (!ok) return false;
  }
  return true;
}

// ¿se puede particionar en 7 regiones conexas de 6 con dígitos 1-6 únicos,
// respetando las paredes dadas (que deben ser fronteras entre regiones)?
function partitionExists(g) {
  const cells = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (g[r][c] > 0) cells.push(r * N + c);
  const wallSet = new Set(GIVEN_WALLS.map(([[r1,c1],[r2,c2]]) =>
    Math.min(r1*N+c1, r2*N+c2) + "|" + Math.max(r1*N+c1, r2*N+c2)));
  const region = new Array(N * N).fill(-1);
  const found = { yes: false };

  function firstUnassigned() {
    for (const i of cells) if (region[i] === -1) return i;
    return -1;
  }

  function grow(regId, members, digits) {
    if (found.yes) return;
    if (members.length === 6) {
      // paredes dadas: no pueden quedar dentro de una región
      assign(regId + 1);
      return;
    }
    // candidatos: vecinos ortogonales de la región, no asignados, dígito nuevo,
    // sin pared dada de por medio; para evitar duplicados solo se aceptan
    // candidatos con índice > el mínimo de la región cuando members>1 no aplica
    const cand = new Set();
    for (const m of members) {
      const r = Math.floor(m / N), c = m % N;
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const rr = r + dr, cc = c + dc;
        if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
        const j = rr * N + cc;
        if (g[rr][cc] === 0 || region[j] !== -1) continue;
        if (wallSet.has(Math.min(m, j) + "|" + Math.max(m, j))) continue;
        if (digits.has(g[rr][cc])) continue;
        cand.add(j);
      }
    }
    for (const j of cand) {
      region[j] = regId; digits.add(g[Math.floor(j/N)][j%N]); members.push(j);
      grow(regId, members, digits);
      members.pop(); digits.delete(g[Math.floor(j/N)][j%N]); region[j] = -1;
      if (found.yes) return;
    }
  }

  function assign(regId) {
    if (found.yes) return;
    const seed = firstUnassigned();
    if (seed === -1) { found.yes = true; return; }
    region[seed] = regId;
    const d = g[Math.floor(seed / N)][seed % N];
    grow(regId, [seed], new Set([d]));
    region[seed] = -1;
  }

  assign(0);
  return found.yes;
}

// --- verificación de la solución del metadata ---
const gSol = [];
for (let r = 0; r < N; r++) gSol.push([...SOL.slice(r * N, r * N + N)].map(ch => ch === "." ? 0 : +ch));
console.log("clues:", checkClues(gSol), "| partición válida existe:", partitionExists(gSol));

// --- unicidad de la parte numérica (dígitos+huecos) con pistas + partición ---
if (process.argv[2] === "full") {
  const t0 = Date.now();
  let candidates = 0, withPartition = 0;
  const g = Array.from({ length: N }, () => new Array(N).fill(-1));
  const colUsed = Array.from({ length: N }, () => new Set());
  const colEmpty = new Array(N).fill(false);

  function clueCheckRowDone(r) {
    for (const [type, idx, val] of CLUES) {
      if (type === "T") continue;
      if (idx !== r) continue;
      let s = 0, ok = false;
      const range = [...Array(N).keys()];
      const cells = type === "L" ? range.map(c => [idx, c]) : range.map(c => [idx, N - 1 - c]);
      for (const [rr, cc] of cells) {
        if (g[rr][cc] === 0) { ok = s === val; break; }
        s += g[rr][cc];
      }
      if (!ok) return false;
    }
    return true;
  }

  function rec(r) {
    if (r === N) {
      // clue de columna T4
      let s = 0, ok = false;
      for (let rr = 0; rr < N; rr++) { if (g[rr][4] === 0) { ok = s === 13; break; } s += g[rr][4]; }
      if (!ok) return;
      candidates++;
      if (partitionExists(g)) {
        withPartition++;
        if (withPartition <= 3) console.log("  solución posible:", g.map(row => row.map(x => x === 0 ? "." : x).join("")).join(""));
      }
      return;
    }
    // genera permutaciones de la fila: 1..6 + hueco
    const perm = new Array(N).fill(0);
    function fill(c, used, emptyPlaced) {
      if (c === N) {
        if (!emptyPlaced) return;
        for (let i = 0; i < N; i++) g[r][i] = perm[i];
        if (clueCheckRowDone(r)) rec(r + 1);
        for (let i = 0; i < N; i++) g[r][i] = -1;
        return;
      }
      // hueco
      if (!emptyPlaced && !colEmpty[c]) {
        perm[c] = 0; colEmpty[c] = true;
        fill(c + 1, used, true);
        colEmpty[c] = false;
      }
      for (let d = 1; d <= 6; d++) {
        if (used.has(d) || colUsed[c].has(d)) continue;
        perm[c] = d; used.add(d); colUsed[c].add(d);
        fill(c + 1, used, emptyPlaced);
        used.delete(d); colUsed[c].delete(d);
      }
    }
    fill(0, new Set(), false);
  }
  rec(0);
  console.log("cuadrículas numéricas que pasan pistas:", candidates,
    "| con partición válida:", withPartition, "|", Date.now() - t0 + "ms");
}
