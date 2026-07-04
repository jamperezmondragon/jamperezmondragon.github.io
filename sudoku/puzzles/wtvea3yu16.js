// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "wtvea3yu16",
 "title": "Perfect Triple",
 "author": "Dorlir",
 "urlOriginal": "https://sudokupad.app/wtvea3yu16",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Usa exactamente SEIS dígitos de entre 1 y 9 para llenar el tablero — descubrir cuáles es parte del reto. Cada uno de esos seis aparece una vez en cada fila, columna y caja de 2×3.\n\nUn dígito en un rombo es la raíz cuadrada de la suma de los dígitos sobre su flecha.\n\n(El teclado acepta del 1 al 9: también los dígitos que quizá ni existan en el tablero.)",
 "hints": [
  "Dos casillas distintas de una misma fila suman entre 3 y 17: ¿qué cuadrados perfectos caben ahí? Esos rombos solo pueden ser 3 o 4.",
  "Acota la flecha larga de 8 casillas por arriba y por abajo: a su rombo casi no le quedan opciones.",
  "¿Puede existir el 9 en el tablero? Piensa qué le haría a las sumas de los rombos… descartar dígitos también es avanzar."
 ],
 "_rulesOrig": "Use exactly six digits from 1-9 to fill the grid, with each digit appearing once in every row, column and box. A digit in a diamond is the square root of the sum of the digits along the arrow.",
 "givens": [],
 "solution": "528413431825814532352148183254245381",
 "fog": null,
 "sclCellSize": 64,
 "visuals": {
  "underlays": [
   {
    "class": "board-position",
    "backgroundColor": "#FFFFFF00",
    "center": [
     3,
     3
    ],
    "width": 6,
    "height": 6
   }
  ],
  "overlays": [],
  "lines": [
   {
    "fill": "#CFCFCF",
    "target": "overlay",
    "thickness": 1.7,
    "color": "#000000",
    "wayPoints": [
     [
      0.5,
      3.07
     ],
     [
      0.07,
      3.5
     ],
     [
      0.5,
      3.93
     ],
     [
      0.93,
      3.5
     ],
     [
      0.5,
      3.07
     ]
    ]
   },
   {
    "fill": "#CFCFCF",
    "target": "overlay",
    "thickness": 1.7,
    "color": "#000000",
    "wayPoints": [
     [
      1.5,
      1.07
     ],
     [
      1.07,
      1.5
     ],
     [
      1.5,
      1.93
     ],
     [
      1.93,
      1.5
     ],
     [
      1.5,
      1.07
     ]
    ]
   },
   {
    "fill": "#CFCFCF",
    "target": "overlay",
    "thickness": 1.7,
    "color": "#000000",
    "wayPoints": [
     [
      3.5,
      4.07
     ],
     [
      3.07,
      4.5
     ],
     [
      3.5,
      4.93
     ],
     [
      3.93,
      4.5
     ],
     [
      3.5,
      4.07
     ]
    ]
   },
   {
    "fill": "#CFCFCF",
    "target": "overlay",
    "thickness": 1.7,
    "color": "#000000",
    "wayPoints": [
     [
      4.5,
      4.07
     ],
     [
      4.07,
      4.5
     ],
     [
      4.5,
      4.93
     ],
     [
      4.93,
      4.5
     ],
     [
      4.5,
      4.07
     ]
    ]
   },
   {
    "fill": "#CFCFCF",
    "target": "overlay",
    "thickness": 1.7,
    "color": "#000000",
    "wayPoints": [
     [
      5.5,
      3.07
     ],
     [
      5.07,
      3.5
     ],
     [
      5.5,
      3.93
     ],
     [
      5.93,
      3.5
     ],
     [
      5.5,
      3.07
     ]
    ]
   }
  ],
  "arrows": [
   {
    "color": "#a1a1a1",
    "headLength": 0.3,
    "thickness": 5,
    "wayPoints": [
     [
      0.5,
      3.5
     ],
     [
      1.5,
      3.5
     ],
     [
      1.5,
      2.5
     ],
     [
      0.5,
      1.5
     ],
     [
      1.5,
      0.5
     ],
     [
      2.5,
      1.5
     ]
    ]
   },
   {
    "color": "#a1a1a1",
    "headLength": 0.3,
    "thickness": 5,
    "wayPoints": [
     [
      1.5,
      1.5
     ],
     [
      2.5,
      2.5
     ],
     [
      2.5,
      3.5
     ]
    ]
   },
   {
    "color": "#a1a1a1",
    "headLength": 0.3,
    "thickness": 5,
    "wayPoints": [
     [
      3.5,
      4.5
     ],
     [
      0.5,
      4.5
     ],
     [
      0.5,
      5.5
     ],
     [
      2.5,
      5.5
     ]
    ]
   },
   {
    "color": "#a1a1a1",
    "headLength": 0.3,
    "thickness": 5,
    "wayPoints": [
     [
      4.5,
      4.5
     ],
     [
      4.5,
      0.5
     ],
     [
      3.5,
      0.5
     ],
     [
      3.5,
      3.5
     ]
    ]
   },
   {
    "color": "#a1a1a1",
    "headLength": 0.3,
    "thickness": 5,
    "wayPoints": [
     [
      5.5,
      3.5
     ],
     [
      5.5,
      5.5
     ]
    ]
   }
  ],
  "cages": [
   {
    "value": "title: Perfect Triple"
   },
   {
    "value": "author: Dorlir"
   },
   {
    "value": "rules: Use exactly six digits from 1-9 to fill the grid, with each digit appearing once in every row, column and box. A digit in a diamond is the square root of the sum of the digits along the arrow."
   },
   {
    "value": "solution: 528413431825814532352148183254245381"
   }
  ]
 }
};
