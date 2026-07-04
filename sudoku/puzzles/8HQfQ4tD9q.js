// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "8HQfQ4tD9q",
 "title": "Difference Of Squares",
 "author": "MathGuy_12",
 "urlOriginal": "https://sudokupad.app/8HQfQ4tD9q",
 "size": 9,
 "boxes": [
  3,
  3
 ],
 "regions": null,
 "rules": "Sudoku 9×9 normal. Los dígitos de cada jaula suman el valor o la expresión de su esquina. X y Y son enteros positivos con X > Y, los mismos en todo el tablero: descubrir cuánto valen es parte del reto. Dentro de una jaula los dígitos pueden repetirse (si las demás reglas lo permiten).\n\nFlechas: los dígitos sobre una flecha suman el dígito del círculo del que sale.\n\nLíneas moradas: renban — dígitos consecutivos, sin repetir, en cualquier orden.",
 "hints": [
  "La jaula gigante suma X² y tiene 11 casillas. ¿Cuál es lo mínimo y lo máximo que pueden sumar 11 casillas de un sudoku (ojo con los repetidos por fila)? Eso encajona a X.",
  "X − Y cabe en UNA sola casilla: es un dígito del 1 al 9. Y hay una jaula de 7 casillas que suma Y². Tacha parejas (X, Y) imposibles.",
  "Quedan poquísimas parejas: prueba X = 8, Y = 7 y verás que todo respira. De ahí en adelante son jaulas de suma normales — empieza por la de Y² = 49."
 ],
 "_rulesOrig": "Normal sudoku rules apply. Digits in cages sum to the expression or value in the top left corner. X and Y are positive integers such that X > Y. Digits may repeat within cages if allowed by other rules. Digits along an arrow sum to the digit in that arrow's circle. Purple lines are \"renban\" lines. A renban line is a collection of consecutive non-repeating digits arranged in any order.",
 "givens": [],
 "solution": "572946381634851297981732564768429153459318672213567948825194736197683425346275819",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     4.5,
     7.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   },
   {
    "center": [
     7.5,
     4.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   },
   {
    "center": [
     8.5,
     8.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   },
   {
    "center": [
     2.5,
     6.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   },
   {
    "center": [
     3.5,
     3.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   },
   {
    "center": [
     6.5,
     2.5
    ],
    "width": 0.83,
    "height": 0.83,
    "borderColor": "#CFCFCF",
    "backgroundColor": "#FFFFFF",
    "rounded": true,
    "fontSize": 16,
    "text": ""
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      0.5,
      1.5
     ],
     [
      0.5,
      0.5
     ],
     [
      1.5,
      0.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      0.5,
      3.5
     ],
     [
      1.5,
      3.5
     ],
     [
      2.5,
      3.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      3.5,
      2.5
     ],
     [
      3.5,
      1.5
     ],
     [
      3.5,
      0.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      0.5,
      7.5
     ],
     [
      1.5,
      8.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      3.5,
      4.5
     ],
     [
      4.5,
      3.5
     ],
     [
      4.5,
      4.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      7.5,
      3.5
     ],
     [
      8.5,
      4.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   },
   {
    "wayPoints": [
     [
      8.5,
      5.5
     ],
     [
      7.5,
      6.5
     ]
    ],
    "color": "#D23BE7",
    "thickness": 13
   }
  ],
  "arrows": [
   {
    "wayPoints": [
     [
      4.22,
      7.78
     ],
     [
      3.5,
      8.5
     ],
     [
      2.5,
      8.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   },
   {
    "wayPoints": [
     [
      7.78,
      4.22
     ],
     [
      8.5,
      3.5
     ],
     [
      8.5,
      2.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   },
   {
    "wayPoints": [
     [
      8.22,
      8.22
     ],
     [
      7.5,
      7.5
     ],
     [
      6.5,
      7.5
     ],
     [
      7.5,
      6.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   },
   {
    "wayPoints": [
     [
      2.2199999999999998,
      6.22
     ],
     [
      1.5,
      5.5
     ],
     [
      0.5,
      4.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   },
   {
    "wayPoints": [
     [
      3.2199999999999998,
      3.2199999999999998
     ],
     [
      2.5,
      2.5
     ],
     [
      1.5,
      1.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   },
   {
    "wayPoints": [
     [
      6.22,
      2.2199999999999998
     ],
     [
      5.5,
      1.5
     ],
     [
      4.5,
      0.5
     ]
    ],
    "color": "#CFCFCF",
    "thickness": 5,
    "headLength": 0.3
   }
  ],
  "cages": [
   {
    "cells": [
     [
      6,
      0
     ],
     [
      6,
      1
     ],
     [
      6,
      2
     ]
    ],
    "value": 15
   },
   {
    "cells": [
     [
      0,
      8
     ],
     [
      1,
      8
     ]
    ],
    "value": "X"
   },
   {
    "cells": [
     [
      0,
      3
     ],
     [
      1,
      3
     ],
     [
      2,
      3
     ],
     [
      3,
      0
     ],
     [
      3,
      1
     ],
     [
      3,
      2
     ],
     [
      3,
      3
     ]
    ],
    "value": "Y ^ 2"
   },
   {
    "cells": [
     [
      6,
      3
     ]
    ],
    "value": "X - Y"
   },
   {
    "cells": [
     [
      8,
      7
     ]
    ],
    "value": "X - Y"
   },
   {
    "cells": [
     [
      8,
      0
     ],
     [
      8,
      1
     ]
    ],
    "value": "Y"
   },
   {
    "cells": [
     [
      4,
      4
     ],
     [
      4,
      5
     ],
     [
      4,
      6
     ],
     [
      5,
      4
     ],
     [
      5,
      5
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
      6,
      4
     ],
     [
      6,
      5
     ],
     [
      6,
      6
     ],
     [
      7,
      5
     ]
    ],
    "value": "X ^ 2"
   }
  ]
 }
};
