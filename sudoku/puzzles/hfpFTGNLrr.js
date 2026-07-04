// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "hfpFTGNLrr",
 "title": "The Dutch Miracle",
 "author": "Aad van de Wetering",
 "urlOriginal": "https://sudokupad.app/hfpFTGNLrr",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal, con solo dos dígitos dados y dos reglas sobre las diagonales positivas (las que suben de abajo-izquierda hacia arriba-derecha):\n\n1) En cada diagonal positiva no se repite ningún dígito.\n2) Dos dígitos vecinos en diagonal (los que se tocan por esa esquina) difieren en al menos 4.\n\nEso es todo. Milagrosamente, alcanza.",
 "hints": [
  "¿Qué parejas pueden ser vecinas en diagonal? Haz tu tablita de compatibilidades: al 5, por ejemplo, solo lo aguantan el 1 y el 9.",
  "Empieza en la esquina de los dos dados, donde las diagonales son cortitas y la regla de «sin repetir» aprieta más.",
  "Busca periodicidad: resuelve una diagonal y compárala con la siguiente. El acomodo se repite en escalera — en cuanto lo veas, el tablero se llena solo."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Along each positive diagonal (ie from SW to NE): 1) all the digits are different; and 2) adjacent digits (ie those touching at a corner) must have a difference of at least 4.",
 "givens": [
  [
   8,
   0,
   1
  ],
  [
   8,
   2,
   2
  ]
 ],
 "solution": "874192356396578124521346798768923541245781963913465287689217435457639812132854679",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
