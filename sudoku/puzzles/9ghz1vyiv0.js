// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "9ghz1vyiv0",
 "title": "Intro: Termómetros",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/9ghz1vyiv0",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nTERMÓMETROS: los dígitos crecen a lo largo del termómetro empezando por el bulbo (el círculo). No tienen que ser consecutivos: 1-3-4 o 2-4 valen perfectamente.",
 "hints": [
  "Un termómetro de 3 casillas en un 4×4 casi no tiene opciones: 1-2-3, 1-2-4, 1-3-4 o 2-3-4.",
  "El bulbo de un termómetro largo es chiquito y su punta es grandota. Anota los candidatos de las puntas primero."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nTHERMOMETER\n- Digits increase in value along a thermometer, starting from the bulb end. They don't have to be adjacent, for example 1-3-4 or 2-4 would be just fine.",
 "givens": [],
 "solution": "1234432131422413",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "stroke": "none",
    "center": [
     3.5,
     0.5
    ],
    "width": 0.8,
    "height": 0.8,
    "rounded": true,
    "backgroundColor": "#999"
   },
   {
    "stroke": "none",
    "center": [
     2.5,
     1.5
    ],
    "width": 0.8,
    "height": 0.8,
    "rounded": true,
    "backgroundColor": "#999"
   },
   {
    "stroke": "none",
    "center": [
     1.5,
     3.5
    ],
    "width": 0.8,
    "height": 0.8,
    "rounded": true,
    "backgroundColor": "#999"
   },
   {
    "stroke": "none",
    "center": [
     0.5,
     1.5
    ],
    "width": 0.8,
    "height": 0.8,
    "rounded": true,
    "backgroundColor": "#999"
   }
  ],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      3.5,
      0.5
     ],
     [
      1.5,
      0.5
     ]
    ],
    "color": "#ccc",
    "thickness": 19
   },
   {
    "wayPoints": [
     [
      2.5,
      1.5
     ],
     [
      3.5,
      1.5
     ]
    ],
    "color": "#ccc",
    "thickness": 19
   },
   {
    "wayPoints": [
     [
      1.5,
      3.5
     ],
     [
      3.5,
      3.5
     ]
    ],
    "color": "#ccc",
    "thickness": 19
   },
   {
    "wayPoints": [
     [
      0.5,
      1.5
     ],
     [
      1.5,
      1.5
     ]
    ],
    "color": "#ccc",
    "thickness": 19
   }
  ],
  "arrows": [],
  "cages": []
 }
};
