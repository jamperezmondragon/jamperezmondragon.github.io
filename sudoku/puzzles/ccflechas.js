// Construido a mano desde el ejemplo oficial en Logic Masters (ver ANALISIS.md).
window.PUZZLE = {
 "id": "ccflechas",
 "title": "Construcción caótica: flechas",
 "author": "Phistomefel",
 "urlOriginal": "https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0003D0",
 "size": 6,
 "boxes": null,
 "regions": null,
 "rules": "Coloca los dígitos del 1 al 6 exactamente una vez en cada fila y columna (¡aquí no hay cajas!). Además, divide el tablero en 6 regiones conectadas de 6 casillas, cada una con los dígitos del 1 al 6. Descubrir dónde están las regiones es tu trabajo: usa la pluma para marcar fronteras.\n\nFlechas: si una casilla tiene una flecha, su dígito dice exactamente cuántas casillas seguidas en esa dirección (contando la propia casilla) pertenecen a su misma región; la casilla que sigue después, si existe, ya es de otra región. No se dan todas las flechas posibles.\n\nEste 6×6 es el ejemplo oficial del puzzle de Phistomefel en Logic Masters.",
 "hints": [
  "Cada flecha habla de su región: dígito d = d casillas suyas en esa dirección, y la que sigue ya no. Un 1 con flecha es un muro instantáneo.",
  "Las flechas cerca del borde no pueden tener dígitos grandes: una ↑ en la fila 2 es a lo más un 2. Acota antes de pensar en regiones.",
  "El 6 dado está en una región que necesita sus 6 casillas: ¿hacia dónde puede crecer sin romper las flechas de alrededor? Marca con la pluma cada frontera que descubras."
 ],
 "_rulesOrig": "",
 "givens": [
  [
   2,
   1,
   1
  ],
  [
   3,
   2,
   6
  ]
 ],
 "solution": "345126634512213654526431451263162345",
 "fog": null,
 "sclCellSize": 50,
 "visuals": {
  "underlays": [],
  "lines": [],
  "arrows": [],
  "cages": [],
  "overlays": [
   {
    "center": [
     0.26,
     1.76
    ],
    "width": 0,
    "height": 0,
    "text": "→",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     0.26,
     3.76
    ],
    "width": 0,
    "height": 0,
    "text": "↓",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     1.26,
     1.76
    ],
    "width": 0,
    "height": 0,
    "text": "→",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     1.26,
     4.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     1.26,
     5.76
    ],
    "width": 0,
    "height": 0,
    "text": "↑",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     2.26,
     0.76
    ],
    "width": 0,
    "height": 0,
    "text": "→",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     2.26,
     1.76
    ],
    "width": 0,
    "height": 0,
    "text": "↓",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     3.26,
     1.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     3.26,
     4.76
    ],
    "width": 0,
    "height": 0,
    "text": "↑",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     3.26,
     5.76
    ],
    "width": 0,
    "height": 0,
    "text": "↑",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     4.26,
     2.76
    ],
    "width": 0,
    "height": 0,
    "text": "↑",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     4.26,
     3.76
    ],
    "width": 0,
    "height": 0,
    "text": "↑",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     4.26,
     5.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     5.26,
     0.76
    ],
    "width": 0,
    "height": 0,
    "text": "→",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     5.26,
     2.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     5.26,
     3.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   },
   {
    "center": [
     5.26,
     4.76
    ],
    "width": 0,
    "height": 0,
    "text": "←",
    "fontSize": 15,
    "color": "#444"
   }
  ]
 }
};
