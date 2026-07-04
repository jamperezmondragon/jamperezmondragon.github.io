// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "g0b07xt4eu",
 "title": "Intro: Líneas renban",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/g0b07xt4eu",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nRENBAN: los dígitos sobre una línea morada forman un conjunto de consecutivos sin repetir, en cualquier orden. Por ejemplo, una línea de 3 puede llevar 3-1-2, pero no 1-2-4.",
 "hints": [
  "Una renban de 4 casillas con dígitos 1-4 es exactamente {1,2,3,4}.",
  "El 2 dado está sobre una línea de 4: esa línea trae los cuatro dígitos, así que fíjate qué le queda a cada fila que cruza."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nRENBAN\n- Digits on a purple Renban line must be a set of consecutive, non-repeating digits (in any order). For example, a length 3 line could have -3-1-2-, but not -1-2-4- or -1-3-1-.",
 "givens": [
  [
   1,
   0,
   2
  ]
 ],
 "solution": "1342243142133124",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      3.5,
      0.5
     ],
     [
      2.5,
      1.5
     ],
     [
      1.5,
      1.5
     ],
     [
      0.5,
      0.5
     ]
    ],
    "color": "#f067f0",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      1.5,
      3.5
     ],
     [
      0.5,
      3.5
     ]
    ],
    "color": "#f067f0",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      3.5,
      3.5
     ],
     [
      2.5,
      3.5
     ],
     [
      3.5,
      2.5
     ]
    ],
    "color": "#f067f0",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      0.5,
      1.5
     ],
     [
      0.5,
      2.5
     ]
    ],
    "color": "#f067f0",
    "thickness": 10
   }
  ],
  "arrows": [],
  "cages": []
 }
};
