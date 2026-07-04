// Yin-Yang Sudoku 6x6 (ejemplo de Phistomefel, LMD 0004X6)
// Sombrear gris/blanco: cada color conexo, sin 2x2 monocolor. Pistas fuera:
// suma de dígitos en casillas grises de esa fila/columna. Sudoku 6x6 cajas
// 2x3, SIN dígitos dados.
const N = 6;
const rowSum = { 0: 8, 1: 15, 3: 12, 4: 7 };   // r1=8, r2=15, r4=12, r5=7
const colSum = { 1: 6, 2: 13, 3: 11, 5: 11 };  // c2=6, c3=13, c4=11, c6=11

function connected(sh, color) {
  const cells = [];
  for (let i = 0; i < N * N; i++) if (sh[i] === color) cells.push(i);
  if (!cells.length) return false;
  const seen = new Set([cells[0]]), st = [cells[0]];
  while (st.length) {
    const i = st.pop(), r = Math.floor(i / N), c = i % N;
    for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const rr = r + dr, cc = c + dc;
      if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
      const j = rr * N + cc;
      if (sh[j] === color && !seen.has(j)) { seen.add(j); st.push(j); }
    }
  }
  return seen.size === cells.length;
}

const shadings = [];
(function enumShade(i, sh) {
  if (i === N * N) {
    if (connected(sh, 0) && connected(sh, 1)) shadings.push(sh.slice());
    return;
  }
  const r = Math.floor(i / N), c = i % N;
  for (const v of [0, 1]) {
    if (r > 0 && c > 0) {
      const a = sh[(r-1)*N+c-1], b = sh[(r-1)*N+c], d = sh[r*N+c-1];
      if (a === b && b === d && d === v) continue;
    }
    // poda: una fila gris completa sumaría 21 > pista chica, etc. — poda
    // fina la hacen las sumas al colocar dígitos; aquí solo grises por fila
    sh[i] = v;
    enumShade(i + 1, sh);
  }
  sh[i] = -1;
})(0, new Array(N * N).fill(-1));
console.log("sombreados yin-yang 6x6:", shadings.length);

// mínimo/máximo de suma de k dígitos distintos de 1..6
function minS(k) { return k * (k + 1) / 2; }
function maxS(k) { return k * (13 - k) / 2; }

let candidates = shadings.filter(sh => {
  for (const r in rowSum) {
    let k = 0;
    for (let c = 0; c < N; c++) if (sh[r * N + c] === 1) k++;
    if (minS(k) > rowSum[r] || maxS(k) < rowSum[r]) return false;
  }
  for (const c in colSum) {
    let k = 0;
    for (let r = 0; r < N; r++) if (sh[r * N + +c] === 1) k++;
    if (minS(k) > colSum[c] || maxS(k) < colSum[c]) return false;
  }
  return true;
});
console.log("sombreados compatibles con cotas de suma:", candidates.length);

function solveDigits(sh, cap) {
  const sols = [];
  const g = new Array(N * N).fill(0);
  function ok(i, v) {
    const r = Math.floor(i / N), c = i % N;
    for (let k = 0; k < N; k++) {
      if (g[r*N+k] === v) return false;
      if (g[k*N+c] === v) return false;
    }
    const br = Math.floor(r/2)*2, bc = Math.floor(c/3)*3;
    for (let rr = br; rr < br+2; rr++) for (let cc = bc; cc < bc+3; cc++)
      if (g[rr*N+cc] === v) return false;
    return true;
  }
  function sumsOk(rowDone, colDoneAll) {
    for (const r in rowSum) {
      if (+r > rowDone) continue;
      let s = 0;
      for (let c = 0; c < N; c++) if (sh[+r*N+c] === 1) s += g[+r*N+c];
      if (s !== rowSum[r]) return false;
    }
    if (colDoneAll) for (const c in colSum) {
      let s = 0;
      for (let r = 0; r < N; r++) if (sh[r*N+ +c] === 1) s += g[r*N+ +c];
      if (s !== colSum[c]) return false;
    }
    return true;
  }
  (function dfs(i) {
    if (sols.length >= cap) return;
    if (i === N * N) { if (sumsOk(5, true)) sols.push(g.slice()); return; }
    const r = Math.floor(i / N);
    if (i % N === 0 && r > 0 && !sumsOk(r - 1, false)) return;
    for (let v = 1; v <= N; v++) if (ok(i, v)) { g[i] = v; dfs(i + 1); g[i] = 0; }
  })(0);
  return sols;
}

let found = [];
for (const sh of candidates) {
  const sols = solveDigits(sh, 3);
  if (sols.length) found.push({ sh, n: sols.length, s: sols[0] });
  if (found.length > 3) break;
}
console.log("sombreados con al menos una asignación de dígitos:", found.length);
for (const f of found.slice(0, 3)) {
  console.log("— sombreado (dígitos posibles:", f.n + "):");
  for (let r = 0; r < N; r++) {
    let line = "";
    for (let c = 0; c < N; c++) line += (f.s ? f.s[r*N+c] : "?") + (f.sh[r*N+c] ? "■" : "□") + " ";
    console.log(line);
  }
}
