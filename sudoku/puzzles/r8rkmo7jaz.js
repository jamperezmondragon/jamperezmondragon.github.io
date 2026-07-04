// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "r8rkmo7jaz",
 "title": "RAT RUN 2: Tenacity",
 "author": "Marty Sears",
 "urlOriginal": "https://sudokupad.app/r8rkmo7jaz",
 "size": 8,
 "boxes": [
  2,
  4
 ],
 "regions": null,
 "rules": "Sudoku 8×8 normal: dígitos del 1 al 8 sin repetir en cada fila, columna y caja de 4×2.\n\nOBJETIVO DEL EXPERIMENTO: Finkz la rata 🐀 tiene que llegar al pastelito 🧁 encontrando el camino por el laberinto. El camino es una línea que serpentea de centro a centro de casilla, sin visitar ninguna casilla dos veces, sin cruzarse a sí misma y sin atravesar los muros gruesos.\n\nAdemás de moverse en horizontal y vertical, Finkz puede avanzar en diagonal si tiene un espacio libre de 2×2 para hacerlo, pero nunca puede pasar en diagonal rozando la punta redondeada de un muro.\n\nCONDICIÓN DEL EXPERIMENTO: en este experimento, cada dos casillas seguidas del camino deben sumar al menos 10.\n\nMarca el camino con la pluma: el sitio revisa solo los dígitos, así que el camino es tu andamio para deducirlos.",
 "hints": [
  "Haz la lista de parejas que suman 10 o más. ¿Quién puede acompañar al 1? La pareja más grande posible es 7+8…",
  "¡Exacto: nadie! El 1 nunca pisa el camino: los unos son paredes invisibles. Marca los pasillos obligados del laberinto — ahí no va el 1.",
  "En un pasillo forzado, junto a un 2 solo cabe un 8, y junto a un 3 solo un 7 o un 8. Arranca en el rincón de Finkz y deja que las sumas hagan el resto."
 ],
 "_rulesOrig": "Normal 8x8 sudoku rules apply; fill the grid with the digits 1-8 so that no digit repeats in a row, column, or marked 4x2 box.\n\nAIM OF EXPERIMENT: \nFinkz the rat must reach the cupcake by finding a path through the maze. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls.\n\nAs well as moving orthogonally, Finkz may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.\n\nTEST CONSTRAINT:\nIn this experiment, any two adjacent cells along the correct path must sum to at least ten.",
 "givens": [],
 "solution": "5467381218237564657412382138564773826451465127838215437637468125",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     7.65,
     7.5
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
     6.65,
     1.5
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
     4,
     1
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     1,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     2,
     2
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     4,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     3,
     3
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     4,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     5,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     6,
     7
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     5,
     5
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
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
    "backgroundColor": "#c6a149ff"
   },
   {
    "center": [
     5,
     4
    ],
    "width": 0.32,
    "height": 0.32,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#c6a149ff"
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
     1
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
     2
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
    "backgroundColor": "#00000030"
   },
   {
    "center": [
     8,
     4
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
     4,
     0
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     1
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     2
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     4
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
     4
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
     4
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
     4
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
     4
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
     5,
     4
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
     5.2,
     4
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
     5.4,
     4
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
     5.6,
     4
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
     5.8,
     4
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     5
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     7
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
     4,
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
     4,
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
     4,
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
     4,
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
     4,
     8
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
     5
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
     6,
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
     7
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
     8
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
     2,
     0
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     1
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     2
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     4
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     5
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     7
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
     2,
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
     2,
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
     2,
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
     2,
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
     2,
     8
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     4
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
     1,
     4
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
     4
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
     4
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
     4
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
     4
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
     0,
     4
    ],
    "width": 0.1,
    "height": 0.1,
    "stroke": "none",
    "angle": 0,
    "rounded": true,
    "backgroundColor": "#00000030"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      -0.25,
      8.25
     ],
     [
      8.25,
      8.25
     ],
     [
      8.25,
      -0.25
     ],
     [
      -0.25,
      -0.25
     ],
     [
      -0.25,
      8.25
     ]
    ],
    "color": "#f1d6a9ff",
    "thickness": 20
   },
   {
    "wayPoints": [
     [
      2,
      0
     ],
     [
      2,
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      0
     ],
     [
      4,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      4,
      4
     ],
     [
      8,
      4
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
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
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 8,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      0
     ],
     [
      1,
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
      0,
      7
     ],
     [
      3,
      7
     ],
     [
      3,
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
      0,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      7
     ],
     [
      5,
      7
     ],
     [
      5,
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
      0,
      5
     ],
     [
      3,
      5
     ],
     [
      3,
      6
     ],
     [
      5,
      6
     ],
     [
      5,
      7
     ],
     [
      7,
      7
     ],
     [
      7,
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
      5,
      6
     ],
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
      3
     ],
     [
      0,
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
      5,
      5
     ],
     [
      5,
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
      0,
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
      5
     ],
     [
      7,
      5
     ],
     [
      7,
      3
     ],
     [
      5,
      3
     ],
     [
      5,
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
      0,
      1
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
      3
     ],
     [
      7,
      3
     ],
     [
      7,
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
      8,
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
      2,
      0
     ],
     [
      2,
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      0
     ],
     [
      4,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      4,
      4
     ],
     [
      8,
      4
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 6,
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
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      0
     ],
     [
      2,
      8
     ]
    ],
    "color": "#cbcbcb4e",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      0
     ],
     [
      4,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#cbcbcb4e",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      4,
      4
     ],
     [
      8,
      4
     ]
    ],
    "color": "#cbcbcb4e",
    "thickness": 6,
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
      8
     ]
    ],
    "color": "#cbcbcb4e",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      -0.5
     ],
     [
      4,
      0
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      -0.5
     ],
     [
      6,
      0
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8,
      4
     ],
     [
      8.5,
      4
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      8
     ],
     [
      6,
      8.5
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      4,
      8.5
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      8
     ],
     [
      2,
      8.5
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      -0.5,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      -0.5
     ],
     [
      2,
      0
     ]
    ],
    "color": "#c6a14971",
    "thickness": 6,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      3
     ],
     [
      7,
      2
     ],
     [
      6,
      2
     ],
     [
      6,
      0
     ],
     [
      8,
      0
     ],
     [
      8,
      8
     ],
     [
      0,
      8
     ],
     [
      0,
      6
     ],
     [
      1,
      6
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
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
      1
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      0
     ],
     [
      0,
      0
     ],
     [
      0,
      6
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      8
     ],
     [
      6,
      7
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      8
     ],
     [
      4,
      5
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
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
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      7
     ],
     [
      2,
      3
     ],
     [
      1,
      3
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      5
     ],
     [
      1,
      5
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      7
     ],
     [
      7,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      1
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      3
     ],
     [
      4,
      1
     ],
     [
      1,
      1
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      4
     ],
     [
      3,
      4
     ],
     [
      3,
      7
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      4
     ],
     [
      3,
      3
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      2
     ],
     [
      2,
      2
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      5
     ],
     [
      6,
      5
     ],
     [
      6,
      6
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      6
     ],
     [
      5,
      7
     ]
    ],
    "color": "#c6a149ff",
    "thickness": 14,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.5,
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
      8.5,
      3.5
     ],
     [
      8.5,
      4.5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 10,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6.5,
      8.5
     ],
     [
      1.5,
      8.5
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
      3.5
     ],
     [
      -0.5,
      4.5
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
