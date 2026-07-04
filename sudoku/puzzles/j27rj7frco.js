// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "j27rj7frco",
 "title": "Half Circles",
 "author": "Dorlir",
 "urlOriginal": "https://sudokupad.app/j27rj7frco",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal.\n\nUn dígito N dentro de un círculo o de un semicírculo indica que exactamente N círculos completos del tablero contienen el dígito N.\n\nDos semicírculos juntos cuentan como un círculo completo. Por ejemplo: si hay cuatro semicírculos con el dígito 5 y tres círculos completos con el 5, el total es 2+3 = 5 círculos con el 5.",
 "hints": [
  "Cuenta en «círculos equivalentes»: los círculos completos más la mitad de los semicírculos. ¿Cuánto pesa todo el tablero? Da 36 = 1+2+…+8: ocho dígitos usan todos los círculos y uno se queda fuera.",
  "Los dígitos que NO aparecen en círculos suman 9 entre todos: puede ser {9} solo, {4,5}, {2,7}… haz la lista.",
  "Un dígito totalmente fuera de los círculos necesita 9 casillas sin círculo que lo acepten. Cuenta las casillas sin círculo por fila: solo el 9 sobrevive como ausente."
 ],
 "_rulesOrig": "Normal sudoku rules apply.\n\nA digit N placed inside a circle or semicircle indicates that exactly N full circles in the grid contain the digit N.\n\nTwo semicircles together count as one full circle. For example, if there are four semicircles containing the digit 5 and three full circles containing the digit 5, then the total count is 2+3=5 circles with the digit 5.",
 "givens": [],
 "solution": "825714693936825714147936825582471369693582471714693582258147936369258147471369258",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     6.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     7.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     8.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     7.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     3.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     4.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     5.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     1.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     2.5,
     8.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     1.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     0.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     2.5,
     6.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     0.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     1.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     2.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     0.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     1.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     0.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     0.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     1.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1.28,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0fff",
    "borderColor": "#0fff"
   },
   {
    "center": [
     6.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     5.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     7.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     8.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     6.5,
     1.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     6.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     7.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     8.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     7.5,
     4.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     6.5,
     4.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     6.5,
     7.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     7.5,
     7.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     7.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     8.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     3.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     3.5,
     7.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     4.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     8.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     3.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     4.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     3.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     4.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     4.5,
     2.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     2.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     0.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     8.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     2.5,
     8.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     0.5,
     0.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     0.5,
     2.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     2.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     2.5,
     2.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     0.5,
     3.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     0.5,
     5.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     5.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     2.5,
     5.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     6.75
    ],
    "width": 0.52,
    "height": 1.02,
    "thickness": 1.28,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   }
  ],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      5.625,
      -0.375
     ],
     [
      9.375,
      -0.375
     ],
     [
      9.375,
      9.375
     ],
     [
      -0.375,
      9.375
     ],
     [
      -0.375,
      -0.375
     ],
     [
      5.625,
      -0.375
     ]
    ],
    "color": "#0ff7",
    "thickness": 19.2
   },
   {
    "wayPoints": [
     [
      -0.583,
      5.917
     ],
     [
      -0.583,
      -0.583
     ],
     [
      9.583,
      -0.583
     ],
     [
      9.583,
      9.583
     ],
     [
      -0.583,
      9.583
     ],
     [
      -0.583,
      5.75
     ]
    ],
    "color": "#0ff2",
    "thickness": 16
   },
   {
    "wayPoints": [
     [
      -0.125,
      0.375
     ],
     [
      -0.125,
      9.125
     ],
     [
      9.125,
      9.125
     ],
     [
      9.125,
      -0.125
     ],
     [
      -0.125,
      -0.125
     ],
     [
      -0.125,
      0.375
     ]
    ],
    "color": "#0fff",
    "thickness": 19.2
   }
  ],
  "arrows": [],
  "cages": []
 }
};
