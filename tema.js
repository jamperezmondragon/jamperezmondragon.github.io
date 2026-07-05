// Tema claro/oscuro manual para todo el sitio. Aplica la clase
// html.tema-oscuro, la recuerda en localStorage y pinta un botón flotante
// (🌙/☀️) en cada página. Se carga en <head> sin defer para aplicar el tema
// guardado antes del primer pintado.
(function () {
  var KEY = 'tema';
  var raiz = document.documentElement;

  function aplica(oscuro) {
    raiz.classList.toggle('tema-oscuro', oscuro);
    // pintar la raíz de inmediato evita el flashazo blanco entre páginas
    raiz.style.backgroundColor = oscuro ? '#151312' : '';
    var b = document.getElementById('btn-tema');
    if (b) {
      b.textContent = oscuro ? '☀️' : '🌙';
      b.setAttribute('aria-label', oscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      b.title = b.getAttribute('aria-label');
    }
  }

  function lee() {
    try {
      var v = localStorage.getItem(KEY);
      if (v) return v;
    } catch (e) {}
    // respaldo: window.name sobrevive la navegación dentro de la pestaña
    // incluso sin localStorage (p. ej. navegación privada en iPhone)
    var m = /(?:^|;)tema=(oscuro|claro)/.exec(window.name || '');
    return m ? m[1] : null;
  }
  function guarda(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    var otros = (window.name || '').replace(/(?:^|;)tema=(?:oscuro|claro)/, '');
    window.name = otros + ';tema=' + v;
  }
  aplica(lee() === 'oscuro');
  // si el tema cambia en otra pestaña, o al volver con atrás/adelante,
  // resincronizar
  window.addEventListener('storage', function (ev) {
    if (ev.key === KEY) aplica(ev.newValue === 'oscuro');
  });
  window.addEventListener('pageshow', function (ev) {
    if (ev.persisted) aplica(lee() === 'oscuro');
  });

  function init() {
    var st = document.createElement('style');
    st.textContent =
      '#btn-tema{position:absolute;top:0;right:0;z-index:50;' +
      'font-size:1.15rem;line-height:1;padding:0.45rem 0.55rem;' +
      'border-radius:50%;border:1px solid rgba(153,153,153,0.35);' +
      'background:transparent;cursor:pointer;}' +
      '#btn-tema:hover{border-color:#999;}' +
      '#btn-tema.flotante{position:fixed;top:0.9rem;right:0.9rem;}';
    document.head.appendChild(st);
    var b = document.createElement('button');
    b.id = 'btn-tema';
    b.type = 'button';
    // anclado al encabezado (se va con el scroll); si no hay, flota
    var header = document.querySelector('header');
    if (header) {
      if (getComputedStyle(header).position === 'static') header.style.position = 'relative';
      header.appendChild(b);
    } else {
      b.className = 'flotante';
      document.body.appendChild(b);
    }
    b.addEventListener('click', function () {
      var nuevo = !raiz.classList.contains('tema-oscuro');
      guarda(nuevo ? 'oscuro' : 'claro');
      aplica(nuevo);
    });
    aplica(raiz.classList.contains('tema-oscuro'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
