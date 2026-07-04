// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "1ru4mm2uq3",
 "title": "Minesweeper",
 "author": "TalkingFredish & Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/1ru4mm2uq3",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal (dígitos del 1 al 6 en cada fila, columna y caja de 2×3).\n\nBUSCAMINAS: sombrea algunas casillas (las minas) y deja las demás limpias — usa la herramienta de colores. Se muestran dos casillas limpias (a una todavía le falta su dígito). El dígito de CADA casilla limpia cuenta cuántas minas hay entre sus vecinas (hasta 8, contando diagonales).\n\nY el remate: no hay dos cajas de 2×3 con la misma cantidad de minas.\n\n(El sitio revisa solo los dígitos; el sombreado es tu herramienta.)",
 "hints": [
  "Seis cajas con cantidades de minas TODAS distintas, entre 0 y 6: de esos siete valores, exactamente uno se queda fuera.",
  "Una caja con 6 minas sería toda minas; una con 0, toda limpia — y entonces sus seis dígitos contarían minas de las cajas vecinas. Piensa si pueden convivir esas dos.",
  "Pinta minas de un color y limpias de otro, y arranca alrededor del 1 dado: exactamente una mina entre sus ocho vecinas."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply. (ie place the digits 1 to 6, once each, in every row, column and 2x3 box).\n\nMINESWEEPER\n- Shade some cells ('mines') and leave the others unshaded ('cleared'). Two cleared cells are shown (although one of these still needs its digit to be entered).\n- Each digit in a cleared cell indicates how many mines are in the (up to 8) surrounding cells.\n- No two 2x3 boxes have the same number of mines.",
 "givens": [
  [
   3,
   1,
   1
  ]
 ],
 "solution": "521436463152345261612543234615156324",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "angle": 0,
    "center": [
     3,
     3
    ],
    "width": 6,
    "height": 6,
    "backgroundColor": "#c6c6c6ff"
   },
   {
    "angle": 0,
    "center": [
     0.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.05,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.95,
     3
    ],
    "width": 6,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     0.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     1.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     2.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     3.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     4.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     5.1,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     3.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     4.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     5.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     2.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     5.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     4.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     2.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     1.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     1.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.45,
     0.05
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     0.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     1.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     2.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     3.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     4.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     6
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     5
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     2
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     1
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     5.9,
     0
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     5.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     4.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     3.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     2.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.45,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     1.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     0.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     1.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     2.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     4.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     5.55,
     0.95
    ],
    "width": 0.1,
    "height": 0.9,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3.5,
     1.5
    ],
    "width": 1,
    "height": 1,
    "backgroundColor": "#eaeaeaff"
   },
   {
    "angle": 0,
    "center": [
     4.5,
     5.5
    ],
    "width": 1,
    "height": 1,
    "backgroundColor": "#eaeaeaff"
   },
   {
    "angle": 0,
    "center": [
     3,
     3
    ],
    "width": 6.6,
    "height": 6.6,
    "thickness": 19.2,
    "borderColor": "#c6c6c6ff"
   },
   {
    "angle": 0,
    "center": [
     3,
     -0.35
    ],
    "width": 0.1,
    "height": 6.8,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 0,
    "center": [
     -0.35,
     3
    ],
    "width": 6.8,
    "height": 0.1,
    "backgroundColor": "#f0f0f0ff"
   },
   {
    "angle": 45,
    "center": [
     -0.3,
     6.4
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 45,
    "center": [
     6.4,
     -0.3
    ],
    "width": 0.14,
    "height": 0.14,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     6.35,
     3.05
    ],
    "width": 6.7,
    "height": 0.1,
    "backgroundColor": "#a8a8a8ff"
   },
   {
    "angle": 0,
    "center": [
     3,
     3
    ],
    "width": 7,
    "height": 7,
    "thickness": 6.4,
    "borderColor": "#FFFFFF"
   }
  ],
  "overlays": [
   {
    "angle": 0,
    "center": [
     3.05,
     6.35
    ],
    "width": 0.1,
    "height": 6.7,
    "backgroundColor": "#a8a8a8ff"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
