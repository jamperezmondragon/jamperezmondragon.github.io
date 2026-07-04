// Spiraling Circles (Pulsar) — deriva/verifica.
// Cuadrado latino 9×9 (solo filas y columnas). 45 casillas con círculo.
// Dígito d en un círculo ⇒ exactamente d círculos contienen d.
// Como todos los dígitos de los círculos deben cumplirlo y hay 45 círculos,
// cada dígito d aparece exactamente d veces en los círculos (1+2+…+9=45).
const N = 9;
const expected = '927456381816345279249678513684123957462891735573912846351789624795234168138567492';

const centers = [[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5],[7.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[5.5,3.5],[4.5,3.5],[4.5,4.5]];
const isCircle = new Array(81).fill(false);
centers.forEach(([y, x]) => { isCircle[(y | 0) * 9 + (x | 0)] = true; });

const grid = new Array(81).fill(0);
const rowM = new Array(9).fill(0), colM = new Array(9).fill(0);
const circCount = new Array(10).fill(0);   // usos de d en círculos (cupo d)
const outCount = new Array(10).fill(0);    // usos de d fuera (cupo 9-d)
const sols = [];

// círculos restantes por fila (para poda de cupos por fila)
const circLeftRow = new Array(9).fill(0);
for (let i = 0; i < 81; i++) if (isCircle[i]) circLeftRow[(i / 9) | 0]++;

function dfs(idx) {
  if (sols.length >= 2) return;
  if (idx === 81) { sols.push(grid.join('')); return; }
  const r = (idx / 9) | 0, c = idx % 9;
  const circ = isCircle[idx];
  for (let d = 1; d <= 9; d++) {
    const bit = 1 << d;
    if (rowM[r] & bit || colM[c] & bit) continue;
    if (circ && circCount[d] >= d) continue;
    if (!circ && outCount[d] >= 9 - d) continue;
    grid[idx] = d;
    rowM[r] |= bit; colM[c] |= bit;
    if (circ) { circCount[d]++; circLeftRow[r]--; } else outCount[d]++;
    // poda: los dígitos que aún caben en círculos deben bastar para los
    // círculos que quedan en el resto de esta fila
    let ok = true;
    if (circLeftRow[r] > 0) {
      let fit = 0;
      for (let e = 1; e <= 9; e++)
        if (!(rowM[r] & (1 << e)) && circCount[e] < e) fit++;
      if (fit < circLeftRow[r]) ok = false;
    }
    if (ok) dfs(idx + 1);
    if (circ) { circCount[d]--; circLeftRow[r]++; } else outCount[d]--;
    rowM[r] &= ~bit; colM[c] &= ~bit;
    grid[idx] = 0;
  }
}
dfs(0);
console.log('soluciones:', sols.length);
sols.forEach(s => console.log(s, s === expected ? '== metadata ✓' : '(distinta)'));
