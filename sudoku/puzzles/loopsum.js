// Construido a mano desde el ejemplo oficial en Logic Masters (ver ANALISIS.md).
// Unicidad verificada por solvers/loopsum.js (scratchpad): única en dígitos,
// partición y casillas del lazo (2765 particiones exploradas, 1 solución).
window.PUZZLE = {
 "id": "loopsum",
 "title": "Construcción caótica: Loop Sum",
 "author": "Phistomefel",
 "urlOriginal": "https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0009LJ",
 "size": 6,
 "boxes": null,
 "regions": null,
 "rules": "Coloca los dígitos del 1 al 6 exactamente una vez en cada fila y columna (¡aquí no hay cajas!). Divide el tablero en 6 regiones conectadas de 6 casillas, cada una con los dígitos del 1 al 6 — descubrir dónde están es parte del reto.\n\nAdemás hay un LAZO: un camino cerrado que va de centro de casilla a centro de casilla, solo en horizontal y vertical, sin pisar dos veces la misma casilla. El lazo entra y sale de cada región exactamente una vez: dentro de cada región, el lazo es un solo tramo continuo (aunque no tiene que pisar todas las casillas).\n\nEl numerito en la esquina de una casilla dice cuánto suman los dígitos de las casillas que el lazo pisa dentro de la región de esa casilla.\n\nDibuja el lazo con la pluma (arrastra de centro a centro) y marca las fronteras de las regiones también con la pluma. El sitio revisa solo los dígitos.\n\nEste 6×6 es el ejemplo oficial del puzzle de Phistomefel en Logic Masters.",
 "hints": [
  "¿Cuánto es 1+2+3+4+5+6? La esquina del 21 te dice algo enorme: el lazo pasa por TODA la región de esa casilla.",
  "Una pista de 1 o de 2 significa que el lazo apenas roza esa región: entra, pisa una sola casilla (justo el 1 o el 2) y sale. Y la del 19 es 21−2: el lazo toca todas las casillas de su región menos la del 2.",
  "El lazo visita cada región en un solo tramo: imagínalo como 6 tramos cosidos, uno por región. ¿En qué orden se pueden coser las regiones para que el lazo cierre? Empieza cosiendo la región del 21 con sus vecinas."
 ],
 "_rulesOrig": "",
 "givens": [
  [
   5,
   4,
   3
  ]
 ],
 "solution": "126345643521435216352164214653561432",
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
     0.22,
     0.2
    ],
    "width": 0,
    "height": 0,
    "text": "21",
    "fontSize": 11,
    "color": "#333"
   },
   {
    "center": [
     0.22,
     1.2
    ],
    "width": 0,
    "height": 0,
    "text": "2",
    "fontSize": 11,
    "color": "#333"
   },
   {
    "center": [
     1.22,
     3.2
    ],
    "width": 0,
    "height": 0,
    "text": "1",
    "fontSize": 11,
    "color": "#333"
   },
   {
    "center": [
     3.22,
     0.2
    ],
    "width": 0,
    "height": 0,
    "text": "11",
    "fontSize": 11,
    "color": "#333"
   },
   {
    "center": [
     3.22,
     3.2
    ],
    "width": 0,
    "height": 0,
    "text": "14",
    "fontSize": 11,
    "color": "#333"
   },
   {
    "center": [
     5.22,
     2.2
    ],
    "width": 0,
    "height": 0,
    "text": "19",
    "fontSize": 11,
    "color": "#333"
   }
  ]
 }
};
