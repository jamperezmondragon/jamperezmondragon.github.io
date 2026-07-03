// Revisa las respuestas de un acertijo. Cada casilla (o lista desplegable)
// lleva su respuesta en data-r (varias respuestas válidas separadas por "|").
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form[data-reto]');
  if (!form) return;

  var campos = Array.prototype.slice.call(form.querySelectorAll('input[data-r], select[data-r]'));
  var puntos = form.querySelector('.puntos');
  var mensaje = form.querySelector('.mensaje');
  // Algunos acertijos (como el yaqui) piden completar todo antes de calificar.
  var calificarAlFinal = form.hasAttribute('data-todo');

  function normaliza(texto) {
    return texto
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[.!¡¿?]+$/, '')
      // Solo se ignoran los acentos del español; letras como ã, ç o î
      // forman parte de las respuestas y sí se toman en cuenta.
      .replace(/[áà]/g, 'a')
      .replace(/[éè]/g, 'e')
      .replace(/[íì]/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/[úùü]/g, 'u');
  }

  function esCorrecta(campo) {
    var valor = normaliza(campo.value);
    return campo.getAttribute('data-r').split('|').some(function (r) {
      return normaliza(r) === valor;
    });
  }

  function revisa() {
    var buenas = 0;
    var llenas = 0;
    campos.forEach(function (campo) {
      campo.classList.remove('bien', 'mal');
      if (campo.value.trim() === '') return;
      llenas++;
      if (esCorrecta(campo)) {
        buenas++;
        campo.classList.add('bien');
      } else {
        campo.classList.add('mal');
      }
    });

    if (calificarAlFinal && llenas < campos.length) {
      campos.forEach(function (campo) {
        campo.classList.remove('bien', 'mal');
      });
      puntos.textContent = '';
      mensaje.textContent = 'Completa todas las respuestas para ver tu puntuación.';
      return;
    }

    puntos.textContent = 'Puntuación: ' + buenas + ' / ' + campos.length;
    mensaje.textContent = buenas === campos.length
      ? '¡Felicidades! ¡Resolviste el acertijo!'
      : 'Sigue intentando…';
  }

  campos.forEach(function (campo) {
    campo.addEventListener('change', revisa);
  });

  form.addEventListener('reset', function () {
    setTimeout(function () {
      campos.forEach(function (campo) {
        campo.classList.remove('bien', 'mal');
      });
      puntos.textContent = '';
      mensaje.textContent = 'Escribe tus respuestas en las casillas.';
    }, 0);
  });
});
