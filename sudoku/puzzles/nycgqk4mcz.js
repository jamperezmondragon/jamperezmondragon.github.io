// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "nycgqk4mcz",
 "title": "Party Snack",
 "author": "Tinnifer",
 "urlOriginal": "https://sudokupad.app/nycgqk4mcz",
 "size": 6,
 "boxes": null,
 "regions": [
  [
   [
    0,
    0
   ],
   [
    0,
    1
   ],
   [
    0,
    2
   ],
   [
    1,
    0
   ],
   [
    1,
    1
   ],
   [
    2,
    0
   ]
  ],
  [
   [
    0,
    3
   ],
   [
    0,
    4
   ],
   [
    0,
    5
   ],
   [
    1,
    4
   ],
   [
    1,
    5
   ],
   [
    2,
    5
   ]
  ],
  [
   [
    2,
    1
   ],
   [
    2,
    2
   ],
   [
    3,
    1
   ],
   [
    3,
    2
   ],
   [
    4,
    2
   ],
   [
    4,
    3
   ]
  ],
  [
   [
    1,
    2
   ],
   [
    1,
    3
   ],
   [
    2,
    3
   ],
   [
    2,
    4
   ],
   [
    3,
    3
   ],
   [
    3,
    4
   ]
  ],
  [
   [
    3,
    0
   ],
   [
    4,
    0
   ],
   [
    4,
    1
   ],
   [
    5,
    0
   ],
   [
    5,
    1
   ],
   [
    5,
    2
   ]
  ],
  [
   [
    3,
    5
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
    5,
    3
   ],
   [
    5,
    4
   ],
   [
    5,
    5
   ]
  ]
 ],
 "rules": "Coloca los dígitos del 1 al 6 una vez en cada fila, columna y región (las regiones son las piezas irregulares dibujadas en el tablero).\n\nAnti-caballo: dos casillas separadas por un salto de caballo de ajedrez no pueden tener el mismo dígito.\n\nLínea azul: las fronteras de región parten la línea en segmentos, y todos los segmentos suman lo mismo.\n\nPuntos kropki: punto negro = un dígito es el doble del otro; punto blanco = dígitos consecutivos.",
 "hints": [
  "La línea azul se corta cada vez que cruza una frontera de región… y uno de sus pedazos es una sola casilla.",
  "Un pedazo de UNA casilla suma a lo más 6; uno de DOS casillas de la misma región suma al menos 1+2 = 3. La suma común vive entre 3 y 6.",
  "Prueba las cuatro sumas posibles en la casilla solitaria y activa el anti-caballo alrededor del punto negro: las opciones se caen solitas."
 ],
 "_rulesOrig": "Write the digits 1 through 6 once each in every row, column and region.\n\nAnti-knight: cells separated by a chess knight's move cannot contain the same digit.\nRegion sum line: region borders divide the blue line into segments, each of which sums to the same total.\nKropki dots: digits separated by a black dot have a ratio of 2:1; digits separated by a white dot are consecutive.",
 "givens": [],
 "solution": "362145156432415326623514234651541263",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     0.5,
     1
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     5,
     1.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      4.5,
      5.5
     ],
     [
      3.5,
      5.5
     ],
     [
      2.5,
      4.5
     ],
     [
      2.5,
      2.5
     ]
    ],
    "color": "#2ecbffff",
    "thickness": 10
   }
  ],
  "arrows": [],
  "cages": []
 }
};
