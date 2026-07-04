// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "igzcothc9f",
 "title": "Two Arrows and a Tenline",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/igzcothc9f",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal (cajas de 2×3).\n\nLos dígitos sobre cada flecha morada suman el dígito del círculo del que sale.\n\nLa línea gris gigante está hecha de varios segmentos seguidos, y cada segmento suma exactamente diez.",
 "hints": [
  "¿Cuánto suma el tablero completo? (cada fila suma 21). La línea gris suma un múltiplo de 10: ¿cuánto le queda al resto del tablero?",
  "Cuenta cuántas casillas quedan FUERA de la línea. Si la línea suma 110, esas pocas casillas suman 16: puros dígitos chiquitos… y dos de ellas alimentan las flechas.",
  "Recorre la línea acumulando desde una punta: cada vez que llegues exactamente a 10, ahí termina un segmento. Si te pasas, algo de atrás está mal."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply.\n\nThe digits along a purple arrow sum to the digit in the attached circle. The grey line consists of numerous contiguous segments, each of which sum to ten.",
 "givens": [],
 "solution": "153642624531246153531426315264462315",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     4.5,
     0.5
    ],
    "width": 0.87,
    "height": 0.87,
    "thickness": 6.4,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#a575eaff"
   },
   {
    "center": [
     5.5,
     5.5
    ],
    "width": 0.87,
    "height": 0.87,
    "thickness": 6.4,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#a575eaff"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      0.5,
      3.5
     ],
     [
      1.5,
      3.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 16
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      1.5,
      1.5
     ],
     [
      0.5,
      2.5
     ],
     [
      1.5,
      3.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 16
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      1.5,
      1.5
     ],
     [
      0.5,
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
      5.5
     ],
     [
      1.5,
      4.5
     ],
     [
      2.5,
      4.5
     ],
     [
      1.5,
      5.5
     ],
     [
      3.5,
      5.5
     ]
    ],
    "color": "#c5daeaff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      0.5,
      1.5
     ],
     [
      0.5,
      0.5
     ],
     [
      1.5,
      0.5
     ],
     [
      2.5,
      1.5
     ],
     [
      2.5,
      0.5
     ],
     [
      3.5,
      0.5
     ],
     [
      3.5,
      1.5
     ],
     [
      2.5,
      2.5
     ]
    ],
    "color": "#c5daeaff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      5.5,
      1.5
     ],
     [
      5.5,
      3.5
     ],
     [
      4.5,
      2.5
     ],
     [
      3.5,
      3.5
     ]
    ],
    "color": "#c5daeaff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      4.5,
      4.5
     ],
     [
      4.5,
      5.5
     ]
    ],
    "color": "#c5daeaff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      4.5,
      4.5
     ],
     [
      4.5,
      5.5
     ],
     [
      1.5,
      5.5
     ],
     [
      2.5,
      4.5
     ],
     [
      1.5,
      4.5
     ],
     [
      0.5,
      5.5
     ],
     [
      0.5,
      3.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 16
   },
   {
    "wayPoints": [
     [
      1.5,
      2.5
     ],
     [
      0.5,
      1.5
     ],
     [
      0.5,
      0.5
     ],
     [
      1.5,
      0.5
     ],
     [
      2.5,
      1.5
     ],
     [
      2.5,
      0.5
     ],
     [
      3.5,
      0.5
     ],
     [
      3.5,
      1.5
     ],
     [
      2.5,
      2.5
     ],
     [
      3.5,
      3.5
     ],
     [
      4.5,
      2.5
     ],
     [
      5.5,
      3.5
     ],
     [
      5.5,
      0.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 16
   },
   {
    "wayPoints": [
     [
      5.5,
      0.5
     ],
     [
      5.5,
      3.5
     ],
     [
      4.5,
      2.5
     ],
     [
      3.5,
      3.5
     ],
     [
      2.5,
      2.5
     ],
     [
      3.5,
      1.5
     ],
     [
      3.5,
      0.5
     ],
     [
      2.5,
      0.5
     ],
     [
      2.5,
      1.5
     ],
     [
      1.5,
      0.5
     ],
     [
      0.5,
      0.5
     ],
     [
      0.5,
      1.5
     ],
     [
      1.5,
      2.5
     ],
     [
      1.5,
      1.5
     ]
    ],
    "color": "#c5daeaff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
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
      5.5
     ],
     [
      1.5,
      4.5
     ],
     [
      2.5,
      4.5
     ],
     [
      1.5,
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
    "color": "#c5daeaff",
    "thickness": 9.6
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
    "color": "#d4e788ff",
    "thickness": 19.84
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
    "color": "#c6df64ff",
    "thickness": 6.4
   },
   {
    "wayPoints": [
     [
      5.083,
      -0.25
     ],
     [
      5.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.25,
      -0.25
     ],
     [
      5.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.417,
      -0.25
     ],
     [
      5.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.583,
      -0.25
     ],
     [
      5.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.75,
      -0.25
     ],
     [
      5.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.917,
      -0.25
     ],
     [
      5.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.083
     ],
     [
      6.25,
      0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      -0.25
     ],
     [
      6.083,
      -0.083
     ],
     [
      6.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.917,
      -0.25
     ],
     [
      4.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.75,
      -0.25
     ],
     [
      4.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.583,
      -0.25
     ],
     [
      4.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.417,
      -0.25
     ],
     [
      4.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.25,
      -0.25
     ],
     [
      4.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.083,
      -0.25
     ],
     [
      4.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.917,
      -0.25
     ],
     [
      3.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.75,
      -0.25
     ],
     [
      3.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.583,
      -0.25
     ],
     [
      3.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.417,
      -0.25
     ],
     [
      3.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.25,
      -0.25
     ],
     [
      3.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.083,
      -0.25
     ],
     [
      3.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.917,
      -0.25
     ],
     [
      2.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.75,
      -0.25
     ],
     [
      2.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.583,
      -0.25
     ],
     [
      2.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.417,
      -0.25
     ],
     [
      2.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.25,
      -0.25
     ],
     [
      2.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.083,
      -0.25
     ],
     [
      2.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.917,
      -0.25
     ],
     [
      1.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.75,
      -0.25
     ],
     [
      1.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.583,
      -0.25
     ],
     [
      1.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.083,
      -0.25
     ],
     [
      -0.083,
      -0.083
     ],
     [
      -0.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.083,
      -0.25
     ],
     [
      0.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.25,
      -0.25
     ],
     [
      0.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.417,
      -0.25
     ],
     [
      0.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.583,
      -0.25
     ],
     [
      0.583,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.75,
      -0.25
     ],
     [
      0.75,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.917,
      -0.25
     ],
     [
      0.917,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.083,
      -0.25
     ],
     [
      1.083,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.25,
      -0.25
     ],
     [
      1.25,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.417,
      -0.25
     ],
     [
      1.417,
      -0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.083
     ],
     [
      -0.083,
      0.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.25
     ],
     [
      -0.083,
      0.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.417
     ],
     [
      -0.083,
      0.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.583
     ],
     [
      -0.083,
      0.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.75
     ],
     [
      -0.083,
      0.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      0.917
     ],
     [
      -0.083,
      0.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.083
     ],
     [
      -0.083,
      1.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.25
     ],
     [
      -0.083,
      1.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.417
     ],
     [
      -0.083,
      1.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.583
     ],
     [
      -0.083,
      1.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.75
     ],
     [
      -0.083,
      1.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      1.917
     ],
     [
      -0.083,
      1.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.083
     ],
     [
      -0.083,
      2.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.25
     ],
     [
      -0.083,
      2.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.417
     ],
     [
      -0.083,
      2.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.583
     ],
     [
      -0.083,
      2.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.75
     ],
     [
      -0.083,
      2.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      2.917
     ],
     [
      -0.083,
      2.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.083
     ],
     [
      -0.083,
      3.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.25
     ],
     [
      -0.083,
      3.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.417
     ],
     [
      -0.083,
      3.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.583
     ],
     [
      -0.083,
      3.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.75
     ],
     [
      -0.083,
      3.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      3.917
     ],
     [
      -0.083,
      3.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.083
     ],
     [
      -0.083,
      4.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.25
     ],
     [
      -0.083,
      4.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.417
     ],
     [
      -0.083,
      4.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.583
     ],
     [
      -0.083,
      4.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.75
     ],
     [
      -0.083,
      4.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      4.917
     ],
     [
      -0.083,
      4.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.083
     ],
     [
      -0.083,
      5.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.25
     ],
     [
      -0.083,
      5.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.417
     ],
     [
      -0.083,
      5.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.583
     ],
     [
      -0.083,
      5.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.75
     ],
     [
      -0.083,
      5.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      5.917
     ],
     [
      -0.083,
      5.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      -0.25,
      6.083
     ],
     [
      -0.083,
      6.083
     ],
     [
      -0.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.083,
      6.083
     ],
     [
      0.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.25,
      6.083
     ],
     [
      0.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.417,
      6.083
     ],
     [
      0.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.583,
      6.083
     ],
     [
      0.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.75,
      6.083
     ],
     [
      0.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      0.917,
      6.083
     ],
     [
      0.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.083,
      6.083
     ],
     [
      1.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.25,
      6.083
     ],
     [
      1.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.417,
      6.083
     ],
     [
      1.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.583,
      6.083
     ],
     [
      1.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.75,
      6.083
     ],
     [
      1.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      1.917,
      6.083
     ],
     [
      1.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.083,
      6.083
     ],
     [
      2.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.25,
      6.083
     ],
     [
      2.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.417,
      6.083
     ],
     [
      2.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.583,
      6.083
     ],
     [
      2.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.75,
      6.083
     ],
     [
      2.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      2.917,
      6.083
     ],
     [
      2.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.083,
      6.083
     ],
     [
      3.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.25,
      6.083
     ],
     [
      3.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.417,
      6.083
     ],
     [
      3.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.583,
      6.083
     ],
     [
      3.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.75,
      6.083
     ],
     [
      3.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      3.917,
      6.083
     ],
     [
      3.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.083,
      6.083
     ],
     [
      4.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.25,
      6.083
     ],
     [
      4.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.417,
      6.083
     ],
     [
      4.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.583,
      6.083
     ],
     [
      4.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.75,
      6.083
     ],
     [
      4.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      4.917,
      6.083
     ],
     [
      4.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.083,
      6.083
     ],
     [
      5.083,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.25,
      6.083
     ],
     [
      5.25,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.417,
      6.083
     ],
     [
      5.417,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.583,
      6.083
     ],
     [
      5.583,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.75,
      6.083
     ],
     [
      5.75,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      5.917,
      6.083
     ],
     [
      5.917,
      6.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      6.25
     ],
     [
      6.083,
      6.083
     ],
     [
      6.25,
      6.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.917
     ],
     [
      6.25,
      5.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.75
     ],
     [
      6.25,
      5.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.583
     ],
     [
      6.25,
      5.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.417
     ],
     [
      6.25,
      5.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.25
     ],
     [
      6.25,
      5.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      5.083
     ],
     [
      6.25,
      5.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.917
     ],
     [
      6.25,
      4.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.75
     ],
     [
      6.25,
      4.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.583
     ],
     [
      6.25,
      4.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.417
     ],
     [
      6.25,
      4.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.25
     ],
     [
      6.25,
      4.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      4.083
     ],
     [
      6.25,
      4.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.917
     ],
     [
      6.25,
      3.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.75
     ],
     [
      6.25,
      3.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.583
     ],
     [
      6.25,
      3.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.417
     ],
     [
      6.25,
      3.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.25
     ],
     [
      6.25,
      3.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      3.083
     ],
     [
      6.25,
      3.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.917
     ],
     [
      6.25,
      2.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.25
     ],
     [
      6.25,
      0.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.417
     ],
     [
      6.25,
      0.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.583
     ],
     [
      6.25,
      0.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.75
     ],
     [
      6.25,
      0.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      0.917
     ],
     [
      6.25,
      0.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.083
     ],
     [
      6.25,
      1.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.25
     ],
     [
      6.25,
      1.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.417
     ],
     [
      6.25,
      1.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.583
     ],
     [
      6.25,
      1.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.75
     ],
     [
      6.25,
      1.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      1.917
     ],
     [
      6.25,
      1.917
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.083
     ],
     [
      6.25,
      2.083
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.25
     ],
     [
      6.25,
      2.25
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.417
     ],
     [
      6.25,
      2.417
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.583
     ],
     [
      6.25,
      2.583
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   },
   {
    "wayPoints": [
     [
      6.083,
      2.75
     ],
     [
      6.25,
      2.75
     ]
    ],
    "color": "#d4e788ff",
    "thickness": 4.48
   }
  ],
  "arrows": [
   {
    "wayPoints": [
     [
      4.5,
      0.882
     ],
     [
      4.5,
      1.5
     ],
     [
      2.5,
      3.5
     ]
    ],
    "headLength": 0.31,
    "color": "#a575eaff",
    "thickness": 6.4
   },
   {
    "wayPoints": [
     [
      5.5,
      5.118
     ],
     [
      5.5,
      4.5
     ],
     [
      4.5,
      3.5
     ],
     [
      3.5,
      4.5
     ]
    ],
    "headLength": 0.31,
    "color": "#a575eaff",
    "thickness": 6.4
   }
  ],
  "cages": []
 }
};
