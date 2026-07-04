// Generado por tools/convierte.js desde el SCL de SudokuPad.
// rules y hints se editan a mano (ver ANALISIS.md). NO regenerar encima.
window.PUZZLE = {
 "id": "575wand8lt",
 "title": "Area 51",
 "author": "Michael Lefkowitz",
 "urlOriginal": "https://sudokupad.app/575wand8lt",
 "size": 5,
 "boxes": null,
 "regions": null,
 "rules": "Cuadrado latino: coloca los dígitos del 1 al 5 exactamente una vez en cada fila y columna (no hay cajas).\n\nÁREA 51 — EXPEDIENTE CLASIFICADO: extiende la cerca hasta formar un lazo cerrado que no se toque a sí mismo (ni en diagonal). Dentro del área encerrada pasan cosas raras:\n· Si un dígito N aparece dentro del área, aparece exactamente N veces dentro de ella.\n· Todo lo que hay dentro del área suma 51.\n\nDibuja la cerca con la pluma; el sitio revisa solo los dígitos.",
 "hints": [
  "Si el 4 está dentro del área, aporta 4 casillas con 4, o sea 16 a la suma. ¿Qué números de la forma N×N pueden sumar 51 juntos?",
  "51 = 25 + 16 + 9 + 1: dentro viven todos los 5, cuatro 4, tres 3, un 1… y ningún 2. Son 13 casillas exactas.",
  "Cada fila tiene un 5, y los cinco 5 están dentro: el área toca las cinco filas. Con los pedazos de cerca dados, ya casi se cierra sola."
 ],
 "_rulesOrig": "LATIN SQUARE - Place the digits 1-5 once each in every row and column.\n\nAREA 51\n- Extend the fence into a loop that doesn't touch itself.\n- If a digit N appears inside the enclosed area at all, it appears exactly N times in the enclosed area.\n- The enclosed area sums to 51.",
 "givens": [],
 "solution": "3251415423243515314241235",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.1,
    "height": 5.1,
    "angle": 0,
    "backgroundColor": "#ece2d3ff"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.13,
    "height": 5.13,
    "thickness": 1.92,
    "angle": 0,
    "borderColor": "#fff6"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.16,
    "height": 5.16,
    "thickness": 3.84,
    "angle": 0,
    "borderColor": "#fff6"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.19,
    "height": 5.19,
    "thickness": 5.76,
    "angle": 0,
    "borderColor": "#fff6"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.22,
    "height": 5.22,
    "thickness": 7.68,
    "angle": 0,
    "borderColor": "#fff6"
   },
   {
    "center": [
     2.5,
     2.5
    ],
    "width": 5.25,
    "height": 5.25,
    "thickness": 9.6,
    "angle": 0,
    "borderColor": "#fff6"
   }
  ],
  "overlays": [],
  "lines": [
   {
    "wayPoints": [
     [
      0,
      1
     ],
     [
      1,
      1
     ],
     [
      1,
      2
     ],
     [
      5,
      2
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      1,
      1
     ],
     [
      1,
      0
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      0,
      2
     ],
     [
      1,
      2
     ],
     [
      1,
      4
     ],
     [
      2,
      4
     ],
     [
      2,
      5
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      1,
      3
     ],
     [
      2,
      3
     ],
     [
      2,
      1
     ],
     [
      4,
      1
     ],
     [
      4,
      0
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      2,
      3
     ],
     [
      3,
      3
     ],
     [
      3,
      0
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      1,
      5
     ],
     [
      1,
      4
     ],
     [
      0,
      4
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      3,
      5
     ],
     [
      3,
      3
     ],
     [
      4,
      3
     ],
     [
      4,
      4
     ],
     [
      3,
      4
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      2,
      1
     ],
     [
      2,
      0
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
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
      5
     ]
    ],
    "color": "#ffffff72",
    "thickness": 1.28
   },
   {
    "wayPoints": [
     [
      4.05,
      2.85
     ],
     [
      4.15,
      2.95
     ],
     [
      4.2,
      2.9
     ],
     [
      4.25,
      2.95
     ],
     [
      4.2,
      3
     ],
     [
      4.15,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.1,
      2.9
     ],
     [
      4.05,
      2.95
     ],
     [
      4.1,
      3
     ],
     [
      4.15,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.2,
      2.9
     ],
     [
      4.15,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.85,
      2.85
     ],
     [
      3.95,
      2.95
     ],
     [
      4,
      2.9
     ],
     [
      4.05,
      2.95
     ],
     [
      4,
      3
     ],
     [
      3.95,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.9
     ],
     [
      4,
      2.8
     ],
     [
      4,
      3
     ],
     [
      4.3,
      3
     ],
     [
      4.25,
      2.95
     ],
     [
      4.3,
      2.9
     ],
     [
      4.35,
      2.95
     ],
     [
      4.3,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.3,
      3
     ],
     [
      4.4,
      3
     ],
     [
      4.35,
      2.95
     ],
     [
      4.4,
      2.9
     ],
     [
      4.45,
      2.95
     ],
     [
      4.4,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.3,
      2.9
     ],
     [
      4.25,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.4,
      3
     ],
     [
      4.5,
      3
     ],
     [
      4.45,
      2.95
     ],
     [
      4.5,
      2.9
     ],
     [
      4.55,
      2.95
     ],
     [
      4.5,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2.9
     ],
     [
      3.9,
      2.8
     ],
     [
      3.95,
      2.75
     ],
     [
      4,
      2.8
     ],
     [
      4,
      2.7
     ],
     [
      3.95,
      2.75
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.4,
      2.9
     ],
     [
      4.35,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.5,
      3
     ],
     [
      4.6,
      3
     ],
     [
      4.55,
      2.95
     ],
     [
      4.6,
      2.9
     ],
     [
      4.65,
      2.95
     ],
     [
      4.6,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.5,
      2.9
     ],
     [
      4.45,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.6,
      3
     ],
     [
      4.7,
      3
     ],
     [
      4.65,
      2.95
     ],
     [
      4.7,
      2.9
     ],
     [
      4.75,
      2.95
     ],
     [
      4.7,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.6,
      2.9
     ],
     [
      4.55,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.7,
      3
     ],
     [
      4.8,
      3
     ],
     [
      4.75,
      2.95
     ],
     [
      4.8,
      2.9
     ],
     [
      4.85,
      2.95
     ],
     [
      4.8,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.8
     ],
     [
      3.85,
      2.75
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      2.75
     ],
     [
      3.9,
      2.7
     ],
     [
      4,
      2.6
     ],
     [
      4,
      2.7
     ],
     [
      3.95,
      2.65
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.7,
      2.9
     ],
     [
      4.65,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.8,
      3
     ],
     [
      4.9,
      3
     ],
     [
      4.85,
      2.95
     ],
     [
      4.9,
      2.9
     ],
     [
      4.95,
      2.95
     ],
     [
      4.9,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.8,
      2.9
     ],
     [
      4.75,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.9,
      3
     ],
     [
      5,
      3
     ],
     [
      4.95,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.9,
      2.9
     ],
     [
      4.85,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.7
     ],
     [
      3.85,
      2.65
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      2.65
     ],
     [
      3.9,
      2.6
     ],
     [
      4,
      2.5
     ],
     [
      4,
      2.6
     ],
     [
      3.9,
      2.5
     ],
     [
      3.95,
      2.45
     ],
     [
      4,
      2.5
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.6
     ],
     [
      3.85,
      2.55
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2.5
     ],
     [
      4,
      2.4
     ],
     [
      3.95,
      2.45
     ],
     [
      3.9,
      2.4
     ],
     [
      4,
      2.3
     ],
     [
      4,
      2.4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.5
     ],
     [
      3.85,
      2.45
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4,
      2.4
     ],
     [
      3.9,
      2.3
     ],
     [
      3.95,
      2.25
     ],
     [
      4,
      2.3
     ],
     [
      4,
      2.2
     ],
     [
      3.95,
      2.25
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.4
     ],
     [
      3.85,
      2.35
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.3
     ],
     [
      3.85,
      2.25
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      2.25
     ],
     [
      3.9,
      2.2
     ],
     [
      4,
      2.1
     ],
     [
      4,
      2.2
     ],
     [
      3.95,
      2.15
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.2
     ],
     [
      3.85,
      2.15
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      2.15
     ],
     [
      3.9,
      2.1
     ],
     [
      3.95,
      2.05
     ],
     [
      4,
      2.1
     ],
     [
      4,
      2
     ],
     [
      3.95,
      2.05
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2.1
     ],
     [
      3.85,
      2.05
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      2.05
     ],
     [
      3.9,
      2
     ],
     [
      4,
      1.9
     ],
     [
      4,
      2
     ],
     [
      3.9,
      1.9
     ],
     [
      3.95,
      1.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      2
     ],
     [
      3.85,
      1.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      1.05
     ],
     [
      3.9,
      1
     ],
     [
      4,
      1.1
     ],
     [
      4,
      1.8
     ],
     [
      3.9,
      1.9
     ],
     [
      3.85,
      1.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.85,
      0.85
     ],
     [
      5,
      1
     ],
     [
      4.9,
      1
     ],
     [
      4.95,
      0.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.9,
      0.9
     ],
     [
      4.8,
      1
     ],
     [
      4.9,
      1
     ],
     [
      4.8,
      0.9
     ],
     [
      4.7,
      1
     ],
     [
      4.8,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.8,
      1
     ],
     [
      4.7,
      0.9
     ],
     [
      4.6,
      1
     ],
     [
      4.7,
      1
     ],
     [
      4.6,
      0.9
     ],
     [
      4.5,
      1
     ],
     [
      4.6,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.8,
      0.9
     ],
     [
      4.75,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.7,
      0.9
     ],
     [
      4.65,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.6,
      1
     ],
     [
      4.5,
      0.9
     ],
     [
      4.4,
      1
     ],
     [
      4.5,
      1
     ],
     [
      4.4,
      0.9
     ],
     [
      4.3,
      1
     ],
     [
      4.4,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.6,
      0.9
     ],
     [
      4.55,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.5,
      0.9
     ],
     [
      4.45,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.4,
      1
     ],
     [
      4.3,
      0.9
     ],
     [
      4.2,
      1
     ],
     [
      4.3,
      1
     ],
     [
      4.2,
      0.9
     ],
     [
      4.1,
      1
     ],
     [
      4,
      0.9
     ],
     [
      3.9,
      1
     ],
     [
      3.85,
      0.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.4,
      0.9
     ],
     [
      4.35,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.3,
      0.9
     ],
     [
      4.25,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.2,
      0.9
     ],
     [
      4.15,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.85,
      1.75
     ],
     [
      3.9,
      1.8
     ],
     [
      4,
      1.7
     ],
     [
      3.9,
      1.6
     ],
     [
      4,
      1.5
     ],
     [
      3.9,
      1.4
     ],
     [
      4,
      1.3
     ],
     [
      3.9,
      1.2
     ],
     [
      4,
      1.1
     ],
     [
      4,
      1
     ],
     [
      4.1,
      0.9
     ],
     [
      4.2,
      1
     ],
     [
      4,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.8
     ],
     [
      4,
      1.9
     ],
     [
      4,
      1.8
     ],
     [
      3.9,
      1.7
     ],
     [
      4,
      1.6
     ],
     [
      3.9,
      1.5
     ],
     [
      4,
      1.4
     ],
     [
      3.9,
      1.3
     ],
     [
      4,
      1.2
     ],
     [
      3.9,
      1.1
     ],
     [
      4,
      1
     ],
     [
      3.85,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.6
     ],
     [
      3.85,
      1.55
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.4
     ],
     [
      3.85,
      1.35
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.2
     ],
     [
      3.85,
      1.15
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      4.1,
      0.9
     ],
     [
      4.05,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.7
     ],
     [
      3.85,
      1.65
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.5
     ],
     [
      3.85,
      1.45
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.3
     ],
     [
      3.85,
      1.25
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.9,
      1.1
     ],
     [
      3.85,
      1.05
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      3.95,
      0.95
     ],
     [
      4,
      0.9
     ],
     [
      3.95,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.85,
      3.85
     ],
     [
      3,
      4
     ],
     [
      2.9,
      4
     ],
     [
      2.95,
      3.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.9,
      3.9
     ],
     [
      2.8,
      4
     ],
     [
      2.9,
      4
     ],
     [
      2.8,
      3.9
     ],
     [
      2.7,
      4
     ],
     [
      2.8,
      4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.8,
      4
     ],
     [
      2.7,
      3.9
     ],
     [
      2.6,
      4
     ],
     [
      2.7,
      4
     ],
     [
      2.6,
      3.9
     ],
     [
      2.5,
      4
     ],
     [
      2.6,
      4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.8,
      3.9
     ],
     [
      2.75,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.7,
      3.9
     ],
     [
      2.65,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.6,
      4
     ],
     [
      2.5,
      3.9
     ],
     [
      2.4,
      4
     ],
     [
      2.5,
      4
     ],
     [
      2.4,
      3.9
     ],
     [
      2.3,
      4
     ],
     [
      2.4,
      4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.6,
      3.9
     ],
     [
      2.55,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.5,
      3.9
     ],
     [
      2.45,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.4,
      4
     ],
     [
      2.3,
      3.9
     ],
     [
      2.35,
      3.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.4,
      3.9
     ],
     [
      2.35,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.25,
      3.85
     ],
     [
      2.3,
      3.9
     ],
     [
      2.2,
      4
     ],
     [
      2.3,
      4
     ],
     [
      2.2,
      3.9
     ],
     [
      2.1,
      4
     ],
     [
      2.2,
      4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.2,
      4
     ],
     [
      2.1,
      3.9
     ],
     [
      2,
      4
     ],
     [
      2.1,
      4
     ],
     [
      2,
      3.9
     ],
     [
      2,
      4
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.2,
      3.9
     ],
     [
      2.15,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2.1,
      3.9
     ],
     [
      2.05,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      4
     ],
     [
      1.9,
      3.9
     ],
     [
      2,
      3.8
     ],
     [
      2,
      3.9
     ],
     [
      1.95,
      3.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3.9
     ],
     [
      1.9,
      3.8
     ],
     [
      2,
      3.7
     ],
     [
      2,
      3.8
     ],
     [
      1.9,
      3.7
     ],
     [
      2,
      3.6
     ],
     [
      2,
      3.7
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.9
     ],
     [
      1.85,
      3.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.8
     ],
     [
      1.85,
      3.75
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3.7
     ],
     [
      1.9,
      3.6
     ],
     [
      2,
      3.5
     ],
     [
      2,
      3.6
     ],
     [
      1.9,
      3.5
     ],
     [
      2,
      3.4
     ],
     [
      2,
      3.5
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.7
     ],
     [
      1.85,
      3.65
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.6
     ],
     [
      1.85,
      3.55
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3.5
     ],
     [
      1.9,
      3.4
     ],
     [
      2,
      3.3
     ],
     [
      2,
      3.4
     ],
     [
      1.9,
      3.3
     ],
     [
      2,
      3.2
     ],
     [
      2,
      3.3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.5
     ],
     [
      1.85,
      3.45
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.4
     ],
     [
      1.85,
      3.35
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3.3
     ],
     [
      1.9,
      3.2
     ],
     [
      2,
      3.1
     ],
     [
      2,
      3.2
     ],
     [
      1.9,
      3.1
     ],
     [
      2,
      3
     ],
     [
      2,
      3.1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.3
     ],
     [
      1.85,
      3.25
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.2
     ],
     [
      1.85,
      3.15
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3.1
     ],
     [
      1.85,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      3.1
     ],
     [
      1.85,
      3.05
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      2,
      3
     ],
     [
      1.95,
      2.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.85,
      2.85
     ],
     [
      1,
      3
     ],
     [
      0.9,
      3
     ],
     [
      1,
      2.9
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      2.9
     ],
     [
      0.8,
      3
     ],
     [
      0.9,
      3
     ],
     [
      0.8,
      2.9
     ],
     [
      0.7,
      3
     ],
     [
      0.8,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.8,
      3
     ],
     [
      0.7,
      2.9
     ],
     [
      0.6,
      3
     ],
     [
      0.7,
      3
     ],
     [
      0.6,
      2.9
     ],
     [
      0.5,
      3
     ],
     [
      0.6,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.8,
      2.9
     ],
     [
      0.75,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.7,
      2.9
     ],
     [
      0.65,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.6,
      3
     ],
     [
      0.5,
      2.9
     ],
     [
      0.4,
      3
     ],
     [
      0.5,
      3
     ],
     [
      0.4,
      2.9
     ],
     [
      0.3,
      3
     ],
     [
      0.4,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.6,
      2.9
     ],
     [
      0.55,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.5,
      2.9
     ],
     [
      0.45,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.4,
      3
     ],
     [
      0.3,
      2.9
     ],
     [
      0.2,
      3
     ],
     [
      0.3,
      3
     ],
     [
      0.2,
      2.9
     ],
     [
      0.1,
      3
     ],
     [
      0.2,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.4,
      2.9
     ],
     [
      0.35,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.3,
      2.9
     ],
     [
      0.25,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.2,
      3
     ],
     [
      0.1,
      2.9
     ],
     [
      0,
      3
     ],
     [
      0.1,
      3
     ],
     [
      0,
      2.9
     ],
     [
      -0.05,
      2.95
     ],
     [
      0,
      3
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.2,
      2.9
     ],
     [
      0.15,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.1,
      2.9
     ],
     [
      0.05,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0,
      2.9
     ],
     [
      -0.05,
      2.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.85,
      0.85
     ],
     [
      2,
      1
     ],
     [
      1.9,
      1
     ],
     [
      1.95,
      0.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.9,
      0.9
     ],
     [
      1.8,
      1
     ],
     [
      1.9,
      1
     ],
     [
      1.8,
      0.9
     ],
     [
      1.7,
      1
     ],
     [
      1.8,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.8,
      1
     ],
     [
      1.7,
      0.9
     ],
     [
      1.6,
      1
     ],
     [
      1.7,
      1
     ],
     [
      1.6,
      0.9
     ],
     [
      1.5,
      1
     ],
     [
      1.6,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.8,
      0.9
     ],
     [
      1.75,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.7,
      0.9
     ],
     [
      1.65,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.6,
      1
     ],
     [
      1.5,
      0.9
     ],
     [
      1.4,
      1
     ],
     [
      1.5,
      1
     ],
     [
      1.4,
      0.9
     ],
     [
      1.3,
      1
     ],
     [
      1.4,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.6,
      0.9
     ],
     [
      1.55,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.5,
      0.9
     ],
     [
      1.45,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.4,
      1
     ],
     [
      1.3,
      0.9
     ],
     [
      1.35,
      0.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.4,
      0.9
     ],
     [
      1.35,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.15,
      0.95
     ],
     [
      1.1,
      0.9
     ],
     [
      1.2,
      1
     ],
     [
      1.3,
      1
     ],
     [
      1.2,
      0.9
     ],
     [
      1.1,
      1
     ],
     [
      1.2,
      1
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.2,
      1
     ],
     [
      1.3,
      0.9
     ],
     [
      1.25,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.2,
      0.9
     ],
     [
      1.15,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1.05,
      0.85
     ],
     [
      1.1,
      0.9
     ],
     [
      1,
      1
     ],
     [
      1.1,
      1
     ],
     [
      0.95,
      0.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      0.9
     ],
     [
      0.95,
      0.95
     ],
     [
      1,
      1
     ],
     [
      1,
      2
     ],
     [
      0.95,
      1.95
     ],
     [
      1,
      1.9
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      1,
      1
     ],
     [
      0.95,
      1.05
     ],
     [
      1,
      1.1
     ],
     [
      0.95,
      1.15
     ],
     [
      1,
      1.2
     ],
     [
      0.95,
      1.25
     ],
     [
      1,
      1.3
     ],
     [
      0.95,
      1.35
     ],
     [
      1,
      1.4
     ],
     [
      0.95,
      1.45
     ],
     [
      1,
      1.5
     ],
     [
      0.95,
      1.55
     ],
     [
      1,
      1.6
     ],
     [
      0.95,
      1.65
     ],
     [
      1,
      1.7
     ],
     [
      0.95,
      1.75
     ],
     [
      1,
      1.8
     ],
     [
      0.95,
      1.85
     ],
     [
      1,
      1.9
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.95,
      0.95
     ],
     [
      0.9,
      0.9
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.95,
      1.95
     ],
     [
      0.9,
      1.9
     ],
     [
      0.95,
      1.85
     ],
     [
      0.9,
      1.8
     ],
     [
      0.95,
      1.75
     ],
     [
      0.9,
      1.7
     ],
     [
      0.95,
      1.65
     ],
     [
      0.9,
      1.6
     ],
     [
      0.95,
      1.55
     ],
     [
      0.9,
      1.5
     ],
     [
      0.95,
      1.45
     ],
     [
      0.9,
      1.4
     ],
     [
      0.95,
      1.35
     ],
     [
      0.9,
      1.3
     ],
     [
      0.95,
      1.25
     ],
     [
      0.9,
      1.2
     ],
     [
      0.95,
      1.15
     ],
     [
      0.9,
      1.1
     ],
     [
      0.95,
      1.05
     ],
     [
      0.85,
      0.95
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.1
     ],
     [
      0.85,
      1.05
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.2
     ],
     [
      0.85,
      1.15
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.3
     ],
     [
      0.85,
      1.25
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.4
     ],
     [
      0.85,
      1.35
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.5
     ],
     [
      0.85,
      1.45
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.6
     ],
     [
      0.85,
      1.55
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.7
     ],
     [
      0.85,
      1.65
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.8
     ],
     [
      0.85,
      1.75
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   },
   {
    "wayPoints": [
     [
      0.9,
      1.9
     ],
     [
      0.85,
      1.85
     ]
    ],
    "color": "#585858ff",
    "thickness": 1.28,
    "target": "overlay"
   }
  ],
  "arrows": [],
  "cages": []
 },
 "hideGrid": true
};
