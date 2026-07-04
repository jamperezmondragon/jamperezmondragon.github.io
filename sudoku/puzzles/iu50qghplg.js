// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "iu50qghplg",
 "title": "RAT RUN 1: Primer",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/iu50qghplg",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal: dígitos del 1 al 6 sin repetir en cada fila, columna y caja de 3×2.\n\nOBJETIVO DEL EXPERIMENTO: Finkz la rata 🐀 tiene que llegar al pastelito 🧁 encontrando el camino por el laberinto. El camino es una línea que serpentea de centro a centro de casilla, sin visitar ninguna casilla dos veces, sin cruzarse a sí misma y sin atravesar los muros gruesos.\n\nAdemás de moverse en horizontal y vertical, Finkz puede avanzar en diagonal si tiene un espacio libre de 2×2 para hacerlo, pero nunca puede pasar en diagonal rozando la punta redondeada de un muro.\n\nCONDICIÓN DEL EXPERIMENTO: en este experimento, cada dos casillas seguidas del camino deben sumar un número primo. Además, TODOS los dígitos del camino que caigan dentro de una misma caja deben sumar un primo también.\n\nMarca el camino con la pluma: el sitio revisa solo los dígitos, así que el camino es tu andamio para deducirlos.",
 "hints": [
  "Marca con la pluma los tramos donde los muros solo dejan una forma de avanzar: buena parte del camino está forzada desde el principio.",
  "Un primo mayor que 2 es impar: dos casillas seguidas del camino casi siempre son una par y una impar. La única excepción es 1+1=2, y eso solo podría pasar en un paso diagonal.",
  "Haz tu lista de parejas del 1 al 6 que suman primo: 1-2, 1-4, 1-6, 2-3, 2-5, 3-4, 5-6. Al final revisa cada caja: los dígitos del camino dentro de ella deben sumar primo."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply.\n\nAIM OF EXPERIMENT: \nFinkz the rat must reach the cupcake by finding a path through the maze. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls.\n\nAs well as moving orthogonally, Finkz may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.\n\nTEST CONSTRAINT:\nIn this experiment, any two adjacent cells along the correct path must sum to a prime number. Also, ALL digits within a marked 3x2 sudoku box that lie anywhere on the correct path must sum to a prime number too.",
 "givens": [],
 "solution": "142635635214254163361452413526526341",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     0.7,
     2.5
    ],
    "width": 0,
    "height": 0.582,
    "stroke": "#ffffff",
    "text": "🐀",
    "fontSize": 18,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     4.7,
     4.5
    ],
    "width": 0,
    "height": 0.582,
    "stroke": "#ffffff",
    "text": "🧁",
    "fontSize": 18,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   }
  ],
  "overlays": [
   {
    "center": [
     4,
     1
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     3,
     1
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     3,
     2
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     4,
     5
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     5,
     5
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     5,
     4
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     3,
     4
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     3,
     5
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     2,
     5
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     1,
     5
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     1,
     4
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     1,
     3
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     1,
     2
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     1,
     1
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     2,
     1
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     4,
     3
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   },
   {
    "center": [
     4,
     4
    ],
    "width": 0.28,
    "height": 0.28,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#6802acff"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      -0.25,
      5.25
     ],
     [
      -0.25,
      6.25
     ],
     [
      6.25,
      6.25
     ],
     [
      6.25,
      -0.25
     ],
     [
      -0.25,
      -0.25
     ],
     [
      -0.25,
      5.25
     ]
    ],
    "color": "#9643d4ff",
    "thickness": 23
   },
   {
    "wayPoints": [
     [
      2,
      0
     ],
     [
      2,
      6
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      3
     ],
     [
      0,
      3
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      4,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      0
     ],
     [
      1,
      6
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      6
     ],
     [
      2,
      5
     ],
     [
      0,
      5
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      6
     ],
     [
      3,
      5
     ],
     [
      2,
      5
     ],
     [
      2,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      4,
      5
     ],
     [
      3,
      5
     ],
     [
      3,
      4
     ],
     [
      2,
      4
     ],
     [
      2,
      3
     ],
     [
      0,
      3
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      6
     ],
     [
      5,
      5
     ],
     [
      4,
      5
     ],
     [
      4,
      4
     ],
     [
      3,
      4
     ],
     [
      3,
      3
     ],
     [
      2,
      3
     ],
     [
      2,
      2
     ],
     [
      0,
      2
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
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
     ],
     [
      4,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      2
     ],
     [
      2,
      2
     ],
     [
      2,
      1
     ],
     [
      0,
      1
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      3
     ],
     [
      4,
      3
     ],
     [
      4,
      2
     ],
     [
      3,
      2
     ],
     [
      3,
      1
     ],
     [
      2,
      1
     ],
     [
      2,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      3
     ],
     [
      5,
      3
     ],
     [
      5,
      2
     ],
     [
      4,
      2
     ],
     [
      4,
      1
     ],
     [
      3,
      1
     ],
     [
      3,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      2
     ],
     [
      5,
      2
     ],
     [
      5,
      1
     ],
     [
      4,
      1
     ],
     [
      4,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      1
     ],
     [
      5,
      1
     ],
     [
      5,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      0
     ],
     [
      2,
      6
     ]
    ],
    "color": "#cbcbcbff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      3
     ],
     [
      0,
      3
     ]
    ],
    "color": "#cbcbcbff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      4,
      0
     ]
    ],
    "color": "#cbcbcbff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      1
     ],
     [
      4,
      1
     ],
     [
      4,
      3
     ]
    ],
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      4
     ],
     [
      5,
      5
     ],
     [
      4,
      5
     ],
     [
      4,
      4
     ],
     [
      3,
      4
     ]
    ],
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      2
     ],
     [
      0,
      2
     ],
     [
      0,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
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
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
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
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      2
     ],
     [
      2,
      2
     ],
     [
      2,
      5
     ],
     [
      3,
      5
     ]
    ],
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      2
     ],
     [
      2,
      1
     ],
     [
      1,
      1
     ]
    ],
    "color": "#6802acff",
    "thickness": 12,
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
    "color": "#6802acff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      -0.5
     ],
     [
      2,
      0
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      -0.5
     ],
     [
      4,
      0
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      3
     ],
     [
      6.5,
      3
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      4,
      6.5
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      6
     ],
     [
      2,
      6.5
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      -0.5,
      3
     ],
     [
      0,
      3
     ]
    ],
    "color": "#5d169761",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.5,
      -0.5
     ],
     [
      4.5,
      -0.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      -0.5,
      2.5
     ],
     [
      -0.5,
      3.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.5,
      6.5
     ],
     [
      4.5,
      6.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6.5,
      2.5
     ],
     [
      6.5,
      3.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": []
 }
};
