// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "b37xfe4xjf",
 "title": "Dancing in a ring",
 "author": "Fool on Hill",
 "urlOriginal": "https://sudokupad.app/b37xfe4xjf",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal.\n\nLíneas verdes (susurros): dos dígitos vecinos sobre una línea verde difieren en 5 o más. Los anillos verdes son cerrados: la regla aplica dando toda la vuelta.\n\nLíneas rosas (renban): los dígitos de una línea rosa forman un conjunto de números consecutivos, sin repetir, en cualquier orden. La cruz del centro es UNA sola línea de 9 casillas.\n\nPuntos: blanco = consecutivos; negro = uno es el doble del otro. No se dan todos los puntos.",
 "hints": [
  "La cruz central es un renban de 9 casillas: nueve números consecutivos del 1 al 9… ¡o sea exactamente {1,2,…,9}, el conjunto completo!",
  "En un anillo de susurro los dígitos se alternan: chicos (1-4) y grandes (6-9). ¿Dónde puede vivir el 5? En ningún anillo verde.",
  "Compara la cruz con la fila 5: comparten 5 casillas. Los dígitos de la cruz que no están en esa fila viven en las otras 4 casillas de la cruz — y viceversa. Ese es el truco de conjuntos."
 ],
 "_rulesOrig": "Normal Sudoku rules apply.\n\nAdjacent digits on a green German Whisper line differ by at least 5.\n\nDigits on a pink Renban line form a consecutive set with no repeats. The central cross is a single line.\n\nDigits separated by a white dot are consecutive.\n\nWhere digits are separated by a black dot, one is double the other.\n\nNot all dots are given (no negative constraint)",
 "givens": [],
 "solution": "974851632863927541251634987736189425489562713512743869697218354148395276325476198",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     8,
     1.5
    ],
    "width": 0.33,
    "height": 0.33,
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     7.5,
     2
    ],
    "width": 0.33,
    "height": 0.33,
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     2,
     7.5
    ],
    "width": 0.33,
    "height": 0.33,
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     0.5,
     3
    ],
    "width": 0.33,
    "height": 0.33,
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     1.5,
     7
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1.28,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     4.5,
     2
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1.28,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     2,
     4.5
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1.28,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     8.5,
     5
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1.28,
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
      2.5,
      4.5
     ],
     [
      6.5,
      4.5
     ]
    ],
    "color": "#f067f0ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      4.5,
      6.5
     ],
     [
      4.5,
      2.5
     ]
    ],
    "color": "#f067f0ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      7.5,
      7.5
     ],
     [
      7.5,
      8.5
     ],
     [
      8.5,
      8.5
     ],
     [
      8.5,
      7.5
     ],
     [
      7.5,
      7.5
     ]
    ],
    "color": "#f067f0ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      0.5,
      7.5
     ],
     [
      0.5,
      8.5
     ],
     [
      1.5,
      8.5
     ],
     [
      1.5,
      7.5
     ],
     [
      0.5,
      7.5
     ]
    ],
    "color": "#f067f0ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
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
      1.5
     ],
     [
      1.5,
      0.5
     ],
     [
      0.5,
      0.5
     ]
    ],
    "color": "#f067f0ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      5.5,
      2.5
     ],
     [
      5.5,
      3.5
     ],
     [
      6.5,
      3.5
     ],
     [
      6.5,
      2.5
     ],
     [
      5.5,
      2.5
     ]
    ],
    "color": "#67f067ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      5.5,
      5.5
     ],
     [
      6.5,
      5.5
     ],
     [
      6.5,
      6.5
     ],
     [
      5.5,
      6.5
     ],
     [
      5.5,
      5.5
     ]
    ],
    "color": "#67f067ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      2.5,
      5.5
     ],
     [
      2.5,
      6.5
     ],
     [
      3.5,
      6.5
     ],
     [
      3.5,
      5.5
     ],
     [
      2.5,
      5.5
     ]
    ],
    "color": "#67f067ff",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      2.5,
      2.5
     ],
     [
      2.5,
      3.5
     ],
     [
      3.5,
      3.5
     ],
     [
      3.5,
      2.5
     ],
     [
      2.5,
      2.5
     ]
    ],
    "color": "#67f067ff",
    "thickness": 9.6
   }
  ],
  "arrows": [],
  "cages": []
 }
};
