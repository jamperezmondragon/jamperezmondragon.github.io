# Análisis y ordenamiento de la colección de sudokus

**Fecha:** 2026-07-04 · **Puzzles analizados:** 49 (45 de SudokuPad + 4 ejemplos 6×6 de
Logic Masters) + watsp ya publicado = colección de 50.

## Metodología

Cada puzzle fue descargado y decodificado (SCL/SCL-zip/f-puzzles), resuelto con lógica para
vivir el camino humano, y verificado con solvers de backtracking escritos a la medida
(quedaron en el scratchpad de la sesión, `solvers/*.js`). Estados de verificación:

- **única ✓** — búsqueda exhaustiva encontró exactamente una solución.
- **derivada ✓** — el metadata no traía solución; el solver la derivó y confirmó única.
- **metadata ✓ / asumida** — la solución oficial satisface todos los constraints
  (verificado por código); la enumeración de unicidad excedió el presupuesto de tiempo.
  Son puzzles publicados y testeados por la comunidad; los solvers quedan listos para
  re-correr si quieres el 100 %.

Dificultad en escala de esquí: ● verde · ■ azul · ◆ diamante · ◆◆ doble diamante.

## Ordenamiento propuesto por sección

### 1 · Introductorios
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 1.0a-h | Curso relámpago «Beginner's Guide to Variant Sudokus»: killer, kropki, XV, flechas, anticaballo, termómetros, renban, círculos contadores | Michael Lefkowitz («juggler», LMD 000GOJ) | 7× 4×4 + 1× 6×6 | ● | solución del setter (jaula `solution:`); unicidad no verificada por decisión de Juan |
| 1.1 | Friendly Void | gdc | 6×6 niebla | ● | única ✓ |
| 1.2 | Partially Permanent Fog | gdc | 6×6 niebla | ■ | derivada ✓ |
| 1.3 | «Termómetros y equilibrio» (Ovary Action, flavor nuevo) | Marty Sears | 6×6 | ■ | metadata ✓ / asumida |
| 1.4 | 10X+Y | Kaktuslav | 6×6 | ■ | metadata ✓ / asumida |

### 2 · Coloreo y abstracción
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 2.1 | Local Negativity | gdc | 6×6 niebla | ■ | única ✓ |
| 2.2 | Parity Hexagons | Tinnifer | 6×6 | ■ | única ✓ |
| 2.3 | Silent Sweeper | gdc | 6×6 | ■ | única ✓ |
| 2.4 | Yin Yang Kropki (ejemplo 6×6) | Phistomefel | 6×6 | ◆ | única ✓ |
| 2.5 | Miracle Of Eleven | Aad van de Wetering | 9×9 | ◆ | única ✓ |

### 3 · Principio extremal
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 3.1 | Peeking Snowman | gdc | 6×6 | ■ | única ✓ |
| 3.2 | Perfect Triple | Dorlir | 6×6 (elige 6 de 1-9) | ■ | única ✓ |
| 3.3 | Pumpkin Patch | Marty Sears | 6×6 | ◆ | única ✓ |
| 3.4 | Cross Product | Michael Lefkowitz | 6×6 | ◆ | única ✓ |
| 3.5 | 24 / 4 | Marty Sears | 6×6 (1-9, 4 cajas) | ◆ | única ✓ |

### 4 · Conectividad
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 4.1 | What About That Shadowy Place? *(ya en el sitio)* | gdc | 6×6 niebla CC | ■ | única (SudokuPad) |
| 4.2 | Onimollif | gdc | 6×6 fillomino (1-9) | ■ | única ✓ |
| 4.3 | Sliding Doors | Michael Lefkowitz | 7×7 | ◆ | metadata ✓ + partición ✓ / asumida |
| 4.4 | Chaos Construction: flechas (ejemplo 6×6) | Phistomefel | 6×6 | ◆ | única ✓ |
| 4.5 | Forcing | Kaktuslav | 9×9 | ◆◆ | partición única ✓ / dígitos asumidos |

### 5 · Caminos
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 5.1 | RAT RUN 1: Primer | Marty Sears | 6×6 | ■ | única ✓ |
| 5.2 | RAT RUN 2: Tenacity | Marty Sears | 8×8 | ■ | metadata ✓ + camino único ✓ |
| 5.3 | RAT RUN 3: Double Dutch | Marty Sears | 9×9 | ◆ | metadata ✓ + camino único ✓ |
| 5.4 | RAT RUN 4: Borderline | Marty Sears | 9×9 | ◆ | metadata ✓ + camino único ✓ |
| 5.5 | RAT RUN 5: Disparity | Marty Sears | 9×9 | ◆ | metadata ✓ + camino único ✓ |
| 5.6 | Blue or Yellow? | Marty Sears | 9×9 | ◆ | metadata ✓ + serpiente única ✓ |
| 5.7 | Modular Zigzag | Kaktuslav | 9×9 | ◆ | metadata ✓ + camino único ✓ |
| 5.8 | RAT RUN 6: Equilibrium (jefe final) | Marty Sears | 9×9 | ◆◆ | metadata ✓ + camino exhibido / asumida |
| 5.9 | Chaos Construction: Loop Sum (ejemplo 6×6) | Phistomefel | 6×6 | ◆◆ | única ✓ (dígitos, partición y lazo; solver propio, 12.7 s) |

La saga RAT RUN se juega en orden estricto (las reglas se acumulan y los mensajes de
victoria hilan la historia de Finkz); *Blue or Yellow?* y *Modular Zigzag* entran antes del
jefe final para suavizar la curva.

### 6 · Conjuntos
| # | Puzzle | Autor | Tablero | Dif. | Verificación |
|---|---|---|---|---|---|
| 6.1 | Area 51 | Michael Lefkowitz | 5×5 sin rejilla | ■ | única ✓ |
| 6.2 | What a Narcissist | gdc | 6×6 | ■ | única ✓ |
| 6.3 | 4 / 13 | Marty Sears | 6×6 | ■ | metadata ✓ / asumida |
| 6.4 | Two Arrows and a Tenline | Marty Sears | 6×6 | ◆ | única ✓ |
| 6.5 | Index Fingers | Marty Sears | 6×6 | ◆ | única ✓ |
| 6.6 | Ranked Quads | Marty Sears | 6×6 | ◆ | única ✓ |
| 6.7 | Spiraling Circles | Pulsar | 9×9 sin cajas | ◆ | metadata ✓ / asumida |
| 6.8 | Half Circles | Dorlir | 9×9 | ◆ | metadata ✓ / asumida |
| 6.9 | Overlap | blackjackfitz | 9×9 | ◆ | única ✓ |
| 6.10 | Dancing in a ring | Fool on Hill | 9×9 | ◆ | metadata ✓ / asumida |

*(10X+Y también abre bien esta sección — está listado en 1.4; cruce indicado en su ficha.)*

### 7 · Miscelánea (final: sin saber qué idea esperar)

Sección unificada (decisión de Juan): las antiguas 7 y 8 fusionadas y engordadas con
traslados desde 2/3/6. Resolver sin saber qué idea toca es parte del entrenamiento — la
columna «idea escondida» es para nosotros, no para el sitio. Ordenada por dificultad.

| # | Puzzle | Autor | Tablero | Dif. | Verificación | Idea escondida |
|---|---|---|---|---|---|---|
| 7.1 | Party Snack | Tinnifer | 6×6 irregular | ■ | única ✓ | sumas + anti-caballo |
| 7.2 | The Concatenation Game | Marty Sears | 6×6 | ■ | metadata ✓ / asumida | mod 9 (venía de 2) |
| 7.3 | Minesweeper | TalkingFredish & Mickey | 6×6 | ◆ | dígitos ✓ / asumida | coloreo (venía de 2) |
| 7.4 | Nadir | Barrels | 9×9 | ◆ | derivada ✓ | extremal (venía de 3) |
| 7.5 | Renban ModE | Mr.Menace | 9×9 | ◆ | derivada ✓ | acotar por 2 lados (venía de 3) |
| 7.6 | Difference Of Squares | MathGuy_12 | 9×9 | ◆ | metadata ✓ (X=8, Y=7) / asumida | conjuntos (venía de 6) |
| 7.7 | Hypnotic Suggestion | Atticus837 | 8×8 | ◆ | metadata ✓ / asumida | doble conteo (venía de 6) |
| 7.8 | 4 x 4 x 4 | Marty Sears | 9×9 (cuatro 4×4) | ◆◆ | metadata ✓ / asumida | indexado anidado |
| 7.9 | Hamiltonian Killer Thermo | Kaktuslav | 9×9 | ◆◆ | metadata ✓ (sumas = {2…28}) / asumida | extremal global |
| 7.10 | The Dutch Miracle | Aad van de Wetering | 9×9 | ◆◆ | derivada ✓ | patrón milagro |
| 7.11 | The Warden's Sudoku (cierre de la colección) | Elytron | 4×4 (dígitos 0-9) | ◆◆ | única ✓ (epistémica total) | conocimiento común |

## Decisiones tomadas (Juan, 2026-07-04)

1. **Yin-Yang de sumas: DESCARTADO** (verificado no único). Juan buscará un problema
   introductorio fácil nuevo — nota: la colección solo tiene 1 círculo verde; a la
   sección 1 le caerían bien 2-3 verdes más.
2. **Loop Sum (5.9)**: verificar unicidad con solver de lazo al inicio de la Fase C; no
   publicar sin eso.
3. **Ovary Action**: flavor reemplazado por «Termómetros y equilibrio» (aprobado).
4. **Secciones 7 y 8 fusionadas** en la Miscelánea final de arriba.
5. **Unicidad «asumida» aceptada** — no se re-corren las enumeraciones largas.

## Notas de motor para la Fase C (recopiladas de todos los lotes)

- Numpad estándar 1-9 siempre (decisión tuya) — además funcionalmente necesario
  (Perfect Triple usa 8 en 6×6; Onimollif y 24/4 usan 1-9).
- Tableros sin cajas dibujadas (Spiraling Circles, Forcing) y con cajas no estándar
  (24/4: cuatro 3×3 en un 6×6; 4×4×4: cuatro sudokus con fila/columna 5 vacías;
  Hypnotic Suggestion 8×8 cajas 2×4; Sliding Doors 7×7 con huecos).
- Regiones irregulares dadas (Party Snack) y rejilla oculta (Area 51, `setting-nogrid`).
- Render nuevo: termómetros, flechas de suma, jaulas (punteadas y de suma), líneas de
  varios colores (renban/whisper/modular/nabner/tenline), píldoras 10X+Y, semicírculos,
  quads con texto, círculos-contador, iconos (🐀 🧁 calabazas, grosellas, puertas
  chevron, teleports), letreros look-and-say, pistas exteriores (little killers,
  Sliding Doors) y dedos/anillos.
- RAT RUN: la mayoría de lines/overlays es decoración; los elementos con semántica son
  paredes gruesas, puntas redondeadas, grosellas, chevrones morados (#730dc5), teleports
  y los emojis. La pluma actual basta para trazar caminos (revisión solo-dígitos).
- The Warden's Sudoku usa dígitos 0-9 en 4×4 y una historia que es la mitad del puzzle:
  página a medida con la traducción con cariño.
- Niebla: ya soportada; Partially Permanent Fog usa una zona de niebla permanente
  (variante menor de nuestra mecánica).

---

# Fichas completas por lote

(Las fichas conservan la voz de cada análisis; A = introductorios/gdc, B = Sears 6×6 y
medianos, C = saga RAT RUN, D1 = conjuntos/9×9, D2 = misceláneos, LMD = ejemplos de
Phistomefel, y Ranked Quads analizado por el coordinador.)

## Ficha extra — Ranked Quads (analizado por el coordinador)

### 0oajbse81h — «Ranked Quads» de Marty Sears (6×6) — ◆, sección 6 (6.6)
- URL: https://sudokupad.app/0oajbse81h
- Constraints: sudoku 6×6 (cajas 2×3), sin dados. Los 25 cuadrados 2×2 del tablero forman
  números de 4 cifras (leyendo arriba-izq → abajo-der), todos distintos. Un círculo en una
  esquina interior da el RANGO de su cuadrado 2×2 al ordenar los 25 números de menor (1) a
  mayor (25); además, cada dígito del número del círculo debe aparecer en su 2×2 (el «22»
  exige dos 2s; el «11», dos 1s). Círculos: rango 22 en el 2×2 de filas 2-3 × cols 1-2;
  rango 11 en filas 4-5 × cols 2-3; rango 6 en filas 2-3 × cols 2-3; rango 5 en filas 5-6 ×
  cols 2-3 (1-index).
- Solución: 143265625314264153531426316542452631 (única ✓, 6.2M nodos,
  solvers/rankedquads.js; coincide con metadata).
- Camino lógico: el tamaño de un número de 4 cifras lo decide primero su primera cifra — la
  casilla superior izquierda del 2×2. Contar cuántas veces aparece cada dígito en el
  subtablero 5×5 superior-izquierdo (4 o 5 veces, según la esquina r6c6) dice cuántos
  números empiezan con cada cifra: eso parte los rangos en bloques. El rango 5 con un 5
  dentro y el rango 6 con un 6 son números chicos que cargan un dígito grande → el grande
  va en las posiciones bajas y la primera cifra es mínima. El rango 22 con dos 2s es al
  revés: número grande con 2s al final. Cerrar con el latin 2×3.
- Pistas: 1) ¿Qué decide primero cuál número de 4 cifras es más grande? Su primera cifra —
  la esquina superior izquierda de cada cuadrado 2×2. ¿Cuántos cuadrados empiezan con 1?
  2) Cada dígito aparece 4 o 5 veces en el subtablero 5×5 de arriba a la izquierda: con eso
  puedes repartir los 25 rangos en bloques por primera cifra. 3) El rango 22 es de los
  grandes pero lleva dos 2s: esos 2s van al final del número, y su primera cifra tiene que
  ser grandota.
- Entrena: estadísticos de orden — saber cuántos objetos quedan por debajo y por encima del
  tuyo.
- Flavor: no tiene.


---

# Lote A — gdc / introductorios 6×6 (agente A)

Verificación: 8/9 solución ÚNICA confirmada por solver exhaustivo; Minesweeper: dígitos verificados,
sombreado único para esos dígitos, unicidad global asumida. Solvers en scratchpad/solvers/loteA*.js.

| id | Título | Autor | Dif. | Sección (orden) | Verificación |
|---|---|---|---|---|---|
| adventure_527-fv | Friendly Void | gdc | ● | 1 (1º) +2 | única ✓ |
| adventure_566 | Local Negativity | gdc | ■ | 2 (1º) +1 | única ✓ |
| kmwut11gkh | Silent Sweeper | gdc | ■ | 2 (2º) | única ✓ |
| 1ru4mm2uq3 | Minesweeper | TalkingFredish & Mickey | ◆ | 2 (3º) +7 | dígitos ✓, unicidad asumida |
| ftar5lqcoq | Peeking Snowman | gdc | ■ | 3 (1º) +1 | única ✓ |
| nzfy94z0eg | Pumpkin Patch | Marty Sears | ◆ | 3 (2º) +2 | única ✓ |
| 40z7jh544j | Onimollif | gdc | ■ | 4 (1º) +2 | única ✓ (fillomino) |
| koyrm4s7co | What a Narcissist | gdc | ■ | 6 (1º) +2 | única ✓ |
| nycgqk4mcz | Party Snack | Tinnifer | ■ | 7 (1º) +3 | única ✓ |

### adventure_527-fv — «Friendly Void» de gdc (6×6, NIEBLA) — ●, sección 1 (+2)
- Constraints: sudoku 6×6 + niebla (faro (1,1)); dado (4,3)=1; círculo SI Y SOLO SI el dígito
  iguala su número de fila o columna (1-index). Círculos: (1,1),(1,3),(0,5),(2,5),(5,5),(5,4),
  (5,0),(3,0),(4,2),(5,2).
- Solución: 654321321465512643436512265134143256 (única ✓)
- Camino lógico: el círculo inicial está en fila 2, columna 2 → es 2 sea cual sea el caso. La
  niebla se abre; cada círculo da disyunción corta (fila o columna) y cada casilla sin círculo
  prohíbe dos dígitos. Final casi antidiagonal, satisfactorio.
- Pistas: 1) El círculo visible está en fila 2 y columna 2: su dígito coincide con su fila… o su
  columna. 2) ¡Da igual cuál! Es un 2. Ponlo y deja que la niebla se abra. 3) La regla va en
  ambas direcciones: una casilla SIN círculo tiene PROHIBIDO el número de su fila y el de su
  columna.
- Entrena: leer un «si y solo si» en ambas direcciones. Flavor: no tiene.

### adventure_566 — «Local Negativity» de gdc (6×6, NIEBLA) — ■, sección 2 (+1)
- Constraints: sudoku + niebla (faro (0,1)); kropki negros (0,0)-(0,1), (0,1)-(1,1), blanco
  (3,5)-(4,5); jaula anti-kropki de 14 casillas ({(0,0),(0,1),(0,2),(1,0),(1,1),(1,2),(1,3),
  (1,4),(2,2),(2,3),(3,3),(4,2),(4,3),(4,4)}): todo par adyacente sin punto NO es consecutivo NI
  2:1. Sin dados.
- Solución: 425631613524561342342156236415154263 (única ✓)
- Camino lógico: cadena negra a–2a–4a con tres casillas de la misma caja → solo 1-2-4 o 4-2-1:
  (0,1)=2 fijo. Luego trabaja la información negativa: (0,2) sin punto junto al 2 no puede ser
  1, 3 ni 4 (ni 2) → 5 o 6. Cada casilla nueva recorta a sus vecinas; la niebla ordena el flujo.
- Pistas: 1) Arranca con los puntos negros encadenados: ¿qué cadenas de razones 2:1 caben del 1
  al 6? 2) Solo 1-2-4 o 4-2-1: el centro es un 2 seguro. 3) La jaula funciona al revés: sin
  punto = ni consecutivos ni 2:1. Junto a un 2 solo quedan 5 y 6.
- Entrena: usar la información que NO está. Flavor: no tiene.

### kmwut11gkh — «Silent Sweeper» de gdc (6×6) — ■, sección 2 (2º)
- Constraints: sudoku; 7 círculos-contador en (0,1),(1,2),(3,1),(4,0),(4,2),(2,4),(3,5): el
  dígito cuenta vecinas (hasta 8) que difieren de él en ≥3. Sin dados.
- Solución: 321456645213532164164532213645456321 (única ✓)
- Camino lógico: «diferir en 3+» estructura los dígitos: 1 ve {4,5,6}, 2 ve {5,6}, 3 ve {6} (y
  simétrico). Los extremos cuentan mucho, 3 y 4 casi nada. Un 3 en círculo = «exactamente un 6
  vecino». Contar vecinos por posición (orilla 5, interior 8) + escasez de 6s por caja arma todo.
- Pistas: 1) Haz tu tablita: el 1 ve 4,5,6; el 2 ve 5,6; el 3 solo al 6 (y al revés igualito).
  2) Los círculos con dígito grande necesitan muchas vecinas lejanas: ¿cuáles tienen suficientes
  siquiera? 3) Un 3 en círculo dice «exactamente un 6 junto a mí»: crúzalo con cuántos 6 caben
  por caja.
- Entrena: convertir una regla rara en clases (chicos/grandes) y contar. Flavor: juego de
  palabras «Mein Sweeper».

### 1ru4mm2uq3 — «Minesweeper» de TalkingFredish & Mickey (6×6 + sombreado) — ◆, sección 2 (+7)
- Constraints: sudoku normal + minas: sombrear casillas; limpias mostradas: (3,1) (dado 1) y
  (4,5); el dígito de CADA casilla limpia cuenta minas en sus vecinas; las 6 cajas tienen
  cantidades de minas todas distintas.
- Solución (dígitos): 521436463152345261612543234615156324 — el sombreado va encima; con
  revisión de solo-dígitos funciona en el motor actual.
- Camino lógico: seis cantidades distintas de {0..6}, se salta un valor. La caja de 6 sería toda
  minas; la de 0 toda limpia (y entonces sus 6 dígitos cuentan minas de cajas vecinas). El 1
  dado: exactamente una mina entre sus 8 vecinas. Vaivén dígito→mina→dígito pintando con colores.
- Pistas: 1) Seis cajas, seis cantidades TODAS distintas entre 0 y 6: solo un valor queda fuera.
  2) Una caja con 6 minas sería toda minas; una con 0, toda limpia — y sus seis dígitos contarían
  minas ajenas. 3) Pinta minas de un color y limpias de otro; empieza alrededor del 1 dado.
- Entrena: colorear como registro y doble contabilidad. Flavor: decoración imita al Buscaminas
  clásico.

### ftar5lqcoq — «Peeking Snowman» de gdc (6×6) — ■, sección 3 (1º, +1)
- Constraints: sudoku (cajas 2×3), dado (1,5)=4; círculos de suma de región (contornos partidos
  por bordes de caja; segmentos del mismo círculo suman igual): cuerpo = anillo de 8 casillas
  filas 3-5 × cols 1-3 sin el centro → segmentos {(3,1),(3,2)} | {(3,3)} | {(4,3),(5,3)} |
  {(4,1),(5,1),(5,2)}; cabeza → {(1,2)} | {(2,3)} | {(2,1),(3,2)}. Brazos consecutivos:
  (3,3)-(3,4), (3,1)-(3,0). Ojos: un copo de (1,3)/(0,4) está en razón 1:2 con la cabeza (2,2).
- Solución: 254136163524516342342651625413431265 (única ✓)
- Camino lógico: el segmento de 3 casillas cae en una caja → suma ≥1+2+3=6; el de 1 casilla ≤6 →
  suma común = 6 exacto. (3,3)=6, {(4,1),(5,1),(5,2)}={1,2,3}, pares suman 6. Brazo: (3,4)=5. La
  cabeza repite la idea en chiquito (dígito = suma de dos distintas ⇒ ≥3). Resto fluye; el copo
  remata.
- Pistas: 1) El círculo grande queda partido en pedazos de 1, 2 y 3 casillas… y todos suman lo
  mismo. 2) ¿Cuál es la MENOR suma de tres casillas distintas de una caja? ¿Y la MAYOR de un
  pedazo de una sola? 3) 1+2+3=6 por abajo y 6 por arriba: todos los pedazos suman 6. La casilla
  solitaria del cuerpo es un 6.
- Entrena: acotar por el objeto extremo. Flavor: solo «Other visual details are purely cosmetic».

### nzfy94z0eg — «Pumpkin Patch» de Marty Sears (6×6) — ◆, sección 3 (2º, +2)
- Constraints: sudoku; 6 calabazas en (0,3),(2,0),(3,2),(4,0),(4,2),(5,0): dígito = cuántas
  instancias de ese dígito la ven en diagonal (incluyéndose); calabazas con dígitos todos
  distintos (⇒ 1-6 repartidos). Sin dados.
- Solución: 512436634125123654456312365241241563 (única ✓; 6.7M nodos — el más duro del lote
  computacionalmente)
- Camino lógico: dígito ≤ casillas diagonales visibles. Las calabazas pegadas al borde ven poco
  → cotas chicas; además dos diagonales adyacentes comparten caja → sin repetir (p. ej. (5,0) ve
  6 casillas pero no puede ser 6). Con dígitos 1-6 exactos, las cotas casi fuerzan la
  asignación: 6 y 5 a las calabazas centrales con vista ((3,2)=6, (4,2)=5), 1 y 2 a las orillas
  ((2,0)=1, (5,0)=2). El conteo exacto pule el resto.
- Pistas: 1) Cada calabaza se cuenta a sí misma: su dígito no supera el número de casillas que
  ve en diagonal. 2) Cuenta la vista de cada calabaza; ojo: dos diagonales pegadas caen en la
  misma caja, no repiten. 3) Las seis calabazas usan 1-6 una vez: el 6 va a la de más vista, el
  1 a una que casi no vea. Reparte por cotas antes del sudoku.
- Entrena: extremal puro (asignar por cotas). Flavor: no tiene.

### 40z7jh544j — «Onimollif» de gdc (6×6, fillomino, NO sudoku) — ■, sección 4 (1º, +2)
- Constraints: fillomino 1-9 (región conexa de dígito d tiene exactamente d casillas) + 5 líneas
  nabner (todo par en la línea difiere ≥2). Sin dados. Líneas: (2,0),(3,0),(4,0),(4,1) |
  {(1,2),(1,3),(0,3),(0,4),(1,4)} | (3,2),(3,3) | (3,5),(4,5),(4,4) | ciclo 2×2
  {(0,0),(0,1),(1,0),(1,1)}.
- Solución: 133355599175559975155975399971339777 (única ✓, solver fillomino propio)
- Camino lógico: el ciclo 2×2: 4 casillas mutuamente adyacentes en una línea → 4 regiones
  distintas con dígitos separados ≥2 (tipo {1,3,5,9}). Las líneas prohíben vecinos cercanos,
  encajonando las regiones grandes (7, 9). Cierre contable: tamaños suman 36
  (4×1+2×3+2×5+7+9). La pluma para fronteras es la herramienta natural.
- Pistas: 1) Empieza por la línea que rodea el 2×2: cuatro dígitos que se llevan de a 2 o más…
  sin pares iguales. 2) Cuatro dígitos así del 1 al 9: casi no hay opciones. Y un dígito d =
  región de exactamente d casillas. 3) Presupuesto de área: todo suma 36. Un 9 es un cuarto del
  tablero: ¿por dónde cabe sin chocar con las líneas?
- Entrena: regiones conexas y presupuesto de área. Flavor: título = «Fillomino» al revés.
- ⚠️ Motor: dígitos 1-9 sin unidades sudoku ni cajas; revisar contra solución ya funciona.

### koyrm4s7co — «What a Narcissist» de gdc (6×6, f-puzzles) — ■, sección 6 (1º, +2)
- Constraints: sudoku; kropki blancos (3,3)-(4,3), (4,3)-(5,3); negros (5,1)-(5,2), (5,2)-(5,3);
  3 líneas modulares (cada 3 seguidas: una de {1,4}, una de {2,5}, una de {3,6}): CICLO de 6
  abajo-izq ((5,1),(5,0),(4,0),(3,0),(3,1),(4,2)), camino de 7 arriba-der, serpiente de 9
  llenando el rincón sup-izq. Sin dados.
- Solución: 621345435261264153153624346512512436 (única ✓)
- Camino lógico: en el ciclo, la regla cíclica fuerza residuos mod 3 con periodo 3: casillas
  opuestas son de la misma familia {x, x+3}; dos opuestas comparten unidad → son {x, x+3}
  exactos. Cadena negra 1-2-4 (centro 2) ancla; los blancos hacen escalerita consecutiva en la
  columna 4; la serpiente de 9 reparte las familias 3-3-3.
- Pistas: 1) En la línea CERRADA la regla se aplica dando la vuelta: las familias
  {1,4},{2,5},{3,6} se repiten con periodo 3. 2) Casillas opuestas del ciclo son de la misma
  familia… y dos opuestas comparten fila: esas son {x, x+3}. 3) Los dos puntos negros seguidos
  solo admiten 1-2-4 en algún orden: el de en medio es 2.
- Entrena: razonar por clases (residuos mod 3) en vez de valores. Flavor: no tiene.

### nycgqk4mcz — «Party Snack» de Tinnifer (6×6 irregular) — ■, sección 7 (1º, +3)
- Constraints: sudoku con REGIONES IRREGULARES dadas, anti-caballo, línea de suma de región
  ((4,5),(3,5) | (2,4),(2,3) | (2,2)), punto negro (0,0)-(0,1), blanco (4,1)-(5,1).
- Solución: 362145156432415326623514234651541263 (única ✓; solo 9k nodos — muy restringido,
  camino humano suave)
- Camino lógico: segmento de UNA casilla → suma común ≤6; pares de una región ≥3 → suma ∈ [3,6]
  (resulta 5). El anti-caballo en 6×6 es fortísimo y con el punto negro va tumbando candidatos;
  las regiones irregulares hacen el resto.
- Pistas: 1) La línea se corta al cruzar fronteras de región… y hay un pedazo de una sola
  casilla. 2) Dos casillas de una región suman ≥3; una sola suma ≤6: la suma común está entre 3
  y 6. 3) Prueba las 4 sumas en la casilla solitaria y usa el salto de caballo alrededor del
  punto negro.
- Entrena: acotar sumas + coordinar dos restricciones. Flavor: no tiene.

## Notas de implementación del lote A
Render nuevo: regiones irregulares (Party Snack), líneas de colores, círculos-contador, jaula
punteada, modo fillomino 1-9 sin unidades (Onimollif), iconos calabaza/copo (formas/emoji).
Anti-caballo y anti-kropki son solo reglas (sin render). Niebla ya soportada. Todo compatible
con revisión solo-dígitos.

---

# Lote B — fichas completas (agente B)

### iu50qghplg — «RAT RUN 1: Primer» de Marty Sears (6×6)
- **URL**: https://sudokupad.app/iu50qghplg
- **Constraints**: sudoku 6×6 normal (cajas 2×3). Rata en r1c3, pastelito en r5c5. Camino por centros de celda sin repetir ni cruzar muros; diagonal solo con espacio 2×2 libre y sin esquina redondeada de muro en el cruce. Muros interiores (entre pares): r4c1|r4c2, r4c2|r5c2, r4c3|r5c3, r5c5|r6c5, r5c5|r5c6, r4c5|r5c5, r4c4|r4c5, r1c2|r1c3, r1c3|r1c4, r2c1|r2c2, r2c2|r3c2, r3c2|r3c3, r2c3|r3c3, r2c4|r3c4, r2c5|r3c5, r3c5|r3c6, r1c5|r2c5. Pares consecutivos del camino suman primo; los dígitos del camino dentro de cada caja suman primo.
- **Solución**: `142635635214254163361452413526526341` — **único✓** (enumeración completa de 28M cuadrículas con DFS de camino, 682 s). Camino único: r1c3→r2c3→r2c4→r2c5→r2c6→r3c6→r4c6→r4c5→r3c5→r3c4→r4c3→r4c2→r3c2→r3c1→r4c1→r5c1→r5c2→r6c3→r5c4→r5c5 (20 celdas, con 2 diagonales).
- **Dificultad**: ■ — sin dados, pero el laberinto guía mucho; es el «primer» de la serie y las parejas primas son enumerables a mano.
- **Secciones**: **5 Caminos (orden 1)**, 1 Introductorios (como puente a la serie).
- **Camino lógico**: los muros dejan corredores casi únicos en varias zonas; ahí las parejas primas (1-2, 1-4, 1-6, 2-3, 2-5, 3-4, 5-6 y 1-1) descartan vecinos. La alternancia de paridad (primo>2 es impar, así que el camino alterna par/impar salvo el caso 1-1) recorta rápido. Al final, la suma prima por caja corrige los dígitos que el camino no tocó. Paso más difícil: decidir las dos diagonales del tramo final r5c2→r6c3→r5c4.
- **Pistas**: 1) Marca con la pluma los tramos donde los muros solo dejan una forma de avanzar. 2) Un primo mayor que 2 es impar: dos celdas seguidas del camino casi siempre son una par y una impar (única excepción: 1+1=2). 3) Al final revisa cada caja 2×3: los dígitos del camino dentro de ella deben sumar primo.
- **Entrena**: construir y acorralar un camino con invariantes (paridad).
- **Flavor**: Finkz la rata 🐀 debe llegar al pastelito 🧁. Se conserva.

### 0210je1r90 — «4 / 13» de Marty Sears (6×6) ⭐
- **URL**: https://sudokupad.app/0210je1r90
- **Constraints**: 5 líneas; cada una se parte en segmentos contiguos que suman 4 o 13; la celda 🎉 sobre la línea dice cuántos segmentos tiene. LA: columna 1 entera (r6→r1), 🎉 r4c1. LB: r1c2,r2c2,r2c3,r1c3, 🎉 r1c3. LC: r3c3,r4c3,r4c2,r3c2, 🎉 r3c2. LD: r5c2,r6c2,r6c3,r5c3,r5c4,r6c4,r6c5,r6c6, 🎉 r5c2. LE: r5c5,r5c6,r4c6,r4c5,r3c5,r3c6,r2c6,r1c6,r2c5,r1c4,r2c4,r3c4,r4c4 (13 celdas), 🎉 r4c4.
- **Solución**: `241365635241512634364512123456456123` — metadata verificada contra todos los constraints (DP de particiones); unicidad asumida (enumeración interrumpida por tiempo).
- **Dificultad**: ■ — aritmética chiquita y elegante; accesible con guía.
- **Secciones**: **6 Conjuntos (orden 2)**, 7 Misc intermedia.
- **Camino lógico**: LA cubre la columna 1 completa → suma 21 = 4a+13b tiene solución única (a=2, b=1) → ¡la celda fiesta r4c1=3 sin mirar nada más! LB/LC (4 celdas, suma 10–18) solo admiten 13 (1 segmento) o 4+13=17 (2 segmentos) → fiestas ∈ {1,2}. En LE, suma = 4a+13b con a+b = r4c4 acota fuerte (13 celdas suman 40–56). Paso difícil: cerrar LE contra el sudoku.
- **Pistas**: 1) La línea de la columna 1 cubre la columna entera: suma 21. ¿De cuántas maneras se escribe 21 sumando 4s y 13s? 2) En cada línea: (segmentos de 4)·4 + (segmentos de 13)·13 = suma de la línea, y el total de segmentos es la celda de fiesta. 3) Una línea de 4 celdas suma entre 10 y 18: ¿qué combinaciones de 4s y 13s caben ahí?
- **Entrena**: ecuaciones de conteo sobre particiones de un conjunto ordenado.
- **Flavor**: fiesta/confeti, neutro. Se conserva.

### m4gbwkzg4n — «The Concatenation Game» de Marty Sears (6×6)
- **URL**: https://sudokupad.app/m4gbwkzg4n
- **Constraints**: 9 flechitas en celdas, cada una apunta a lo largo de su fila/columna hasta el borde; la suma de las celdas apuntadas es un total de DOS dígitos, y esos dos dígitos suman el dígito de la celda de la flecha. Flechas: r5c6↑(r1..4,c6), r6c6↑(r1..5,c6), r1c3→(r1c4..6), r2c3→(r2c4..6), r4c3→(r4c4..6), r6c3→(r6c4..6), r5c4←(r5c1..3), r5c2→(r5c3..6), r2c4→(r2c5..6).
- **Solución**: `641235532164165342423651256413314526` — metadata verificada contra los 9 constraints; unicidad asumida (enumeración interrumpida).
- **Dificultad**: ■ — la clave modular es un «ajá» accesible.
- **Secciones**: **2 Coloreo y abstracción (orden alto)** — la abstracción es aritmética (mod 9), 7 Misc intermedia.
- **Camino lógico**: sumar los dígitos de un número conserva el residuo mod 9 (prueba del nueve). La flecha de r6c6 apunta a toda su columna menos ella: 21−z ≡ z (mod 9) → 2z ≡ 3 → z=6 de inmediato. Con eso r5c6: 21−y−6 = total con dígitos que suman y → y=3. Las flechas de fila («fila menos tres celdas») se encadenan igual. Paso difícil: recordar que el total debe tener DOS dígitos (≥10), que elimina ramas.
- **Pistas**: 1) Sumar los dígitos de un número no cambia su residuo al dividir entre 9 (¡la prueba del nueve!). 2) La flecha de la esquina inferior derecha apunta a toda su columna menos ella misma: plantea 21 − z ≡ z (módulo 9). 3) El total siempre tiene dos cifras: descarta sumas menores que 10.
- **Entrena**: aritmética modular (raíz digital).
- **Flavor**: neutro. Se conserva.

### 3u3dus8t3a — «Ovary Action» de Marty Sears (6×6) ⚠️ flavor
- **URL**: https://sudokupad.app/3u3dus8t3a
- **Constraints**: 5 termómetros (crecen del bulbo a la cola): T1 r3c2→r3c3→r4c3→r4c4; T2 r4c2→r5c2→r5c3→r6c3; T3 r2c3→r2c4→r3c4→r3c5; T4 r1c4→r1c5→r2c6; T5 r4c5→r5c4→r6c5→r6c4. Dos X (suman 10): r2c1|r3c1 y r2c1|r2c2. «Huevo» sobre la esquina del borde de caja r2/r3 en la orilla izquierda: sus celdas suman igual arriba {r1c1,r2c1,r2c2} que abajo {r3c1,r3c2,r4c1}.
- **Solución**: `253146461325612453534612345261126534` — metadata verificada contra todos los constraints; unicidad asumida (enumeración interrumpida).
- **Dificultad**: ■ — termómetros son técnica temprana; el huevo agrega un twist suave.
- **Secciones**: **1 Introductorios (orden 3-4)**, 3 Extremal (los extremos de termómetro).
- **Camino lógico**: r2c1 está en dos X → r3c1 = r2c2. Con 1–6 la única pareja que suma 10 es {4,6} → r2c1∈{4,6}. Los termómetros de 4 celdas fuerzan extremos (bulbo ≤3, cola ≥4). El huevo iguala 10 = suma de abajo y cierra la caja izquierda. Paso difícil: coordinar T5 (zigzag) con la fila 6.
- **Pistas**: 1) Esa celda que toca DOS X: sus dos parejas suman 10 cada una, así que las otras dos celdas son iguales entre sí. ¿Qué parejas de 1–6 suman 10? 2) Un termómetro de 4 celdas no puede empezar con más de 3 ni terminar con menos de 4. 3) El huevo cruza el borde de caja: suma lo de arriba, suma lo de abajo, iguala.
- **Entrena**: desigualdades en cadena y valores extremos.
- **Flavor ORIGINAL** (a reemplazar, doble sentido sexual): «Normal **sex by sex** sudoku rules apply. Digits along a **spermometer** strictly increase, moving from head to tail. Digits separated by an **X chromosome** sum to 10. Digits touching the **pink egg** have the same sum on either side of the box border that divides the egg into two.» **Propuesta**: título «Termómetros y equilibrio»; reglas: «Sudoku 6×6 normal. Los dígitos sobre un termómetro crecen desde el bulbo. Una X marca dos casillas que suman 10. El círculo rosa cruza un borde de caja: sus casillas suman lo mismo de cada lado.»

### igzcothc9f — «Two Arrows and a Tenline» de Marty Sears (6×6)
- **URL**: https://sudokupad.app/igzcothc9f
- **Constraints**: dos flechas moradas: círculo r5c1 = suma de r5c2+r4c3+r3c4; círculo r6c6 = suma de r6c5+r5c4+r4c5. Tenline gris de 28 celdas partida en segmentos contiguos que suman 10 cada uno; trayecto: r5c5→r5c6→r4c6→r3c6→r2c6→r3c5→r2c5→r1c6→r1c5→r1c4→r2c4→r1c3→r2c2→r2c3→r1c2→r1c1→r2c1→r3c2→r3c1→r4c1→r4c2→r3c3→r4c4→r5c3→r6c4→r6c3→r6c2→r6c1.
- **Solución**: `153642624531246153531426315264462315` — **único✓** (enumeración completa, 432 s; tenline reconstruida por camino euleriano: 11 segmentos de 10, total 110).
- **Dificultad**: ◆ — la línea gigante y su complemento piden un argumento global.
- **Secciones**: **6 Conjuntos (orden 3)**, 5 Caminos.
- **Camino lógico**: el tablero suma 126; la tenline suma un múltiplo de 10 y deja fuera solo 8 celdas (r3c4, r4c3, r4c5, r5c1, r5c2, r5c4, r6c5, r6c6). Si la línea suma 110, el complemento suma 16 en 8 celdas: ¡promedio 2, puros dígitos chiquitos! Además dos de esas celdas alimentan las flechas. De ahí, los cortes de suma 10 se van resolviendo desde los extremos de la línea. Paso difícil: convencerse del total 110 (acotar 100 vs 110 vs 120 con mínimos/máximos del complemento).
- **Pistas**: 1) ¿Cuánto suma el tablero completo? (cada fila suma 21). La línea suma un múltiplo de 10: ¿qué le queda al resto? 2) Fíjate en cuántas casillas quedan FUERA de la línea y qué tan chiquitos tendrían que ser sus dígitos. 3) Recorre la línea acumulando: cada vez que llegues exactamente a 10, ahí muere un segmento; si te pasas, algo anda mal atrás.
- **Entrena**: complemento de un conjunto y sumas totales.
- **Flavor**: neutro. Se conserva.

### drmveil1q1 — «Index Fingers» de Marty Sears (6×6)
- **URL**: https://sudokupad.app/drmveil1q1
- **Constraints**: 6 dedos de 3 celdas (base→media→uña): F1 r6c6→r5c6→r4c6; F2 r1c1→r1c2→r2c2; F3 r3c2→r2c3→r3c4; F4 r6c5→r6c4→r5c4; F5 r3c5→r2c5→r1c4; F6 r5c3→r4c3→r4c4. Leyendo XYZ hacia la uña: fila X columna Y contiene el anillo de ese dedo, con dígito Z. Hay exactamente un anillo por fila, columna y caja; ninguno sobre un dedo; los 6 dígitos de anillos son distintos.
- **Solución**: `362415415623256341143256621534534162` — **único✓** (enumeración completa, 335 s). Anillos resultantes: r2c4=6, r3c6=1, r5c5=3, r6c1=5, r4c2=4, r1c3=2.
- **Dificultad**: ◆ — auto-referencia pura, sin dados; exige orden mental.
- **Secciones**: **6 Conjuntos (orden 4)** (los 6 anillos forman una transversal: uno por fila/col/caja, tipo permutación), 7 Misc intermedia.
- **Camino lógico**: hay un anillo por fila → las 6 bases de dedo (que dicen la fila X) llevan dígitos todos distintos; igual las 6 medias (columnas) y las 6 uñas. Eso convierte bases/medias/uñas en tres permutaciones de 1–6 repartidas por el tablero — arranque potente sin poner un solo dígito. Luego, «ningún anillo sobre un dedo» tacha 18 casillas de las 36 como posiciones de anillo y las cajas casi se resuelven por transversal. Paso difícil: cerrar el bucle de auto-referencia sin bifurcar.
- **Pistas**: 1) Como hay un anillo por fila, las seis casillas-base de los dedos tienen los dígitos 1 a 6 repartidos (¡todas distintas!). Lo mismo las de en medio y las uñas. 2) Tacha todas las casillas de dedo: ahí NO puede haber anillos. ¿Qué casillas le quedan a cada caja para su anillo? 3) Toma un dedo, supón su lectura XYZ y sigue la cadena; si dos dedos mandan su anillo a la misma fila o columna, contradicción.
- **Entrena**: transversales (posiciones distintas por fila/col/caja) y auto-referencia.
- **Flavor**: dedos que perdieron sus anillos de oro. Neutro, se conserva.

### s8v9vyl2h8 — «Parity Hexagons» de Tinnifer (6×6)
- **URL**: https://sudokupad.app/s8v9vyl2h8
- **Constraints**: anti-caballo global; dos hexágonos rojos cerrados con paridad alternante: H1 r5c3-r6c4-r6c5-r5c6-r4c5-r4c4, H2 r1c2-r2c1-r3c1-r4c2-r3c3-r2c3; V (suman 5): r2c2|r3c2 y r2c4|r2c5; punto negro (razón 2:1): r6c1|r6c2.
- **Solución**: `146523523146632415415632251364364251` — **único✓** (enumeración completa, 283 s).
- **Dificultad**: ■ — el coloreo de paridad es visible y satisfactorio; anti-caballo pide cuidado.
- **Secciones**: **2 Coloreo y abstracción (orden 1)**, 7 Misc intermedia.
- **Camino lógico**: pintar par/impar antes que nada: cada hexágono alterna → 3 pares y 3 impares por anillo. Cada V mezcla par+impar (suma 5); el punto negro 2:1 con 1–6 es {1,2},{2,4},{3,6} — dos de tres mezclan paridad. La cuenta global (18 pares, 18 impares; 3 y 3 por fila) fija el patrón de colores, y el anti-caballo separa los gemelos de paridad. Paso difícil: traducir el coloreo terminado de vuelta a dígitos.
- **Pistas**: 1) Olvídate de los números: pinta cada casilla PAR o IMPAR. Los hexágonos alternan color al recorrerlos. 2) Cada fila y columna tiene exactamente tres pares y tres impares. 3) Punto negro con razón 2:1 usando 1–6: solo {1,2}, {2,4} o {3,6}. ¿Cuáles cuadran con tu coloreo?
- **Entrena**: abstraer a un coloreo binario antes de pensar dígitos.
- **Flavor**: neutro. Se conserva.

### o3tnx9fkub — «Partially Permanent Fog» de gdc (6×6, niebla)
- **URL**: https://sudokupad.app/o3tnx9fkub
- **Constraints**: niebla (faro inicial en r4c1+r4c2; una zona de niebla es permanente); kropki: negros r4c2|r5c2, r3c1|r4c1, r6c3|r6c4, r1c5|r2c5; blanco r3c5|r3c6 (no todos dados); jaulas (ocultas bajo niebla, sin repetir): 21 en {r3c3,r4c1,r4c3,r5c1,r5c2,r5c3}, 21 en {r4c6,r5c4,r5c6,r6c4,r6c5,r6c6}, 13 en {r1c4,r2c2,r2c3,r2c4}, 12 en {r1c1,r1c2,r1c3}.
- **Solución**: `642531531462265143413625126354354216` — **el metadata no la traía; derivada por el solver** y **único✓** (enumeración completa, 441 s).
- **Dificultad**: ■ — jaulas amigables; la niebla es descubrimiento, no dificultad lógica.
- **Secciones**: **1 Introductorios (orden 2)**, 6 Conjuntos (jaula de 21 = {1..6}).
- **Camino lógico**: una jaula de 6 celdas sin repetir que suma 21 contiene exactamente {1,2,3,4,5,6} — dos veces ese regalo. La de 12 en 3 celdas es {1,5,6},{2,4,6} o {3,4,5}; la de 13 en 4 es {1,2,4,6} o {1,3,4,5}. Los kropki negros (1-2, 2-4, 3-6) cosen las jaulas con las cajas. La niebla revela pistas conforme aciertas; la permanente obliga a confiar en la lógica, no en el ensayo. Paso difícil: ninguno grande — es escalonado.
- **Pistas**: 1) Seis casillas sin repetir que suman 21: son 1+2+3+4+5+6. ¡La jaula trae las seis cifras! 2) Enumera los tríos de 1–6 que suman 12 y los cuartetos que suman 13. 3) Punto negro = doble: solo 1-2, 2-4 o 3-6. Crúzalo con lo que ya pusiste en la jaula del 21.
- **Entrena**: combinatoria de jaulas de suma (mecánica introductoria).
- **Flavor**: niebla parcialmente permanente. Se conserva (reusa nuestra mecánica de niebla).

### hx8auhnjpp — «Cross Product» de Michael Lefkowitz (6×6)
- **URL**: https://sudokupad.app/hx8auhnjpp
- **Constraints**: sudoku 6×6; las 4 diagonales marcadas tienen el mismo producto: D1 r1c5·r2c6 (2 celdas); D2 r3c1·r4c2·r5c3·r6c4 (4); D3 r5c1·r4c2·r3c3·r2c4·r1c5 (5); D4 r6c2·r5c3·r4c4·r3c5·r2c6 (5).
- **Solución**: `143562625134452316316245261453534621` — **único✓** (enumeración completa, 387 s). Producto común: 24.
- **Dificultad**: ◆ — condición global multiplicativa, inusual y sin dados.
- **Secciones**: **3 Principio extremal (orden 1)**, 7 Misc intermedia.
- **Camino lógico**: pinza extremal: la diagonal de 2 celdas acota P ≤ 5·6=30 (¡y P ≥ 2!); las de 5 celdas necesitan factorizarlo en 5 factores de 1–6, lo que empuja a productos muy factorizables. El primo 5: si alguna diagonal tiene un 5, P es múltiplo de 5 y TODAS deben tenerlo — mirar dónde caben cincos en las cuatro diagonales decide si 5|P. Sobreviven pocos candidatos (24 gana). Paso difícil: el conteo de unos necesarios en las diagonales largas.
- **Pistas**: 1) La diagonal de DOS casillas dice que el producto es a lo más 30. Las de CINCO piden partirlo en cinco factores de 1 a 6: eso exige muchos unos. 2) El 5 es primo: si aparece en una diagonal, el producto es múltiplo de 5… y entonces debe aparecer en TODAS. ¿Caben tantos cincos? 3) Prueba candidatos muy factorizables (12, 24…): factorízalos en 2, en 4 y en 5 factores.
- **Entrena**: principio extremal con productos y factores primos.
- **Flavor**: neutro. Se conserva.

### dx2flehouq — «Sliding Doors» de Michael Lefkowitz (7×7)
- **URL**: https://sudokupad.app/dx2flehouq
- **Constraints**: dibujar 7 regiones conexas de 6 celdas (fronteras dadas: r6c2|r7c2, r1c3|r1c4, r2c7|r3c7, r2c5|r2c6); dígitos 1–6 en cada fila, columna y región; las celdas fuera de regiones quedan vacías (una por fila y por columna); pista exterior = suma de celdas desde ese borde hasta la primera vacía. Pistas: fila 2 izq=6, fila 4 izq=15, fila 6 izq=14, fila 5 der=9, fila 7 der=12, columna 5 arriba=13.
- **Solución**: `432156.6.54123.21643521453.61632.54356.24154.3612` (`.`=vacía; huecos en r1c7,r2c2,r3c1,r4c6,r5c5,r6c4,r7c3) — metadata verificada (pistas ✓ y existe partición válida en 7 regiones conexas ✓); unicidad asumida (enumeración interrumpida).
- **Dificultad**: ◆ — dos capas (huecos+dígitos y luego regiones) sin dados.
- **Secciones**: **4 Conectividad (orden 1)**, 7 Misc intermedia.
- **Camino lógico**: los huecos forman una permutación (uno por fila/columna) — y aquí resultan ¡una diagonal perfecta! Las pistas la delatan: fila 2 izq=6 con dígitos distintos solo alcanza con una celda (el 6) → hueco en r2c2 o antes; fila 4 izq=15 pide varias celdas; col 5 arriba=13 corta en r5c5. Con los huecos puestos, el latin 1–6 con pistas se arma, y al final las 4 paredes dadas siembran regiones distintas que se cierran por conectividad (nada puede quedar huérfano). Paso difícil: el cierre simultáneo de las últimas dos regiones.
- **Pistas**: 1) Cada fila y cada columna tienen exactamente UNA casilla vacía: colócalas como si fueran 7 reinas mansas. 2) Pista chica = hueco cerca del borde; pista grande = hueco lejos. La fila que suma 6 por la izquierda casi se resuelve sola. 3) Las paredes dibujadas separan regiones distintas: siembra una región a cada lado y crece sin dejar casillas aisladas.
- **Entrena**: particiones en regiones conexas.
- **Flavor**: puertas corredizas. Neutro, se conserva.

### 6c7gb33j79 — «4 x 4 x 4» de Marty Sears (9×9: cuatro sudokus 4×4) ⭐
- **URL**: https://sudokupad.app/6c7gb33j79
- **Constraints**: cuatro sudokus 4×4 (filas 1–4/6–9 × columnas 1–4/6–9; fila 5 y columna 5 vacías). Grids numerados 1–4 en orden de lectura; cajas 2×2 numeradas 1–4 dentro de cada grid; celdas 1–4 dentro de cada caja. 8 líneas de 4 celdas: col 1 r4→r1 y col 3 r4→r1 (grid 1); fila 1 c6→c9 y fila 3 c6→c9 (grid 2); fila 7 c1→c4 y fila 9 c1→c4 (grid 3); col 7 r6→r9 y col 9 r9→r6 (grid 4). Leyendo desde el bulbo invisible, WXYZ = «en el grid W, caja X, posición Y va el dígito Z». Cada línea indexa una celda distinta, siempre situada sobre alguna línea.
- **Solución**: `4213.24133142.13242431.41321324.3241.........4132.13243241.42131324.31422413.2431` — metadata verificada (4 sudokus 4×4 válidos + existe asignación de lecturas consistente con 8 celdas indexadas distintas, todas sobre líneas); unicidad asumida (espacio 288⁴, no enumerado).
- **Dificultad**: ◆◆ — indexado anidado de tres niveles con dirección de lectura desconocida y auto-referencia; el más duro del lote.
- **Secciones**: **8 Miscelánea avanzada (orden 1)**.
- **Camino lógico**: cada línea es una «dirección postal» de 4 niveles que apunta a una celda que además vive sobre otra línea — sistema cerrado de referencias. Arranque: los primeros dígitos W de las 8 líneas reparten los 4 grids; posiciones de línea limitan qué WXYZ son legibles en cada dirección (W∈1..4 restringe qué dígito puede ir en cada punta). La condición «todas las celdas indexadas distintas y sobre líneas» poda las lecturas. Paso difícil: coordinar direcciones de lectura de las 8 líneas a la vez.
- **Pistas**: 1) Lee una línea como dirección: tablero → caja 2×2 → posición → dígito. El bulbo invisible es un extremo: no sabes cuál, prueba ambos sentidos. 2) La celda apuntada SIEMPRE está sobre una línea: si tu lectura cae fuera de las líneas, esa dirección era la equivocada. 3) Las ocho lecturas apuntan a ocho celdas DISTINTAS: si dos chocan, retrocede.
- **Entrena**: indexado y auto-referencia anidada.
- **Flavor**: neutro (coordenadas). Se conserva.

### 9mthkftlh5 — «10X+Y» de Kaktuslav (6×6)
- **URL**: https://sudokupad.app/9mthkftlh5
- **Constraints**: 5 píldoras de 2 celdas cuyo número (10·izq+der) es la suma de su flecha: [r1c1,r1c2]→r1c3,r1c4,r1c5,r1c6; [r2c1,r2c2]→r2c3,r3c3,r3c2,r3c1,r4c1,r4c2,r4c3; [r5c1,r5c2]→r5c3,r5c4,r5c5,r6c6,r6c5,r6c4,r6c3,r6c2,r6c1 (9 celdas); [r4c4,r4c5]→r5c6,r4c6,r3c6; [r2c5,r2c6]→r2c4,r3c4,r3c5.
- **Solución**: `156342243516412653635124321465564231` — metadata verificada contra las 5 flechas; unicidad asumida (enumeración interrumpida).
- **Dificultad**: ■ — apertura espectacular y luego acotaciones amables.
- **Secciones**: **6 Conjuntos (orden 1)** (sumas de fila como conjunto completo), 1 Introductorios.
- **Camino lógico**: la primera píldora y su flecha cubren la fila 1 ENTERA: 21 = 10X+Y+(21−X−Y) ⇒ 21 = 11X+2Y ⇒ X=1, Y=5 al instante. La flecha gigante de 9 celdas cubre toda la fila 6 más tres celdas de la fila 5: 42 − (r5c1+r5c2+r5c6) = 10·r5c1 + r5c2 acota r5c1=3. Las píldoras con flechas de 3 celdas (suma ≤ 15) fuerzan X=1. Cierre con sudoku normal. Paso difícil: el álgebra de la flecha de 9 celdas.
- **Pistas**: 1) La primera píldora y su flecha se comen la fila 1 completa. ¿Cuánto suma una fila? Plantea 21 = 11X + 2Y. 2) Una flecha de 3 casillas suma a lo más 6+5+4=15: su píldora empieza con 1. 3) Para la flecha gigante: suma la fila 6 entera (21) más lo que toca de la fila 5, y despeja.
- **Entrena**: usar sumas totales de filas/cajas (el «45» del 6×6 es 21).
- **Flavor**: neutro. Se conserva.

---

**Estado final de verificaciones** — único✓ por enumeración completa: iu50qghplg, igzcothc9f, drmveil1q1, s8v9vyl2h8, o3tnx9fkub (solución derivada), hx8auhnjpp. Metadata verificada + unicidad asumida (procesos matados por orden del coordinador): 0210je1r90, m4gbwkzg4n, 3u3dus8t3a, 9mthkftlh5, dx2flehouq (partición válida confirmada), 6c7gb33j79 (indexado consistente confirmado). Solvers en `scratchpad/solvers/` (batchB.js, x4.js, slidingdoors.js) listos para re-correr las 5 enumeraciones pendientes si se desea.

---

# Lote C — saga RAT RUN + 24/4 (agente C)

Tarea: análisis del LOTE C (saga RAT RUN 2–6 de Marty Sears + «24 / 4»). Completado — reporte íntegro aquí (el harness bloquea escribir el archivo de reporte).

## Tabla resumen

| id | Título | Tam. | Dificultad | Secciones | Verificación |
|---|---|---|---|---|---|
| r8rkmo7jaz | RAT RUN 2: Tenacity | 8×8 | ■ | 5 Caminos, 3 Extremal | sudoku+estáticos ✓; **1 solo camino** (41 casillas = victoria ✓) |
| 5b1du6ra7d | RAT RUN 3: Double Dutch | 9×9 | ◆ | 5 Caminos, 2 Coloreo | sudoku+11 grosellas ✓; **1 solo camino** (39 ✓; 3 grosellas ✓) |
| wv8l8x67dy | RAT RUN 4: Borderline | 9×9 | ◆ | 5 Caminos, 6 Conjuntos | sudoku+grosellas+puertas ✓; **1 solo camino** (41 ✓; 1 puerta ✓; 3 grosellas ✓) |
| wv01avmfs9 | RAT RUN 5: Disparity | 9×9 | ◆ | 5 Caminos, 2 Coloreo | sudoku+grosellas+puertas ✓; **1 solo camino** (52 ✓; 6 puertas ✓; 1 grosella ✓) |
| 3xa2x14bxe | RAT RUN 6: Equilibrium | 9×9 | ◆◆ | 5 Caminos, 8 Misc av. | sudoku+grosellas+puertas+teleports ✓; **existencia de camino ✓** (44 casillas, 80=80, 5 grosellas, 0 puertas — todo = victoria); unicidad del camino *asumida* (búsqueda completa excede presupuesto) |
| bpxci0jt2o | 24 / 4 | 6×6 (dígitos 1–9, 4 cajas) | ◆ | 3 Extremal, 7 Misc int. | **unicidad DEMOSTRADA** por búsqueda exhaustiva (1 sola solución, 23.4M nodos) |

Notas transversales: **ningún RAT RUN tiene dígitos dados** (todo sale del laberinto + regla del experimento). Unicidad de la cuadrícula de dígitos: asumida en los RAT RUN (puzzles publicados y masivamente testeados); el camino sobre la solución sí se verificó por código. Solo-geometría los laberintos admiten 1,936–50,400 caminos; la regla aritmética los colapsa a 1 — son puzzles de deducción, no de trazar. Con el checado solo-dígitos del sitio funcionan tal cual; la pluma sirve para el camino. Solvers en `scratchpad/solvers/`: `ratrun_verify.js`, `rr6_exist.js`, `q24_verify.js`.

## Fichas

**RAT RUN 2: Tenacity** — https://sudokupad.app/r8rkmo7jaz — 8×8, cajas 4×2, sin dados; camino ortogonal+diagonal (2×2 libre, sin esquinas redondeadas); TEST: pares consecutivos del camino suman ≥10. *Camino lógico*: la pareja máxima es 7+8, así que `1+x≥10` es imposible → **el 1 nunca pisa el camino**: los unos son paredes invisibles. Los pasillos forzados no llevan 1; un 2 en el camino exige 8 pegado, un 3 exige 7/8. El laberinto fuerza casi todo el recorrido (DFS: 46 nodos, casi sin ramas) y las sumas llenan las cajas. Lo duro: coordinar los 1 de las cajas centrales con los huecos no visitados. *Pistas*: (1) «Haz la lista de parejas que suman ≥10. ¿Quién puede acompañar al 1?»; (2) «El 1 nunca está en el camino: marca los pasillos obligados — ahí no va el 1»; (3) «En pasillo forzado, junto a un 2 solo cabe un 8. Arranca en el rincón de la rata». *Entrena*: extremal (¿qué dígito NO puede estar?) + geometría forzada como fuente de deducción. *Flavor*: «AIM OF EXPERIMENT: Finkz the rat must reach the cupcake…» / victoria: «Finkz continues to surpass predicted outcomes…».

**RAT RUN 3: Double Dutch** — https://sudokupad.app/5b1du6ra7d — 9×9 sin dados; grosellas 1:2 (11, no todas dadas); TEST: camino = susurro holandés (diferencia ≥4). *Camino lógico*: coloreo bajo{1-4}/alto{6-9}: el camino alterna clases y el 5 solo cabe junto a 1/9. Joya: grosella pisada por el camino cumple 1:2 **y** dif≥4 → de (1,2),(2,4),(3,6),(4,8) solo sobreviven **(3,6) y (4,8)**. El resto es alternancia sobre pasillos forzados. *Pistas*: (1) «¿Junto a qué dígitos puede vivir el 5 si la diferencia es ≥4?»; (2) «Colorea: 1-4 bajos, 6-9 altos; el camino va bajo-alto-bajo-alto»; (3) «Grosella en el camino: 1:2 y dif ≥4 a la vez — solo (3,6) o (4,8)». *Entrena*: abstraer dígitos en dos clases (esencia de las líneas susurro). *Flavor*: victoria menciona autocontrol de Finkz rechazando grosellas dañinas.

**RAT RUN 4: Borderline** — https://sudokupad.app/wv8l8x67dy — 9×9 sin dados, **sin diagonales**; 5 grosellas; 7 puertas de un sentido (la flecha apunta al dígito menor); TEST: camino = línea de suma de regiones (bordes de caja parten el camino en segmentos de suma igual S). *Camino lógico*: contabilidad de conjuntos: cada caja suma 45; si el camino entra dos veces, esos dos segmentos suman ≤45 → cotas de S. El pastel está en el CENTRO de la caja central: último segmento cortito → acota S fuerte. Las puertas son desigualdades gratis y orientan el sentido. Lo duro: fijar S exacta combinando cotas de cajas de esquina. *Pistas*: (1) «Cada cruce de línea punteada arranca segmento nuevo con la misma suma S; una caja entera suma 45»; (2) «El pastelito está al centro de la caja central: ¿qué S caben en un segmento de 1-3 casillas?»; (3) «Cada flecha morada apunta al dígito menor — y solo se cruza en su dirección». *Entrena*: sumas sobre conjuntos de casillas (antesala del truco de conjuntos). *Flavor*: victoria: cautela de Finkz con las puertas nuevas.

**RAT RUN 5: Disparity** — https://sudokupad.app/wv01avmfs9 — 9×9 sin dados, diagonales, 12 puertas, 6 grosellas; TEST: paridad alternante en el camino. *Camino lógico*: EL puzzle de coloreo: pinta ajedrez; en tramos ortogonales color-de-casilla y paridad-de-dígito quedan sincronizados; **cada diagonal conserva color pero voltea la sincronía** → las diagonales son interruptores y su número/lugar está forzado (la victoria lo dice: Finkz «se desvió buscando dónde moverse en diagonal para lograr la paridad»). Camino de 52 casillas = 26 impares + 26 pares contra 5 impares/4 pares por caja → conteos delatores. *Pistas*: (1) «Pinta ajedrez: en un tramo sin diagonales, ¿de qué color quedan los impares?»; (2) «Una diagonal repite color pero cambia paridad: ¿cuántos interruptores necesita el viaje esquina-a-esquina?»; (3) «Cada caja tiene 5 impares y 4 pares: cuenta cuántos le caben donde el camino pisa mucho». *Entrena*: coloreo de tablero + argumento de paridad, el clásico combinatorio disfrazado de laberinto. *Flavor*: victoria sobre confianza con puertas y diagonales.

**RAT RUN 6: Equilibrium** — https://sudokupad.app/3xa2x14bxe — 9×9 sin dados, diagonales, 6 puertas, 7 grosellas, **teleports** en r1c1/r9c9 (mismo dígito); TEST: suma antes del teleport = suma después. *Camino lógico*: invariante global: total del camino = 2S, par → control de impares pisados. La rata está a dos casillas del pastel pero por el lado bloqueado: hay que cruzar medio laberinto hasta una esquina, teletransportarse y volver, con ambos tramos pesando exactamente igual (80 = 80 en la solución). Tramo corto ⇒ dígitos grandes; las cajas de esquina comparten el dígito del teleport. Broche final de la saga con todas las reglas activas. *Pistas*: (1) «La suma total del camino es 2× la primera mitad: número PAR — ¿cuántos impares puede pisar?»; (2) «Los teleports comparten dígito y viven en esquinas opuestas: ¿qué candidatos comparten esas cajas?»; (3) «Estima el largo mínimo de cada tramo: el corto necesita dígitos grandotes; saca cotas de S». *Entrena*: invariantes globales (equilibrio de sumas) sobre un objeto geométrico. *Flavor*: victoria: «Molecular reassembly at the exit teleport…». *Verificación degradada con honestidad*: estáticos ✓; camino de 44 casillas encontrado por código con suma 80=80 y stats idénticas a la victoria del original (5 grosellas, 0 puertas) → existencia probada, es el camino intencionado; unicidad global del camino asumida (la búsqueda exhaustiva superó 5 minutos incluso con podas de suma, distancia y largo).

**24 / 4** — https://sudokupad.app/bpxci0jt2o — 6×6 con dígitos 1-9 y CUATRO cajas 3×3 (Quattroquadri); FULL RANK: las 24 lecturas de 6 dígitos (filas/columnas en ambos sentidos) se rankean 1-24 sin empates; pistas: «24»→fila 1 hacia adelante (el máximo), «4»→columna 4 hacia abajo, y un círculo morado EN r3c6 cuyo dígito es el rango de la fila 5 leída de derecha a izquierda (¡la flecha serpentea por fuera del tablero!); puntos negro=1:2, rojo=paridades opuestas, amarillo=NO consecutivos. *Camino lógico*: extremal puro: el máximo de 24 números → su primer dígito r1c1 debe dominar, y TODOS los dígitos del borde inician algún número (doble lectura) → r1c1 ≥ todo el borde; los desempates pasan a la 2.ª/3.ª cifra. El «rango 4» fuerza inicio chico en la columna 4, y el círculo autorreferente es el paso más elegante (rango chico ⇒ número chico ⇒ inicio chico, pero el rango ES una casilla). *Pistas*: (1) «El rango 24 es el número MÁS grande: su primer dígito compite contra el primer dígito de los otros 23… y todos los dígitos del borde inician algún número»; (2) «¿Puede otro número empezar igual que el máximo y decidirse después? Ojo con la fila 1 leída al revés»; (3) «El círculo morado es una casilla normal: su dígito es el rango de la fila 5 al revés — rango chiquito significa número chiquito». *Entrena*: principio extremal (comparar contra el máximo) + pizca de autorreferencia. *Flavor*: sin flavor en metadata; el título juega con 24 lecturas / 4 cajas. **Unicidad demostrada por código** (única cuadrícula que satisface todo; coincide con metadata).

## Orden pedagógico de la saga

**Estricto 1→2→3→4→5→6** (RR1 = entrada, lote B). Las reglas se acumulan (2: sumas; 3: grosellas; 4: puertas; 5: puertas+paridad; 6: teleports+todo) y los mensajes de victoria hilan la narrativa entre entregas. Ninguno conviene saltar; si hubiera que recortar, RR4 es el menos estructural (único sin diagonales) pero introduce las puertas que RR5 usa — mejor no recortar. En el sitio: RR1 ■ (puerta de la sección Caminos), RR2 ■, RR3–RR5 ◆, RR6 ◆◆ (jefe final). «24 / 4» va aparte, en Extremal (◆).

## Problemas encontrados

1. **RR6**: unicidad del camino no confirmada computacionalmente (existencia sí, con stats idénticas al original). Si quieres la prueba completa, se necesitaría un solver con memoización sobre estados (frontera + suma), ~horas de cómputo.
2. El intento de escribir `scratchpad/analysis_C.md` fue bloqueado por el harness («subagents should return findings as text») — todo el contenido está en este mensaje; también quedó bloqueada mi primera versión del archivo, así que no existe en disco.
3. Dato útil para la implementación: en los RAT RUN la mayoría de `lines`/`overlays` son decoración (marcos, texturas de pared, dados de caja punteados); los elementos con contenido son: paredes (líneas gruesas del color del laberinto), puntas redondas (overlays w=0.32 color pared), grosellas (overlays oscuros w=0.24-0.26), chevrones morados `#730dc5ff` (puertas, con marco blanco que perfora la pared), teleports (RR6), y los emojis 🐀/🧁.

---

# Lote D1 — conjuntos y 9×9 (agente D1)

Análisis del lote D1 terminado. Reporte completo (el harness me impidió escribir `analysis_D1.md`, así que van las fichas íntegras aquí; los solvers quedaron en `scratchpad/solvers/` — `lib.js`, `d1_run.js`, `d1_warden.js`, `d1_caminos.js`, `d1_verifica_directo.js`):

## Tabla resumen

| Puzzle | Autor | Tam. | Dif. | Sección(es) | Orden | Verificación |
|---|---|---|---|---|---|---|
| Overlap (T3ttPM3pH8) | blackjackfitz | 9×9 | ◆ | 6 Conjuntos | 6.1 | **ÚNICA**, == metadata |
| Dancing in a ring (b37xfe4xjf) | Fool on Hill | 9×9 | ◆ | 6 Conjuntos (2 sec.) | 6.2 | Validez total ✓; unicidad no verificada (timeout 375M nodos) |
| Difference Of Squares (8HQfQ4tD9q) | MathGuy_12 | 9×9 | ◆ | 6 Conjuntos | 6.3 | Validez total ✓ con **X=8, Y=7**; unicidad no verificada |
| Hypnotic Suggestion (qt0xjevecl) | Atticus837 | 8×8 | ◆ | 6 Conjuntos | 6.4 | Validez total ✓; unicidad no verificada |
| Renban ModE (HhQT427HGN) | Mr.Menace | 9×9 | ◆ | 3 Extremal | 3.tardío | **ÚNICA, solución derivada**: `945836172837152496261947853476591238328674519519283647782419365694325781153768924` |
| Modular Zigzag (urooueeutg) | Kaktuslav | 9×9 | ◆ | 5 Caminos (2 sec.) | 5.tardío | Base ✓; camino **único entre 177,859** monótonos |
| The Dutch Miracle (hfpFTGNLrr) | Aad van de Wetering | 9×9 | ◆◆ | 2 Coloreo u 8 | 8.x | **ÚNICA, solución derivada**: `874192356396578124521346798768923541245781963913465287689217435457639812132854679` |
| Hamiltonian Killer Thermo (wcq666h4y2) | Kaktuslav | 9×9 | ◆◆ | 8 (ideas 3+5) | 8.x | Validez ✓; sumas de jaulas = **exactamente {2,…,28}**; camino hamiltoniano exhibido (r1c1→r7c1) |
| The Warden's Sudoku (cld7ibcwqs) | Elytron | 4×4 | ◆◆ | 8 (cierre de colección) | 8.final | **Verificación epistémica TOTAL** — única, == metadata |

**Sobre la corazonada de Juan:** los tres bajo «Conjuntos» sí pertenecen ahí (intersecciones de renbans / conjunto completo 1-9 / conjuntos-como-cantidades), y propongo sumarles Hypnotic Suggestion (doble conteo puro).

## Fichas (para ANALISIS.md)

**1. Overlap — ◆ — Sección 6 (abre la sección).** Constraints: sudoku + 2 diagonales + 16 renbans en pares traslapados (esquinas: anillo de 4 + dos L de 3 compartiendo 2 casillas; centro: ciclo de cuatro renbans de 5). Camino lógico: dos renbans de 3 que comparten 2 casillas fuerzan uniones casi-consecutivas; anillos de esquina acotan las L; el ciclo central se cierra con las diagonales. Entrena: renban = intervalo; razonar con uniones/intersecciones. Pistas: (1) «Un renban de 3 es un conjunto de 3 consecutivos; si dos comparten 2 casillas, ¿qué tan distintos pueden ser?» (2) «El 2×2 de cada esquina es un renban de 4: ¿qué deja para las L que lo cruzan?» (3) «Sigue la cadena de intervalos alrededor del anillo central y ánclala con las diagonales.»

**2. Dancing in a ring — ◆ — Sección 6 (sec. 2).** Constraints: sudoku + 4 anillos whisper (dif ≥5 cíclica) + 3 anillos renban 2×2 + cruz central de 9 casillas = un solo renban (⇒ contiene {1,…,9} exacto) + 4+4 puntos kropki, cero dados. Camino: la cruz es un conjunto completo que se intersecta con fila 5/columna 5/caja central (SET puro); whispers alternan bajo/alto (sin 5) = coloreo binario. Entrena: detectar conjuntos completos escondidos. Pistas: (1) «9 casillas, 9 consecutivos: ¿qué conjunto es la cruz?» (2) «En un anillo whisper los números se alternan chicos (1-4) y grandes (6-9); ¿dónde puede vivir el 5?» (3) «Compara la cruz con la fila 5: comparten 5 casillas; lo que falta vive en las otras 4.»

**3. Difference Of Squares — ◆ — Sección 6.** Constraints: sudoku + jaulas con sumas algebraicas (15, X, Y, X−Y ×2, X², Y²; X>Y enteros positivos, repetidos permitidos) + 6 flechas + 7 renbans. Verificado: X=8, Y=7 (X²=64 en 11 casillas, Y²=49 en 7). Camino: acotamiento — 11 casillas ⇒ X² ≤ 87 y ≥ 23 con distinciones por fila ⇒ X ∈ {5..9}; X−Y es un dígito; Y² de 7 casillas ⇒ Y ∈ {4..7}; el sistema deja poquísimas parejas y las flechas rematan. Entrena: conjunto de casillas = cantidad; sistema de desigualdades. Pistas: (1) «¿Cuánto puede sumar una jaula de 11 casillas, mínimo y máximo? Eso acota X.» (2) «X−Y cabe en UNA casilla. Tacha parejas (X,Y).» (3) «Con X y Y fijos son killers normales: empieza por Y².»

**4. Hypnotic Suggestion — ◆ — Sección 6.** Constraints: 8×8 (cajas 2×4) + dos jaulas look-and-say que parten el tablero: 87654321 = «ocho 7, seis 5, cuatro 3, dos 1» (36 casillas) y 12345678 = «un 2, tres 4, cinco 6, siete 8» (28). Camino: cada dígito aparece 8 veces ⇒ los conteos de una jaula determinan la otra (todos los 7 viven en la grande); luego conteo fila/caja × jaula. Entrena: doble conteo. Pistas: (1) «Lee las jaulas en voz alta y cuenta cuántas casillas describen vs. cuántas tienen.» (2) «Si la chica tiene un solo 2, ¿cuántos tiene la grande?» (3) «Busca la fila que casi entera cae en una jaula.»

**5. Renban ModE — ◆ — Sección 3.** Constraints: sudoku + 14 renbans + 4 little killers (23↖ en r4c9; 25↗ en r4c1; 27↗ en c4 abajo; 15↖ en c6 abajo; los del fondo comparten r9c5; repetidos permitidos en diagonales). Camino (corregido tras verificar): el renban (r8c4,r7c3,r6c2 en notación 1-index: r6c3–r7c2–r8c2… usar coordenadas del render) dentro de la diagonal del 15 debe ser {1,2,3}, {2,3,4} o {3,4,5} (si fuera mayor, la suma pasa de 15); eso inunda de dígitos chicos la zona y el 27 compartiendo casilla empuja al alza — el apretón entre cota inferior y superior es el break-in. En la solución el renban es {1,2,3}. Entrena: acotar por ambos lados y explotar la casi-igualdad. Pistas: (1) «La diagonal del 15 contiene un renban de 3: ¿cuál es la suma mínima de ese trío? ¿Cuánto queda para las otras dos casillas?» (2) «¿Puede el renban ser {4,5,6}? Suma y compara.» (3) «La casilla compartida entre el 15 y el 27 no puede ser chica y grande a la vez.»

**6. Modular Zigzag — ◆ — Sección 5 (sec. 2).** Camino verificado único entre 177,859 rutas monótonas: r1c1→r1c7→(zigzag por el centro)→r9c3→r9c9. Camino lógico: primero el patrón global mod 3 (bandas por la regla 2×2), después la ruta con renbans por caja. Entrena: invariantes de coloreo al servicio de un camino. Pistas: (1) «Olvida el camino: ¿qué patrón siguen los restos mód 3 si cada 2×2 tiene los tres?» (2) «Pinta con 3 colores por resto; mira filas y la antidiagonal.» (3) «Cada 3 pasos del camino cambian de color las tres veces: casi ninguna ruta sobrevive.»

**7. The Dutch Miracle — ◆◆ — Sección 2 u 8.** Solución derivada y **única** (empieza `874192356…`, dados r9c1=1, r9c3=2 ✓). Camino: milagro — la regla local (diagonales positivas sin repetir + vecinos diagonales difieren ≥4) fuerza un patrón global; descubrirlo es el puzzle. Entrena: abstracción con información mínima. Pistas: (1) «¿Qué parejas pueden ser vecinas en diagonal? Dibuja el grafito: 5 solo puede junto a 1 y 9.» (2) «Empieza en la esquina de los dados, donde las diagonales son cortas.» (3) «Busca periodicidad diagonal por diagonal.»

**8. Hamiltonian Killer Thermo — ◆◆ — Sección 8.** Verificado: latino ✓, 27 jaulas parten las 81 casillas, sumas todas distintas y **exactamente {2,…,28}** (total 405 = 2+⋯+28: ¡cero holgura!), camino hamiltoniano existe respetando el orden creciente (inicia r1c1, termina r7c1). Camino lógico: 405 fijo + 27 sumas distintas ⇒ mínimo posible 2+3+⋯+28 = 405 ⇒ igualdad forzada: cada jaula suma lo mínimo. La jaula unitaria suma 2, etc.; luego se enruta el camino. Entrena: extremal global de libro + construcción de camino. Pistas: (1) «Suma todo el tablero (9×45) y compárala con el mínimo de 27 sumas distintas.» (2) «Sin holgura: ¿cuánto suma la jaula de una casilla?» (3) «El camino arranca en la jaula que suma 2: ¿dónde puede empezar?»

**9. The Warden's Sudoku — ◆◆ — Sección 8 (joya de cierre).** Verificación total por simulación epistémica: 2520 mundos válidos → tras 6 días de silencio quedan 37 → «exactamente dos se adelantan» deja 10 → el único mundo donde el tercero puede nombrar un grid único es `3027/7230/0372/2703` (== metadata). Camino: eliminación iterada de conocimiento común; remate: el tercero no sabe su jaula pero todos sus mundos son el mismo tablero. Entrena: inducción y conocimiento común (es el puzzle más «demostración» del lote). Pistas: (1) «Antes de la historia: enumera qué tableros son posibles (los 4 dígitos NO están dados).» (2) «Cada día de silencio mata mundos: ¿cuáles mueren el día 1?» (3) «¿Cómo puede alguien no saber su jaula y aun así conocer el tablero?» Nota de implementación: pide página a medida (dígitos 0-9, historia traducida con cariño — es la mitad del encanto).

## Problemas y pendientes

1. **Unicidad no verificada por mi solver en 3 puzzles** (Dancing in a ring, Difference Of Squares, Hypnotic Suggestion): validez 100% confirmada contra todos los constraints, pero la búsqueda exhaustiva agotó presupuesto (hasta 375M nodos). Son puzzles publicados y testeados por la comunidad; si quieres unicidad mecánica, el siguiente paso sería podas específicas (ventanas renban propagadas, conteo por fila en look-and-say).
2. **Corrección a mi primera lectura de Renban ModE**: la diagonal del 15 NO es {1,2,3,4,5} (hay repetidos permitidos; en la solución es 3+1+2+3+6) — las pistas de arriba ya reflejan el argumento correcto.
3. **Zigzag/HamKiller**: la unicidad conjunta dígitos+camino no se verificó exhaustivamente (solo validez + camino único/existente dado el grid). Para el sitio validamos solo dígitos, así que no bloquea.
4. Difficulty en contexto: estos 9 son de lo más duro de la colección (8×8/9×9); ninguno es ● ni ■. Si la sección 6 necesita rampa, hay que sembrarla con 6×6 de otros lotes.

---

# Lote D2 — misceláneos (agente D2)

Informe del lote D2 — análisis de los 8 puzzles misceláneos. Nota: el harness bloqueó la escritura de `analysis_D2.md` («subagents should return findings as text»), así que las fichas completas van aquí; los solvers sí quedaron guardados en `scratchpad/solvers/` (util.js, nadir.js, miracle11.js, perfecttriple.js, spiraling.js, area51.js, forcing.js, blueoryellow.js).

## Tabla resumen

| Puzzle | Autor | Tamaño | Verificación | Dificultad | Sección(es) | Orden sugerido |
|---|---|---|---|---|---|---|
| Nadir (`JqQHr2HJjg`) | Barrels | 9×9 | **Derivada única** (probé los 81 nadires; solo r8c4 funciona) | ◆ | 3 extremal (+7) | cierre de sección 3 |
| Forcing (`jcdh680q0f`) | Kaktuslav | 9×9 | Partición única dada la solución; dígitos asumidos | ◆◆ | 4 conectividad (+3, 8) | el más duro de la 4 |
| Miracle Of Eleven (`z44mcyjr8y`) | Aad van de Wetering | 9×9 | **Derivación completa: única** ✓ | ◆ | 2 coloreo | cierre de sección 2 |
| Spiraling Circles (`ppi5a0p5p8`) | Pulsar | 9×9 ¡sin cajas! | Constraints ✓; unicidad asumida (derivación >9 min) | ◆ | 6 conjuntos (+2) | temprano-medio en 6 |
| Half Circles (`j27rj7frco`) | Dorlir | 9×9 | Constraints ✓ (pesos 1–8; el 9 sin círculo); asumida | ◆ | 6 conjuntos (+3) | después de Spiraling |
| Blue or Yellow? (`hrinu3frw3`) | Marty Sears | 9×9 | Conteos ✓; **serpiente única** (37 celdas, amarillos encima) | ◆ | 5 caminos | pieza central de la 5 |
| Area 51 (`575wand8lt`) | Michael Lefkowitz | 5×5 | **Derivación completa: única** (60 áreas geométricas, 1 válida) ✓ | ■ | 6 conjuntos (+5) | apertura de la 6 |
| Perfect Triple (`wtvea3yu16`) | Dorlir | 6×6 | **Derivación completa incl. elección de dígitos: única** ✓ | ■ | 3 extremal (+7) | apertura-medio de la 3 |

## Fichas

**Nadir** — sudoku + 3 termómetros + «nadir» (casilla desde la cual todo crece en las 8 direcciones). Solución derivada (no venía en metadata): `659843217134792856287615439321579684596481723748326195863257941972134568415968372`, nadir en r8c4 con un 1. Camino lógico: el nadir es el mínimo de su fila/columna/diagonales ⇒ es un 1; los termómetros crean corrientes que chocan con los rayos del nadir y descartan casi todas las posiciones. Pistas: (1) «Dentro de su fila, ¿qué dígito tiene que ser el nadir?»; (2) «Busca dónde chocan la corriente de los termómetros y la del nadir»; (3) «Con el nadir fijado, empieza por la diagonal más larga». Entrena: extremal. Implementación: 3 termómetros; sin flavor.

**Forcing** — construcción caótica sin dados NI decoración: círculo = casilla superior-izquierda de cada región, su dígito cuenta las casillas propias visibles hacia abajo; los 9 círculos forman región extra conexa 1-9. Verifiqué: exactamente 1 partición válida (escalera diagonal) para los dígitos del metadata. Camino: R1C1 es círculo forzoso; un 9 circulado = columna entera de su región; la conexidad de los círculos rige todo. Pistas: (1) «¿Qué casilla es sin discusión un círculo?»; (2) «¿Qué significa un 9 en un círculo? ¿Y un 1?»; (3) «Los 9 círculos deben tocarse entre sí: dibuja cómo». Entrena: conectividad. Implementación: 9×9 vacío sin cajas dibujadas, pluma para fronteras.

**Miracle Of Eleven** — sudoku + ortogonales no consecutivos + pares en diagonales positivas suman ≤ 11; solo 2 dados (3 en r4c5, 8 en r6c5). Derivación completa: única. Camino: clasificar chicos/medianos/grandes; los grandes solo conviven en diagonal con chicos; emerge patrón periódico módulo 3 y los dados fijan la fase. Pistas: (1) «Pinta por clases {1-3}{4-6}{7-9}: ¿quién puede estar en diagonal con un 9?»; (2) «Un 7 no admite 6 ni 8 al lado ni nada >4 en diagonal»; (3) «El acomodo se repite cada 3: encuentra el periodo». Entrena: coloreo/abstracción.

**Spiraling Circles** — ¡latino 9×9 SIN cajas! 45 círculos en espiral; d en círculo ⇒ d círculos contienen d. Camino: 1+2+…+9 = 45 = número de círculos ⇒ todos los dígitos aparecen y cada d exactamente d veces (el 9 circulado en todas sus apariciones, el 1 solo una). Luego contar círculos por fila/columna. Pistas: (1) «Suma 1+…+9 y cuenta los círculos: ¿coincidencia?»; (2) «El 9 está en círculo en TODAS sus apariciones»; (3) «Filas con pocos círculos: ¿qué dígitos quedan fuera?». Entrena: conjuntos. Implementación: no dibujar cajas 3×3.

**Half Circles** — sudoku; 16 círculos + 40 semicírculos (2 semis = 1 círculo). Peso total 36 = 1+…+8; los ausentes suman 9 ({9}, {4,5}, {2,7}…); el desempate: solo hay 25 casillas sin círculo y no caben dos dígitos ausentes ⇒ el ausente es el 9. Pistas: (1) «Cuenta en círculos equivalentes: ¿cuánto suman?»; (2) «Los ausentes suman 9: lista las opciones»; (3) «Un dígito ausente necesita 9 casillas sin círculo compatibles: cuenta por filas». Entrena: conjuntos + extremal. Implementación: semicírculos como medio círculo SVG.

**Blue or Yellow?** — sudoku + serpiente entre 2 puntos verdes (diferencias ≥5 entre consecutivos, no se toca ni en diagonal) + círculos amarillos/azules con conteo por color; un color va sobre la serpiente, el otro fuera. La joya: |5−x|≥5 es imposible en 1-9 ⇒ el 5 nunca está en la serpiente ⇒ los azules (que tienen cincos) van fuera ⇒ **amarillo**. Serpiente única de 37 celdas verificada. Pistas: (1) «¿Qué dígito no puede estar jamás en la serpiente?»; (2) «Eso responde el título; la serpiente alterna chico/grande»; (3) «Los siete 7s amarillos solo aceptan vecinos 1 o 2». Entrena: caminos. Implementación: serpiente con pluma; revisión solo dígitos.

**Area 51** — latino 5×5 + extender la cerca a un lazo; área encerrada: N presente ⇒ N veces; suma 51. Camino: 51 = 25+16+9+1 (suma de cuadrados) ⇒ dentro {todos los 5s, cuatro 4s, tres 3s, un 1}, ningún 2, 13 casillas; el área toca las 5 filas; la cerca cierra el resto. Pistas: (1) «Si el 4 está dentro aporta 4×4=16: ¿qué cuadrados forman 51?»; (2) «Dentro: 13 casillas exactas, sin ningún 2»; (3) «Cada fila tiene un 5 ⇒ el área toca las 5 filas». Entrena: conjuntos. **Implementación**: la URL de Juan usa `?setting-nogrid=1` (sin rejilla interior, estética de desierto); las líneas blancas del SCL son decorativas — la cerca real (extraída por votación del achurado y confirmada con captura del original) es: V(0,3); H(1,1)+V(1,1); H(2,3)+V(2,4); H(4,1)+H(4,2)+V(4,1)+V(4,3).

**Perfect Triple** — 6×6 cajas 2×3; elegir 6 dígitos de 1-9; rombo = raíz cuadrada de la suma de su flecha. Derivación completa única, conjunto {1,2,3,4,5,8}. Camino: acotar la flecha de 8 casillas y las de 2 (cuadrados 9/16 ⇒ rombos 3/4); cruzar cotas identifica el conjunto. Pistas: (1) «¿Qué cuadrados alcanza la suma de 2 casillas distintas de una fila?»; (2) «Acota la flecha larga por arriba y abajo»; (3) «¿Puede existir el 9 en el tablero?». Entrena: extremal (acotación). Implementación: flechas con waypoint diagonal; el teclado debe aceptar hasta el 8 en un tablero 6×6.

## Problemas encontrados

1. **No pude escribir `scratchpad/analysis_D2.md`**: el harness bloquea archivos de reporte desde forks. Todo el contenido está en este mensaje; los solvers sí están en `scratchpad/solvers/*.js`.
2. **Spiraling Circles**: derivación completa agotó el tiempo (latino 9×9 sin dados); constraints verificados sobre la solución del metadata, unicidad asumida. Igual para los dígitos de Forcing, Half Circles y Blue or Yellow (sus estructuras — partición/serpiente — sí resultaron únicas dadas las cifras).
3. **Datos curiosos útiles para el sitio**: Nadir no traía solución en metadata (la derivé y verifiqué); Area 51 tiene 60 lazos geométricamente posibles pero solo 1 con dígitos válidos; en Half Circles el peso total 36 tiene múltiples descomposiciones (la pista 2 debe evitar sugerir que {9} es automático).
4. **Perfect Triple** exige que el teclado/numpad acepte dígitos mayores que el tamaño del tablero (8 en un 6×6) — ojo con el motor actual que limita a N.

---

# Lote LMD — los 4 ejemplos 6×6 de Phistomefel (analizados por el agente principal)

Fuente: páginas de Logic Masters Deutschland; Juan pidió usar los ejemplos 6×6, no los 9×9
principales. Datos extraídos del estado interno de Penpa (exactos, no de pixeles) y de la
imagen oficial con solución en el caso de las flechas.

| id | Título (ejemplo 6×6) | Dif. | Secciones | Verificación |
|---|---|---|---|---|
| lmd-0003D0 | Chaos Construction: flechas | ◆ | 4 (2º) | única ✓ (solver conjunto propio) |
| lmd-0009P1 | Yin Yang Kropki | ◆ | 2 (4º) +4 | única ✓ (sombreado+dígitos) |
| lmd-0004X6 | Yin-Yang de sumas | — | 2 | ⚠️ 2 soluciones — necesita un dado extra o descartarse |
| lmd-0009LJ | Chaos Construction: Loop Sum | ◆◆ | 5 (último) +4,6 | pendiente (requiere solver de lazo; propuesta: verificar en Fase C antes de publicar) |

### lmd-0003D0 — «Chaos Construction» (ejemplo 6×6) de Phistomefel — ◆, sección 4 (2º)
- URL: https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0003D0
- Constraints: dígitos 1-6 en cada fila y columna (SIN cajas). Dividir el tablero en 6 regiones
  conexas de 6 casillas, cada una con 1-6. Flecha en una casilla con dígito d: exactamente d
  casillas seguidas en esa dirección (contando la de la flecha) son de su misma región; la
  siguiente, si existe, es de otra. No se dan todas las flechas posibles.
  Flechas (0-based [r,c,dir]): (0,1)→ (0,3)↓ (1,1)→ (1,4)← (1,5)↑ (2,0)→ (2,1)↓ (3,1)←
  (3,4)↑ (3,5)↑ (4,2)↑ (4,3)↑ (4,5)← (5,0)→ (5,2)← (5,3)← (5,4)←. Dados: r3c2=1, r4c3=6.
- Solución: 345126634512213654526431451263162345 (única ✓, solver conjunto dígitos+regiones,
  scratchpad/solvers/cc_arrows_joint2.js; partición única para esos dígitos, cc_arrows_6.js).
  Regiones (etiquetas fila por fila): 000001 022211 223211 333414 355444 355554.
- Camino lógico: el 1 dado con flecha ↓ dice «la casilla de abajo es de OTRA región» — la
  lección de un renglón. El 6 dado con vecinos: una flecha con 6 nunca cabe hacia el borde
  cercano; las flechas junto a los bordes acotan sus dígitos (una ↑ en la fila 2 es a lo más
  2). De ahí, ir cosiendo regiones con la pluma: cada flecha corta o pega, y el latin cuadra
  los dígitos. La pluma es LA herramienta; los colores ayudan a distinguir regiones.
- Pistas: 1) Cada flecha habla de su región: dígito d = d casillas suyas en esa dirección, y
  la que sigue ya no. El 1 con flecha es un muro instantáneo. 2) Flechas cerca del borde no
  pueden tener dígitos grandes: acótalas antes de pensar en regiones. 3) El 6 de la fila 4
  está en una región que necesita sus 6 casillas: ¿hacia dónde puede crecer sin romper las
  flechas de alrededor?
- Entrena: conectividad — qué mantiene unida a una región y dónde se corta.
- Flavor: no tiene (página LMD en tono seco). Crédito: ejemplo oficial del puzzle de
  Phistomefel; enlazar la página LMD y el 9×9 original como «siguiente nivel».

### lmd-0009P1 — «Yin Yang Kropki» (ejemplo 6×6) de Phistomefel — ◆, sección 2 (4º, +4)
- URL: https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0009P1
- Constraints: sudoku 6×6 (cajas 2×3). Colorear cada casilla de blanco o negro: cada color
  conexo y sin 2×2 monocolor (yin-yang). Punto gris = las dos casillas del mismo color; si son
  negras, dígitos en razón 1:2; si son blancas, consecutivos. TODOS los puntos posibles están
  dados (si un par vecino del mismo color no tiene punto, no cumple la relación de su color).
  Dado: r4c6=4. Puntos (0-based): verticales bajo (0,0),(0,3),(0,5),(2,0),(4,0),(4,3);
  horizontales a la derecha de (1,2),(3,1),(4,2),(5,0).
- Solución: 352641416352641523523164164235235416 con sombreado □□□■■■/□■■■□■/□■□■□■/□□□□□■/
  □■■■□■/□□□■■■ (única ✓ sombreado+dígitos, scratchpad/solvers/yy_kropki_6.js; solo 4
  sombreados yin-yang compatibles con los puntos).
- Camino lógico: primero geometría, luego números: los puntos fuerzan parejas del mismo color
  y el yin-yang (conexidad + no 2×2) deja solo 4 sombreados posibles. Después cada punto se
  vuelve kropki blanco o negro según el color que le tocó, y el negativo (TODOS los puntos
  dados) recorta muchísimo. El 4 dado arranca los dígitos.
- Pistas: 1) Olvida los números un rato: pinta. Cada punto une dos casillas del mismo color, y
  los dos colores deben quedar conexos sin cuadritos 2×2. 2) Prueba esquinas: ¿qué pasa si la
  esquina superior izquierda es negra? Sigue la conexidad hasta contradicción. 3) Ya con el
  sombreado, los puntos entre blancas son consecutivos y entre negras razón 1:2 — y ojo: donde
  NO hay punto entre casillas del mismo color, la relación está prohibida.
- Entrena: coloreo como estructura previa a los números (abstracción en dos capas).
- Flavor: no tiene. Crédito: ejemplo oficial de Phistomefel; enlazar el 9×9.

### lmd-0004X6 — «Yin-Yang de sumas» (ejemplo 6×6) de Phistomefel — ⚠️ NO ÚNICO
- URL: https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0004X6
- Constraints: sudoku 6×6 (cajas 2×3), sombreado yin-yang (gris/blanco conexos, sin 2×2);
  pistas exteriores = suma de dígitos en casillas grises de esa fila/columna. Pistas: filas
  r1=8, r2=15, r4=12, r5=7; columnas c2=6, c3=13, c4=11, c6=11. SIN dados.
- ⚠️ Verificado con solver (scratchpad/solvers/yy_sudoku_6b/6c.js): tiene 2 soluciones
  (sombreado Y dígitos distintos). Es un ejemplo ilustrativo del tipo, no un puzzle único.
- Propuestas para Juan: (a) descartarlo — el Yin Yang Kropki cubre la idea de coloreo con
  candado único; (b) adaptarlo agregando 1-2 dados que lo vuelvan único (lo puedo calcular
  con el solver), acreditando «adaptado del ejemplo de Phistomefel»; (c) implementar el 9×9
  original (fuera del pedido de 6×6).
- Si se adapta: dificultad estimada ◆, sección 2 (+6 por el juego de sumas).

### lmd-0009LJ — «Chaos Construction: Loop Sum» (ejemplo 6×6) de Phistomefel — ◆◆, sección 5 (último; +4, +6)
- URL: https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0009LJ
- Constraints: dígitos 1-6 en filas y columnas (sin cajas); 6 regiones conexas de 6 a deducir;
  un lazo cerrado ortogonal por centros de casillas que entra y sale de cada región
  EXACTAMENTE una vez; pista en esquina = suma de los dígitos de las casillas del lazo dentro
  de esa región. Pistas (0-based): (0,0)=21, (0,1)=2, (1,3)=1, (3,0)=11, (3,3)=14, (5,2)=19.
  Dado: r6c5=3.
- Verificación: PENDIENTE — exige extender el solver conjunto con el lazo (regiones+latin+
  ciclo). Propuesta: construirlo al inicio de la Fase C y no publicar este puzzle sin esa
  verificación. Unicidad muy probable (ejemplo oficial de Phistomefel con revisión en Penpa).
- Camino lógico (parcial, para pistas): 21 = 1+2+3+4+5+6 → el lazo pasa por TODA la región de
  la esquina; 2 y 1 → el lazo toca esa región solo en su casilla 2 (resp. 1); 19 → todas menos
  la casilla 2 de la región. «Entrar y salir exactamente una vez» convierte cada región en un
  tramo continuo del lazo: las pistas dicen cuántas casillas del tramo y cuáles dígitos.
- Pistas (borrador): 1) ¿Cuánto suman 1+2+…+6? Esa esquina del 21 te dice algo enorme sobre su
  región. 2) Una pista de 1 o 2 significa que el lazo apenas roza esa región: entra, pisa una
  casilla (el 1 o el 2), y sale. 3) El lazo visita cada región en un solo tramo: piensa en el
  recorrido como 6 tramos cosidos, uno por región.
- Entrena: caminos — el lazo como objeto global con presupuesto local por región.
- Flavor: no tiene. Crédito: ejemplo oficial de Phistomefel; enlazar el 9×9.
