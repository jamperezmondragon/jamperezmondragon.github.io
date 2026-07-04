// Verificación de 6c7gb33j79 «4 x 4 x 4» (Marty Sears)
// Cuatro sudokus 4×4; líneas de colores indexan WXYZ = grid, caja, celda, dígito.
'use strict';

const SOL = "4213.24133142.13242431.41321324.3241.........4132.13243241.42131324.31422413.2431";
const g = [];
for (let r = 0; r < 9; r++) g.push([...SOL.slice(r * 9, r * 9 + 9)].map(ch => ch === "." ? 0 : +ch));

// las 8 líneas como listas de celdas [r,c] en el orden de los waypoints
const LINES = [
  [[3,0],[2,0],[1,0],[0,0]],
  [[3,2],[2,2],[1,2],[0,2]],
  [[0,5],[0,6],[0,7],[0,8]],
  [[2,5],[2,6],[2,7],[2,8]],
  [[6,0],[6,1],[6,2],[6,3]],
  [[8,0],[8,1],[8,2],[8,3]],
  [[5,6],[6,6],[7,6],[8,6]],
  [[8,8],[7,8],[6,8],[5,8]]
];
const ON_LINE = new Set(LINES.flat().map(([r, c]) => r * 9 + c));

// sudoku 4×4 válido en cada grid
const ORIG = [[0,0],[0,5],[5,0],[5,5]];
for (const [gr, gc] of ORIG) {
  const rows = [], cols = [], boxes = [];
  for (let i = 0; i < 4; i++) { rows.push(new Set()); cols.push(new Set()); boxes.push(new Set()); }
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
    const d = g[gr + r][gc + c];
    const b = Math.floor(r / 2) * 2 + Math.floor(c / 2);
    if (d < 1 || d > 4 || rows[r].has(d) || cols[c].has(d) || boxes[b].has(d)) {
      console.log("SUDOKU 4x4 INVÁLIDO en grid", gr, gc); process.exit(1);
    }
    rows[r].add(d); cols[c].add(d); boxes[b].add(d);
  }
}
console.log("los 4 sudokus 4×4 son válidos ✓");

// celda global a partir de WXYZ
function target(W, X, Y) {
  const [gr, gc] = ORIG[W - 1];
  const br = Math.floor((X - 1) / 2) * 2, bc = ((X - 1) % 2) * 2;
  const cr = Math.floor((Y - 1) / 2), cc = (Y - 1) % 2;
  return [gr + br + cr, gc + bc + cc];
}

// lecturas válidas por línea (en alguna dirección la indexación se cumple)
const options = LINES.map((cells, i) => {
  const opts = [];
  for (const dir of [cells, [...cells].reverse()]) {
    const [W, X, Y, Z] = dir.map(([r, c]) => g[r][c]);
    const [tr, tc] = target(W, X, Y);
    if (g[tr][tc] === Z && ON_LINE.has(tr * 9 + tc)) opts.push({ t: tr * 9 + tc, WXYZ: [W, X, Y, Z] });
  }
  return opts;
});

options.forEach((o, i) => console.log("línea", i, "lecturas válidas:", JSON.stringify(o)));

// ¿existe elección con 8 celdas indexadas distintas?
let count = 0;
function pick(i, used) {
  if (i === 8) { count++; return; }
  for (const o of options[i]) {
    if (used.has(o.t)) continue;
    used.add(o.t); pick(i + 1, used); used.delete(o.t);
  }
}
pick(0, new Set());
console.log("asignaciones completas válidas:", count, count > 0 ? "— la solución del metadata SATISFACE el puzzle ✓" : "— ¡FALLA!");
