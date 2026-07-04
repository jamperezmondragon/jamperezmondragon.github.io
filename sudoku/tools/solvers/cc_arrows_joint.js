// CC flechas 6x6 — solver CONJUNTO dígitos+regiones, celda por celda.
// Al llegar a la celda i: elegir dígito (latin) y región (unirse a región
// abierta vecina o abrir nueva), podando flechas en cuanto sus casillas
// implicadas están decididas.
const N = 6;
const arrows = [
  [0,1,0,1],[0,3,1,0],[1,1,0,1],[1,4,0,-1],[1,5,-1,0],
  [2,0,0,1],[2,1,1,0],[3,1,0,-1],[3,4,-1,0],[3,5,-1,0],
  [4,2,-1,0],[4,3,-1,0],[4,5,0,-1],[5,0,0,1],[5,2,0,-1],[5,3,0,-1],[5,4,0,-1]
];
const givens = { 13: 1, 20: 6 };   // r3c2=1 (idx 2*6+1=13), r4c3=6 (3*6+2=20)
const expected = "345126634512213654526431451263162345";
const arrowAt = {};
for (const [r, c, dr, dc] of arrows) arrowAt[r * N + c] = [dr, dc];

const g = new Array(N * N).fill(0);
const reg = new Array(N * N).fill(-1);
const regSize = [], regDigits = [];
let nodes = 0;
const sols = new Set();

// chequeo de flecha para la casilla base cuando todo lo necesario esté
// decidido "hasta la celda k" (las celdas 0..k tienen dígito y región)
function arrowsOk(k) {
  for (const [r, c, dr, dc] of arrows) {
    const b = r * N + c;
    if (b > k) continue;
    const d = g[b];
    // ¿podemos ya refutar? revisa lo decidido
    for (let t = 1; t < d; t++) {
      const rr = r + dr * t, cc = c + dc * t;
      if (rr < 0 || rr >= N || cc < 0 || cc >= N) return false; // d no cabe
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

// región abierta = tiene casillas por completar (frontera con celdas > k)
function regionClosable(id, k) {
  // si la región quedó completa (6) ok; si no, debe tener vecino > k
  if (regSize[id] === 6) return true;
  for (let i = 0; i <= k; i++) {
    if (reg[i] !== id) continue;
    const r = Math.floor(i / N), c = i % N;
    for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const rr = r + dr, cc = c + dc;
      if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
      if (rr * N + cc > k) return true;
    }
  }
  return false;
}

function dfs(i) {
  nodes++;
  if (sols.size > 1) return;
  if (i === N * N) {
    if (regSize.every(s => s === 6)) sols.add(g.join(""));
    return;
  }
  const r = Math.floor(i / N), c = i % N;
  const digs = givens[i] ? [givens[i]] : [1, 2, 3, 4, 5, 6];
  for (const v of digs) {
    let ok = true;
    for (let kk = 0; kk < N; kk++) {
      if (g[r * N + kk] === v && kk !== c) { ok = false; break; }
      if (g[kk * N + c] === v && kk !== r) { ok = false; break; }
    }
    if (!ok) continue;
    g[i] = v;
    // opciones de región: unirse a región de vecino izquierdo/arriba, o nueva
    const opts = new Set();
    if (c > 0 && reg[i - 1] >= 0 && regSize[reg[i - 1]] < 6 && !regDigits[reg[i - 1]].has(v)) opts.add(reg[i - 1]);
    if (r > 0 && reg[i - N] >= 0 && regSize[reg[i - N]] < 6 && !regDigits[reg[i - N]].has(v)) opts.add(reg[i - N]);
    opts.add(-2); // nueva región
    for (const o of opts) {
      let id;
      if (o === -2) { id = regSize.length; regSize.push(0); regDigits.push(new Set()); }
      else id = o;
      reg[i] = id; regSize[id]++; regDigits[id].add(v);
      // podas: flechas + regiones sin salida + máximo 6 regiones
      let good = regSize.length <= 6 || regSize.filter(s => s > 0).length <= 6;
      if (good && regSize.length > 6) good = false;
      if (good) good = arrowsOk(i);
      if (good && c === N - 1) {
        // al cerrar fila: toda región debe seguir abierta o completa
        for (let id2 = 0; id2 < regSize.length && good; id2++) {
          if (regSize[id2] > 0 && !regionClosable(id2, i)) good = false;
        }
      }
      if (good) dfs(i + 1);
      reg[i] = -1; regSize[id]--; regDigits[id].delete(v);
      if (o === -2) { regSize.pop(); regDigits.pop(); }
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
