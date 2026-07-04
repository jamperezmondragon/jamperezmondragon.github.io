// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "bbiusybpg3",
 "title": "Intro: Anticaballo",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/bbiusybpg3",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nANTICABALLO: si dos casillas están a salto de caballo de ajedrez (dos pasos en una dirección y uno en la perpendicular), no pueden tener el mismo dígito.\n\nPUNTOS: blanco = consecutivos; negro = uno es el doble del otro.",
 "hints": [
  "Marca con lápiz las casillas que el 3 dado ataca a salto de caballo: ahí no va ningún 3.",
  "En un 4×4 el anticaballo es brutal: cada dígito colocado tacha muchísimo. Coloca el segundo 3 y mira el efecto dominó."
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nANTIKNIGHT\n- If two cells are a knight's move apart (i.e. two steps horizontally and one step vertically, or vice versa), then they cannot have the same digit.\n\nPARTIAL KROPKI\n- A white dot between two cells requires that the value in one cell is exactly 1 greater than the value of the other cell.\n- A black dot between two cells requires that the value in one cell is exactly double the value of the other cell.",
 "givens": [
  [
   0,
   0,
   3
  ]
 ],
 "solution": "3421124321344312",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "stroke": "none",
    "center": [
     0.5,
     3
    ],
    "width": 0.34,
    "height": 0.34,
    "thickness": 1,
    "text": "",
    "color": "#000",
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "center": [
     3,
     0.5
    ],
    "width": 0.34,
    "height": 0.34,
    "text": "",
    "color": "#fff",
    "rounded": true,
    "backgroundColor": "#000000"
   }
  ],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
