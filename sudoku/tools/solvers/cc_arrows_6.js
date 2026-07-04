// Chaos Construction 6x6 con flechas (ejemplo de Phistomefel, LMD 0003D0)
// Dígitos 1-6 en filas y columnas (SIN cajas); 6 regiones conexas de 6 con
// 1-6 cada una (a deducir). Flecha en casilla con dígito d: exactamente d
// casillas seguidas en esa dirección (incluida la de la flecha) son de la
// misma región; la siguiente (si existe) es de otra.
// Dados: r3c2=1, r4c3=6. Flechas (0-based, [r,c,dr,dc]):
const N = 6;
const arrows = [
  [0,1,0,1],[0,3,1,0],[1,1,0,1],[1,4,0,-1],[1,5,-1,0],
  [2,0,0,1],[2,1,1,0],[3,1,0,-1],[3,4,-1,0],[3,5,-1,0],
  [4,2,-1,0],[4,3,-1,0],[4,5,0,-1],[5,0,0,1],[5,2,0,-1],[5,3,0,-1],[5,4,0,-1]
];
const givens = { "2,1": 1, "3,2": 6 };
const expected = "345126634512213654526431451263162345"; // impresa en LMD

// Fase 1: con los dígitos de la solución publicada, buscar TODAS las
// particiones válidas (verifica el ejemplo y da las regiones exactas).
// Fase 2: búsqueda completa dígitos+partición para confirmar unicidad.

function solve(digitsFixed, cap, capNodes) {
  const sols = [];
  let nodes = 0;
  const g = new Array(N * N).fill(0);
  if (digitsFixed) for (let i = 0; i < N * N; i++) g[i] = +digitsFixed[i];
  else for (const k in givens) { const [r, c] = k.split(",").map(Number); g[r*N+c] = givens[k]; }

  const reg = new Array(N * N).fill(-1);

  function arrowCheckFull(gg, rr) {
    for (const [r, c, dr, dc] of arrows) {
      const d = gg[r * N + c];
      const base = rr[r * N + c];
      for (let k = 1; k < d; k++) {
        const r2 = r + dr * k, c2 = c + dc * k;
        if (r2 < 0 || r2 >= N || c2 < 0 || c2 >= N) return false;
        if (rr[r2 * N + c2] !== base) return false;
      }
      const r3 = r + dr * d, c3 = c + dc * d;
      if (r3 >= 0 && r3 < N && c3 >= 0 && c3 < N && rr[r3 * N + c3] === base) return false;
    }
    return true;
  }

  function latinOk(i, v) {
    const r = Math.floor(i / N), c = i % N;
    for (let k = 0; k < N; k++) if (g[r*N+k] === v || g[k*N+c] === v) return false;
    return true;
  }

  // enumerar subconjuntos conexos de 6 que contengan seed, sobre celdas libres
  function growRegions(regId) {
    if (nodes++ > capNodes) return;
    if (sols.length >= cap) return;
    let seed = -1;
    for (let i = 0; i < N * N; i++) if (reg[i] === -1) { seed = i; break; }
    if (seed === -1) {
      if (arrowCheckFull(g, reg)) sols.push({ g: g.slice(), reg: reg.slice() });
      return;
    }
    // DFS de subconjuntos conexos tamaño 6 con dígitos distintos
    const chosen = [seed];
    const used = new Set([g[seed]]);
    reg[seed] = regId;
    (function extend() {
      if (sols.length >= cap || nodes > capNodes) return;
      if (chosen.length === 6) { growRegions(regId + 1); return; }
      // frontera: vecinos libres de las elegidas, con índice > seed para
      // evitar duplicados solo parcialmente (permitimos < seed si libre)
      const cand = new Set();
      for (const i of chosen) {
        const r = Math.floor(i / N), c = i % N;
        for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const rr = r + dr, cc = c + dc;
          if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
          const j = rr * N + cc;
          if (reg[j] === -1 && !cand.has(j) && !used.has(g[j])) cand.add(j);
        }
      }
      for (const j of [...cand].sort((a, b) => a - b)) {
        // evitar enumerar el mismo conjunto 2 veces: solo agregar j si es
        // mayor que el último agregado O conecta nueva frontera (heurística
        // clásica: exigir j > último elemento agregado no basta para
        // conjuntos conexos; usamos canon por conjunto con set global)
        chosen.push(j); used.add(g[j]); reg[j] = regId;
        extend();
        chosen.pop(); used.delete(g[j]); reg[j] = -1;
      }
    })();
    reg[seed] = -1;
  }

  if (digitsFixed) { growRegions(0); return { sols, nodes }; }

  // búsqueda completa: dígitos por backtracking; al completar, particiones
  (function dfs(i) {
    if (sols.length >= cap || nodes > capNodes) return;
    while (i < N * N && g[i]) i++;
    if (i === N * N) { growRegions(0); return; }
    for (let v = 1; v <= N; v++) if (latinOk(i, v)) { g[i] = v; dfs(i + 1); g[i] = 0; }
  })(0);
  return { sols, nodes };
}

// dedupe de particiones (el generador puede repetir conjuntos)
function canon(reg) {
  const map = {}; let next = 0; let out = "";
  for (const x of reg) { if (!(x in map)) map[x] = next++; out += map[x]; }
  return out;
}

console.time("fase1");
const f1 = solve(expected, 50, 5e7);
const parts = new Set(f1.sols.map(s => canon(s.reg)));
console.timeEnd("fase1");
console.log("particiones válidas con los dígitos publicados:", parts.size, "(nodos:", f1.nodes + ")");
if (parts.size) {
  const reg = f1.sols[0].reg;
  for (let r = 0; r < N; r++) console.log([...Array(N)].map((_, c) => canon(f1.sols[0].reg)[r*N+c]).join(""));
}

console.time("fase2");
const f2 = solve(null, 50, 2e8);
const combos = new Set(f2.sols.map(s => s.g.join("") + "|" + canon(s.reg)));
const digitSols = new Set(f2.sols.map(s => s.g.join("")));
console.timeEnd("fase2");
console.log("búsqueda completa: combos dígitos+partición:", combos.size,
  "| soluciones de dígitos distintas:", digitSols.size, "(nodos:", f2.nodes + ")");
if (digitSols.size) console.log("dígitos:", [...digitSols][0], "| ¿coincide con publicada?:", digitSols.has(expected));
