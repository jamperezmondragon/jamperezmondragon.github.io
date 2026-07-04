// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "hx8auhnjpp",
 "title": "Cross Product",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/hx8auhnjpp",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal.\n\nTodas las diagonales marcadas tienen el mismo producto: multiplica los dígitos de cada diagonal y da lo mismo en las cuatro.",
 "hints": [
  "La diagonal de DOS casillas dice que el producto es a lo más 5×6 = 30. Las de CINCO casillas piden partir ese mismo producto en cinco factores del 1 al 6…",
  "El 5 es primo: si aparece en una diagonal, el producto es múltiplo de 5 — y entonces TODAS las diagonales necesitarían su 5. ¿Caben tantos?",
  "Prueba productos muy factorizables (12, 24…): factorízalos en 2 factores y también en 5. El que sobreviva en todas las diagonales, gana."
 ],
 "_rulesOrig": "Normal 6x6 Sudoku rules apply.\nEvery indicated diagonal has the same product.",
 "givens": [],
 "solution": "143562625134452316316245261453534621",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [],
  "arrows": [
   {
    "wayPoints": [
     [
      -0.266,
      3.734
     ],
     [
      -0.068,
      3.932
     ]
    ],
    "headLength": 0.18,
    "color": "#000000",
    "thickness": 2.56
   },
   {
    "wayPoints": [
     [
      1.734,
      -0.266
     ],
     [
      1.932,
      -0.068
     ]
    ],
    "headLength": 0.18,
    "color": "#000000",
    "thickness": 2.56
   },
   {
    "wayPoints": [
     [
      5.266,
      -0.266
     ],
     [
      5.068,
      -0.068
     ]
    ],
    "headLength": 0.18,
    "color": "#000000",
    "thickness": 2.56
   },
   {
    "wayPoints": [
     [
      6.266,
      0.734
     ],
     [
      6.068,
      0.932
     ]
    ],
    "headLength": 0.18,
    "color": "#000000",
    "thickness": 2.56
   }
  ],
  "cages": []
 }
};
