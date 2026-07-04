// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "6c7gb33j79",
 "title": "4 x 4 x 4",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/6c7gb33j79",
 "size": 9,
 "boxes": null,
 "regions": null,
 "rules": "Cuatro sudokus de 4×4 en un solo tablero (la fila y la columna del centro quedan vacías: no les pongas nada). En cada mini-tablero: dígitos del 1 al 4 una vez en cada fila, columna y caja de 2×2.\n\nAhora, con calma, el sistema de direcciones:\n• Los 4 tableros se numeran del 1 al 4 en orden de lectura (arriba-izquierda, arriba-derecha, abajo-izquierda, abajo-derecha).\n• Dentro de cada tablero, sus cajas de 2×2 se numeran del 1 al 4 igual.\n• Dentro de cada caja, sus casillas se numeran del 1 al 4 igual.\n\nCada línea de color se lee desde su «bulbo invisible» (uno de sus dos extremos — descubrir cuál es parte del reto). Leída así, sus dígitos WXYZ ordenan: «en el tablero W, caja X, casilla Y, va el dígito Z».\n\nLas ocho líneas señalan ocho casillas DISTINTAS, y cada casilla señalada está, a su vez, sobre alguna línea.",
 "hints": [
  "Lee una línea como dirección postal de cuatro niveles: tablero → caja → casilla → dígito. No sabes de qué extremo empezar: analiza los dos sentidos.",
  "La casilla señalada SIEMPRE vive sobre una línea. Si tu lectura apunta a una casilla fuera de las líneas, ese sentido de lectura era el equivocado.",
  "Las ocho lecturas señalan ocho casillas distintas. Empieza por los primeros dígitos (los W): entre las ocho líneas tienen que repartirse los cuatro tableros."
 ],
 "_rulesOrig": "In each grid, normal 4x4 sudoku rules apply. The grids are numbered 1-4 in normal reading order. 2x2 boxes within each grid are numbered 1-4 in normal reading order. Cells within each 2x2 box are numbered 1-4 in normal reading order.\n\nReading along a coloured line (starting at the end with the invisible bulb), the digits WXYZ indicate that in grid W, box X, position Y, a digit Z should be placed. Every line indexes a different cell, which always happens to be located somewhere on a line.",
 "givens": [],
 "solution": "4213.24133142.13242431.41321324.3241.........4132.13243241.42131324.31422413.2431",
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
      0.5,
      0.5
     ]
    ],
    "color": "#ef6a66ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      3.5,
      2.5
     ],
     [
      0.5,
      2.5
     ]
    ],
    "color": "#ef6a66ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      0.5,
      5.5
     ],
     [
      0.5,
      8.5
     ]
    ],
    "color": "#bff780ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      2.5,
      5.5
     ],
     [
      2.5,
      8.5
     ]
    ],
    "color": "#bff780ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      6.5,
      0.5
     ],
     [
      6.5,
      3.5
     ]
    ],
    "color": "#84d2f9ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      8.5,
      0.5
     ],
     [
      8.5,
      3.5
     ]
    ],
    "color": "#84d2f9ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      5.5,
      6.5
     ],
     [
      8.5,
      6.5
     ]
    ],
    "color": "#fcee69ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      8.5,
      8.5
     ],
     [
      5.5,
      8.5
     ]
    ],
    "color": "#fcee69ff",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      4,
      0
     ],
     [
      5,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      1
     ],
     [
      5,
      1
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2
     ],
     [
      5,
      2
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      3
     ],
     [
      5,
      3
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      4
     ],
     [
      3,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      4
     ],
     [
      2,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      4
     ],
     [
      1,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      4
     ],
     [
      0,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      5,
      6
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      7
     ],
     [
      5,
      7
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      5,
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      9
     ],
     [
      5,
      9
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      4
     ],
     [
      6,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      4
     ],
     [
      7,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8,
      4
     ],
     [
      8,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      4
     ],
     [
      9,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      4
     ],
     [
      4,
      5
     ],
     [
      5,
      5
     ],
     [
      5,
      4
     ],
     [
      4,
      4
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      7
     ],
     [
      9,
      7
     ],
     [
      9,
      9
     ],
     [
      7,
      9
     ],
     [
      7,
      7
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      7
     ],
     [
      9,
      5
     ],
     [
      5,
      5
     ],
     [
      5,
      7
     ],
     [
      7,
      7
     ],
     [
      7,
      5
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      9
     ],
     [
      5,
      9
     ],
     [
      5,
      7
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      7
     ],
     [
      4,
      7
     ],
     [
      4,
      9
     ],
     [
      2,
      9
     ],
     [
      2,
      7
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      7
     ],
     [
      4,
      5
     ],
     [
      2,
      5
     ],
     [
      2,
      7
     ],
     [
      0,
      7
     ],
     [
      0,
      9
     ],
     [
      2,
      9
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      5
     ],
     [
      0,
      5
     ],
     [
      0,
      7
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      2
     ],
     [
      7,
      4
     ],
     [
      9,
      4
     ],
     [
      9,
      2
     ],
     [
      7,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      2
     ],
     [
      7,
      2
     ],
     [
      7,
      0
     ],
     [
      9,
      0
     ],
     [
      9,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      2
     ],
     [
      5,
      0
     ],
     [
      7,
      0
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      2
     ],
     [
      4,
      2
     ],
     [
      4,
      4
     ],
     [
      2,
      4
     ],
     [
      2,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2
     ],
     [
      4,
      0
     ],
     [
      2,
      0
     ],
     [
      2,
      2
     ],
     [
      0,
      2
     ],
     [
      0,
      4
     ],
     [
      2,
      4
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      0
     ],
     [
      0,
      0
     ],
     [
      0,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 6,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": []
 },
 "voids": [
  [
   4,
   0
  ],
  [
   4,
   1
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
  ],
  [
   4,
   5
  ],
  [
   4,
   6
  ],
  [
   4,
   7
  ],
  [
   4,
   8
  ],
  [
   0,
   4
  ],
  [
   1,
   4
  ],
  [
   2,
   4
  ],
  [
   3,
   4
  ],
  [
   5,
   4
  ],
  [
   6,
   4
  ],
  [
   7,
   4
  ],
  [
   8,
   4
  ]
 ]
};
