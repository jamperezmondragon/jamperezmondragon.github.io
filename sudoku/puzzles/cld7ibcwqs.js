// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "cld7ibcwqs",
 "title": "El sudoku del alcaide",
 "author": "Elytron",
 "urlOriginal": "https://sudokupad.app/cld7ibcwqs",
 "size": 4,
 "boxes": [
  2,
  2
 ],
 "regions": null,
 "rules": "Tres lógicos magistrales son llevados a una prisión. En el centro del patio hay una tablilla de piedra con un sudoku tallado. Si cualquiera de los prisioneros lo resuelve, todos quedan libres.\n\nLas reglas de la tablilla:\n— Llena el tablero con 4 dígitos DISTINTOS elegidos de entre 0 y 9, sin repetir dígito en ninguna fila, columna ni caja 2×2 marcada.\n— El signo < apunta al menor de los dos dígitos.\n— Dentro de una jaula marcada, los dígitos no se repiten.\n\nAntes de mandar a los prisioneros a sus celdas separadas, el alcaide anuncia: «En su celda, cada uno encontrará un número diferente. Ese número es la suma de exactamente una de las jaulas de la tablilla. No les diré cuál jaula le toca a cada quien.»\n\nCada día al mediodía, los guardias llevan a los tres prisioneros al patio. Tienen prohibido comunicarse de cualquier forma. El alcaide da una sola orden: «Si ya dedujiste con absoluta certeza qué jaula corresponde a tu número, da un paso al frente ahora.»\n\nDía 1: el alcaide da la orden. Nadie se mueve. Los prisioneros vuelven a sus celdas.\nDía 2: la orden. Nadie se mueve.\nDía 3: la orden. Nadie se mueve.\nDía 4: la orden. Nadie se mueve.\nDía 5: la orden. Nadie se mueve.\nDía 6: la orden. Nadie se mueve.\nDía 7: el alcaide da la orden, esperando otro día de silencio. De pronto, DOS prisioneros dan un paso al frente al mismo tiempo.\n\nEl tercer prisionero —el que se quedó quieto— sonríe y dice: «Yo puedo resolver el sudoku.»\n\n¿Puedes tú hacer lo mismo?",
 "hints": [
  "Antes de la historia: los 4 dígitos NO están dados. Enumera qué tableros son posibles con las reglas de la tablilla (el <, las jaulas) según qué cuarteta de dígitos elijas.",
  "Cada día de silencio mata mundos: si un prisionero hubiera podido deducir su jaula ese día, lo habría dicho. ¿Qué números de celda quedan descartados el día 1? ¿Y el 2?",
  "El remate: el tercer prisionero NO sabe cuál es su jaula… pero en todos los mundos que le quedan, ¡el tablero es el mismo! Busca el único escenario donde eso pasa exactamente al séptimo día con dos adelantándose."
 ],
 "_rulesOrig": "Three master logicians are brought to a prison. In the center of the prison yard stands a stone tablet carved with a Sudoku grid. If any prisoner can solve it, they'll all go free.\n\nThe tablet's rules:\n- Fill the grid with 4 different digits selected from 0-9 such that no digit repeats in a row, column or marked 2×2 box.\n- The < sign points to the smaller of the two digits.\n- Within a marked cage, digits do not repeat \n\nBefore sending the prisoners to their separate cells, the Warden states: \"In your cells, you will each find a  different number. This number is the sum of exactly one of the cages on the tablet. I will not tell you which cage your number belongs to.\"\n\nEvery day at noon, the guards drag the three prisoners to the yard. They are forbidden from communicating in any way. The Warden issues a single command: \"If you have deduced with absolute certainty which cage matches your number, step forward now.\"\n\nDay 1: The Warden gives the command, but no one moves. The prisoners are returned to their cells.\nDay 2: The command is given. No one moves.\nDay 3: The command is given. No one moves.\nDay 4: The command is given. No one moves.\nDay 5: The command is given. No one moves.\nDay 6: The command is given. No one moves.\nDay 7: The Warden gives the command, expecting another day of silence. Suddenly, two prisoners step forward simultaneously.\n\nThe third prisoner—the one who remained standing still—smiles and says \"I can solve the Sudoku.\"\n\nCan you do the same?",
 "givens": [],
 "solution": "3027723003722703",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "overlays": [
   {
    "center": [
     2.5,
     1
    ],
    "width": 0,
    "height": 0.863,
    "stroke": "#ffffff",
    "text": "<",
    "fontSize": 28.8,
    "color": "#000000",
    "angle": 0,
    "rounded": true
   }
  ],
  "lines": [
   {
    "wayPoints": [
     [
      2,
      2
     ],
     [
      2,
      4
     ],
     [
      4,
      4
     ],
     [
      4,
      2
     ],
     [
      2,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 5.12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      4
     ],
     [
      0,
      4
     ],
     [
      0,
      0
     ],
     [
      2,
      0
     ],
     [
      2,
      2
     ],
     [
      0,
      2
     ]
    ],
    "color": "#000000",
    "thickness": 5.12,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2
     ],
     [
      4,
      0
     ],
     [
      2,
      0
     ]
    ],
    "color": "#000000",
    "thickness": 5.12,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": [
   {
    "cells": [
     [
      1,
      1
     ],
     [
      1,
      2
     ],
     [
      1,
      3
     ],
     [
      2,
      2
     ]
    ]
   },
   {
    "cells": [
     [
      3,
      1
     ],
     [
      3,
      2
     ]
    ]
   },
   {
    "cells": [
     [
      0,
      0
     ],
     [
      1,
      0
     ]
    ]
   }
  ]
 },
 "minDigit": 0
};
