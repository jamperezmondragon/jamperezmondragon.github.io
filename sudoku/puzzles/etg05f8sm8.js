// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "etg05f8sm8",
 "title": "Intro: Círculos contadores",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/etg05f8sm8",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Llena el tablero con los dígitos del 1 al 4 sin repetir en ninguna fila, columna ni caja.\n\nCÍRCULOS CONTADORES: cualquier dígito dentro de un círculo dice exactamente cuántos círculos contienen ese dígito. Por ejemplo, si hay un 2 en algún círculo, hay exactamente dos círculos con 2.",
 "hints": [
  "Hay 9 círculos y solo dígitos 1-4. ¿Cuántos círculos con 4, con 3, con 2 y con 1 pueden coexistir sin pasarse de 9?",
  "4+3+2 = 9 exactos: cuatro círculos con 4, tres con 3, dos con 2… ¡y ninguno con 1!"
 ],
 "_rulesOrig": "SUDOKU\n- Fill the grid with the digits 1-4 so that no digit repeats in a row, column, or box.\n\nCOUNTING CIRCLES\nAny digit in a circle indicates exactly how many circles contain that digit. As an example, if there is a 2 in any circle, there are exactly two 2s in circles in the puzzle.",
 "givens": [],
 "solution": "3421124341322314",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     3.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     2.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     3.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     1.5,
     3.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     1.5,
     2.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     3.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     1.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     0.5,
     0.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   },
   {
    "stroke": "none",
    "angle": 0,
    "center": [
     0.5,
     1.5
    ],
    "width": 0.82,
    "height": 0.82,
    "thickness": 1,
    "rounded": true,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000"
   }
  ],
  "overlays": [],
  "lines": [],
  "arrows": [],
  "cages": []
 }
};
