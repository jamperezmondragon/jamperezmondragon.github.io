// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "z44mcyjr8y",
 "title": "Miracle Of Eleven",
 "author": "Aad van de Wetering",
 "urlOriginal": "https://sudokupad.app/z44mcyjr8y",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Además:\n\nVecinos ortogonales (casillas que comparten un lado) nunca son consecutivos.\n\nEn las diagonales positivas (las que suben de suroeste a noreste), dos vecinos diagonales suman a lo más 11.",
 "hints": [
  "Clasifica en chicos {1-3}, medianos {4-6} y grandes {7-9}: ¿quién puede estar en diagonal con un 9 si la suma es a lo más 11?",
  "Un 7 no admite 6 ni 8 a los lados (consecutivos), y en diagonal solo acepta 4 o menos. Los grandes viven rodeados de chicos.",
  "El acomodo se repite en diagonal con periodo 3. Encuentra el patrón; los dos dados te fijan la fase."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Orthogonal neighbours (ie cells sharing an edge) are never consecutive. In the positive diagonals (ie diagonals sloping from SW to NE), the sum of neighbours is at most 11.",
 "givens": [
  [
   3,
   4,
   3
  ],
  [
   5,
   4,
   8
  ]
 ],
 "solution": "752693184184275369369418527527936841841752693693184275275369418418527936936841752",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [],
  "arrows": [],
  "cages": [
   {
    "value": "solution: 752693184184275369369418527527936841841752693693184275275369418418527936936841752"
   }
  ]
 }
};
