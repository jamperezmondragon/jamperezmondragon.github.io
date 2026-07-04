// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "m4gbwkzg4n",
 "title": "The Concatenation Game",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/m4gbwkzg4n",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal. Cada flechita apunta a lo largo de su fila o columna, hasta el borde del tablero. Suma todos los dígitos a los que apunta: el total siempre tiene DOS cifras… y esas dos cifras suman el dígito de la casilla de la flecha.",
 "hints": [
  "Truco viejo y bonito: al sumar las cifras de un número, el residuo al dividir entre 9 no cambia (es la «prueba del nueve»).",
  "La flecha de la esquina inferior derecha apunta a toda su columna menos ella misma. Si su dígito es z, la columna completa suma 21: plantea que 21 − z y z dejan el mismo residuo entre 9.",
  "Esa ecuación fuerza z = 6 de un jalón. Y no lo olvides: cada total es de DOS cifras — vale al menos 10 —, eso descarta varias ramas más adelante."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply. For each arrow, all the digits it points at sum to a two digit total. The two digits of that total sum to the digit on the arrow.",
 "givens": [],
 "solution": "641235532164165342423651256413314526",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     3,
     3
    ],
    "width": 6,
    "height": 6,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   }
  ],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      5.75,
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
      6.25
     ],
     [
      5.75,
      6.25
     ]
    ],
    "color": "#f8e05577",
    "thickness": 28.8
   },
   {
    "wayPoints": [
     [
      6.167,
      5.5
     ],
     [
      6.167,
      6.167
     ],
     [
      -0.167,
      6.167
     ],
     [
      -0.167,
      -0.167
     ],
     [
      6.167,
      -0.167
     ],
     [
      6.167,
      5.5
     ]
    ],
    "color": "#94eed2ff",
    "thickness": 23.04
   },
   {
    "wayPoints": [
     [
      0.625,
      -0.125
     ],
     [
      6.125,
      -0.125
     ],
     [
      6.125,
      6.125
     ],
     [
      -0.125,
      6.125
     ],
     [
      -0.125,
      -0.125
     ],
     [
      0.625,
      -0.125
     ]
    ],
    "color": "#1cdf",
    "thickness": 13.44
   }
  ],
  "arrows": [
   {
    "wayPoints": [
     [
      4.43,
      5.5
     ],
     [
      4.07,
      5.5
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.43,
      5.5
     ],
     [
      5.07,
      5.5
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.5,
      2.57
     ],
     [
      0.5,
      2.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.5,
      2.57
     ],
     [
      1.5,
      2.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.5,
      2.57
     ],
     [
      3.5,
      2.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.5,
      2.57
     ],
     [
      5.5,
      2.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      3.43
     ],
     [
      4.5,
      3.07
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.5,
      1.57
     ],
     [
      4.5,
      1.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.5,
      3.57
     ],
     [
      1.5,
      3.93
     ]
    ],
    "headLength": 0.2,
    "color": "#cc9ff0ff",
    "thickness": 4.48
   }
  ],
  "cages": []
 }
};
