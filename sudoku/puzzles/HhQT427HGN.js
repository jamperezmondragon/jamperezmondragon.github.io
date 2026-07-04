// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "HhQT427HGN",
 "title": "Renban ModE",
 "author": "Mr.Menace",
 "urlOriginal": "https://sudokupad.app/HhQT427HGN",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Cada línea gris es una línea renban: contiene dígitos consecutivos, sin repetir, en cualquier orden (por ejemplo 4-6-5 o 2-1-3).\n\nLas pistas fuera del tablero dan la suma de los dígitos de la diagonal que señalan. En esas diagonales los dígitos sí pueden repetirse, si las demás reglas lo permiten.",
 "hints": [
  "La diagonal que suma 15 lleva encima un renban de 3 casillas completo. ¿Cuál es la suma mínima de tres consecutivos? ¿Y cuánto les deja eso a las otras casillas de la diagonal?",
  "¿Puede ese renban ser {4,5,6}? Suma y compara con 15. El renban está obligado a ser chiquito: {1,2,3}, {2,3,4} o {3,4,5}.",
  "La diagonal del 15 y la del 27 comparten una casilla: no puede ser chica y grande a la vez. Ese apretón entre las dos cotas es la puerta de entrada."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Each grey line contains a set of consecutive, non-repeating digits, in any order. Clues outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat on such a diagonal if allowed by other rules.",
 "givens": [],
 "solution": "945836172837152496261947853476591238328674519519283647782419365694325781153768924",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     4.5,
     9.5
    ],
    "width": 0.25,
    "height": 0.25,
    "borderColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "rounded": false,
    "fontSize": 28,
    "text": 23
   },
   {
    "center": [
     4.5,
     -0.5
    ],
    "width": 0.25,
    "height": 0.25,
    "borderColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "rounded": false,
    "fontSize": 28,
    "text": 25
   },
   {
    "center": [
     9.5,
     3.5
    ],
    "width": 0.25,
    "height": 0.25,
    "borderColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "rounded": false,
    "fontSize": 28,
    "text": 27
   },
   {
    "center": [
     9.5,
     5.5
    ],
    "width": 0.25,
    "height": 0.25,
    "borderColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "rounded": false,
    "fontSize": 28,
    "text": 15
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      7.5,
      0.5
     ],
     [
      8.5,
      1.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      5.5,
      0.5
     ],
     [
      3.5,
      0.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      2.5,
      0.5
     ],
     [
      1.5,
      1.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      2.5,
      1.5
     ],
     [
      0.5,
      3.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      0.5,
      4.5
     ],
     [
      2.5,
      4.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      0.5,
      5.5
     ],
     [
      2.5,
      7.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      3.5,
      1.5
     ],
     [
      3.5,
      3.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      3.5,
      5.5
     ],
     [
      3.5,
      7.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      3.5,
      8.5
     ],
     [
      5.5,
      8.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      5.5,
      7.5
     ],
     [
      7.5,
      5.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      8.5,
      3.5
     ],
     [
      8.5,
      5.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      8.5,
      7.5
     ],
     [
      7.5,
      8.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      7.5,
      3.5
     ],
     [
      5.5,
      1.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      4.5,
      2.5
     ],
     [
      4.5,
      6.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 8
   },
   {
    "color": "#CFCFCF",
    "thickness": 8
   }
  ],
  "arrows": [
   {
    "wayPoints": [
     [
      4.2,
      9.2
     ],
     [
      4,
      9
     ]
    ],
    "color": "#000000",
    "thickness": 3,
    "headLength": 0.2
   },
   {
    "wayPoints": [
     [
      9.2,
      3.8
     ],
     [
      9,
      4
     ]
    ],
    "color": "#000000",
    "thickness": 3,
    "headLength": 0.2
   },
   {
    "wayPoints": [
     [
      9.2,
      5.2
     ],
     [
      9,
      5
     ]
    ],
    "color": "#000000",
    "thickness": 3,
    "headLength": 0.2
   },
   {
    "wayPoints": [
     [
      4.2,
      -0.2
     ],
     [
      4,
      0
     ]
    ],
    "color": "#000000",
    "thickness": 3,
    "headLength": 0.2
   },
   {
    "color": "#000000",
    "thickness": 3,
    "headLength": 0.2
   }
  ],
  "cages": []
 }
};
