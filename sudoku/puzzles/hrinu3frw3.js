// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "hrinu3frw3",
 "title": "Blue or Yellow?",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/hrinu3frw3",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal.\n\nDibuja una serpiente que conecte los dos puntos verdes (con la pluma). La serpiente mide una casilla de ancho, solo avanza en horizontal o vertical, y no puede tocarse a sí misma — ni siquiera en diagonal.\n\nDos dígitos seguidos de la serpiente difieren en al menos 5.\n\nUn dígito dentro de un círculo de color dice cuántas veces aparece ese dígito en los círculos de ESE color.\n\nTodos los círculos de uno de los colores están sobre la serpiente; todos los del otro color están fuera. Descubrir cuál color va sobre la serpiente… es justo la pregunta del título.\n\nEl sitio revisa solo los dígitos; la serpiente es tu herramienta de razonamiento.",
 "hints": [
  "¿Qué dígito no puede estar JAMÁS en la serpiente? Piensa cuáles vecinos le quedarían si la diferencia debe ser al menos 5.",
  "El 5 no tiene vecinos válidos (|5−x| ≥ 5 no se puede con dígitos del 1 al 9)… y uno de los colores tiene cincos en sus círculos. Eso responde el título.",
  "La serpiente alterna dígitos chicos (1-4) y grandes (6-9). Un 7 sobre la serpiente solo acepta vecinos 1 o 2: cuenta dónde caben."
 ],
 "_rulesOrig": "Normal sudoku rules apply.\n\nDraw a snake connecting the two green spots. The snake must be one cell wide, may only move orthogonally, and may not touch itself (not even diagonally.)\n\nAdjacent digits along the snake must have a difference of at least 5.\n\nA digit in a coloured circle indicates how many times that digit appears in a circle of that colour.\n\nAll circles of one colour are on the snake. All circles of the other colour are not on the snake.",
 "givens": [],
 "solution": "563917284219485736784362591638271459971548362425693817192854673847136925356729148",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     3.5,
     4.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     4.5,
     1.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     7.5,
     2.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     6.5,
     7.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     0.5,
     5.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     5.5,
     8.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     8.5,
     3.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     8.5,
     6.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#fde710ff"
   },
   {
    "center": [
     3.5,
     7.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     5.5,
     2.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     1.5,
     5.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     4.5,
     6.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     7.5,
     4.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     2.5,
     6.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     2.5,
     3.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     0.5,
     0.5
    ],
    "width": 0.79,
    "height": 0.79,
    "thickness": 5.76,
    "angle": 0,
    "rounded": true,
    "borderColor": "#02c1ffff"
   },
   {
    "center": [
     5.5,
     4.5
    ],
    "width": 0.4,
    "height": 0.4,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1bdf1eff"
   },
   {
    "center": [
     0.5,
     1.5
    ],
    "width": 0.4,
    "height": 0.4,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1bdf1eff"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      -0.167,
      8.5
     ],
     [
      -0.167,
      9.167
     ],
     [
      9.167,
      9.167
     ],
     [
      9.167,
      -0.167
     ],
     [
      -0.167,
      -0.167
     ],
     [
      -0.167,
      8.5
     ]
    ],
    "color": "#23c7267a",
    "thickness": 17.28
   },
   {
    "wayPoints": [
     [
      -0.167,
      8.5
     ],
     [
      -0.167,
      9.167
     ],
     [
      9.167,
      9.167
     ],
     [
      9.167,
      -0.167
     ],
     [
      -0.167,
      -0.167
     ],
     [
      -0.167,
      8.5
     ]
    ],
    "color": "#59de5aff",
    "thickness": 6.4
   },
   {
    "wayPoints": [
     [
      9.5,
      4.5
     ],
     [
      9.5,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      4,
      -0.5
     ],
     [
      4.5,
      -0.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      -0.5,
      4.5
     ],
     [
      -0.5,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9.6
   },
   {
    "wayPoints": [
     [
      4,
      9.5
     ],
     [
      4.5,
      9.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 9.6
   }
  ],
  "arrows": [],
  "cages": []
 }
};
