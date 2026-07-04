// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "9mthkftlh5",
 "title": "10X+Y",
 "author": "Kaktuslav",
 "urlOriginal": "https://sudokupad.app/9mthkftlh5",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal. Cada píldora de dos casillas forma un número de dos cifras: 10 por la casilla izquierda más la casilla derecha. Ese número es igual a la suma de todas las casillas que recorre su flecha.",
 "hints": [
  "La primera píldora y su flecha se comen la fila 1 completa. ¿Cuánto suma una fila entera? Plantea 21 = 11X + 2Y y mira cuántas soluciones tiene.",
  "Una flecha de 3 casillas suma a lo más 6+5+4 = 15: su píldora tiene que empezar con 1.",
  "Para la flecha gigante: suma la fila 6 entera (21) más lo que toca de la fila 5, y despeja la píldora."
 ],
 "_rulesOrig": "Normal 6×6 sudoku rules apply. Digits along an arrow sum to the two-digit number shown in the attached pill (read left to right in base 10).",
 "givens": [],
 "solution": "156342243516412653635124321465564231",
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
    "width": 1.85,
    "height": 0.85,
    "thickness": 3.2,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#63bb00ff"
   },
   {
    "center": [
     1.5,
     1
    ],
    "width": 1.85,
    "height": 0.85,
    "thickness": 3.2,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#63bb00ff"
   },
   {
    "center": [
     4.5,
     1
    ],
    "width": 1.85,
    "height": 0.85,
    "thickness": 3.2,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#63bb00ff"
   },
   {
    "center": [
     3.5,
     4
    ],
    "width": 1.85,
    "height": 0.85,
    "thickness": 3.2,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#63bb00ff"
   },
   {
    "center": [
     1.5,
     5
    ],
    "width": 1.85,
    "height": 0.85,
    "thickness": 3.2,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#63bb00ff"
   }
  ],
  "lines": [],
  "arrows": [
   {
    "wayPoints": [
     [
      0.5,
      1.899
     ],
     [
      0.5,
      5.5
     ]
    ],
    "headLength": 0.35,
    "color": "#63bb00ff",
    "thickness": 3.2
   },
   {
    "wayPoints": [
     [
      1.5,
      1.899
     ],
     [
      1.5,
      2.5
     ],
     [
      2.5,
      2.5
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
      2.5
     ]
    ],
    "headLength": 0.35,
    "color": "#63bb00ff",
    "thickness": 3.2
   },
   {
    "wayPoints": [
     [
      4.5,
      1.899
     ],
     [
      4.5,
      4.5
     ],
     [
      5.5,
      5.5
     ],
     [
      5.5,
      0.5
     ]
    ],
    "headLength": 0.35,
    "color": "#63bb00ff",
    "thickness": 3.2
   },
   {
    "wayPoints": [
     [
      3.782,
      4.782
     ],
     [
      4.5,
      5.5
     ],
     [
      2.5,
      5.5
     ]
    ],
    "headLength": 0.35,
    "color": "#63bb00ff",
    "thickness": 3.2
   },
   {
    "wayPoints": [
     [
      1.5,
      4.101
     ],
     [
      1.5,
      3.5
     ],
     [
      2.5,
      3.5
     ],
     [
      2.5,
      4.5
     ]
    ],
    "headLength": 0.35,
    "color": "#63bb00ff",
    "thickness": 3.2
   }
  ],
  "cages": []
 }
};
