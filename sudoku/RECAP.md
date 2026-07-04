# Recap — 2026-07-04 (8.ª sesión) — Curso relámpago verde + robustez móvil

- **8 acertijos introductorios nuevos** (encontrados por Juan): la «Beginner's Guide to
  Variant Sudokus» de Michael Lefkowitz (LMD 000GOJ) — killer, kropki, XV, flechas,
  anticaballo, termómetros, renban y círculos contadores en tableros 4×4/6×6. Convertidos
  con el pipeline (el conversor ahora extrae también la jaula `solution:`), traducidos con
  2 pistas cada uno y colocados como rampa ● al inicio de la sección 1. Uniqueness no
  verificada por decisión de Juan (soluciones del setter). Total del sitio: 57 acertijos.
- **Arreglo móvil** (reporte de Juan: «no jala en Firefox móvil»): setPointerCapture sobre
  SVG puede lanzar excepción en WebKit y matar todo el input — ahora va en try/catch, con
  pointercancel, touch-action inline, fallback touch para navegadores sin Pointer Events y
  touch-action: manipulation en botones. Verificado en Firefox+touch, Chromium móvil y
  escritorio (WebKit no arranca en esta máquina: pendiente confirmación de Juan en su
  teléfono).
- Layout móvil estilo SudokuPad (media query ≤640px) y modos en columna junto al numpad.
- Deploy de Pages atorado diagnosticado y destrabado (build legacy colgado; rebuild forzado
  vía API).

---

# Recap — 2026-07-04 (7.ª sesión) — FASE C COMPLETA 🎉

## Qué se hizo

- **El sudoku del alcaide** (The Warden's Sudoku): el motor ahora representa el vacío como
  `null`, así que el 0 es un dígito válido; botón 0 que solo aparece con `minDigit: 0`;
  historia del alcaide traducida completa + pistas epistémicas. Resuelto de punta a punta
  en la verificación (con sus cuatro ceros) y regresión de Friendly Void limpia.
- **Loop Sum verificado ÚNICO** por solver conjunto (dígitos + partición + lazo; 12.7 s,
  19.2M nodos, 2765 particiones exploradas): página creada, enlazada en la sección 5.
- UI a pedido de Juan: iconos de dificultad más grandes en el índice; los atajos de
  teclado ahora en un desplegable (misma mecánica que las pistas, mismo lugar).
- Barrido final: **49/49 páginas** cargan sin errores, con reglas en español, pistas y
  atajos desplegables.

## Estado de la Fase C: COMPLETA

Los 49 puzzles de la colección (más watsp = 50 con el ya publicado) están jugables,
traducidos, con pistas, verificados contra los originales y con unicidad demostrada o
metadata verificada según ANALISIS.md. Pendiente de Juan: sus 2-3 puzzles verdes nuevos
para la sección 1, revisión general y la orden de commit/push.

---

# Recap — 2026-07-04 (6.ª sesión) — Traducciones completas + fidelidad visual

## Qué se hizo

**Traducción completa**: 4 subagentes paralelos tradujeron reglas y pistas de los 40
puzzles restantes (secciones 2+3, saga RAT RUN con la narrativa de Finkz, Conjuntos, y
4+7). Las 47 páginas enlazadas tienen reglas en español y 3 pistas progresivas cada una.
Los metadatos escondidos en jaulas `title:`/`author:`/`rules:` (5 puzzles del formato
zipped) se extraen ahora en el conversor; las reglas auténticas de Overlap aparecieron ahí
y validan la traducción.

**Verificación de fidelidad visual pedida por Juan**: capturas lado a lado de nuestras 47
páginas contra los originales de SudokuPad (45 pares + 2 de LMD a mano), revisadas en
hojas de contacto. Problemas encontrados y corregidos:

1. **Termómetros invisibles** (Termómetros y equilibrio): los tallos venían como
   trayectorias SVG `d` con curvas Bézier (Sudoku Maker, unidades de 64 px/casilla), no
   como wayPoints. El motor ahora las dibuja como línea quebrada (decisión de Juan).
2. **Pistas exteriores recortadas** (24/4, Sliding Doors, Renban ModE, Cross Product):
   el lienzo era fijo y cortaba todo lo que viviera fuera del tablero — ¡información
   esencial perdida! Ahora el margen crece dinámicamente según la decoración.
3. **Píldoras como óvalos** (10X+Y): `rounded` con ancho≠alto ahora es rect redondeado
   (estadio), no elipse.
4. **4×4×4**: fila/columna 5 son casillas nulas (`voids` en los datos): sin rejilla, sin
   borde global, sin selección — cuatro tableros separados como el original.
5. **Niebla más clara** (#adadad), como la de SudokuPad.

Regresión final: 47/47 páginas OK.

## Pendientes

- The Warden's Sudoku: página propia (0-9 + historia). Loop Sum: solver de lazo.
- Cosmético menor aceptado: curvas de termómetro como quebradas, muros de RAT RUN sobre
  bordes de caja, guiones de jaula en gris.

---

# Recap — 2026-07-04 (5.ª sesión) — Fase C: la colección entera, jugable

## Qué se hizo

**Arquitectura clave**: en lugar de programar cada tipo de constraint, el motor v2 dibuja
la decoración SCL de SudokuPad TAL CUAL (underlays/overlays/lines/arrows/cages genéricos).
Un solo código pinta los 45 puzzles — laberintos de RAT RUN, cercas de Area 51, termómetros
y jaulas incluidos, sin código por-puzzle.

- `tools/convierte.js`: SCL → `puzzles/*.js` v2 (semántica: tamaño/cajas/regiones/dados/
  solución/niebla + visuales passthrough). Convierte los 45 + soporta f-puzzles. Preserva
  rules/hints al reconvertir. Las 2 soluciones faltantes (Overlap, Difference Of Squares)
  se rescataron del transcript del agente D1 y se verificaron contra dados/jaulas.
- `sudoku.js` v2: renderizador genérico + numpad 1-9 estándar + soluciones con huecos
  (`.` = casilla vacía: Sliding Doors, 4×4×4) + regiones irregulares + tableros sin cajas +
  `hideGrid` (Area 51) + reglas EN de respaldo cuando falta la traducción.
- `jugar.html?p=<id>`: página única del jugador (adiós a un HTML por puzzle);
  `watsp.html` redirige. Pistas progresivas en `<details>` desde los datos.
- `index.html`: portada con las 7 secciones (48 jugables) según ANALISIS.md reestructurado
  (decisiones de Juan: secciones 7+8 fusionadas y engordadas, YY-sums descartado, flavor de
  Ovary Action → «Termómetros y equilibrio», unicidad asumida aceptada).
- Datos LMD a mano: `ccflechas` y `yykropki` (ejemplos de Phistomefel, verificados únicos).
- Traducciones + pistas listas: watsp + sección 1 completa (Friendly Void, Partially
  Permanent Fog, Termómetros y equilibrio, 10X+Y) + los 2 LMD. El resto muestra reglas
  originales en un desplegable «mientras llega la traducción».

## Verificación

Playwright: las 48 páginas cargan y pintan sin errores JS; Friendly Void resuelto de punta
a punta (niebla 35→0, victoria + confeti + 3 pistas visibles); capturas revisadas de
RAT RUN 1 y 6, 24/4, Area 51, CC flechas y YY Kropki — fieles al original.

## Pendientes

- Traducir reglas + pistas de los ~41 restantes (fichas listas en ANALISIS.md).
- The Warden's Sudoku: página propia (dígitos 0-9 + su historia) — sin enlace por ahora.
- Loop Sum: solver de lazo para verificar unicidad antes de crear su página.
- Fidelidad menor: niebla permanente de o3tnx9fkub (la nuestra se disipa toda) y muros de
  RAT RUN sobre bordes de caja (cosmético).

---

# Recap — 2026-07-04 (4.ª sesión) — Fase B: análisis de los 49 puzzles

## Qué se hizo

Análisis completo de la lista de Juan (45 SudokuPad + 4 ejemplos 6×6 de Logic Masters).
Entregable: **`ANALISIS.md`** — ordenamiento propuesto en las 8 secciones, dificultad en
escala de esquí, verificación por solver, camino lógico y 2-3 pistas por puzzle.

- Descarga y decodificación de los 45 (SCL plano, SCL-zip vía PuzzleZipper de marktekfan,
  f-puzzles); autores de los 7 sin título recuperados de los `<title>` de SudokuPad.
- Análisis en paralelo con 5 agentes (lotes A/B/C/D1/D2) + los 4 LMD y Ranked Quads por el
  coordinador. Todos los solvers quedaron en el scratchpad de la sesión.
- Resultados de verificación: ~26 con unicidad demostrada por enumeración (incluidas 6
  soluciones DERIVADAS que el metadata no traía), el resto con constraints verificados por
  código y unicidad asumida (enumeración cortada por tiempo).
- Hallazgos clave: el Yin-Yang de sumas de Phistomefel (ejemplo 6×6) tiene 2 soluciones →
  decisión de Juan pendiente; Loop Sum queda sin publicar hasta construir el solver de lazo
  en Fase C; flavor de «Ovary Action» con propuesta de reemplazo; saga RAT RUN = curso de
  combinatoria disfrazado (extremal → clases → conjuntos → paridad → invariantes).
- Decisiones de Juan registradas: revisión SOLO de dígitos para todos los puzzles; numpad
  estándar 1-9 siempre.

## Pendiente

Juan revisa ANALISIS.md y decide los 5 puntos de la sección «Decisiones que te tocan».
Luego arranca la Fase C (motor + conversor + páginas).

---

# Recap — 2026-07-04 (3.ª sesión) — Colores, celebración y limpieza

## Qué se hizo

- **Fuera las reglas en inglés**: se eliminó el bloque desplegable de la
  página, el campo `rulesOriginal` del formato y su soporte en el motor.
- **Paleta de SudokuPad**: volví a abrir el original con Playwright, entré
  al modo color y muestreé los 9 colores pixel por pixel de la captura:
  `#e6e6e6 #b0b0b0 #656565 #d1efa5 #f1b0f6 #eebf83 #f88886 #fdf28b #8ac1f8`.
- **Multicolor por casilla**: también verifiqué en el original cómo se ven
  varios colores en una casilla: rebanadas de pastel desde el centro.
  Implementado igual (sectores SVG recortados con clipPath por casilla).
  El estado pasó de «un color por casilla» a una lista por casilla; cada
  color se agrega/quita por separado. En modo color el teclado acepta 1-9 y
  aparecen los botones 7-9 (ocultos en los demás modos).
- **Celebración**: al completar el sudoku correctamente cae una lluvia de
  60 confetis (CSS animations) y aparece un letrero grande de
  «¡Felicidades!» que se desvanece solo a los ~4 segundos.
- El proyecto de sudokus quedó enlazado en el landing (EN y ES) — pedido de
  la sesión anterior.

## Verificación

Prueba de punta a punta con Playwright: sin rastro de las reglas en inglés,
3 colores → 3 rebanadas, quitar uno → 2, un solo color → casilla llena,
botones 7-9 solo visibles en modo color, y al resolver: 60 confetis +
letrero + mensaje. Capturas revisadas.

---

# Recap — 2026-07-03 (2.ª sesión) — Mecánicas fieles al original + UI

## Qué se hizo

Jugué el puzzle original en sudokupad.app con un navegador automatizado
(Playwright + Chromium) para observar las mecánicas reales, corregí nuestro
motor donde no coincidía, y apliqué los cambios de interfaz que pidió Juan.

## Lo que descubrí jugando el original

- **La niebla es dinámica**: al borrar un dígito correcto, la niebla
  *regresa*. (Nuestra versión la dejaba despejada para siempre — corregido:
  ahora se recalcula desde cero en cada repintado.)
- **Los dados no iluminan**: al inicio solo se ve la casilla del faro; el 6
  dado está oculto bajo la niebla hasta que la despejas desde afuera.
  (Nuestra versión iluminaba alrededor del dado — corregido.)
- **La niebla tapa la decoración**: los puntos kropki en la frontera se ven
  a la mitad. (Ahora dibujamos puntos y dados debajo de la capa de niebla,
  y el efecto sale solo.)
- Lo que escribe el usuario (dígitos, marcas) sí se ve sobre la niebla. ✓
- Un dígito correcto ilumina su vecindad 3×3. ✓ (ya lo teníamos bien)
- **La pluma** (hay que activarla en los ajustes de SudokuPad): clic en una
  casilla = círculo; arrastre centro→centro = línea entre casillas; arrastre
  esquina→esquina = línea sobre el borde; repetir un trazo lo borra.
  (Nuestra pluma solo hacía bordes por cercanía — reescrita con el modelo
  de puntos de paso: esquinas y centros.)

## Cambios de interfaz

- Tablero más grande (max-width 480 → 620 px, página 860 → 980 px).
- Modo enfocado (botón 👁): oculta reglas, atajos y pie de página.
- Botones con símbolos: ⌫ borrar, ↶ deshacer, ↷ rehacer, ✓ revisar,
  ⟳ reiniciar, 👁 enfocar (con `title` y `aria-label`).
- Dígitos en cuadrícula de numpad (3 columnas, ⌫ ancho debajo).

## Verificación

Prueba de punta a punta con Playwright sobre nuestra página:
niebla inicial 35/36 casillas (solo el faro libre), 2 correcto → 30, borrar
→ 35 otra vez (dinámica ✓), los tres tipos de trazo de pluma + círculo,
repetir trazo lo borra ✓, modo enfocado oculta las reglas ✓. Capturas
comparadas lado a lado con el original.

## Pendientes

- El original muestra un diálogo de victoria más festivo; nosotros solo un
  mensaje. Suficiente por ahora.
- El clic simple de la pluma en SudokuPad quizá tenga más estados (¿doble
  clic = X?); implementamos solo el círculo.

---

# Recap — 2026-07-03 (1.ª sesión) — Prototipo de la plataforma de sudokus

## Qué se hizo

Primer prototipo funcional de la plataforma de sudokus en `sudoku/`, con un
sudoku completo y jugable: **«What About That Shadowy Place?» de gdc**
(construcción caótica 6×6 con niebla y puntos kropki), tomado de
https://sudokupad.app/adventure/580-watsp.

## Investigación de plataformas open source

- **SudokuPad** (Sven Neumann) — el modelo a seguir, pero es *propietario*:
  no podemos reutilizar su código.
- **Penpa+** (github.com/swaroopg92/penpa-edit) — la plataforma abierta más
  completa, pero gigantesca y con aún más menús y herramientas que SudokuPad;
  justo lo contrario del objetivo.
- **f-puzzles** — el código es visible pero sin licencia libre.
- **marktekfan/sudokupad-penpa-import** — útil como referencia del formato
  SCL de SudokuPad.

**Decisión:** motor propio, chiquito y en vanilla JS (~450 líneas), que lee
una versión simplificada y ya descomprimida del formato SCL de SudokuPad.
Consistente con el resto del sitio: sin frameworks, sin compilación.

## Cómo se obtuvo el sudoku

1. `curl https://sudokupad.app/api/puzzle/adventure/580-watsp` → datos `scl…`
2. Descomprimido con lz-string (Node) → JSON con metadatos, reglas, solución,
   el 6 dado en r5c2, 10 puntos kropki y el faro de niebla en r1c2.
3. Convertido a mano a nuestro formato plano en `puzzles/watsp.js`; verifiqué
   los 10 puntos contra la solución (consecutivos/proporción 1:2 ✓).
4. Reglas traducidas al español (tono informal del sitio); las originales en
   inglés quedan en un `<details>`.

## Qué tiene el jugador (y qué no)

Sí: dígitos / esquinas / centro / colores / **pluma** (dibuja fronteras de
regiones sobre los bordes — la razón de ser de la pluma en construcción
caótica), selección con arrastre, atajos estilo SudokuPad (Z X C V P,
espacio, flechas, Ctrl+Z/Y), niebla fiel a SudokuPad (un dígito correcto
despeja su vecindad 3×3; lo despejado no se vuelve a cubrir; los puntos bajo
la niebla se ocultan), botón Revisar y detección automática de victoria.

No (a propósito): menús, temas, timer, guardado, letras, multicolor por
casilla, pluma de centro a centro. Se agregan solo si hacen falta.

## Verificación

- `node --check` sobre ambos JS.
- Prueba de humo con jsdom simulando el teclado: niebla inicial correcta
  (26 casillas cubiertas), dígito incorrecto no despeja, correcto despeja
  3×3, deshacer no re-cubre la niebla, marcas de esquina/centro/color,
  y resolución completa → «¡Felicidades!» con niebla en cero y los 10
  puntos visibles.
- Renderizado verificado rasterizando el SVG que genera el motor: la niebla
  cubre lo esperado, el faro y la vecindad del 6 dado se ven despejados, el
  punto blanco visible, la rejilla se distingue sobre la niebla (esto pedía
  un arreglo: la capa de la rejilla ahora va encima de la niebla).
- Falta una pasada a mano en navegador real (interacción con ratón y touch):
  **pendiente darle una ojeada**.

## Archivos nuevos

    sudoku/index.html      portada de la sección
    sudoku/watsp.html      página del sudoku
    sudoku/sudoku.js       motor (SVG, herramientas, niebla, historial)
    sudoku/sudoku.css      estilos (estética de acertijos/)
    sudoku/puzzles/watsp.js  datos del sudoku
    sudoku/README.md       formato de datos + cómo agregar sudokus
    sudoku/RECAP.md        este archivo

Nada está commiteado todavía.

## Siguientes pasos sugeridos

1. Abrir `sudoku/watsp.html` en el navegador y jugarlo de verdad.
2. Pasarme la lista de sudokus para ir armando secciones en `index.html`.
3. Script Node que convierta SCL → nuestro formato automáticamente.
4. Soporte de jaulas/flechas/líneas cuando algún sudoku lo pida.
