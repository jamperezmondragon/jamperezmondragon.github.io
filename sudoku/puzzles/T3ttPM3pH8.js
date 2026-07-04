// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "T3ttPM3pH8",
 "title": "Overlap",
 "author": "blackjackfitz",
 "urlOriginal": "https://sudokupad.app/T3ttPM3pH8",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Además, los dígitos no se repiten en ninguna de las dos diagonales principales marcadas.\n\nLíneas renban (moradas): los dígitos de cada línea forman un conjunto de números consecutivos, sin repetirse, en cualquier orden.\n\nLa gracia del acertijo está en el nombre: las líneas se TRASLAPAN. Varias comparten casillas entre sí — piensa en cada renban como un intervalo de números y fíjate qué le hace al intervalo de al lado.",
 "hints": [
  "Un renban de 3 casillas es un conjunto de 3 números consecutivos. Si dos renbans de 3 comparten 2 casillas, sus intervalos casi coinciden: se llevan a lo más un paso.",
  "El cuadrito 2×2 de cada esquina es un renban de 4 consecutivos: ¿qué les deja a las L de 3 que lo cruzan?",
  "Sigue la cadena de intervalos alrededor del anillo central de renbans de 5, y usa las diagonales para anclar cuáles números toca cada uno."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Along a marked diagonal, digits cannot repeat. Cells along a purple line contain a non-repeating, consecutive set of digits. (These digits can appear in any order).",
 "givens": [
  [
   1,
   4,
   1
  ],
  [
   4,
   0,
   3
  ],
  [
   4,
   4,
   5
  ],
  [
   4,
   7,
   4
  ],
  [
   8,
   4,
   7
  ]
 ],
 "solution": "862493157973215468154687932647932581318756249295841376781324695539168724426579813",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      8.3,
      0.3
     ],
     [
      7.3,
      0.3
     ],
     [
      7.3,
      1.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      8.7,
      0.3
     ],
     [
      8.7,
      1.7
     ],
     [
      7.7,
      1.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      1.7,
      7.3
     ],
     [
      0.3,
      7.3
     ],
     [
      0.3,
      8.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      0.3,
      8.7
     ],
     [
      1.7,
      8.7
     ],
     [
      1.7,
      7.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      1.7,
      1.7
     ],
     [
      0.3,
      1.7
     ],
     [
      0.3,
      0.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      1.7,
      1.3
     ],
     [
      1.7,
      0.3
     ],
     [
      0.3,
      0.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      7.3,
      7.3
     ],
     [
      8.7,
      7.3
     ],
     [
      8.7,
      8.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      8.7,
      8.7
     ],
     [
      7.3,
      8.7
     ],
     [
      7.3,
      7.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      2.7,
      3.7
     ],
     [
      2.7,
      2.3
     ],
     [
      5.7,
      2.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      5.3,
      2.7
     ],
     [
      6.7,
      2.7
     ],
     [
      6.7,
      5.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      6.3,
      5.3
     ],
     [
      6.3,
      6.7
     ],
     [
      3.3,
      6.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      3.7,
      6.3
     ],
     [
      2.3,
      6.3
     ],
     [
      2.3,
      3.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      7.7,
      8.3
     ],
     [
      8.3,
      8.3
     ],
     [
      8.3,
      7.7
     ],
     [
      7.7,
      7.7
     ],
     [
      7.7,
      8.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      1.1,
      1.3
     ],
     [
      1.3,
      1.3
     ],
     [
      1.3,
      0.7
     ],
     [
      0.7,
      0.7
     ],
     [
      0.7,
      1.3
     ],
     [
      1.1,
      1.3
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      8.1,
      0.7
     ],
     [
      8.3,
      0.7
     ],
     [
      8.3,
      1.3
     ],
     [
      7.7,
      1.3
     ],
     [
      7.7,
      0.7
     ],
     [
      8.1,
      0.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      0.7,
      7.7
     ],
     [
      1.3,
      7.7
     ],
     [
      1.3,
      8.3
     ],
     [
      0.7,
      8.3
     ],
     [
      0.7,
      7.7
     ]
    ],
    "color": "#D23BE7",
    "thickness": 9
   },
   {
    "wayPoints": [
     [
      0.01,
      0.01
     ],
     [
      8.99,
      8.99
     ]
    ],
    "color": "#34BBE6",
    "thickness": 1
   },
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
    "color": "#34BBE6",
    "thickness": 1
   }
  ],
  "arrows": [],
  "cages": [
   {
    "value": "solution: 862493157973215468154687932647932581318756249295841376781324695539168724426579813"
   }
  ]
 }
};
