// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "0oajbse81h",
 "title": "Ranked Quads",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/0oajbse81h",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal (cajas de 2×3).\n\nPistas quad: cada dígito escrito en un círculo debe aparecer en las 4 casillas que rodean al círculo (si un dígito aparece dos veces en el círculo, aparece dos veces en esas 4 casillas).\n\nRango total: los 25 cuadrados de 2×2 del tablero forman números de 4 cifras (leyendo de arriba-izquierda a abajo-derecha, como quien lee). Si ordenas los 25 números de menor a mayor, el número del círculo es el RANGO de su cuadrado: rango 1 el más chico, rango 25 el más grande. Los 25 números son todos distintos, así que no hay empates.",
 "hints": [
  "¿Qué decide primero cuál número de 4 cifras es más grande? Su primera cifra: la casilla de arriba a la izquierda de cada cuadrado 2×2. ¿Cuántos cuadrados pueden empezar con 1?",
  "Cada dígito aparece 4 o 5 veces en el subtablero 5×5 de arriba a la izquierda (según lo que haya en la esquina inferior derecha). Con eso repartes los 25 rangos en bloques por primera cifra.",
  "El rango 22 es de los grandes, pero lleva dos 2s adentro: esos 2s van al final de su número, y su primera cifra tiene que ser grandota. Al revés, el rango 5 carga un 5 siendo chiquito: su primera cifra es mínima."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply.\n\nQUAD CLUES: Each digit in a circle must appear in the surrounding 2x2 area. (If a digit appears twice in the circle it must appear twice in the 2x2 area.)\n\nFULL QUAD-RANK: The 25 2x2 areas in the grid each contain a 4-digit number (reading from top left to bottom right.) The number in a circle gives the rank of its surrounding 2x2 area, if all these 4-digit numbers are listed from lowest to highest, with rank 1 being the lowest and rank 25 being the highest. All the 4-digit numbers are different, so there are no tied ranks.",
 "givens": [],
 "solution": "143265625314264153531426316542452631",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     2,
     1
    ],
    "width": 0.48,
    "height": 0.48,
    "thickness": 2.56,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     4,
     2
    ],
    "width": 0.48,
    "height": 0.48,
    "thickness": 2.56,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     2,
     2
    ],
    "width": 0.48,
    "height": 0.48,
    "thickness": 2.56,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     5,
     2
    ],
    "width": 0.48,
    "height": 0.48,
    "thickness": 2.56,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     2,
     1
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#ffffff",
    "text": "22",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     4,
     2
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#ffffff",
    "text": "11",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     2,
     2
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#ffffff",
    "text": "6",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     5,
     2
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#ffffff",
    "text": "5",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      6.1,
      5.7
     ],
     [
      6.1,
      6.1
     ],
     [
      -0.1,
      6.1
     ],
     [
      -0.1,
      -0.1
     ],
     [
      6.1,
      -0.1
     ],
     [
      6.1,
      5.7
     ]
    ],
    "color": "#bee255ff",
    "thickness": 12.16
   },
   {
    "wayPoints": [
     [
      6.2,
      5.8
     ],
     [
      6.2,
      6.2
     ],
     [
      -0.2,
      6.2
     ],
     [
      -0.2,
      -0.2
     ],
     [
      6.2,
      -0.2
     ],
     [
      6.2,
      5.8
     ]
    ],
    "color": "#e6f3abff",
    "thickness": 10.24
   }
  ],
  "arrows": [],
  "cages": []
 }
};
