// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "40z7jh544j",
 "title": "Onimollif",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/40z7jh544j",
 "size": 6,
 "boxes": null,
 "regions": null,
 "rules": "¡Ojo: este acertijo NO es un sudoku! Es un fillomino.\n\nFILLOMINO 1-9: escribe un dígito del 1 al 9 en cada casilla (el teclado los acepta todos). Cada grupo de casillas conectadas por sus lados que comparten dígito debe tener exactamente ese número de casillas: los 3 van en grupos de tres, los 5 en grupos de cinco, etcétera. Dos grupos distintos con el mismo dígito no pueden tocarse por un lado (se fusionarían en uno más grande, y ya no cuadraría).\n\nLÍNEAS NABNER: dos dígitos sobre una misma línea siempre difieren en 2 o más (en una línea no hay repetidos ni consecutivos).\n\nUsa la pluma para marcar las fronteras entre grupos.",
 "hints": [
  "Empieza por la línea que da la vuelta al cuadrito 2×2 de la esquina: son cuatro casillas pegadas entre sí, así que llevan cuatro dígitos distintos… que además deben llevarse de a 2 o más.",
  "Cuatro dígitos del 1 al 9 que se lleven de a 2 o más entre sí: casi no hay opciones (piensa en cosas como {1, 3, 5, 9}). Y recuerda: un dígito d forma un grupo de exactamente d casillas.",
  "Presupuesto de área: el tablero tiene 36 casillas y los tamaños de los grupos deben sumar exactamente eso. Si hay un 9, su grupo es un cuarto del tablero: ¿por dónde cabe sin chocar con las líneas?"
 ],
 "_rulesOrig": "1-9 FILLOMINO - Fill a digit from 1-9 in every cell. Orthogonally connected groups of cells with the same digit must contain exactly as many cells as that digit indicates.\n\nNABNER - A digit on a line must differ by 2 or more from any other digit on the same line.",
 "givens": [],
 "solution": "133355599175559975155975399971339777",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      2.5,
      0.5
     ],
     [
      4.5,
      0.5
     ],
     [
      4.5,
      1.5
     ]
    ],
    "color": "#ffffffed",
    "thickness": 12.8
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      1.5,
      3.5
     ],
     [
      0.5,
      3.5
     ],
     [
      0.5,
      4.5
     ],
     [
      1.5,
      4.5
     ],
     [
      1.5,
      3.5
     ]
    ],
    "color": "#ffffffed",
    "thickness": 12.8
   },
   {
    "wayPoints": [
     [
      3.5,
      2.5
     ],
     [
      3.5,
      3.5
     ]
    ],
    "color": "#ffffffed",
    "thickness": 12.8
   },
   {
    "wayPoints": [
     [
      3.5,
      5.5
     ],
     [
      4.5,
      5.5
     ],
     [
      4.5,
      4.5
     ]
    ],
    "color": "#ffffffed",
    "thickness": 12.8
   },
   {
    "wayPoints": [
     [
      0.5,
      0.5
     ],
     [
      1.5,
      0.5
     ],
     [
      1.5,
      1.5
     ],
     [
      0.5,
      1.5
     ],
     [
      0.5,
      0.5
     ]
    ],
    "color": "#ffffffed",
    "thickness": 12.8
   },
   {
    "wayPoints": [
     [
      2.5,
      0.5
     ],
     [
      4.5,
      0.5
     ],
     [
      4.5,
      1.5
     ]
    ],
    "color": "#ebe698ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      1.5,
      3.5
     ],
     [
      0.5,
      3.5
     ],
     [
      0.5,
      4.5
     ],
     [
      1.5,
      4.5
     ],
     [
      1.5,
      3.5
     ]
    ],
    "color": "#ebe698ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      3.5,
      2.5
     ],
     [
      3.5,
      3.5
     ]
    ],
    "color": "#ebe698ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      3.5,
      5.5
     ],
     [
      4.5,
      5.5
     ],
     [
      4.5,
      4.5
     ]
    ],
    "color": "#ebe698ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      0.5,
      0.5
     ],
     [
      1.5,
      0.5
     ],
     [
      1.5,
      1.5
     ],
     [
      0.5,
      1.5
     ],
     [
      0.5,
      0.5
     ]
    ],
    "color": "#ebe698ff",
    "thickness": 9.6
   }
  ],
  "arrows": [],
  "cages": []
 }
};
