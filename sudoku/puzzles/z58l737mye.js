// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "z58l737mye",
 "title": "Intro: Puntos kropki",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/z58l737mye",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nPUNTOS: un punto blanco entre dos casillas dice que una vale exactamente 1 más que la otra. Un punto negro dice que una vale exactamente el doble de la otra. (No todos los puntos posibles están dados.)",
 "hints": [
  "Con dígitos 1-4, el punto negro solo puede ser 1-2 o 2-4.",
  "Sigue la cadena de puntos blancos: cada uno encadena consecutivos, y la columna te dice por dónde empezar."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nPARTIAL KROPKI\n- A white dot between two cells requires that the value in one cell is exactly 1 greater than the value of the other cell.\n- A black dot between two cells requires that the value in one cell is exactly double the value of the other cell.",
 "givens": [],
 "solution": "4213312423411432",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "stroke": "none",
    "center": [
     3,
     0.5
    ],
    "width": 0.34,
    "height": 0.34,
    "text": "",
    "color": "#fff",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "stroke": "none",
    "center": [
     1.5,
     3
    ],
    "width": 0.34,
    "height": 0.34,
    "text": "",
    "color": "#fff",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "stroke": "none",
    "center": [
     1,
     1.5
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1,
    "text": "",
    "color": "#000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "center": [
     2.5,
     2
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1,
    "text": "",
    "color": "#000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "center": [
     3.5,
     3
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1,
    "text": "",
    "color": "#000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
