// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "kmwut11gkh",
 "title": "Silent Sweeper",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/kmwut11gkh",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal: los dígitos del 1 al 6 exactamente una vez en cada fila, columna y caja de 2×3.\n\nBuscaminas silencioso: el dígito de una casilla con círculo cuenta cuántas de sus vecinas (hasta 8, contando diagonales) tienen un dígito que difiere del suyo en 3 o más. Por ejemplo: si una casilla con círculo tiene un 2, exactamente dos de sus vecinas tienen 5 o 6.",
 "hints": [
  "Hazte una tablita: al 1 le quedan lejos 4, 5 y 6; al 2, solo 5 y 6; al 3, únicamente el 6 (y al revés igualito).",
  "Un círculo con dígito grande necesita muchas vecinas lejanas… cuenta cuántas vecinas tiene cada círculo (en la orilla son menos) y descarta.",
  "Un 3 en círculo dice: «exactamente un 6 junto a mí». Cruza eso con cuántos 6 le caben a cada caja."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.\n\nMein Sweeper: A digit in a circle counts the number of the (up to 8) surrounding digits that differ by 3 or more from it. For example: If r2c3 is 2, then exactly two of the eight cells surrounding it contain a 5 or 6.",
 "givens": [],
 "solution": "321456645213532164164532213645456321",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     0.5,
     1.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     3.5,
     1.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     4.5,
     0.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     4.5,
     2.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     1.5,
     2.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     2.5,
     4.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     3.5,
     5.5
    ],
    "width": 0.68,
    "height": 0.68,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "borderColor": "#9eee8fff"
   },
   {
    "center": [
     0.5,
     1.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     3.5,
     1.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     4.5,
     0.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     4.5,
     2.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     1.5,
     2.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     2.5,
     4.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     3.5,
     5.5
    ],
    "width": 0.58,
    "height": 0.58,
    "thickness": 3.84,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffb8"
   },
   {
    "center": [
     0.4,
     1.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     1.4,
     2.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     2.4,
     4.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     3.4,
     5.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     4.4,
     2.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     4.4,
     0.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     3.4,
     1.4
    ],
    "width": 0,
    "height": 0.426,
    "stroke": "#ffffff",
    "text": "#",
    "fontSize": 12,
    "color": "#b5e8afff",
    "angle": 0,
    "rounded": true
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      0.5,
      1.79
     ],
     [
      0.5,
      1.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.705,
      1.705
     ],
     [
      0.797,
      1.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.85,
      1.5
     ],
     [
      0.92,
      1.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.747,
      1.253
     ],
     [
      0.797,
      1.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.5,
      1.15
     ],
     [
      0.5,
      1.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.253,
      1.253
     ],
     [
      0.203,
      1.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.15,
      1.5
     ],
     [
      0.08,
      1.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.295,
      1.705
     ],
     [
      0.203,
      1.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.5,
      2.79
     ],
     [
      1.5,
      2.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.705,
      2.705
     ],
     [
      1.797,
      2.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.85,
      2.5
     ],
     [
      1.92,
      2.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.747,
      2.253
     ],
     [
      1.797,
      2.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.5,
      2.15
     ],
     [
      1.5,
      2.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.253,
      2.253
     ],
     [
      1.203,
      2.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.15,
      2.5
     ],
     [
      1.08,
      2.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.295,
      2.705
     ],
     [
      1.203,
      2.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.5,
      1.79
     ],
     [
      3.5,
      1.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.705,
      1.705
     ],
     [
      3.797,
      1.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.85,
      1.5
     ],
     [
      3.92,
      1.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.747,
      1.253
     ],
     [
      3.797,
      1.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.5,
      1.15
     ],
     [
      3.5,
      1.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.253,
      1.253
     ],
     [
      3.203,
      1.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.15,
      1.5
     ],
     [
      3.08,
      1.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.295,
      1.705
     ],
     [
      3.203,
      1.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      2.79
     ],
     [
      4.5,
      2.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.705,
      2.705
     ],
     [
      4.797,
      2.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.85,
      2.5
     ],
     [
      4.92,
      2.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.747,
      2.253
     ],
     [
      4.797,
      2.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      2.15
     ],
     [
      4.5,
      2.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.253,
      2.253
     ],
     [
      4.203,
      2.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.15,
      2.5
     ],
     [
      4.08,
      2.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.295,
      2.705
     ],
     [
      4.203,
      2.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.5,
      4.79
     ],
     [
      2.5,
      4.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.705,
      4.705
     ],
     [
      2.797,
      4.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.85,
      4.5
     ],
     [
      2.92,
      4.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.747,
      4.253
     ],
     [
      2.797,
      4.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.5,
      4.15
     ],
     [
      2.5,
      4.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.253,
      4.253
     ],
     [
      2.203,
      4.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.15,
      4.5
     ],
     [
      2.08,
      4.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.295,
      4.705
     ],
     [
      2.203,
      4.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.5,
      5.79
     ],
     [
      3.5,
      5.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.705,
      5.705
     ],
     [
      3.797,
      5.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.85,
      5.5
     ],
     [
      3.92,
      5.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.747,
      5.253
     ],
     [
      3.797,
      5.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.5,
      5.15
     ],
     [
      3.5,
      5.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.253,
      5.253
     ],
     [
      3.203,
      5.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.15,
      5.5
     ],
     [
      3.08,
      5.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.295,
      5.705
     ],
     [
      3.203,
      5.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      0.79
     ],
     [
      4.5,
      0.92
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.705,
      0.705
     ],
     [
      4.797,
      0.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.85,
      0.5
     ],
     [
      4.92,
      0.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.747,
      0.253
     ],
     [
      4.797,
      0.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      0.15
     ],
     [
      4.5,
      0.08
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.253,
      0.253
     ],
     [
      4.203,
      0.203
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.15,
      0.5
     ],
     [
      4.08,
      0.5
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.295,
      0.705
     ],
     [
      4.203,
      0.797
     ]
    ],
    "color": "#9eee8fff",
    "thickness": 4.48
   }
  ],
  "arrows": [],
  "cages": []
 }
};
