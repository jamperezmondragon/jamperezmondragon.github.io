// Yin-Yang Sudoku 6x6 — versión con podas fuertes.
const N = 6;
const rowSum = { 0: 8, 1: 15, 3: 12, 4: 7 };
const colSum = { 1: 6, 2: 13, 3: 11, 5: 11 };
const minS = k => k * (k + 1) / 2, maxS = k => k * (13 - k) / 2;

// cuántas grises puede tener cada fila/columna con pista
const rowK = {}, colK = {};
for (const r in rowSum) rowK[r] = [...Array(7).keys()].filter(k => minS(k) <= rowSum[r] && rowSum[r] <= maxS(k));
for (const c in colSum) colK[c] = [...Array(7).keys()].filter(k => minS(k) <= colSum[c] && colSum[c] <= maxS(k));

// componentes muertos: al completar la fila r, ningún componente de color
// puede quedar sin contacto con la fila r (si no, jamás se conecta al resto
// del color que siga apareciendo)... salvo que sea el ÚNICO componente de su
// color y el color ya no aparezca después — eso se valida al final.
function deadComponent(sh, doneRow) {
  for (const color of [0, 1]) {
    const seen = new Set();
    for (let i = 0; i <= doneRow * N + N - 1; i++) {
      if (sh[i] !== color || seen.has(i)) continue;
      const comp = [i]; seen.add(i);
      let touchesFrontier = false;
      for (let k = 0; k < comp.length; k++) {
        const j = comp[k], r = Math.floor(j / N), c = j % N;
        if (r === doneRow) touchesFrontier = true;
        for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const rr = r + dr, cc = c + dc;
          if (rr < 0 || rr > doneRow || cc < 0 || cc >= N) continue;
          const jj = rr * N + cc;
          if (sh[jj] === color && !seen.has(jj)) { seen.add(jj); comp.push(jj); }
        }
      }
      if (!touchesFrontier) {
        // componente enterrado: solo válido si es el único de su color
        // y no habrá más de ese color — lo detectamos dejando pasar SOLO
        // si es el primer componente y toda fila posterior evita el color…
        // demasiado raro en 6x6 con dos colores: lo tratamos como poda dura
        // y verificamos conexidad global al final de todos modos.
        return true;
      }
    }
  }
  return false;
}

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
const sh = new Array(N * N).fill(-1);
(function enumShade(i) {
  if (i === N * N) {
    if (!deadCheckFinalFails() && connected(sh, 0) && connected(sh, 1)) shadings.push(sh.slice());
    return;
  }
  const r = Math.floor(i / N), c = i % N;
  for (const v of [0, 1]) {
    sh[i] = v;
    if (r > 0 && c > 0) {
      const a = sh[(r-1)*N+c-1], b = sh[(r-1)*N+c], d = sh[r*N+c-1];
      if (a === b && b === d && d === v) { sh[i] = -1; continue; }
    }
    if (c === N - 1) {
      // fin de fila: conteo de grises si la fila tiene pista
      if (rowK[r]) {
        let k = 0;
        for (let cc = 0; cc < N; cc++) if (sh[r*N+cc] === 1) k++;
        if (!rowK[r].includes(k)) { sh[i] = -1; continue; }
      }
      // cotas de columnas: grises hasta ahora <= max permitido, y
      // grises + filas restantes >= min permitido
      let bad = false;
      for (const ccKey in colK) {
        const cc = +ccKey;
        let k = 0;
        for (let rr = 0; rr <= r; rr++) if (sh[rr*N+cc] === 1) k++;
        const rest = N - 1 - r;
        const ks = colK[ccKey];
        if (k > Math.max(...ks) || k + rest < Math.min(...ks)) { bad = true; break; }
      }
      if (bad) { sh[i] = -1; continue; }
      if (r >= 1 && r < N - 1 && deadComponent(sh, r)) { sh[i] = -1; continue; }
    }
    enumShade(i + 1);
  }
  sh[i] = -1;
})(0);
function deadCheckFinalFails() { return false; }
console.log("sombreados candidatos:", shadings.length);

function solveDigits(shx, cap) {
  const sols = [];
  const g = new Array(N * N).fill(0);
  function ok(i, v) {
    const r = Math.floor(i / N), c = i % N;
    for (let k = 0; k < N; k++) { if (g[r*N+k] === v || g[k*N+c] === v) return false; }
    const br = Math.floor(r/2)*2, bc = Math.floor(c/3)*3;
    for (let rr = br; rr < br+2; rr++) for (let cc = bc; cc < bc+3; cc++)
      if (g[rr*N+cc] === v) return false;
    return true;
  }
  (function dfs(i) {
    if (sols.length >= cap) return;
    if (i === N * N) {
      for (const c in colSum) {
        let s = 0;
        for (let r = 0; r < N; r++) if (shx[r*N+ +c] === 1) s += g[r*N+ +c];
        if (s !== colSum[c]) return;
      }
      sols.push(g.slice()); return;
    }
    const r = Math.floor(i / N);
    if (i % N === 0 && r > 0 && rowSum[r-1] !== undefined) {
      let s = 0;
      for (let c = 0; c < N; c++) if (shx[(r-1)*N+c] === 1) s += g[(r-1)*N+c];
      if (s !== rowSum[r-1]) return;
    }
    for (let v = 1; v <= N; v++) if (ok(i, v)) { g[i] = v; dfs(i + 1); g[i] = 0; }
  })(0);
  return sols;
}

let totalSols = 0, best = null, shWins = 0;
for (const s of shadings) {
  const sols = solveDigits(s, 5);
  if (sols.length) { shWins++; totalSols += sols.length; if (!best) best = { sh: s, s: sols[0], n: sols.length }; }
  if (totalSols > 5) break;
}
console.log("sombreados con dígitos válidos:", shWins, "| soluciones totales (cap 5):", totalSols);
if (best) {
  for (let r = 0; r < N; r++) {
    let line = "";
    for (let c = 0; c < N; c++) line += best.s[r*N+c] + (best.sh[r*N+c] ? "■" : "□") + " ";
    console.log(line);
  }
}
