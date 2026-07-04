// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "JqQHr2HJjg",
 "title": "Nadir",
 "author": "Barrels",
 "urlOriginal": "https://sudokupad.app/JqQHr2HJjg",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Sobre cada termómetro, los dígitos crecen desde el bulbo (el círculo).\n\nAdemás, una casilla escondida del tablero es el NADIR: alejándote de ella en línea recta en CUALQUIER dirección (horizontal, vertical o diagonal), los dígitos van creciendo estrictamente hasta llegar al borde. Encontrar el nadir es parte del reto.",
 "hints": [
  "El nadir es menor que todo lo que lo rodea en las ocho direcciones… de hecho, dentro de su fila entera es el mínimo. ¿Qué dígito tiene que ser?",
  "Los termómetros también crecen: busca dónde chocarían la corriente de un termómetro con los rayos crecientes del nadir. Esos choques descartan casi todas las posiciones posibles.",
  "Con el nadir ubicado (y su 1 puesto), sigue la diagonal más larga que sale de él: es una escalera estricta de nueve pisos."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Along thermometers, digits must increase from the bulb end. One cell in the grid is the nadir. Cells must increase in value as they move away from the nadir in every straight-line direction (ie vertically, horizontally and diagonally) until they reach the edge of the grid.",
 "givens": [],
 "solution": "659843217134792856287615439321579684596481723748326195863257941972134568415968372",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     1.5,
     0.5
    ],
    "width": 0.7,
    "height": 0.7,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#CFCFCF",
    "rounded": true
   },
   {
    "center": [
     0.5,
     7.5
    ],
    "width": 0.7,
    "height": 0.7,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#CFCFCF",
    "rounded": true
   },
   {
    "center": [
     2.5,
     7.5
    ],
    "width": 0.7,
    "height": 0.7,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#CFCFCF",
    "rounded": true
   }
  ],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      1.5,
      0.5
     ],
     [
      6.5,
      0.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      0.5,
      7.5
     ],
     [
      0.5,
      2.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 10
   },
   {
    "wayPoints": [
     [
      2.5,
      7.5
     ],
     [
      2.5,
      6.5
     ],
     [
      3.5,
      6.5
     ],
     [
      3.5,
      5.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 10
   },
   {
    "color": "#CFCFCF",
    "thickness": 10
   }
  ],
  "arrows": [],
  "cages": []
 }
};
