// Yin Yang Kropki 6x6 (ejemplo de Phistomefel, LMD 0009P1)
// Sombrear blanco/negro: ambos colores conexos, sin 2x2 monocolor.
// Punto gris = las dos casillas tienen el mismo color; si son negras, sus
// dígitos van 1:2; si son blancas, consecutivos. TODOS los puntos posibles
// están dados (negativo: par vecino del mismo color sin punto NO cumple la
// relación de su color). Sudoku 6x6 con cajas 2x3. Dado: r4c6=4.
const N = 6;
const dots = [ // [r1,c1,r2,c2] 0-based, del estado penpa
  [0,0,1,0],[0,3,1,3],[0,5,1,5],[2,0,3,0],[4,0,5,0],[4,3,5,3], // verticales
  [1,2,1,3],[3,1,3,2],[4,2,4,3],[5,0,5,1]                      // horizontales
];
const dotSet = new Set(dots.map(d => d.join(",")));
const given = { "3,5": 4 };

function pairs() {
  const out = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
    if (r + 1 < N) out.push([r, c, r + 1, c]);
    if (c + 1 < N) out.push([r, c, r, c + 1]);
  }
  return out;
}
const allPairs = pairs();

// conexidad de un color
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

// enumerar sombreados yin-yang válidos donde los puntos unen mismo color
const shadings = [];
(function enumShade(i, sh) {
  if (i === N * N) {
    if (connected(sh, 0) && connected(sh, 1)) shadings.push(sh.slice());
    return;
  }
  const r = Math.floor(i / N), c = i % N;
  for (const v of [0, 1]) {
    sh[i] = v;
    // sin 2x2
    if (r > 0 && c > 0) {
      const a = sh[(r-1)*N+c-1], b = sh[(r-1)*N+c], d = sh[r*N+c-1];
      if (a === b && b === d && d === v) { continue; }
    }
    // puntos: mismo color (chequeo si el otro extremo ya está puesto)
    let ok = true;
    for (const [r1,c1,r2,c2] of dots) {
      const i1 = r1*N+c1, i2 = r2*N+c2;
      if ((i1 === i && i2 < i) && sh[i2] !== v) ok = false;
      if ((i2 === i && i1 < i) && sh[i1] !== v) ok = false;
    }
    if (!ok) continue;
    enumShade(i + 1, sh);
  }
  sh[i] = -1;
})(0, new Array(N * N).fill(-1));
console.log("sombreados yin-yang compatibles con puntos:", shadings.length);

// para cada sombreado, resolver dígitos
function solveDigits(sh) {
  const sols = [];
  const g = new Array(N * N).fill(0);
  for (const k in given) { const [r, c] = k.split(",").map(Number); g[r*N+c] = given[k]; }
  function rel(a, b, black) { return black ? (a === 2*b || b === 2*a) : Math.abs(a-b) === 1; }
  function ok(i, v) {
    const r = Math.floor(i / N), c = i % N;
    for (let k = 0; k < N; k++) {
      if (g[r*N+k] === v && k !== c) return false;
      if (g[k*N+c] === v && k !== r) return false;
    }
    const br = Math.floor(r/2)*2, bc = Math.floor(c/3)*3;
    for (let rr = br; rr < br+2; rr++) for (let cc = bc; cc < bc+3; cc++)
      if (g[rr*N+cc] === v && rr*N+cc !== i) return false;
    // puntos y negativo con vecinos ya puestos
    for (const [r1,c1,r2,c2] of allPairs) {
      const i1 = r1*N+c1, i2 = r2*N+c2;
      if (i1 !== i && i2 !== i) continue;
      const j = i1 === i ? i2 : i1;
      if (!g[j] && j !== i) continue;
      const a = i1 === i ? v : g[i1], b = i2 === i ? v : g[i2];
      if (!a || !b) continue;
      const same = sh[i1] === sh[i2];
      const has = dotSet.has([r1,c1,r2,c2].join(","));
      if (has) { if (!rel(a, b, sh[i1] === 1)) return false; }
      else if (same) { if (rel(a, b, sh[i1] === 1)) return false; }
    }
    return true;
  }
  (function dfs(i) {
    if (sols.length > 1) return;
    while (i < N * N && g[i]) i++;
    if (i === N * N) { sols.push(g.slice()); return; }
    for (let v = 1; v <= N; v++) if (ok(i, v)) { g[i] = v; dfs(i + 1); g[i] = 0; }
  })(0);
  return sols;
}

let total = [];
for (const sh of shadings) {
  const sols = solveDigits(sh);
  for (const s of sols) total.push({ sh, s });
  if (total.length > 2) break;
}
console.log("soluciones (sombreado+dígitos):", total.length);
if (total.length) {
  const { sh, s } = total[0];
  for (let r = 0; r < N; r++) {
    let line = "";
    for (let c = 0; c < N; c++) line += s[r*N+c] + (sh[r*N+c] ? "■" : "□") + " ";
    console.log(line);
  }
}
