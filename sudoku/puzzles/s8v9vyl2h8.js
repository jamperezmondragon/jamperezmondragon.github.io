// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "s8v9vyl2h8",
 "title": "Parity Hexagons",
 "author": "Tinnifer",
 "urlOriginal": "https://sudokupad.app/s8v9vyl2h8",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal.\n\nAnti-caballo: dos casillas separadas por un salto de caballo de ajedrez no pueden tener el mismo dígito.\n\nLíneas de paridad: sobre una línea roja, los dígitos alternan par-impar.\n\nV: dos dígitos separados por una V suman 5. No se dan todas las V posibles.\n\nPunto negro: un dígito es el doble del otro.",
 "hints": [
  "Olvídate de los números un rato: pinta cada casilla PAR o IMPAR. Los hexágonos rojos alternan color al recorrerlos.",
  "Cada fila y columna tiene exactamente tres pares y tres impares. Con eso el coloreo casi se cierra solo.",
  "Punto negro con dígitos del 1 al 6: solo {1,2}, {2,4} o {3,6}. Y la V suma 5: siempre mezcla un par y un impar. Cruza eso con tu coloreo."
 ],
 "_rulesOrig": "Normal 6x6 sudoku rules apply.\n\nAnti-knight: cells separated by a chess knight's move cannot contain the same digit.\nParity lines: digits along a red line have alternating parity.\nX/V: digits separated by a V sum to 5; not all of these clues are necessarily given.\nKropki pairs: digits separated by a black dot have a ratio of 2:1.",
 "givens": [],
 "solution": "146523523146632415415632251364364251",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     2,
     1.5
    ],
    "width": 0.35,
    "height": 0.35,
    "stroke": "#000000",
    "text": "V",
    "fontSize": 14,
    "rounded": true,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     1.5,
     4
    ],
    "width": 0.35,
    "height": 0.35,
    "stroke": "#000000",
    "text": "V",
    "fontSize": 14,
    "rounded": true,
    "backgroundColor": "#FFFFFF"
   },
   {
    "center": [
     5.5,
     1
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      4.5,
      2.5
     ],
     [
      5.5,
      3.5
     ],
     [
      5.5,
      4.5
     ],
     [
      4.5,
      5.5
     ],
     [
      3.5,
      4.5
     ],
     [
      3.5,
      3.5
     ],
     [
      4.5,
      2.5
     ]
    ],
    "color": "#ff6868ff",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      0.5,
      1.5
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
      3.5,
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
      0.5,
      1.5
     ]
    ],
    "color": "#ff6868ff",
    "thickness": 10
   }
  ],
  "arrows": [],
  "cages": []
 }
};
