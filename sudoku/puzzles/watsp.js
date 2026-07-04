// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "watsp",
 "title": "What About That Shadowy Place?",
 "author": "gdc",
 "urlOriginal": "https://sudokupad.app/adventure/580-watsp",
 "size": 6,
 "boxes": null,
 "regions": null,
 "rules": "Construcción caótica 6×6: divide el tablero en 6 regiones de 6 casillas cada una; las casillas de una región deben estar conectadas entre sí por sus lados. Coloca los dígitos del 1 al 6 exactamente una vez en cada fila, columna y región. Descubrir dónde están las regiones es parte del reto.\n\nNiebla: algunas casillas están cubiertas de niebla y no puedes ver lo que contienen. La niebla se disipa alrededor de cada casilla donde coloques un dígito correcto. La idea es avanzar con lógica, no adivinar para ver si la niebla se quita.\n\nLos dígitos separados por un punto blanco son consecutivos. Los dígitos separados por un punto negro están en proporción 1:2 (uno es el doble del otro). Además, un punto negro separa casillas de regiones distintas, y un punto blanco une casillas de la misma región. No se dan necesariamente todos los puntos.",
 "hints": [
  "El faro te deja ver una casilla con dos puntos negros pegados: piensa qué cadenas de proporción 1:2 caben con dígitos del 1 al 6.",
  "El punto negro también dice que esas dos casillas son de regiones DISTINTAS: marca esas fronteras con la pluma desde el principio.",
  "Una cadena de tres casillas con dos puntos negros solo puede ser 1-2-4 o 4-2-1: la de en medio es un 2 seguro. Ponlo y deja que la niebla trabaje."
 ],
 "_rulesOrig": "6x6 Chaos Construction rules apply: Divide the grid into 6 orthogonally connected regions with 6 cells each. Place the digits 1-6 exactly once into every row, column, and region. It is up to the solver to determine where these regions are.\n\nFog: Some cells are hidden by \"fog\" meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct.\n\nDigits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. Not all dots are necessarily given.\n\nCells separated by a black dot are in different regions. Cells separated by a white dot are in the same region.",
 "givens": [
  [
   4,
   1,
   6
  ]
 ],
 "solution": "421563532146143625316452265314654231",
 "fog": {
  "lights": [
   [
    0,
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
     0.5,
     1
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     0.5,
     2
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     3,
     2.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     1,
     5.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     1,
     2.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "text": "",
    "color": "#FFFFFF",
    "rounded": true,
    "backgroundColor": "#000000"
   },
   {
    "center": [
     0.5,
     4
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     2,
     2.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     5.5,
     1
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     1.5,
     3
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "center": [
     5,
     3.5
    ],
    "width": 0.34,
    "height": 0.34,
    "stroke": "none",
    "thickness": 1,
    "text": "",
    "color": "#000000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
