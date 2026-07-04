// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "adventure_566-local-negativity",
 "title": "Local Negativity",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/adventure/566-local-negativity",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal: los dígitos del 1 al 6 exactamente una vez en cada fila, columna y caja de 2×3.\n\nNiebla: algunas casillas están cubiertas y no ves su contenido. La niebla se disipa alrededor de cada dígito correcto. Avanza con lógica, no adivinando.\n\nPuntos kropki: negro = un dígito es el doble del otro; blanco = consecutivos. No se dan todos los puntos.\n\nJaula anti-kropki: dentro de la jaula punteada, todo par de casillas vecinas que PODRÍA llevar punto kropki, lo lleva. O sea: si dos vecinas de la jaula no tienen punto, no son consecutivas ni están en proporción 1:2. Los dígitos sí pueden repetirse dentro de la jaula.",
 "hints": [
  "Arranca con los puntos negros encadenados: ¿qué cadenas de proporción 1:2 caben con dígitos del 1 al 6?",
  "Solo 1-2-4 o 4-2-1: la casilla de en medio es un 2 seguro.",
  "La jaula funciona al revés: sin punto = ni consecutivos ni doble. Junto a un 2, dentro de la jaula, solo caben 5 y 6."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.\n\nFog: Some cells are hidden by \"fog\" meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct.\n\nKropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.\n\nAnti-Kropki-Cage: Every orthogonally adjacent pair of cells in the dashed cage which could be connected via a kropki dot is connected via a kropki dot. Digits may repeat in a cage.",
 "givens": [],
 "solution": "425631613524561342342156236415154263",
 "fog": {
  "lights": [
   [
    0,
    1
   ]
  ]
 },
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     1,
     1.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     0.5,
     1
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     4,
     5.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": [
   {
    "cells": [
     [
      0,
      0
     ],
     [
      0,
      1
     ],
     [
      0,
      2
     ],
     [
      1,
      0
     ],
     [
      1,
      1
     ],
     [
      1,
      2
     ],
     [
      1,
      3
     ],
     [
      1,
      4
     ],
     [
      2,
      2
     ],
     [
      2,
      3
     ],
     [
      3,
      3
     ],
     [
      4,
      2
     ],
     [
      4,
      3
     ],
     [
      4,
      4
     ]
    ],
    "value": "●○"
   }
  ]
 }
};
