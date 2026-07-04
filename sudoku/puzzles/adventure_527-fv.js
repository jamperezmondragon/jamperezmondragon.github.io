// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "adventure_527-fv",
 "title": "Friendly Void",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/adventure/527-fv",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal: los dígitos del 1 al 6 exactamente una vez en cada fila, columna y caja de 2×3.\n\nNiebla: casi todo el tablero está cubierto. Coloca un dígito correcto y la niebla se disipa a su alrededor. Avanza con lógica, no adivinando.\n\nCírculos: una casilla tiene un círculo SI Y SOLO SI su dígito es igual al número de su fila o al número de su columna (contando desde 1, de arriba hacia abajo y de izquierda a derecha).",
 "hints": [
  "El círculo que se ve desde el inicio está en la fila 2 y en la columna 2: su dígito coincide con su fila… o con su columna.",
  "¡Da igual cuál de las dos! De cualquier forma es un 2. Ponlo y deja que la niebla se abra.",
  "La regla va en ambas direcciones: una casilla SIN círculo tiene PROHIBIDO el número de su fila y el de su columna. Cada casilla nueva te regala dos tachones."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.\n\nFog: Some cells are hidden by \"fog\" meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct.\n\nA digit is circled if and only if it matches it's row number or it's column number. For example: r2c3 is circled if and only if it contains a 2 or a 3.",
 "givens": [
  [
   4,
   3,
   1
  ]
 ],
 "solution": "654321321465512643436512265134143256",
 "fog": {
  "lights": [
   [
    1,
    1
   ]
  ]
 },
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     1.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     1.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     0.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     2.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     5.5,
     5.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     5.5,
     4.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     5.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     3.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     4.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   },
   {
    "center": [
     5.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "stroke": "none",
    "thickness": 1,
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#ffffffa1",
    "borderColor": "#666f"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
