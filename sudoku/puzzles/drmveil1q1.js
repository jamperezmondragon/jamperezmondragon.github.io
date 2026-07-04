// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "drmveil1q1",
 "title": "Index Fingers",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/drmveil1q1",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "¡Cada dedo perdió su anillo de oro! Sudoku 6×6 normal (cajas de 2×3), y además:\n\nCada fila, columna y caja contiene exactamente un anillo, y ningún anillo está sobre un dedo. Cada anillo guarda un dígito distinto.\n\nLos dígitos XYZ a lo largo de un dedo, leyendo hacia la punta (la Z va en la uña), dicen que en la fila X, columna Y está el anillo perdido de ese dedo, y que ese anillo guarda el dígito Z.",
 "hints": [
  "Hay un anillo por fila, así que las seis casillas-base de los dedos (las X) tienen dígitos todos distintos. Lo mismo pasa con las de en medio y con las uñas: ¡tres permutaciones gratis!",
  "Tacha todas las casillas que son parte de un dedo: ahí no puede haber anillos. ¿Qué casillas le quedan a cada caja para su anillo?",
  "Toma un dedo, supón su lectura XYZ y sigue la cadena. Si dos dedos mandan su anillo a la misma fila o columna, contradicción: regresa y ajusta."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply.\n\nEach finger has lost its gold ring! Can you find them? Every row, column and box contains one gold ring, and none of them are located on a finger. Each gold ring contains a different digit.\n\nThe digits XYZ along a finger, reading towards the fingertip (the Z goes on the fingernail), indicates that row X column Y contains that finger's missing gold ring, which contains the digit Z.",
 "givens": [],
 "solution": "362415415623256341143256621534534162",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     3.571,
     5.5
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     4.571,
     3.5
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     1.429,
     1.5
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     3.5,
     3.429
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 90,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     0.571,
     3.571
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 135,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     2.429,
     3.429
    ],
    "width": 0.4,
    "height": 0.52,
    "angle": 135,
    "rounded": true,
    "backgroundColor": "#ffffff76"
   },
   {
    "center": [
     4.333,
     2.5
    ],
    "width": 0.49,
    "height": 1,
    "angle": 0,
    "backgroundColor": "#ffdfaaff"
   },
   {
    "center": [
     2.333,
     4.5
    ],
    "width": 0.49,
    "height": 1,
    "angle": 0,
    "backgroundColor": "#ffdfaaff"
   },
   {
    "center": [
     5.167,
     5.5
    ],
    "width": 0.49,
    "height": 1.3,
    "angle": 0,
    "backgroundColor": "#8b5e33ff"
   },
   {
    "center": [
     0.5,
     0.833
    ],
    "width": 0.49,
    "height": 1.11,
    "angle": 90,
    "backgroundColor": "#8b5e33ff"
   },
   {
    "center": [
     5.5,
     4.167
    ],
    "width": 0.49,
    "height": 1.16,
    "angle": 90,
    "backgroundColor": "#c59d63ff"
   },
   {
    "center": [
     2.2,
     1.8
    ],
    "width": 0.49,
    "height": 1.16,
    "angle": 45,
    "backgroundColor": "#c59d63ff"
   },
   {
    "center": [
     5.45,
     3.55
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#00000015",
    "angle": 45,
    "rounded": true
   },
   {
    "center": [
     1.55,
     2.55
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#00000015",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     1.55,
     4.55
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#ba7d1e24",
    "angle": 61,
    "rounded": true
   },
   {
    "center": [
     3.55,
     2.55
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#ba7d1e24",
    "angle": 135,
    "rounded": true
   },
   {
    "center": [
     0.55,
     1.45
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#0000001e",
    "angle": 45,
    "rounded": true
   },
   {
    "center": [
     4.75,
     5.5
    ],
    "width": 0,
    "height": 0.52,
    "text": "(|)",
    "fontSize": 15.6,
    "color": "#0000001e",
    "angle": 90,
    "rounded": true
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      1.833,
      4.5
     ],
     [
      1.5,
      4.5
     ],
     [
      0.5,
      3.5
     ]
    ],
    "color": "#ffdfaaff",
    "thickness": 31.36,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.5,
      3.5
     ],
     [
      3.5,
      2.5
     ],
     [
      3.833,
      2.5
     ]
    ],
    "color": "#ffdfaaff",
    "thickness": 31.36,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      2
     ],
     [
      1.5,
      2.5
     ],
     [
      2.5,
      3.5
     ]
    ],
    "color": "#c59d63ff",
    "thickness": 31.36,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.5,
      3.5
     ],
     [
      5.5,
      3.5
     ],
     [
      5.5,
      3.833
     ]
    ],
    "color": "#c59d63ff",
    "thickness": 31.36,
    "target": "overlay"
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
     ]
    ],
    "color": "#8b5e33ff",
    "thickness": 31.36,
    "target": "overlay"
   },
   {
    "wayPoints": [
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
      1.167
     ]
    ],
    "color": "#8b5e33ff",
    "thickness": 31.36,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": []
 }
};
