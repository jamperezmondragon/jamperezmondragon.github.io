// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "jcdh680q0f",
 "title": "Forcing",
 "author": "Kaktuslav",
 "urlOriginal": "https://sudokupad.app/jcdh680q0f",
 "size": 9,
 "boxes": null,
 "regions": null,
 "rules": "Divide el tablero en nueve regiones de nueve casillas conectadas por sus lados (no hay cajas dadas: ¡las regiones las descubres tú!) y coloca los dígitos del 1 al 9 una vez en cada fila, columna y región.\n\nEn cada región, márcale un círculo a la casilla más a la izquierda de su fila más alta. El dígito de cada casilla con círculo cuenta cuántas casillas de SU PROPIA región se ven en su columna, contándose a sí misma (las fronteras de región bloquean la vista).\n\nY el broche: las nueve casillas con círculo forman entre ellas una región extra — están conectadas por sus lados y contienen los dígitos del 1 al 9 una vez cada uno.\n\nUsa la pluma para las fronteras y los colores para distinguir regiones.",
 "hints": [
  "¿Qué casilla es un círculo sin discusión? Mira la esquina superior izquierda del tablero: en su región no puede haber nada más arriba ni más a la izquierda que ella.",
  "¿Qué significa un 9 en un círculo? Que la columna entera de esa casilla, hacia abajo, es de su región. ¿Y un 1? Que justo debajo del círculo su región se termina.",
  "Los nueve círculos forman su propia región conexa de 1 a 9. Si cada región pone su círculo en su esquina noroeste, dibuja cómo tienen que escalonarse las regiones para que los nueve círculos queden pegados entre sí: sale una escalera diagonal."
 ],
 "_rulesOrig": "Divide the grid into nine non-overlapping regions, each consisting of nine orthogonally connected cells. Place the digits 1–9 once each in every row, column, and region. In each region, place a circle in the leftmost cell of its topmost row. Every circled digit counts how many cells of its own region (including itself) are visible in its column (region borders block the view). The nine circled cells together form an extra region, i.e. they are orthogonally connected and contain the digits 1–9 once each.",
 "givens": [],
 "solution": "918765432187654329876543291765432918654329187543291876432918765329187654291876543",
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
