// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "wcq666h4y2",
 "title": "Hamiltonian Killer Thermo",
 "author": "Kaktuslav",
 "urlOriginal": "https://sudokupad.app/wcq666h4y2",
 "size": 9,
 "boxes": null,
 "regions": null,
 "rules": "Coloca los dígitos del 1 al 9 una vez en cada fila y columna (¡no hay cajas!). Los dígitos no se repiten dentro de una jaula.\n\nImagina un camino que recorre TODO el tablero pasando por cada casilla exactamente una vez, moviéndose entre casillas vecinas por los lados. El camino entra a cada una de las 27 jaulas una sola vez (la recorre completa antes de salir). Y funciona como termómetro de jaulas: conforme el camino avanza, las sumas de las jaulas que va visitando crecen estrictamente.\n\n(El sitio revisa solo los dígitos; si te ayuda, dibuja el camino con la pluma.)",
 "hints": [
  "Suma todo el tablero: nueve filas de 45. Ahora suma lo MENOS que pueden valer 27 sumas de jaulas todas distintas (la más chica vale al menos 2, la que sigue al menos 3…). Compara.",
  "2 + 3 + 4 + ⋯ + 28 = 405 = exactamente el total del tablero. No hay holgura: las 27 jaulas suman exactamente 2, 3, 4, …, 28, un valor cada una.",
  "¿Cuánto suma entonces la jaula de una sola casilla? ¿Y dónde tiene que EMPEZAR el camino? Las jaulas baratas del arranque amarran esa esquina enterita."
 ],
 "_rulesOrig": "Place the digits 1–9 exactly once in each row and each column of the grid. \nDraw a directed path that moves orthogonally between cell centers and visits every cell of the grid exactly once. Each of the 27 cages can be entered by the path at most once (i.e. the path must visit all cells of a cage in a single continuous run before leaving it).\nThe path acts as a thermometer with respect to cage totals: as the path moves away from its starting cell, the sums of the cages it visits must strictly increase.\nDigits may not repeat within a cage.",
 "givens": [],
 "solution": "231469587123645879512378964346257198687934215795812436864193752958726341479581623",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      0,
      1
     ],
     [
      9,
      1
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      2
     ],
     [
      8,
      2
     ],
     [
      8,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      3
     ],
     [
      8,
      3
     ],
     [
      8,
      2
     ],
     [
      7,
      2
     ],
     [
      7,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      4
     ],
     [
      8,
      4
     ],
     [
      8,
      3
     ],
     [
      7,
      3
     ],
     [
      7,
      2
     ],
     [
      6,
      2
     ],
     [
      6,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      5
     ],
     [
      8,
      5
     ],
     [
      8,
      4
     ],
     [
      7,
      4
     ],
     [
      7,
      3
     ],
     [
      6,
      3
     ],
     [
      6,
      2
     ],
     [
      5,
      2
     ],
     [
      5,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      6
     ],
     [
      8,
      6
     ],
     [
      8,
      5
     ],
     [
      7,
      5
     ],
     [
      7,
      4
     ],
     [
      6,
      4
     ],
     [
      6,
      3
     ],
     [
      5,
      3
     ],
     [
      5,
      2
     ],
     [
      4,
      2
     ],
     [
      4,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      7
     ],
     [
      8,
      7
     ],
     [
      8,
      6
     ],
     [
      7,
      6
     ],
     [
      7,
      5
     ],
     [
      6,
      5
     ],
     [
      6,
      4
     ],
     [
      5,
      4
     ],
     [
      5,
      3
     ],
     [
      4,
      3
     ],
     [
      4,
      2
     ],
     [
      3,
      2
     ],
     [
      3,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      9,
      8
     ],
     [
      8,
      8
     ],
     [
      8,
      7
     ],
     [
      7,
      7
     ],
     [
      7,
      6
     ],
     [
      6,
      6
     ],
     [
      6,
      5
     ],
     [
      5,
      5
     ],
     [
      5,
      4
     ],
     [
      4,
      4
     ],
     [
      4,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      2
     ],
     [
      2,
      2
     ],
     [
      2,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      8,
      9
     ],
     [
      8,
      8
     ],
     [
      7,
      8
     ],
     [
      7,
      7
     ],
     [
      6,
      7
     ],
     [
      6,
      6
     ],
     [
      5,
      6
     ],
     [
      5,
      5
     ],
     [
      4,
      5
     ],
     [
      4,
      4
     ],
     [
      3,
      4
     ],
     [
      3,
      3
     ],
     [
      2,
      3
     ],
     [
      2,
      2
     ],
     [
      1,
      2
     ],
     [
      1,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      7,
      9
     ],
     [
      7,
      8
     ],
     [
      6,
      8
     ],
     [
      6,
      7
     ],
     [
      5,
      7
     ],
     [
      5,
      6
     ],
     [
      4,
      6
     ],
     [
      4,
      5
     ],
     [
      3,
      5
     ],
     [
      3,
      4
     ],
     [
      2,
      4
     ],
     [
      2,
      3
     ],
     [
      1,
      3
     ],
     [
      1,
      2
     ],
     [
      0,
      2
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      6,
      9
     ],
     [
      6,
      8
     ],
     [
      5,
      8
     ],
     [
      5,
      7
     ],
     [
      4,
      7
     ],
     [
      4,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      5
     ],
     [
      2,
      5
     ],
     [
      2,
      4
     ],
     [
      1,
      4
     ],
     [
      1,
      3
     ],
     [
      0,
      3
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      4
     ],
     [
      1,
      4
     ],
     [
      1,
      5
     ],
     [
      2,
      5
     ],
     [
      2,
      6
     ],
     [
      1,
      6
     ],
     [
      1,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      5
     ],
     [
      0,
      5
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3,
      9
     ],
     [
      3,
      8
     ],
     [
      4,
      8
     ],
     [
      4,
      9
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      9
     ],
     [
      2,
      6
     ],
     [
      3,
      6
     ],
     [
      3,
      7
     ],
     [
      2,
      7
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      7
     ],
     [
      1,
      7
     ],
     [
      1,
      6
     ],
     [
      0,
      6
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      5,
      9
     ],
     [
      5,
      8
     ],
     [
      4,
      8
     ],
     [
      4,
      7
     ],
     [
      3,
      7
     ],
     [
      3,
      8
     ],
     [
      1,
      8
     ],
     [
      1,
      7
     ],
     [
      0,
      7
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      9
     ],
     [
      1,
      8
     ],
     [
      0,
      8
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 2.56,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      0
     ],
     [
      9,
      0
     ],
     [
      9,
      9
     ],
     [
      0,
      9
     ],
     [
      0,
      0
     ]
    ],
    "color": "#FFFFFF",
    "thickness": 6.4,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": [
   {
    "cells": [
     [
      1,
      0
     ],
     [
      1,
      1
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      0,
      0
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      0,
      1
     ],
     [
      0,
      2
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      2
     ],
     [
      2,
      2
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      2,
      0
     ],
     [
      2,
      1
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      3,
      0
     ],
     [
      3,
      1
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      3,
      2
     ],
     [
      3,
      3
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      3
     ],
     [
      2,
      3
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      0,
      3
     ],
     [
      0,
      4
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      4
     ],
     [
      2,
      4
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      3,
      4
     ],
     [
      3,
      5
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      5
     ],
     [
      2,
      5
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      0,
      5
     ],
     [
      0,
      6
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      0,
      7
     ],
     [
      0,
      8
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      7
     ],
     [
      1,
      8
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      1,
      6
     ],
     [
      2,
      6
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      2,
      7
     ],
     [
      2,
      8
     ],
     [
      3,
      8
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      3,
      6
     ],
     [
      3,
      7
     ],
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
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      4,
      3
     ],
     [
      5,
      3
     ],
     [
      5,
      4
     ],
     [
      5,
      5
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      7,
      6
     ],
     [
      8,
      3
     ],
     [
      8,
      4
     ],
     [
      8,
      5
     ],
     [
      8,
      6
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      7,
      2
     ],
     [
      7,
      3
     ],
     [
      8,
      2
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      6,
      2
     ],
     [
      6,
      3
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
      7,
      4
     ],
     [
      7,
      5
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      4,
      0
     ],
     [
      4,
      1
     ],
     [
      4,
      2
     ],
     [
      5,
      2
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      5,
      0
     ],
     [
      5,
      1
     ],
     [
      6,
      1
     ],
     [
      7,
      1
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      6,
      0
     ],
     [
      7,
      0
     ],
     [
      8,
      0
     ],
     [
      8,
      1
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      4,
      7
     ],
     [
      4,
      8
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
      5,
      8
     ],
     [
      6,
      8
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   },
   {
    "cells": [
     [
      6,
      6
     ],
     [
      6,
      7
     ],
     [
      7,
      7
     ],
     [
      7,
      8
     ],
     [
      8,
      7
     ],
     [
      8,
      8
     ]
    ],
    "outlineC": "#6a1b9aff",
    "borderColor": "#7c37a7"
   }
  ]
 },
 "hideGrid": true
};
