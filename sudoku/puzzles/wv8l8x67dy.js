// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "wv8l8x67dy",
 "title": "RAT RUN 4: Borderline",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/wv8l8x67dy",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal: dígitos del 1 al 9 una vez en cada fila, columna y caja de 3×3 (marcadas con líneas punteadas).\n\nOBJETIVO DEL EXPERIMENTO: Finkz la rata 🐀 tiene que llegar al pastelito 🧁 encontrando el camino por el laberinto. El camino es una línea que serpentea de centro a centro de casilla, sin visitar ninguna casilla dos veces, sin cruzarse a sí misma y sin atravesar los muros gruesos. En este laberinto NO hay movimientos diagonales.\n\nGROSELLAS: dos casillas unidas por una grosella (bolita oscura) están en proporción 1:2 — una es el doble de la otra. No se dan todas las grosellas posibles.\n\nPUERTAS DE UN SOLO SENTIDO: Finkz solo puede cruzar una flecha morada si avanza en la dirección en la que apunta. La flecha siempre apunta hacia el menor de los dos dígitos entre los que está.\n\nCONDICIÓN DEL EXPERIMENTO: el camino correcto es una línea de suma de regiones: las líneas punteadas de las cajas parten el camino en segmentos, y todos los segmentos suman lo mismo.\n\nMarca el camino con la pluma: el sitio revisa solo los dígitos, así que el camino es tu andamio para deducirlos.",
 "hints": [
  "Cada vez que el camino cruza una línea punteada arranca un segmento nuevo… y todos suman la misma cantidad S. Recuerda: una caja entera suma 45.",
  "El pastelito está en el CENTRO de la caja central: el último segmento tiene apenas 1-3 casillas. ¿Qué valores de S caben en tan poquitas casillas?",
  "Cada flecha morada apunta al dígito menor de los dos que separa — y solo se puede cruzar en su dirección. Son desigualdades gratis: úsalas para orientar el viaje."
 ],
 "_rulesOrig": "Normal sudoku rules apply: place the digits 1-9 once each in every row, column, and 3x3 box (marked with dotted lines.)\n\nAIM OF EXPERIMENT: Finkz the rat must reach the cupcake by finding a path through the maze (the path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls.) Diagonal moves are not possible in this maze.\n\nBLACKCURRANTS: Cells connected by a blackcurrant have a 1:2 ratio (one is double the other.) Not all possible blackcurrants have been given.\n\nONE-WAY DOORS: Finkz may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.\n\nTEST CONSTRAINT: In this experiment, the correct path will be a valid Region Sum line - ie: box borders (dotted lines) will divide the path into segments which each have the same sum.",
 "givens": [],
 "solution": "163874592879526431245319786394251867517968243628743915736492158951687324482135679",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     0,
     0
    ],
    "width": 0.26,
    "height": 0.26,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#64cd73ff"
   },
   {
    "center": [
     0,
     9
    ],
    "width": 0.26,
    "height": 0.26,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#64cd73ff"
   },
   {
    "center": [
     9,
     9
    ],
    "width": 0.26,
    "height": 0.26,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#64cd73ff"
   },
   {
    "center": [
     9,
     0
    ],
    "width": 0.26,
    "height": 0.26,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#64cd73ff"
   }
  ],
  "overlays": [
   {
    "center": [
     4,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     5,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     4,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     2,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     2,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     4,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     2,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     2,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     2,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     4,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     5,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     8
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     5,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     5,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     8,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     3,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     4,
     6
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     4,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     7,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     1,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#355cedff"
   },
   {
    "center": [
     6.5,
     2
    ],
    "width": 0.24,
    "height": 0.24,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0f0019ff"
   },
   {
    "center": [
     2.5,
     1
    ],
    "width": 0.24,
    "height": 0.24,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0f0019ff"
   },
   {
    "center": [
     2,
     4.5
    ],
    "width": 0.24,
    "height": 0.24,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0f0019ff"
   },
   {
    "center": [
     7,
     8.5
    ],
    "width": 0.24,
    "height": 0.24,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0f0019ff"
   },
   {
    "center": [
     5,
     1.5
    ],
    "width": 0.24,
    "height": 0.24,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#0f0019ff"
   },
   {
    "center": [
     3,
     0.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     0.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     0.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     0.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     2.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     2.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     0.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     0.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     0.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     0.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     1.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     1.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     1.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     1.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     2.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     2.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     2.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     2.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     8.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     8.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     8.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     8.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     3.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     3.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     3.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     3.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     4.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     4.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     4.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     4.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     5.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     5.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     5.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     5.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     7.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     7.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     7.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     7.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     6.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     6.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     6.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     6.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     7.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     7.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     7.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     7.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     8.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     8.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     8.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     8.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     6.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     6.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     6.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     7.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     7.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     7.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     7.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     8.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     8.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     8.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     8.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     3.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     3.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     3.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     3.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     4.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     4.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     4.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     3,
     4.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     4.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     0.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     1.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     2.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     2.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     2.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     2.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     6,
     0
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     0
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     1
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     1.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     1.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     1.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     1.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     1
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     1,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     0,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     9,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     9,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     7,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     5
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     7
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     6,
     9
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     5
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     5.2
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     5.4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     5.6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     5.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.4,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.6,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     5.8,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     7
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     9
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     2,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     1,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     0,
     6
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     3,
     6.8
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     7,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     7.4,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     7.2,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     7.6,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     7.8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     8,
     3
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   },
   {
    "center": [
     1.75,
     7.5
    ],
    "width": 0,
    "height": 0.582,
    "stroke": "#ffffff",
    "text": "🐀",
    "fontSize": 22,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     4.65,
     4.5
    ],
    "width": 0,
    "height": 0.582,
    "stroke": "#ffffff",
    "text": "🧁",
    "fontSize": 22,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   },
   {
    "center": [
     3,
     4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#1c12d5db"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      8.25,
      -0.25
     ],
     [
      9.25,
      -0.25
     ],
     [
      9.25,
      9.25
     ],
     [
      -0.25,
      9.25
     ],
     [
      -0.25,
      -0.25
     ],
     [
      8.25,
      -0.25
     ]
    ],
    "color": "#34b3ffff",
    "thickness": 20
   },
   {
    "wayPoints": [
     [
      0,
      8
     ],
     [
      9,
      8
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      9
     ],
     [
      1,
      7
     ],
     [
      2,
      7
     ],
     [
      2,
      9
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      9
     ],
     [
      3,
      7
     ],
     [
      2,
      7
     ],
     [
      2,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      7
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      9
     ],
     [
      4,
      7
     ],
     [
      3,
      7
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      9
     ],
     [
      5,
      7
     ],
     [
      4,
      7
     ],
     [
      4,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      5
     ],
     [
      4,
      5
     ],
     [
      4,
      6
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      9
     ],
     [
      6,
      7
     ],
     [
      5,
      7
     ],
     [
      5,
      6
     ],
     [
      4,
      6
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      9
     ],
     [
      7,
      7
     ],
     [
      6,
      7
     ],
     [
      6,
      6
     ],
     [
      5,
      6
     ],
     [
      5,
      5
     ],
     [
      4,
      5
     ],
     [
      4,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      5
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8,
      9
     ],
     [
      8,
      7
     ],
     [
      7,
      7
     ],
     [
      7,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      5
     ],
     [
      5,
      5
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      7
     ],
     [
      1,
      7
     ],
     [
      1,
      6
     ],
     [
      2,
      6
     ],
     [
      2,
      5
     ],
     [
      3,
      5
     ],
     [
      3,
      4
     ],
     [
      4,
      4
     ],
     [
      4,
      3
     ],
     [
      6,
      3
     ],
     [
      6,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      3
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      7
     ],
     [
      8,
      7
     ],
     [
      8,
      6
     ],
     [
      7,
      6
     ],
     [
      7,
      5
     ],
     [
      6,
      5
     ],
     [
      6,
      4
     ],
     [
      7,
      4
     ],
     [
      7,
      5
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      5
     ],
     [
      8,
      5
     ],
     [
      8,
      6
     ],
     [
      9,
      6
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      5
     ],
     [
      8,
      5
     ],
     [
      8,
      4
     ],
     [
      7,
      4
     ],
     [
      7,
      3
     ],
     [
      6,
      3
     ],
     [
      6,
      2
     ],
     [
      7,
      2
     ],
     [
      7,
      3
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      4
     ],
     [
      8,
      4
     ],
     [
      8,
      3
     ],
     [
      7,
      3
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      3
     ],
     [
      8,
      3
     ],
     [
      8,
      2
     ],
     [
      7,
      2
     ],
     [
      7,
      1
     ],
     [
      8,
      1
     ],
     [
      8,
      2
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8,
      2
     ],
     [
      9,
      2
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      1
     ],
     [
      8,
      1
     ],
     [
      8,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      3
     ],
     [
      5,
      2
     ],
     [
      6,
      2
     ],
     [
      6,
      1
     ],
     [
      7,
      1
     ],
     [
      7,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      6
     ],
     [
      1,
      6
     ],
     [
      1,
      5
     ],
     [
      2,
      5
     ],
     [
      2,
      4
     ],
     [
      3,
      4
     ],
     [
      3,
      3
     ],
     [
      4,
      3
     ],
     [
      4,
      2
     ],
     [
      5,
      2
     ],
     [
      5,
      1
     ],
     [
      6,
      1
     ],
     [
      6,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      5
     ],
     [
      1,
      5
     ],
     [
      1,
      4
     ],
     [
      2,
      4
     ],
     [
      2,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      2
     ],
     [
      4,
      2
     ],
     [
      4,
      1
     ],
     [
      5,
      1
     ],
     [
      5,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      4
     ],
     [
      1,
      4
     ],
     [
      1,
      3
     ],
     [
      2,
      3
     ],
     [
      2,
      2
     ],
     [
      3,
      2
     ],
     [
      3,
      1
     ],
     [
      4,
      1
     ],
     [
      4,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      3
     ],
     [
      1,
      3
     ],
     [
      1,
      2
     ],
     [
      2,
      2
     ],
     [
      2,
      1
     ],
     [
      3,
      1
     ],
     [
      3,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      2
     ],
     [
      1,
      2
     ],
     [
      1,
      1
     ],
     [
      2,
      1
     ],
     [
      2,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      1
     ],
     [
      1,
      1
     ],
     [
      1,
      0
     ]
    ],
    "color": "#e4e4e4ff",
    "thickness": 1,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      9
     ],
     [
      3,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      9
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      3
     ],
     [
      9,
      3
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      3
     ],
     [
      6,
      3
     ],
     [
      6,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      9
     ],
     [
      3,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      9
     ]
    ],
    "color": "#dcdcdcff",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      3
     ],
     [
      9,
      3
     ]
    ],
    "color": "#dcdcdcff",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      3
     ],
     [
      6,
      3
     ],
     [
      6,
      0
     ]
    ],
    "color": "#dcdcdcff",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      0
     ]
    ],
    "color": "#dcdcdcff",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      0
     ],
     [
      3,
      -0.5
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      0
     ],
     [
      6,
      -0.5
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      9
     ],
     [
      6,
      9.5
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      9
     ],
     [
      3,
      9.5
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      3
     ],
     [
      -0.5,
      3
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      6
     ],
     [
      -0.5,
      6
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      3
     ],
     [
      9.5,
      3
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      6
     ],
     [
      9.5,
      6
     ]
    ],
    "color": "#0900c93a",
    "thickness": 3,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      3
     ],
     [
      5,
      3
     ],
     [
      5,
      5
     ],
     [
      6,
      5
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      4
     ],
     [
      2,
      4
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      5
     ],
     [
      3,
      5
     ],
     [
      3,
      6
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      1
     ],
     [
      3,
      1
     ],
     [
      3,
      2
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2
     ],
     [
      6,
      2
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      2
     ],
     [
      7,
      3
     ],
     [
      8,
      3
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      6
     ],
     [
      4,
      7
     ],
     [
      7,
      7
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      7
     ],
     [
      2,
      7
     ],
     [
      2,
      5
     ],
     [
      1,
      5
     ],
     [
      1,
      4
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      3
     ],
     [
      1,
      1
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      3
     ],
     [
      2,
      3
     ],
     [
      2,
      0
     ],
     [
      9,
      0
     ],
     [
      9,
      9
     ],
     [
      0,
      9
     ],
     [
      0,
      0
     ],
     [
      2,
      0
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      4
     ],
     [
      8,
      4
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      6
     ],
     [
      8,
      6
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      8
     ],
     [
      8,
      8
     ],
     [
      8,
      7
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      8
     ],
     [
      4,
      8
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      8
     ],
     [
      2,
      8
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      6
     ],
     [
      1,
      7
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      6
     ],
     [
      6,
      6
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      6
     ],
     [
      7,
      5
     ],
     [
      8,
      5
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      5
     ],
     [
      7,
      4
     ],
     [
      6,
      4
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      1
     ],
     [
      6,
      1
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      1
     ],
     [
      8,
      1
     ],
     [
      8,
      2
     ]
    ],
    "color": "#3059f3ff",
    "thickness": 12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.611,
      6.944
     ],
     [
      3.5,
      7.056
     ],
     [
      3.389,
      6.944
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6.611,
      5.944
     ],
     [
      6.5,
      6.056
     ],
     [
      6.389,
      5.944
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.611,
      0.944
     ],
     [
      1.5,
      1.056
     ],
     [
      1.389,
      0.944
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.944,
      2.389
     ],
     [
      3.056,
      2.5
     ],
     [
      2.944,
      2.611
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8.611,
      8.056
     ],
     [
      8.5,
      7.944
     ],
     [
      8.389,
      8.056
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8.611,
      7.056
     ],
     [
      8.5,
      6.944
     ],
     [
      8.389,
      7.056
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.611,
      7.944
     ],
     [
      4.5,
      8.056
     ],
     [
      4.389,
      7.944
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 13,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.611,
      6.944
     ],
     [
      3.5,
      7.056
     ],
     [
      3.389,
      6.944
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6.611,
      5.944
     ],
     [
      6.5,
      6.056
     ],
     [
      6.389,
      5.944
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.611,
      0.944
     ],
     [
      1.5,
      1.056
     ],
     [
      1.389,
      0.944
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.944,
      2.389
     ],
     [
      3.056,
      2.5
     ],
     [
      2.944,
      2.611
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8.611,
      8.056
     ],
     [
      8.5,
      7.944
     ],
     [
      8.389,
      8.056
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8.611,
      7.056
     ],
     [
      8.5,
      6.944
     ],
     [
      8.389,
      7.056
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.611,
      7.944
     ],
     [
      4.5,
      8.056
     ],
     [
      4.389,
      7.944
     ]
    ],
    "color": "#730dc5ff",
    "thickness": 5,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.5,
      -0.5
     ],
     [
      6.5,
      -0.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 10,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9.5,
      2.5
     ],
     [
      9.5,
      6.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 10,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.5,
      9.5
     ],
     [
      6.5,
      9.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 10,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      -0.5,
      2.5
     ],
     [
      -0.5,
      6.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 10,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": []
 }
};
