// Motor mínimo para resolver sudokus de variantes, al estilo SudokuPad pero
// solo con lo esencial: dígitos, esquinas, centro, colores y pluma.
//
// v2: renderizador genérico — la decoración del puzzle llega tal cual del
// formato SCL de SudokuPad (visuals: underlays/overlays/lines/arrows/cages)
// y aquí solo se dibuja; la semántica de las reglas vive en el texto y en la
// cadena de solución. La revisión es SOLO de dígitos contra la solución
// (decisión de diseño; sombreados, caminos y regiones son apoyo libre).
//
// Mecánicas de niebla calcadas de SudokuPad (verificadas jugando allá):
// dinámica, los dados no iluminan, la decoración queda TAPADA por la niebla,
// lo que escribe el usuario se ve encima.
(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  function iniciar() {
    var P = window.PUZZLE;
    if (!P) return;
    var N = P.size;
    var CS = 64;            // tamaño de casilla en px del SVG
    var M = 6;              // margen alrededor del tablero
    var ESC = CS / (P.sclCellSize || 50);   // escala para grosores/fuentes SCL
    var MAXD = 9;           // numpad estándar 1-9 siempre (decisión de Juan)

    // ---------- Estado ----------
    var givens = {};
    (P.givens || []).forEach(function (g) { givens[g[0] * N + g[1]] = g[2]; });

    // Vacío = null (no 0: el 0 es un dígito válido en algunos acertijos,
    // como The Warden's Sudoku).
    var state = {
      values: new Array(N * N).fill(null),
      corners: [], centers: [], colors: [],
      pen: {}
    };
    for (var i = 0; i < N * N; i++) { state.corners.push({}); state.centers.push({}); state.colors.push([]); }

    var selection = {};
    var lastSel = -1;
    var mode = 'digit';
    var history = [], redoStack = [];

    // ---------- Niebla ----------
    function computeLit() {
      if (!P.fog || !P.fog.lights || !P.fog.lights.length) return null;
      var lit = {};
      P.fog.lights.forEach(function (f) { lit[f[0] * N + f[1]] = true; });
      for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
          var idx = r * N + c;
          if (state.values[idx] === null || String(state.values[idx]) !== P.solution[idx]) continue;
          for (var dr = -1; dr <= 1; dr++) {
            for (var dc = -1; dc <= 1; dc++) {
              var rr = r + dr, cc = c + dc;
              if (rr >= 0 && rr < N && cc >= 0 && cc < N) lit[rr * N + cc] = true;
            }
          }
        }
      }
      return lit;
    }

    // ---------- Historial ----------
    function snapshot() {
      return JSON.stringify({
        values: state.values,
        corners: state.corners.map(function (s) { return Object.keys(s); }),
        centers: state.centers.map(function (s) { return Object.keys(s); }),
        colors: state.colors,
        pen: Object.keys(state.pen)
      });
    }
    function restore(snap) {
      var d = JSON.parse(snap);
      state.values = d.values;
      state.colors = d.colors;
      state.corners = d.corners.map(function (a) { var s = {}; a.forEach(function (k) { s[k] = true; }); return s; });
      state.centers = d.centers.map(function (a) { var s = {}; a.forEach(function (k) { s[k] = true; }); return s; });
      state.pen = {}; d.pen.forEach(function (k) { state.pen[k] = true; });
    }
    function pushHistory(snap) { history.push(snap || snapshot()); redoStack = []; if (history.length > 500) history.shift(); }
    function undo() { if (!history.length) return; redoStack.push(snapshot()); restore(history.pop()); repaint(); }
    function redo() { if (!redoStack.length) return; history.push(snapshot()); restore(redoStack.pop()); repaint(); }

    // ---------- Construcción del SVG ----------
    function el(tag, attrs, parent) {
      var e = document.createElementNS(SVGNS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(e);
      return e;
    }

    // Margen dinámico: las pistas exteriores (little killers, sumas de
    // Sliding Doors, decoración) viven fuera del tablero — el lienzo crece
    // para no recortarlas.
    var ext = { minX: 0, minY: 0, maxX: N, maxY: N };
    function extend(y, x, halfW, halfH) {
      ext.minX = Math.min(ext.minX, x - halfW); ext.maxX = Math.max(ext.maxX, x + halfW);
      ext.minY = Math.min(ext.minY, y - halfH); ext.maxY = Math.max(ext.maxY, y + halfH);
    }
    (function scanVisuals() {
      var v = P.visuals || {};
      (v.underlays || []).concat(v.overlays || []).forEach(function (o) {
        if (!o.center) return;
        extend(o.center[0], o.center[1], (o.width || 0.5) / 2 + 0.2, (o.height || 0.5) / 2 + 0.2);
      });
      (v.lines || []).concat(v.arrows || []).forEach(function (l) {
        (l.wayPoints || []).forEach(function (wp) { extend(wp[0], wp[1], 0.3, 0.3); });
      });
    })();
    var mL = Math.max(M, -ext.minX * CS + 4), mT = Math.max(M, -ext.minY * CS + 4);
    var mR = Math.max(M, (ext.maxX - N) * CS + 4), mB = Math.max(M, (ext.maxY - N) * CS + 4);

    var svg = el('svg', {
      viewBox: '0 0 ' + (N * CS + mL + mR) + ' ' + (N * CS + mT + mB),
      // width/height explícitos = dimensiones intrínsecas. Sin ellas,
      // WebKit (iPhone) da al SVG una caja de ancho CERO: el tablero se ve
      // pero ningún tap cae dentro y el juego "no jala".
      width: N * CS + mL + mR,
      height: N * CS + mT + mB,
      'class': 'tablero',
      // además del CSS: algunos móviles necesitan el estilo directo para
      // no convertir el arrastre en scroll
      style: 'touch-action: none; -webkit-user-select: none;'
    });
    document.getElementById('tablero').appendChild(svg);
    var root = el('g', { transform: 'translate(' + mL + ',' + mT + ')' }, svg);

    // Casillas nulas (huecos estructurales, p. ej. 4×4×4): sin rejilla ni
    // selección; sus bordes los trae la decoración SCL.
    var voidSet = {};
    (P.voids || []).forEach(function (rc) { voidSet[rc[0] * N + rc[1]] = true; });

    // Capas, de abajo hacia arriba: colores del usuario, decoración del
    // puzzle (tapable por niebla), niebla, rejilla, texto del usuario,
    // pluma, selección.
    var layerColor = el('g', {}, root);
    var layerDeco = el('g', {}, root);
    var layerFog = el('g', {}, root);
    var layerGrid = el('g', {}, root);
    var layerText = el('g', {}, root);
    var layerPen = el('g', {}, root);
    var layerSel = el('g', {}, root);

    // clipPaths por casilla (rebanadas multicolor)
    var defs = el('defs', {}, svg);
    for (var d0 = 0; d0 < N * N; d0++) {
      var cp = el('clipPath', { id: 'celda' + d0 }, defs);
      el('rect', { x: (d0 % N) * CS, y: Math.floor(d0 / N) * CS, width: CS, height: CS }, cp);
    }

    // ---------- Rejilla ----------
    function drawGrid() {
      var noGrid = P.hideGrid;   // Area 51: sin rejilla interior
      var hayVoids = (P.voids || []).length > 0;
      if (!noGrid && !hayVoids) {
        for (var g = 0; g <= N; g++) {
          el('line', { x1: 0, y1: g * CS, x2: N * CS, y2: g * CS, stroke: '#bbb', 'stroke-width': 1 }, layerGrid);
          el('line', { x1: g * CS, y1: 0, x2: g * CS, y2: N * CS, stroke: '#bbb', 'stroke-width': 1 }, layerGrid);
        }
      } else if (!noGrid && hayVoids) {
        // rejilla por casilla, saltando las nulas (el borde de cada
        // subtablero lo dibuja la decoración SCL)
        for (var rv = 0; rv < N; rv++) {
          for (var cv = 0; cv < N; cv++) {
            if (voidSet[rv * N + cv]) continue;
            var xx = cv * CS, yy = rv * CS;
            [[xx, yy, xx + CS, yy], [xx, yy + CS, xx + CS, yy + CS],
             [xx, yy, xx, yy + CS], [xx + CS, yy, xx + CS, yy + CS]].forEach(function (s) {
              el('line', { x1: s[0], y1: s[1], x2: s[2], y2: s[3], stroke: '#bbb', 'stroke-width': 1 }, layerGrid);
            });
          }
        }
      }
      // bordes gruesos: cajas regulares o regiones irregulares
      function thick(x1, y1, x2, y2) {
        el('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: '#1a1a1a', 'stroke-width': 2.5 }, layerGrid);
      }
      if (P.boxes && !noGrid) {
        for (var r = P.boxes[0]; r < N; r += P.boxes[0]) thick(0, r * CS, N * CS, r * CS);
        for (var c = P.boxes[1]; c < N; c += P.boxes[1]) thick(c * CS, 0, c * CS, N * CS);
      } else if (P.regions && !noGrid) {
        var regOf = {};
        P.regions.forEach(function (reg, i) { reg.forEach(function (rc) { regOf[rc[0] * N + rc[1]] = i; }); });
        for (var rr = 0; rr < N; rr++) {
          for (var cc = 0; cc < N; cc++) {
            var me = regOf[rr * N + cc];
            if (cc + 1 < N && regOf[rr * N + cc + 1] !== me)
              thick((cc + 1) * CS, rr * CS, (cc + 1) * CS, (rr + 1) * CS);
            if (rr + 1 < N && regOf[(rr + 1) * N + cc] !== me)
              thick(cc * CS, (rr + 1) * CS, (cc + 1) * CS, (rr + 1) * CS);
          }
        }
      }
      if (!(P.voids || []).length) {
        el('rect', { x: 0, y: 0, width: N * CS, height: N * CS, fill: 'none', stroke: '#1a1a1a', 'stroke-width': 3 }, layerGrid);
      }
    }
    drawGrid();

    // ---------- Decoración SCL (dibujo genérico) ----------
    // Convenciones SCL: center = [fila, columna] en unidades de casilla;
    // wayPoints igual; thickness y fontSize en px a la escala de sclCellSize.
    function drawShape(o, parent) {
      var cy = o.center[0] * CS, cx = o.center[1] * CS;
      var w = (o.width || 0) * CS, h = (o.height || 0) * CS;
      var fill = o.backgroundColor || 'none';
      var stroke = o.borderColor || (o.stroke && o.stroke !== 'none' ? o.stroke : 'none');
      var sw = (o.thickness || 0) * ESC;
      if (w > 0 && h > 0) {
        var shape;
        if (o.rounded && Math.abs(w - h) < 0.01) {
          // redondeado y cuadrado = círculo
          shape = el('ellipse', { cx: cx, cy: cy, rx: w / 2, ry: h / 2, fill: fill }, parent);
        } else if (o.rounded) {
          // redondeado y alargado = píldora (rect con esquinas máximas)
          shape = el('rect', {
            x: cx - w / 2, y: cy - h / 2, width: w, height: h,
            rx: Math.min(w, h) / 2, ry: Math.min(w, h) / 2, fill: fill
          }, parent);
        } else {
          shape = el('rect', { x: cx - w / 2, y: cy - h / 2, width: w, height: h, fill: fill }, parent);
        }
        if (stroke !== 'none' && sw > 0) {
          shape.setAttribute('stroke', stroke);
          shape.setAttribute('stroke-width', sw);
        }
        if (o.angle) shape.setAttribute('transform', 'rotate(' + o.angle + ' ' + cx + ' ' + cy + ')');
      }
      if (o.text !== undefined && o.text !== '') {
        var t = el('text', {
          x: cx, y: cy,
          'class': 'deco-texto',
          'font-size': (o.fontSize || 16) * ESC,
          fill: o.color || '#1a1a1a'
        }, parent);
        t.textContent = o.text;
        if (o.angle) t.setAttribute('transform', 'rotate(' + o.angle + ' ' + cx + ' ' + cy + ')');
      }
    }

    function drawLine(l, parent) {
      var pts, esc = ESC;
      if (l.wayPoints && l.wayPoints.length >= 2) {
        pts = l.wayPoints.map(function (wp) { return (wp[1] * CS) + ',' + (wp[0] * CS); }).join(' ');
      } else if (l.d) {
        // Trayectoria SVG de Sudoku Maker (M/L/Q, en unidades de 64 px por
        // casilla). Se dibuja como línea quebrada por los puntos de anclaje
        // (las curvas Q se reducen a su punto final).
        var U = CS / 64;
        esc = U;
        var toks = l.d.match(/[MLQCZ]|-?\d*\.?\d+/gi) || [];
        var out = [], i = 0, cmd = '';
        while (i < toks.length) {
          if (/^[A-Za-z]$/.test(toks[i])) { cmd = toks[i].toUpperCase(); i++; continue; }
          if (cmd === 'M' || cmd === 'L') {
            out.push([+toks[i], +toks[i + 1]]); i += 2;
          } else if (cmd === 'Q') {
            out.push([+toks[i + 2], +toks[i + 3]]); i += 4;   // solo el punto final
          } else if (cmd === 'C') {
            out.push([+toks[i + 4], +toks[i + 5]]); i += 6;
          } else { i++; }
        }
        if (out.length < 2) return;
        pts = out.map(function (p) { return (p[0] * U) + ',' + (p[1] * U); }).join(' ');
      } else return;
      el('polyline', {
        points: pts, fill: 'none',
        stroke: l.color || '#888',
        'stroke-width': (l.thickness || 2) * esc,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round'
      }, parent);
    }

    function drawArrow(a, parent) {
      drawLine(a, parent);
      var wp = a.wayPoints;
      if (!wp || wp.length < 2) return;
      // cabeza de flecha en el último punto
      var y2 = wp[wp.length - 1][0] * CS, x2 = wp[wp.length - 1][1] * CS;
      var y1 = wp[wp.length - 2][0] * CS, x1 = wp[wp.length - 2][1] * CS;
      var ang = Math.atan2(y2 - y1, x2 - x1);
      var L = (a.headLength || 0.3) * CS;
      [ang + 2.6, ang - 2.6].forEach(function (t) {
        el('line', {
          x1: x2, y1: y2,
          x2: x2 + L * Math.cos(t), y2: y2 + L * Math.sin(t),
          stroke: a.color || '#888', 'stroke-width': (a.thickness || 2) * ESC,
          'stroke-linecap': 'round'
        }, parent);
      });
    }

    function drawCage(cage, parent) {
      var cells = {};
      (cage.cells || []).forEach(function (rc) { cells[rc[0] * N + rc[1]] = true; });
      var inset = 4, dash = '4,3';
      var stroke = cage.borderColor || '#555';
      (cage.cells || []).forEach(function (rc) {
        var r = rc[0], c = rc[1], x = c * CS, y = r * CS;
        function seg(x1, y1, x2, y2) {
          el('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke, 'stroke-width': 1.3, 'stroke-dasharray': dash }, parent);
        }
        if (!cells[(r - 1) * N + c]) seg(x + inset, y + inset, x + CS - inset, y + inset);
        if (!cells[(r + 1) * N + c]) seg(x + inset, y + CS - inset, x + CS - inset, y + CS - inset);
        if (!(c > 0 && cells[r * N + c - 1])) seg(x + inset, y + inset, x + inset, y + CS - inset);
        if (!(c < N - 1 && cells[r * N + c + 1])) seg(x + CS - inset, y + inset, x + CS - inset, y + CS - inset);
      });
      if (cage.value !== undefined && cage.value !== '' && cage.cells && cage.cells.length) {
        var first = cage.cells.slice().sort(function (a, b) { return (a[0] - b[0]) || (a[1] - b[1]); })[0];
        var tx = first[1] * CS + inset + 1, ty = first[0] * CS + inset + 1;
        var label = el('text', {
          x: tx, y: ty, 'class': 'jaula-texto',
          'font-size': 11 * ESC
        }, parent);
        label.textContent = cage.value;
      }
    }

    function drawDeco(parent) {
      var v = P.visuals || {};
      (v.underlays || []).forEach(function (o) { drawShape(o, parent); });
      (v.cages || []).forEach(function (c) { drawCage(c, parent); });
      (v.lines || []).forEach(function (l) { drawLine(l, parent); });
      (v.arrows || []).forEach(function (a) { drawArrow(a, parent); });
      (v.overlays || []).forEach(function (o) { drawShape(o, parent); });
      // dados del puzzle (bajo la niebla, como la demás decoración)
      for (var idx in givens) {
        var r = Math.floor(idx / N), c = idx % N;
        el('text', { x: c * CS + CS / 2, y: r * CS + CS / 2 + 1, 'class': 'dado' }, parent)
          .textContent = givens[idx];
      }
    }

    var PALETTE = ['', '#e6e6e6', '#b0b0b0', '#656565', '#d1efa5', '#f1b0f6',
                   '#eebf83', '#f88886', '#fdf28b', '#8ac1f8'];

    function slicePath(cx, cy, R, a0, a1) {
      var large = (a1 - a0) > Math.PI ? 1 : 0;
      return 'M' + cx + ',' + cy +
        ' L' + (cx + R * Math.cos(a0)) + ',' + (cy + R * Math.sin(a0)) +
        ' A' + R + ',' + R + ' 0 ' + large + ' 1 ' +
        (cx + R * Math.cos(a1)) + ',' + (cy + R * Math.sin(a1)) + ' Z';
    }

    // ---------- Repintado ----------
    function repaint() {
      var lit = computeLit();
      function foggy(idx) { return lit !== null && !lit[idx]; }

      [layerColor, layerDeco, layerFog, layerText, layerPen, layerSel].forEach(function (l) {
        while (l.firstChild) l.removeChild(l.firstChild);
      });

      drawDeco(layerDeco);

      for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
          var idx = r * N + c, x = c * CS, y = r * CS;

          var cols = state.colors[idx];
          if (cols.length === 1) {
            el('rect', { x: x, y: y, width: CS, height: CS, fill: PALETTE[cols[0]] }, layerColor);
          } else if (cols.length > 1) {
            var R = CS * 0.75, ccx = x + CS / 2, ccy = y + CS / 2;
            for (var s = 0; s < cols.length; s++) {
              var a0 = -Math.PI / 2 + s * 2 * Math.PI / cols.length;
              var a1 = -Math.PI / 2 + (s + 1) * 2 * Math.PI / cols.length;
              el('path', {
                d: slicePath(ccx, ccy, R, a0, a1),
                fill: PALETTE[cols[s]],
                'clip-path': 'url(#celda' + idx + ')'
              }, layerColor);
            }
          }

          if (foggy(idx)) {
            el('rect', { x: x - 0.5, y: y - 0.5, width: CS + 1, height: CS + 1, 'class': 'niebla' }, layerFog);
          }

          if (state.values[idx] !== null) {
            el('text', { x: x + CS / 2, y: y + CS / 2 + 1, 'class': 'valor' }, layerText)
              .textContent = state.values[idx];
          } else if (!givens[idx]) {
            var corners = Object.keys(state.corners[idx]).sort();
            var POS = [[0.22, 0.26], [0.78, 0.26], [0.22, 0.8], [0.78, 0.8], [0.5, 0.26], [0.5, 0.8]];
            corners.forEach(function (d, k) {
              if (k >= POS.length) return;
              el('text', { x: x + CS * POS[k][0], y: y + CS * POS[k][1], 'class': 'esquina' }, layerText).textContent = d;
            });
            var centers = Object.keys(state.centers[idx]).sort();
            if (centers.length) {
              el('text', { x: x + CS / 2, y: y + CS / 2 + 1, 'class': 'centro' }, layerText).textContent = centers.join('');
            }
          }

          if (selection[idx]) {
            el('rect', { x: x + 2, y: y + 2, width: CS - 4, height: CS - 4, 'class': 'seleccion' }, layerSel);
          }
        }
      }

      Object.keys(state.pen).forEach(function (key) {
        var p = key.split(',');
        if (p[0] === 'E') {
          var r1 = +p[2], c1 = +p[3];
          var a = p[1] === 'H'
            ? { x1: c1 * CS, y1: r1 * CS, x2: (c1 + 1) * CS, y2: r1 * CS }
            : { x1: c1 * CS, y1: r1 * CS, x2: c1 * CS, y2: (r1 + 1) * CS };
          a['class'] = 'pluma';
          el('line', a, layerPen);
        } else if (p[0] === 'L') {
          el('line', {
            x1: (+p[2] + 0.5) * CS, y1: (+p[1] + 0.5) * CS,
            x2: (+p[4] + 0.5) * CS, y2: (+p[3] + 0.5) * CS,
            'class': 'pluma'
          }, layerPen);
        } else if (p[0] === 'O') {
          el('circle', {
            cx: (+p[2] + 0.5) * CS, cy: (+p[1] + 0.5) * CS,
            r: CS * 0.3, fill: 'none', 'class': 'pluma'
          }, layerPen);
        }
      });
    }

    // ---------- Puntero: selección y pluma ----------
    function svgCoords(ev) {
      var pt = svg.createSVGPoint();
      pt.x = ev.clientX; pt.y = ev.clientY;
      var q = pt.matrixTransform(root.getScreenCTM().inverse());
      return { x: q.x, y: q.y };
    }
    function cellAt(q) {
      var c = Math.floor(q.x / CS), r = Math.floor(q.y / CS);
      if (r < 0 || r >= N || c < 0 || c >= N) return -1;
      if (voidSet[r * N + c]) return -1;
      return r * N + c;
    }

    var TOL = 0.32;
    function waypointAt(q) {
      var gx = q.x / CS, gy = q.y / CS;
      var rc = Math.round(gy), cc = Math.round(gx);
      if (Math.abs(gx - cc) < TOL && Math.abs(gy - rc) < TOL &&
          rc >= 0 && rc <= N && cc >= 0 && cc <= N) {
        return { kind: 'corner', r: rc, c: cc };
      }
      var rf = Math.floor(gy), cf = Math.floor(gx);
      if (Math.abs(gx - cf - 0.5) < TOL && Math.abs(gy - rf - 0.5) < TOL &&
          rf >= 0 && rf < N && cf >= 0 && cf < N) {
        return { kind: 'center', r: rf, c: cf };
      }
      return null;
    }
    function segmentKey(a, b) {
      if (a.kind !== b.kind) return null;
      var dr = b.r - a.r, dc = b.c - a.c;
      if (a.kind === 'corner') {
        if (Math.abs(dr) + Math.abs(dc) !== 1) return null;
        if (dr === 0) return 'E,H,' + a.r + ',' + Math.min(a.c, b.c);
        return 'E,V,' + Math.min(a.r, b.r) + ',' + a.c;
      }
      if (Math.abs(dr) > 1 || Math.abs(dc) > 1 || (dr === 0 && dc === 0)) return null;
      var first = (a.r < b.r || (a.r === b.r && a.c <= b.c)) ? a : b;
      var second = first === a ? b : a;
      return 'L,' + first.r + ',' + first.c + ',' + second.r + ',' + second.c;
    }

    var dragging = false;
    var penState = null;

    function alBajar(ev) {
      ev.preventDefault();
      // WebKit (iOS y todo navegador de iPhone) puede lanzar excepción al
      // capturar el puntero sobre SVG; sin el try, un tap no haría NADA.
      if (ev.pointerId !== undefined) {
        try { svg.setPointerCapture(ev.pointerId); } catch (e) {}
      }
      dragging = true;
      var q = svgCoords(ev);
      if (mode === 'pen') {
        penState = {
          snap: snapshot(), pushed: false, paint: null,
          lastWp: waypointAt(q), downCell: cellAt(q), moved: false
        };
        return;
      }
      var idx = cellAt(q);
      if (idx < 0) return;
      if (!ev.shiftKey && !ev.ctrlKey && !ev.metaKey) selection = {};
      if (ev.ctrlKey && selection[idx]) delete selection[idx];
      else selection[idx] = true;
      lastSel = idx;
      repaint();
    }

    function alMover(ev) {
      if (!dragging) return;
      var q = svgCoords(ev);
      if (mode === 'pen') {
        if (!penState) return;
        var wp = waypointAt(q);
        if (!wp) return;
        if (penState.lastWp &&
            (wp.kind !== penState.lastWp.kind || wp.r !== penState.lastWp.r || wp.c !== penState.lastWp.c)) {
          penState.moved = true;
          var key = segmentKey(penState.lastWp, wp);
          if (key) applyPen(key);
        }
        penState.lastWp = wp;
        return;
      }
      var idx = cellAt(q);
      if (idx >= 0 && !selection[idx]) { selection[idx] = true; lastSel = idx; repaint(); }
    }

    function alSoltar() {
      if (mode === 'pen' && penState) {
        if (!penState.moved && penState.downCell >= 0) {
          applyPen('O,' + Math.floor(penState.downCell / N) + ',' + (penState.downCell % N));
        }
        penState = null;
      }
      dragging = false;
    }

    svg.addEventListener('pointerdown', alBajar);
    svg.addEventListener('pointermove', alMover);
    svg.addEventListener('pointerup', alSoltar);
    svg.addEventListener('pointercancel', function () { dragging = false; penState = null; });
    svg.addEventListener('contextmenu', function (ev) { ev.preventDefault(); });

    // Plan B para navegadores sin Pointer Events (WebViews viejos):
    // los eventos touch se traducen a los mismos manejadores.
    if (!window.PointerEvent) {
      function adaptaToque(handler) {
        return function (ev) {
          ev.preventDefault();
          var t = ev.touches[0] || ev.changedTouches[0];
          if (!t) return;
          handler({
            preventDefault: function () {},
            clientX: t.clientX, clientY: t.clientY,
            shiftKey: false, ctrlKey: false, metaKey: false
          });
        };
      }
      svg.addEventListener('touchstart', adaptaToque(alBajar), { passive: false });
      svg.addEventListener('touchmove', adaptaToque(alMover), { passive: false });
      svg.addEventListener('touchend', function (ev) { ev.preventDefault(); alSoltar(); }, { passive: false });
    }

    function applyPen(key) {
      if (penState.paint === null) penState.paint = !state.pen[key];
      if (!penState.pushed) { pushHistory(penState.snap); penState.pushed = true; }
      if (penState.paint) state.pen[key] = true; else delete state.pen[key];
      repaint();
    }

    // ---------- Acciones ----------
    function selectedCells() {
      return Object.keys(selection).map(Number).filter(function (idx) { return !(idx in givens); });
    }

    function enterDigit(d) {
      var sel = Object.keys(selection).map(Number);
      var cells = selectedCells();
      if (mode === 'color' && d === 0) return;   // el 0 no es un color
      if (mode === 'color' ? !sel.length : !cells.length) return;
      pushHistory();
      if (mode === 'digit') {
        var all = cells.every(function (i) { return state.values[i] === d; });
        cells.forEach(function (i) { state.values[i] = all ? null : d; });
        checkComplete();
      } else if (mode === 'corner' || mode === 'center') {
        var store = mode === 'corner' ? state.corners : state.centers;
        var allHave = cells.every(function (i) { return store[i][d]; });
        cells.forEach(function (i) {
          if (allHave) delete store[i][d]; else store[i][d] = true;
        });
      } else if (mode === 'color') {
        var todasLoTienen = sel.every(function (i) { return state.colors[i].indexOf(d) >= 0; });
        sel.forEach(function (i) {
          var a = state.colors[i], p = a.indexOf(d);
          if (todasLoTienen) { a.splice(p, 1); }
          else if (p < 0) { a.push(d); a.sort(); }
        });
      }
      repaint();
    }

    function erase() {
      if (mode === 'pen') {
        if (!Object.keys(state.pen).length) return;
        pushHistory();
        state.pen = {};
        repaint();
        return;
      }
      var cells = Object.keys(selection).map(Number);
      if (!cells.length) return;
      pushHistory();
      var editable = selectedCells();
      var hasValue = editable.some(function (i) { return state.values[i] !== null; });
      if (hasValue) {
        editable.forEach(function (i) { state.values[i] = null; });
      } else {
        var marks = editable.some(function (i) {
          return Object.keys(state.corners[i]).length || Object.keys(state.centers[i]).length;
        });
        if (marks) {
          editable.forEach(function (i) { state.corners[i] = {}; state.centers[i] = {}; });
        } else {
          cells.forEach(function (i) { state.colors[i] = []; });
        }
      }
      repaint();
    }

    function moveSelection(dr, dc, extend) {
      var r = lastSel < 0 ? 0 : Math.floor(lastSel / N), c = lastSel < 0 ? 0 : lastSel % N;
      r = (r + dr + N) % N; c = (c + dc + N) % N;
      if (!extend) selection = {};
      lastSel = r * N + c;
      selection[lastSel] = true;
      repaint();
    }

    // ---------- Revisión y celebración ----------
    // La solución puede traer '.' = casilla que debe quedar VACÍA
    // (Sliding Doors, 4×4×4).
    var msg = document.querySelector('.mensaje');
    var celebrated = false;

    function celebrate() {
      var FESTIVOS = ['#f88886', '#8ac1f8', '#d1efa5', '#fdf28b', '#f1b0f6', '#eebf83'];
      for (var i = 0; i < 60; i++) {
        var p = document.createElement('span');
        p.className = 'confeti';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = FESTIVOS[i % FESTIVOS.length];
        p.style.animationDelay = Math.random() * 0.8 + 's';
        p.style.animationDuration = 2.2 + Math.random() * 1.6 + 's';
        p.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        document.body.appendChild(p);
      }
      var b = document.createElement('div');
      b.className = 'felicidades';
      b.textContent = '¡Felicidades!';
      document.body.appendChild(b);
      setTimeout(function () {
        document.querySelectorAll('.confeti, .felicidades').forEach(function (e) { e.remove(); });
      }, 4500);
    }

    function estadoCelda(i) {
      // devuelve: 'ok' | 'mal' | 'falta'
      var target = P.solution[i];
      var have = givens[i] !== undefined ? String(givens[i])
        : (state.values[i] !== null ? String(state.values[i]) : '');
      if (target === '.') return have === '' ? 'ok' : 'mal';
      if (have === '') return 'falta';
      return have === target ? 'ok' : 'mal';
    }

    function checkComplete() {
      var falta = false, mal = false;
      for (var i = 0; i < N * N; i++) {
        var e = estadoCelda(i);
        if (e === 'falta') falta = true;
        if (e === 'mal') mal = true;
      }
      if (falta) { celebrated = false; return; }
      msg.textContent = !mal
        ? '¡Felicidades! ¡Resolviste el sudoku!'
        : 'El tablero está lleno, pero algo no cuadra…';
      if (!mal && !celebrated) { celebrated = true; celebrate(); }
    }

    function checkNow() {
      var wrong = 0, filled = 0;
      for (var i = 0; i < N * N; i++) {
        if (i in givens) continue;
        if (state.values[i] === null) continue;
        filled++;
        if (estadoCelda(i) === 'mal') wrong++;
      }
      if (!filled) msg.textContent = 'Aún no has puesto ningún dígito.';
      else if (wrong) msg.textContent = 'Hay ' + wrong + (wrong === 1 ? ' dígito equivocado.' : ' dígitos equivocados.');
      else msg.textContent = 'Todo bien hasta ahora. ¡Sigue así!';
    }

    // ---------- Teclado ----------
    var MODE_KEYS = { z: 'digit', x: 'corner', c: 'center', v: 'color', p: 'pen' };
    var MODES = ['digit', 'corner', 'center', 'color', 'pen'];

    document.addEventListener('keydown', function (ev) {
      if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
      var k = ev.key.toLowerCase();
      if ((ev.ctrlKey || ev.metaKey) && k === 'z') { ev.preventDefault(); if (ev.shiftKey) redo(); else undo(); return; }
      if ((ev.ctrlKey || ev.metaKey) && k === 'y') { ev.preventDefault(); redo(); return; }
      if (ev.ctrlKey || ev.metaKey) return;

      var minD = P.minDigit === 0 ? '0' : '1';
      if (k >= minD && k <= String(MAXD)) { enterDigit(+k); ev.preventDefault(); }
      else if (k === 'delete' || k === 'backspace') { erase(); ev.preventDefault(); }
      else if (k in MODE_KEYS && mode !== MODE_KEYS[k]) setMode(MODE_KEYS[k]);
      else if (k === ' ') { setMode(MODES[(MODES.indexOf(mode) + 1) % MODES.length]); ev.preventDefault(); }
      else if (k === 'arrowup') { moveSelection(-1, 0, ev.shiftKey); ev.preventDefault(); }
      else if (k === 'arrowdown') { moveSelection(1, 0, ev.shiftKey); ev.preventDefault(); }
      else if (k === 'arrowleft') { moveSelection(0, -1, ev.shiftKey); ev.preventDefault(); }
      else if (k === 'arrowright') { moveSelection(0, 1, ev.shiftKey); ev.preventDefault(); }
      else if (k === 'escape') { selection = {}; repaint(); }
    });

    // ---------- Controles en pantalla ----------
    function setMode(m) {
      mode = m;
      document.querySelectorAll('[data-modo]').forEach(function (b) {
        b.classList.toggle('activo', b.getAttribute('data-modo') === m);
      });
      var pad = document.querySelector('.digitos');
      if (pad) pad.classList.toggle('modo-color', m === 'color');
      if (pad) pad.classList.toggle('con-cero', P.minDigit === 0);
      document.querySelectorAll('[data-digito]').forEach(function (b) {
        var d = +b.getAttribute('data-digito');
        if (m === 'color') {
          b.textContent = '';
          b.style.background = PALETTE[d];
        } else {
          b.textContent = d;
          b.style.background = '';
        }
      });
    }

    document.querySelectorAll('[data-modo]').forEach(function (b) {
      b.addEventListener('click', function () { setMode(b.getAttribute('data-modo')); });
    });
    document.querySelectorAll('[data-digito]').forEach(function (b) {
      b.addEventListener('click', function () { enterDigit(+b.getAttribute('data-digito')); });
    });
    document.getElementById('borrar').addEventListener('click', erase);
    document.getElementById('deshacer').addEventListener('click', undo);
    document.getElementById('rehacer').addEventListener('click', redo);
    document.getElementById('revisar').addEventListener('click', checkNow);
    document.getElementById('reiniciar').addEventListener('click', function () {
      if (!confirm('¿Borrar todo tu avance y empezar de nuevo?')) return;
      pushHistory();
      state.values = new Array(N * N).fill(null);
      state.corners = []; state.centers = []; state.colors = [];
      for (var i = 0; i < N * N; i++) { state.corners.push({}); state.centers.push({}); state.colors.push([]); }
      state.pen = {};
      repaint();
    });

    var enfocarBtn = document.getElementById('enfocar');
    if (enfocarBtn) {
      enfocarBtn.addEventListener('click', function () {
        document.body.classList.toggle('enfocado');
        enfocarBtn.classList.toggle('activo', document.body.classList.contains('enfocado'));
      });
    }

    // ---------- Arranque ----------
    document.getElementById('titulo').textContent = P.title;
    document.getElementById('autor').textContent = P.author ? 'por ' + P.author : '';
    var reglasEl = document.getElementById('reglas');
    if (reglasEl) {
      if (P.rules) {
        reglasEl.textContent = P.rules;
      } else {
        // traducción pendiente: se muestran las originales para poder jugar
        reglasEl.textContent = '(Traducción en camino. Mientras, las reglas originales:)';
        var det = document.createElement('details');
        det.open = true;
        var sum = document.createElement('summary');
        sum.textContent = 'Reglas originales (en inglés)';
        det.appendChild(sum);
        var pOrig = document.createElement('p');
        pOrig.className = 'reglas';
        pOrig.textContent = P._rulesOrig || '(no disponibles)';
        det.appendChild(pOrig);
        reglasEl.parentElement.appendChild(det);
      }
    }
    var pistasEl = document.getElementById('pistas');
    if (pistasEl && P.hints && P.hints.length) {
      P.hints.forEach(function (h, i) {
        var det = document.createElement('details');
        var sum = document.createElement('summary');
        sum.textContent = 'Pista ' + (i + 1) + (i === P.hints.length - 1 ? ' (la que casi te lo resuelve)' : '');
        det.appendChild(sum);
        var p = document.createElement('p');
        p.textContent = h;
        det.appendChild(p);
        pistasEl.appendChild(det);
      });
    } else if (pistasEl) {
      pistasEl.parentElement.style.display = 'none';
    }
    var origEl = document.getElementById('enlace-original');
    if (origEl && P.urlOriginal) {
      origEl.href = P.urlOriginal;
    }
    document.title = P.title + ' — Sudokus';
    setMode('digit');
    repaint();
  }

  window.iniciarSudoku = iniciar;
  document.addEventListener('DOMContentLoaded', function () {
    if (window.PUZZLE) iniciar();
  });
})();
