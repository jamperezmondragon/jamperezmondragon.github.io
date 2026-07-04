// Construido a mano desde el ejemplo oficial en Logic Masters (ver ANALISIS.md).
window.PUZZLE = {
 "id": "yykropki",
 "title": "Yin Yang Kropki",
 "author": "Phistomefel",
 "urlOriginal": "https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0009P1",
 "size": 6,
 "boxes": [
  2,
  3
 ],
 "regions": null,
 "rules": "Sudoku 6×6 normal (cajas de 2×3). Además, pinta cada casilla de un color o de otro (usa la herramienta de colores): las casillas de cada color deben quedar conectadas entre sí por sus lados, y ningún cuadrado de 2×2 puede quedar de un solo color.\n\nPuntos grises: un punto gris une dos casillas del MISMO color. Si las dos son negras, sus dígitos están en proporción 1:2 (uno es el doble del otro); si las dos son blancas, son consecutivos.\n\nEstán dados TODOS los puntos grises posibles: si dos casillas vecinas del mismo color no tienen punto, entonces NO cumplen la relación de su color.\n\nEste 6×6 es el ejemplo oficial del puzzle de Phistomefel en Logic Masters. (El sitio revisa solo los dígitos; el coloreo es tu herramienta.)",
 "hints": [
  "Olvida los números un rato: pinta. Cada punto une dos casillas del mismo color, y los dos colores deben quedar conectados sin cuadritos 2×2.",
  "Prueba esquinas: ¿qué pasa si la esquina superior izquierda es negra? Sigue la conexidad hasta encontrar contradicción. Quedan poquísimos coloreos posibles.",
  "Con el coloreo listo, cada punto se vuelve kropki blanco (consecutivos) o negro (doble). Y donde NO hay punto entre casillas del mismo color, la relación está prohibida — esa información negativa es oro."
 ],
 "_rulesOrig": "",
 "givens": [
  [
   3,
   5,
   4
  ]
 ],
 "solution": "352641416352641523523164164235235416",
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
     1,
     0.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     1,
     3.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     1,
     5.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     3,
     0.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     5,
     0.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     5,
     3.5
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     1.5,
     3
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     3.5,
     2
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     4.5,
     3
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   },
   {
    "center": [
     5.5,
     1
    ],
    "width": 0.28,
    "height": 0.28,
    "rounded": true,
    "backgroundColor": "#bfbfbf",
    "borderColor": "#555",
    "thickness": 1
   }
  ]
 }
};
