// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "urooueeutg",
 "title": "Modular Zigzag",
 "author": "Kaktuslav",
 "urlOriginal": "https://sudokupad.app/urooueeutg",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Los dígitos no se repiten en la diagonal marcada.\n\nCada cuadrado de 2×2 del tablero contiene los tres residuos módulo 3: al menos un dígito de cada familia {1,4,7}, {2,5,8} y {3,6,9}.\n\nDibuja un camino (con la pluma) que empiece en la esquina superior izquierda y termine en la esquina inferior derecha, visitando cada caja de 3×3 al menos una vez. En cada paso, el camino solo puede moverse al este (→) o al suroeste (↙).\n\nTres dígitos seguidos del camino tienen tres residuos distintos módulo 3. Los bordes de caja parten el camino en segmentos; cada segmento es un renban: enteros consecutivos, sin repetir, en cualquier orden.\n\nEl sitio revisa solo los dígitos; el camino es tu herramienta.",
 "hints": [
  "Olvida el camino un rato: si cada 2×2 tiene los tres residuos módulo 3, ¿qué patrón global siguen las familias {1,4,7}, {2,5,8}, {3,6,9}?",
  "Pinta el tablero con 3 colores según el residuo. Salen bandas diagonales: míralas contra las filas y la antidiagonal.",
  "El camino cambia de familia en cada paso y cada 3 pasos las recorre todas. Con las bandas pintadas, casi ninguna ruta este/suroeste sobrevive."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Digits cannot repeat along the marked diagonal. Every 2×2 square of cells must contain all three possible remainders modulo 3 (i.e. at least one digit from each of the sets {1,4,7}, {2,5,8}, and {3,6,9}).\nDraw a path starting in the top-left corner cell and finishing in the bottom-right corner cell, visiting every 3×3 box at least once. In a single step, the path may move only east (→) or southwest (↙).\nAny three consecutive digits along the path must have three different remainders modulo 3. Box borders divide the path into segments; each segment is a renban, i.e. it must contain consecutive, non-repeating integers in any order.",
 "givens": [
  [
   2,
   2,
   2
  ],
  [
   6,
   6,
   5
  ]
 ],
 "solution": "564897231789123456312645978231564897456789123978312645897231564123456789645978312",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      8.99,
      0.01
     ],
     [
      0.01,
      8.99
     ]
    ],
    "color": "#34bbe6ff",
    "thickness": 1.28
   }
  ],
  "arrows": [],
  "cages": [
   {
    "cells": [
     [
      8,
      0
     ],
     [
      7,
      1
     ],
     [
      6,
      2
     ],
     [
      5,
      3
     ],
     [
      4,
      4
     ],
     [
      3,
      5
     ],
     [
      2,
      6
     ],
     [
      1,
      7
     ],
     [
      0,
      8
     ]
    ],
    "unique": true,
    "hidden": true
   }
  ]
 }
};
