// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "3903fc1xy9",
 "title": "Intro: Flechas",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/3903fc1xy9",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nFLECHAS: los dígitos sobre la línea de una flecha suman el valor de su círculo. La píldora alargada representa un número de DOS cifras, leído de izquierda a derecha.",
 "hints": [
  "La píldora de dos casillas es un número de dos cifras… y la flecha que sale de ella suma ese número. Con dígitos 1-4, ¿qué tan grande puede ser esa suma?",
  "Una flecha de dos casillas suma a lo más 4+3=7: el círculo del que sale no puede ser chico."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nARROWS\n- The digits on the line part of an arrow sum to the value indicated on its circle / obround.\n- The obround represents a two digit number, read from left to right.",
 "givens": [],
 "solution": "1243342143122134",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "stroke": "none",
    "center": [
     0.5,
     1
    ],
    "width": 1.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#555"
   },
   {
    "stroke": "none",
    "center": [
     3.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#555"
   },
   {
    "stroke": "none",
    "center": [
     2.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#555"
   }
  ],
  "lines": [],
  "arrows": [
   {
    "wayPoints": [
     [
      0.5,
      1.899
     ],
     [
      0.5,
      2.5
     ],
     [
      2.5,
      0.5
     ]
    ],
    "headLength": 0.3,
    "color": "#aaa",
    "thickness": 3
   },
   {
    "wayPoints": [
     [
      3.218,
      2.782
     ],
     [
      2.5,
      3.5
     ],
     [
      1.5,
      3.5
     ]
    ],
    "headLength": 0.3,
    "color": "#aaa",
    "thickness": 3
   },
   {
    "wayPoints": [
     [
      2.782,
      2.218
     ],
     [
      3.5,
      1.5
     ]
    ],
    "headLength": 0.3,
    "color": "#aaa",
    "thickness": 3
   }
  ],
  "cages": []
 }
};
