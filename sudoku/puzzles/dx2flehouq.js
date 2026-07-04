// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "dx2flehouq",
 "title": "Sliding Doors",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/dx2flehouq",
 "size": 7,
 "boxes": null,
 "regions": null,
 "rules": "Dibuja siete regiones de 6 casillas en el tablero de 7×7 (algunas fronteras ya están dadas; cada región es un grupo de casillas conectadas por sus lados) y coloca los dígitos del 1 al 6 en cada fila, columna y región.\n\nLas casillas que no queden en ninguna región se quedan VACÍAS: hay exactamente una vacía por fila y por columna, y al resolver debes dejarlas así, sin nada.\n\nCada pista fuera del tablero da la suma de las casillas de esa fila o columna, desde el lado de la pista hasta topar con la casilla vacía.\n\nUsa la pluma para dibujar las fronteras de las regiones.",
 "hints": [
  "Cada fila y cada columna tienen exactamente UNA casilla vacía. Ubícalas primero: son como siete reinas mansas que no se estorban entre sí.",
  "Pista chica = el hueco está cerca del borde; pista grande = está lejos. La fila que suma 6 por la izquierda casi se resuelve sola: con dígitos distintos, ¿cuántas casillas necesitas para llegar justo a 6?",
  "Las paredes dadas separan regiones distintas: siembra una región de cada lado y hazlas crecer con la pluma, cuidando que ninguna casilla con dígito quede huérfana (todas deben caber en regiones de 6)."
 ],
 "_rulesOrig": "Draw seven 6-cell regions in the grid (some region boundaries are given), and place the digits 1-6 in every row, column, and region. (Regions consist of 6 orthogonally connected cells). Cells not in regions should be left empty. Each clue outside the grid gives the sum of the cells in the row or column from the direction of the clue until reaching an empty cell.",
 "givens": [],
 "solution": "432156.6.54123.21643521453.61632.54356.24154.3612",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "angle": 0,
    "center": [
     4.5,
     7.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 9,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   },
   {
    "angle": 0,
    "center": [
     1.5,
     -0.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 6,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   },
   {
    "angle": 0,
    "center": [
     3.5,
     -0.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 15,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   },
   {
    "angle": 0,
    "center": [
     5.5,
     -0.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 14,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   },
   {
    "angle": 0,
    "center": [
     6.5,
     7.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 12,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   },
   {
    "angle": 0,
    "center": [
     -0.5,
     4.5
    ],
    "width": 0,
    "height": 1.128,
    "text": 13,
    "fontSize": 39,
    "color": "#000000",
    "rounded": true
   }
  ],
  "overlays": [],
  "lines": [
   {
    "target": "overlay",
    "wayPoints": [
     [
      6,
      1
     ],
     [
      6,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 4.48
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      0,
      3
     ],
     [
      1,
      3
     ]
    ],
    "color": "#000000",
    "thickness": 4.48
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      2,
      6
     ],
     [
      2,
      7
     ]
    ],
    "color": "#000000",
    "thickness": 4.48
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      1,
      5
     ],
     [
      2,
      5
     ]
    ],
    "color": "#000000",
    "thickness": 4.48
   }
  ],
  "arrows": [],
  "cages": []
 }
};
