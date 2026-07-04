// Blue or Yellow? (Marty Sears) — verifica: con los dígitos de la solución,
// busca serpientes válidas entre los dos puntos verdes.
// Serpiente: ancho 1, movimientos ortogonales, no se toca ni en diagonal.
// Dígitos consecutivos de la serpiente difieren en ≥5.
// Todos los círculos de un color están sobre la serpiente; los del otro, no.
// Además: dígito en círculo de color = cuántas veces aparece ese dígito en
// los círculos de ese color (constraint estático de conteo).
const sol = '563917284219485736784362591638271459971548362425693817192854673847136925356729148';
const g = sol.split('').map(Number);
const N = 9;

const spots = [[0, 1], [5, 4]];
const yellow = [[3,4],[4,1],[7,2],[6,7],[0,5],[5,8],[8,3],[8,6]].map(([r,c]) => r * 9 + c);
const blue = [[3,7],[5,2],[1,5],[4,6],[7,4],[2,6],[2,3],[0,0]].map(([r,c]) => r * 9 + c);

// 1) conteo estático por color
for (const [name, cells] of [['amarillo', yellow], ['azul', blue]]) {
  const count = {};
  cells.forEach(i => count[g[i]] = (count[g[i]] || 0) + 1);
  let ok = true;
  cells.forEach(i => { if (count[g[i]] !== g[i]) ok = false; });
  console.log('conteo', name + ':', ok ? '✓' : '✗', JSON.stringify(count));
}

// 2) búsqueda de serpiente
const start = spots[0][0] * 9 + spots[0][1];
const goal = spots[1][0] * 9 + spots[1][1];

function findSnakes(onCells, offCells) {
  const mustSet = new Set(onCells), banSet = new Set(offCells);
  const snakes = [];
  const inPath = new Array(81).fill(false);
  const path = [start];
  inPath[start] = true;
  if (banSet.has(start) || banSet.has(goal)) return snakes;

  // No tocarse: ortogonal prohibido salvo con la celda anterior;
  // diagonal prohibido salvo con la anterior y la antepenúltima (el giro).
  function touchesPath(idx) {
    const r = (idx / 9) | 0, c = idx % 9;
    const prev = path[path.length - 1];
    const prev2 = path.length >= 2 ? path[path.length - 2] : -1;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue;
      const rr = r + dr, cc = c + dc, j = rr * 9 + cc;
      if (rr < 0 || rr > 8 || cc < 0 || cc > 8) continue;
      if (!inPath[j]) continue;
      const diag = dr !== 0 && dc !== 0;
      if (!diag && j !== prev) return true;
      if (diag && j !== prev && j !== prev2) return true;
    }
    return false;
  }

  function dfs(cur) {
    if (cur === goal) {
      // ¿todos los círculos obligatorios en la serpiente?
      if (onCells.every(i => inPath[i])) snakes.push(path.slice());
      return;
    }
    const r = (cur / 9) | 0, c = cur % 9;
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
      const rr = r + dr, cc = c + dc, j = rr * 9 + cc;
      if (rr < 0 || rr > 8 || cc < 0 || cc > 8) continue;
      if (inPath[j] || banSet.has(j)) continue;
      if (Math.abs(g[j] - g[cur]) < 5) continue;
      if (touchesPath(j)) continue;
      inPath[j] = true; path.push(j);
      dfs(j);
      inPath[j] = false; path.pop();
    }
  }
  dfs(start);
  return snakes;
}

const withYellow = findSnakes(yellow, blue);
const withBlue = findSnakes(blue, yellow);
console.log('serpientes con amarillos encima:', withYellow.length);
console.log('serpientes con azules encima:', withBlue.length);
const all = [...withYellow, ...withBlue];
if (all.length === 1) {
  console.log('SERPIENTE ÚNICA ✓ longitud', all[0].length);
  console.log(all[0].map(i => '(' + ((i / 9) | 0) + ',' + (i % 9) + ')').join(' '));
}
