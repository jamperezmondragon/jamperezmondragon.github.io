// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "koyrm4s7co",
 "title": "What a Narcissist",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/koyrm4s7co",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal (cajas de 2×3).\n\nKropki: los dígitos unidos por un punto blanco son consecutivos; los unidos por un punto negro están en proporción 1:2 (uno es el doble del otro). No se dan todos los puntos.\n\nLíneas modulares: en cada tres casillas seguidas de una línea hay exactamente un dígito de {1,4}, uno de {2,5} y uno de {3,6}. Fíjate bien: una de las líneas es un CICLO cerrado — la regla se aplica dando la vuelta completa.",
 "hints": [
  "En la línea cerrada la regla se aplica con vuelta incluida: las familias {1,4}, {2,5}, {3,6} se repiten con periodo 3 alrededor del ciclo.",
  "Casillas opuestas del ciclo son de la misma familia… y dos de esas parejas comparten fila o columna: esas dos casillas son exactamente {x, x+3}.",
  "Los dos puntos negros seguidos forman una cadena a–2a–4a: con dígitos del 1 al 6 solo cabe 1-2-4 (en algún orden). La de en medio es un 2 seguro."
 ],
 "_rulesOrig": "Normal (6 by 6) sudoku rules apply\nKropki: Digits joined by a white dot are consecutive. Digits joined by a black ot are in a 1:2 ratio. Not all dots are given.\nModular lines: Every set of three sequential digits along a line must contain one digit from {1,4}, one digit from {2,5} and one digit from {3,6}.",
 "givens": [],
 "solution": "621345435261264153153624346512512436",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     4,
     3.5
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000",
    "thickness": 1.5
   },
   {
    "center": [
     5,
     3.5
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000",
    "thickness": 1.5
   },
   {
    "center": [
     5.5,
     3
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#000000",
    "borderColor": "#000000",
    "thickness": 1.5
   },
   {
    "center": [
     5.5,
     2
    ],
    "width": 0.3,
    "height": 0.3,
    "rounded": true,
    "backgroundColor": "#000000",
    "borderColor": "#000000",
    "thickness": 1.5
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      5.5,
      1.5
     ],
     [
      5.5,
      0.5
     ],
     [
      4.5,
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
      4.5,
      2.5
     ],
     [
      5.5,
      1.5
     ]
    ],
    "color": "#e6b3b3",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      1.5,
      5.5
     ],
     [
      1.5,
      4.5
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
      3.5,
      3.5
     ],
     [
      3.5,
      4.5
     ],
     [
      3.5,
      5.5
     ]
    ],
    "color": "#e6b3b3",
    "thickness": 8
   },
   {
    "wayPoints": [
     [
      0.5,
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
      0.5
     ],
     [
      2.5,
      1.5
     ],
     [
      2.5,
      2.5
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
    "color": "#e6b3b3",
    "thickness": 8
   }
  ],
  "arrows": [],
  "cages": []
 }
};
