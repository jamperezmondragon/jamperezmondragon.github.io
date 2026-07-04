// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "ftar5lqcoq",
 "title": "Peeking Snowman",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/ftar5lqcoq",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal: dígitos del 1 al 6 en cada fila, columna y caja de 2×3.\n\nCírculos de suma (el cuerpo y la cabeza del muñeco de nieve): el contorno de cada círculo grande queda partido en pedazos por los bordes de caja. Dentro de un mismo círculo, todos los pedazos suman lo mismo. (La suma del cuerpo y la de la cabeza no tienen por qué ser iguales.)\n\nBrazos: dos dígitos separados por un brazo son consecutivos.\n\nOjos: uno de los copos de nieve que mira el muñeco está en proporción 1:2 con el dígito de la cabeza (uno es el doble del otro).\n\nEl resto del dibujo es puro adorno.",
 "hints": [
  "El círculo del cuerpo queda partido en pedazos de 1, 2 y 3 casillas… y todos suman lo mismo.",
  "¿Cuál es la MENOR suma posible de tres casillas distintas de una caja? ¿Y la MAYOR de un pedazo de una sola casilla?",
  "1+2+3 = 6 por abajo y 6 por arriba: todos los pedazos suman 6. La casilla solitaria del cuerpo es un 6."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.\n\nREGION SUM CIRCLES - The outlines of the two largest circles are split into segments by box borders. Within each individual circle, the sum of the digits on each segment is the same. The sum of segments on the two circles may or may not be equal.\n\nARMS - Digits separated by an arm are consecutive.\n\nEYES - One of the snowflakes the snowman is looking at has a 1:2 ratio with the digit in the head, meaning one is double the other.\n\nOther visual details are purely cosmetic.",
 "givens": [
  [
   1,
   5,
   4
  ]
 ],
 "solution": "254136163524516342342651625413431265",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "angle": 0,
    "center": [
     4.5,
     2.5
    ],
    "width": 2.59,
    "height": 2.59,
    "thickness": 5.76,
    "rounded": true,
    "borderColor": "#afc0e0ff"
   },
   {
    "angle": 0,
    "center": [
     2.5,
     2.5
    ],
    "width": 1.51,
    "height": 1.51,
    "thickness": 5.76,
    "rounded": true,
    "borderColor": "#afc0e0ff"
   },
   {
    "angle": 0,
    "center": [
     2.3,
     2.25
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#b5b5b5ff"
   },
   {
    "angle": 0,
    "center": [
     2.5,
     2.5
    ],
    "width": 0.2,
    "height": 0.2,
    "rounded": true,
    "backgroundColor": "#f0ccaeff"
   },
   {
    "angle": 0,
    "center": [
     4.5,
     2.5
    ],
    "width": 0.26,
    "height": 0.26,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "stroke": "#ffffff",
    "angle": 0,
    "center": [
     1.5,
     3.5
    ],
    "width": 0,
    "height": 1.518,
    "text": "❄",
    "fontSize": 54,
    "color": "#88c9f9ff",
    "rounded": true
   },
   {
    "stroke": "#ffffff",
    "angle": 0,
    "center": [
     0.5,
     4.5
    ],
    "width": 0,
    "height": 1.518,
    "text": "❄",
    "fontSize": 54,
    "color": "#88c9f9ff",
    "rounded": true
   }
  ],
  "overlays": [
   {
    "angle": 0,
    "center": [
     2.3,
     2.8
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#b5b5b5ff"
   },
   {
    "angle": 0,
    "center": [
     2.25,
     2.3
    ],
    "width": 0.1,
    "height": 0.1,
    "rounded": true,
    "backgroundColor": "#FFFFFF"
   },
   {
    "angle": 0,
    "center": [
     2.25,
     2.85
    ],
    "width": 0.1,
    "height": 0.1,
    "rounded": true,
    "backgroundColor": "#FFFFFF"
   },
   {
    "angle": 0,
    "center": [
     3.5,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "thickness": 1.28,
    "rounded": true,
    "backgroundColor": "#dad7d1ff",
    "borderColor": "#898989ff"
   },
   {
    "angle": 0,
    "center": [
     3.5,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "thickness": 1.28,
    "rounded": true,
    "backgroundColor": "#dad7d1ff",
    "borderColor": "#898989ff"
   },
   {
    "angle": 0,
    "center": [
     2.85,
     2.5
    ],
    "width": 0.14,
    "height": 0.14,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     2.8,
     2.3
    ],
    "width": 0.14,
    "height": 0.14,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     2.8,
     2.7
    ],
    "width": 0.14,
    "height": 0.14,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     2.65,
     2.85
    ],
    "width": 0.14,
    "height": 0.14,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     2.65,
     2.15
    ],
    "width": 0.14,
    "height": 0.14,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     5.2,
     2.5
    ],
    "width": 0.26,
    "height": 0.26,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   },
   {
    "angle": 0,
    "center": [
     3.8,
     2.5
    ],
    "width": 0.26,
    "height": 0.26,
    "rounded": true,
    "backgroundColor": "#c2c2c2ff"
   }
  ],
  "lines": [
   {
    "target": "overlay",
    "wayPoints": [
     [
      3.85,
      3.65
     ],
     [
      3.3,
      4.2
     ],
     [
      3.3,
      4.4
     ]
    ],
    "color": "#c4beb2ff",
    "thickness": 6.4
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      3.1,
      4.2
     ],
     [
      3.3,
      4.2
     ],
     [
      3.15,
      4.35
     ]
    ],
    "color": "#c4beb2ff",
    "thickness": 6.4
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      3.85,
      1.35
     ],
     [
      3.3,
      0.8
     ],
     [
      3.1,
      0.8
     ]
    ],
    "color": "#c4beb2ff",
    "thickness": 6.4
   },
   {
    "target": "overlay",
    "wayPoints": [
     [
      3.3,
      0.6
     ],
     [
      3.3,
      0.8
     ],
     [
      3.15,
      0.65
     ]
    ],
    "color": "#c4beb2ff",
    "thickness": 6.4
   }
  ],
  "arrows": [],
  "cages": []
 }
};
