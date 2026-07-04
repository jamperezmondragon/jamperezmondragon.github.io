# Sudokus — jugador minimalista

Prototipo de una plataforma para hospedar sudokus de variantes, inspirada en
[SudokuPad](https://sudokupad.app/) pero con la interfaz mínima: sin menús,
solo las herramientas esenciales. Vanilla HTML/CSS/JS, sin frameworks ni
compilación, igual que el resto del sitio.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Portada de la sección con la lista de sudokus |
| `watsp.html` | Página de un sudoku (una por acertijo) |
| `sudoku.js` | El motor: tablero SVG, herramientas, niebla, historial |
| `sudoku.css` | Estilos (sigue la estética de `acertijos/`) |
| `puzzles/*.js` | Datos de cada sudoku (uno por archivo, define `window.PUZZLE`) |

## Herramientas del jugador

- **Dígitos** (`Z`), **esquinas** (`X`), **centro** (`C`), **colores** (`V`),
  **pluma** (`P`); la barra espaciadora cambia de modo.
- La **pluma** funciona como en SudokuPad (verificado jugando allá):
  - clic en una casilla → círculo verde;
  - arrastre de centro de casilla a centro de casilla → línea que las une;
  - arrastre de esquina a esquina de la rejilla → línea sobre el borde
    (así se marcan las fronteras de regiones en construcción caótica);
  - repetir un trazo lo borra; «⌫» en modo pluma borra todos los trazos.
- Deshacer/rehacer: `Ctrl+Z` / `Ctrl+Y` (o `Ctrl+Shift+Z`).
- Selección: clic y arrastrar; `Shift`/`Ctrl`+clic agrega; flechas mueven.
- **✓ (Revisar)** compara lo que llevas contra la solución; al llenar el
  tablero se revisa solo. **👁** activa el modo enfocado (oculta las reglas
  y el pie de página).

## Formato de los datos (`puzzles/*.js`)

Cada sudoku es un objeto plano en `window.PUZZLE` (ver `puzzles/watsp.js`):

```js
{
  id, title, author,      // metadatos
  size,                   // lado del tablero (6 ⇒ 6×6)
  rules,                  // reglas en español
  givens: [[r, c, d]],    // dígitos dados, índices desde 0
  solution: "4215…",      // solución fila por fila (niebla + revisión)
  dots: [[r1,c1,r2,c2,"black"|"white"]],  // puntos kropki
  foglights: [[r, c]]     // casillas sin niebla al inicio ([] = sin niebla)
}
```

### Cómo convertir un sudoku de SudokuPad

1. Baja los datos: `curl https://sudokupad.app/api/puzzle/<id>` — la
   respuesta empieza con `scl` seguido de datos comprimidos.
2. Descomprime con lz-string:
   `node -e "console.log(require('lz-string').decompressFromBase64(datos))"`
   (quitando antes el prefijo `scl`).
3. Copia del JSON resultante: `metadata` (título, autor, reglas, solución),
   `cells` (los dados), `overlays` (los puntos kropki: centro `[y, x]` donde
   la coordenada no entera indica el borde entre dos casillas) y `cages` con
   valor `FOGLIGHT` (los faros de niebla).
4. Crea `puzzles/<id>.js` con el formato de arriba y una página
   `<id>.html` copiando `watsp.html` (solo cambia el `<script src>` y el
   `<title>`), y agrega el enlace en `index.html`.

## Decisiones de diseño

- **La solución viaja en el JS.** Quien abra la consola puede hacer trampa;
  no importa para el uso previsto (práctica y clase).
- **Niebla idéntica a SudokuPad** (comprobado jugando el original):
  - es *dinámica*: se recalcula con cada cambio, así que borrar un dígito
    regresa la niebla;
  - un dígito correcto del usuario ilumina su casilla y las 8 vecinas;
  - los dados **no** iluminan y quedan ocultos bajo la niebla;
  - la niebla *tapa* la decoración: un punto kropki en la frontera de la
    zona iluminada se ve a la mitad (se dibuja debajo de la capa de niebla);
  - lo que escribe el usuario sí se ve encima de la niebla.
- **Colores como en SudokuPad**: paleta de 9 colores (muestreada pixel por
  pixel del original: 3 grises, verde, morado, naranja, rojo, amarillo,
  azul) y una casilla puede tener varios colores a la vez — se pintan como
  rebanadas de pastel desde el centro, igual que allá. En modo color el
  teclado acepta 1-9 y aparecen los botones 7-9.
- **Al resolver**: mensaje, letrero de «¡Felicidades!» y lluvia de confeti.
- El motor soporta cualquier `size` de 4 a 9 sin cambios (los botones de la
  página son los del 1 al 6; para un 9×9 se agregan tres botones).

## Pendientes / ideas

- Más sudokus y secciones por tipo de variante en `index.html`.
- Soporte para jaulas (killer), flechas, líneas y otras variantes cuando
  algún sudoku de la lista lo necesite — agregar al formato solo lo que se use.
- Guardar avance en `localStorage`.
- Convertidor automático SCL → nuestro formato (script de Node).
