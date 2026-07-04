// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "u1gswfvw2x",
 "title": "Intro: Sudoku killer",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/u1gswfvw2x",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nJAULAS (killer): los dígitos de una jaula punteada suman el numerito de su esquina, y no se repiten dentro de la jaula.\n\nDIAGONAL (little killer): los dígitos sobre la diagonal que señala la flechita suman el número junto a la flecha.",
 "hints": [
  "En un 4×4 solo hay dígitos 1-4. ¿Qué parejas distintas suman 5? ¿Y qué tríos suman 8?",
  "La jaula de 4 con dos casillas solo puede ser {1,3}: el sudoku decide el orden."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nKILLER\n- Digits in cages sum to the number in the corner of the cage.\n- Digits cannot repeat within a cage.\n\nLITTLE KILLER\n- Digits along the diagonal indicated by an arrow sum to the number by the arrow.",
 "givens": [],
 "solution": "3214142323414132",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "stroke": "none",
    "center": [
     0.5,
     4.5
    ],
    "width": 1,
    "height": 1,
    "text": 8,
    "fontSize": 32,
    "color": "#000",
    "rounded": true
   }
  ],
  "lines": [],
  "arrows": [
   {
    "wayPoints": [
     [
      0.734,
      4.266
     ],
     [
      0.932,
      4.068
     ]
    ],
    "headLength": 0.18,
    "color": "#000000",
    "thickness": 3
   }
  ],
  "cages": [
   {
    "unique": true,
    "cells": [
     [
      0,
      0
     ],
     [
      0,
      1
     ]
    ],
    "value": 5
   },
   {
    "unique": true,
    "cells": [
     [
      1,
      0
     ],
     [
      1,
      1
     ],
     [
      2,
      1
     ]
    ],
    "value": 8
   },
   {
    "unique": true,
    "cells": [
     [
      1,
      3
     ],
     [
      2,
      3
     ]
    ],
    "value": 4
   }
  ]
 }
};
