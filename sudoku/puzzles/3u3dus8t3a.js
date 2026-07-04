// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "3u3dus8t3a",
 "title": "Termómetros y equilibrio",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/3u3dus8t3a",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal. Los dígitos sobre un termómetro crecen estrictamente desde el bulbo (el círculo) hacia la punta.\n\nUna X entre dos casillas marca que suman 10.\n\nEl círculo rosa cruza un borde de caja: sus casillas suman lo mismo de cada lado del borde.",
 "hints": [
  "Hay una casilla que toca DOS X: sus dos parejas suman 10 cada una, así que las otras dos casillas son iguales entre sí. ¿Qué parejas del 1 al 6 suman 10?",
  "Un termómetro de 4 casillas no puede empezar con más de 3 ni terminar con menos de 4.",
  "El círculo rosa parte sus casillas en dos lados: suma las de arriba, suma las de abajo, iguala. Con la caja izquierda casi se cierra solo."
 ],
 "_rulesOrig": "Normal sex by sex sudoku rules apply.\n\nDigits along a spermometer strictly increase, moving from head to tail.\n\nDigits separated by an X chromosome sum to 10.\n\nDigits touching the pink egg have the same sum on either side of the box border that divides the egg into two.",
 "givens": [],
 "solution": "253146461325612453534612345261126534",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     2,
     0
    ],
    "width": 2.7,
    "height": 2.7,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffafd7ff"
   },
   {
    "center": [
     2,
     -1
    ],
    "width": 2,
    "height": 4,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     4,
     7
    ],
    "width": 2,
    "height": 4,
    "angle": 0,
    "backgroundColor": "#FFFFFF"
   }
  ],
  "overlays": [
   {
    "center": [
     2.5,
     1.5
    ],
    "width": 0.8,
    "height": 0.8,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c5c5c5ff"
   },
   {
    "center": [
     1.5,
     2.5
    ],
    "width": 0.8,
    "height": 0.8,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c5c5c5ff"
   },
   {
    "center": [
     3.5,
     1.5
    ],
    "width": 0.8,
    "height": 0.8,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c5c5c5ff"
   },
   {
    "center": [
     0.5,
     3.5
    ],
    "width": 0.8,
    "height": 0.8,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c5c5c5ff"
   },
   {
    "center": [
     3.5,
     4.5
    ],
    "width": 0.8,
    "height": 0.8,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c5c5c5ff"
   },
   {
    "center": [
     2,
     0.5
    ],
    "width": 0.3,
    "height": 0.3,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffafd7ff"
   },
   {
    "center": [
     1.5,
     1
    ],
    "width": 0.3,
    "height": 0.3,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffafd7ff"
   },
   {
    "center": [
     2,
     0.5
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#000000ff",
    "text": "X",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     1.5,
     1
    ],
    "width": 0,
    "height": 0.504,
    "stroke": "#000000ff",
    "text": "X",
    "fontSize": 15,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   }
  ],
  "lines": [
   {
    "color": "#c5c5c5ff",
    "thickness": 9.6,
    "d": "M96 160L128 160Q160 160 160 192Q160 224 192 224L224 224"
   },
   {
    "color": "#c5c5c5ff",
    "thickness": 9.6,
    "d": "M96 224L96 256Q96 288 128 288Q160 288 160 320L160 352"
   },
   {
    "color": "#c5c5c5ff",
    "thickness": 9.6,
    "d": "M160 96L192 96Q224 96 224 128Q224 160 256 160L288 160"
   },
   {
    "color": "#c5c5c5ff",
    "thickness": 9.6,
    "d": "M352 96L320 64Q288 32 288 64Q288 96 256 64L224 32"
   },
   {
    "color": "#c5c5c5ff",
    "thickness": 9.6,
    "d": "M288 224L256 256Q224 288 256 320Q288 352 256 352L224 352"
   }
  ],
  "arrows": [],
  "cages": []
 }
};
