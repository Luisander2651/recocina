/* ReCocina — interacciones básicas (sin dependencias) */
(function () {
  'use strict';

  /* ---------- Menú móvil ---------- */
  var botonMenu = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu-principal');

  function cerrarMenu(devolverFoco) {
    menu.classList.remove('esta-abierta');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    if (devolverFoco) botonMenu.focus();
  }

  function abrirMenu() {
    menu.classList.add('esta-abierta');
    botonMenu.setAttribute('aria-expanded', 'true');
    botonMenu.setAttribute('aria-label', 'Cerrar menú');
    var primerEnlace = menu.querySelector('a');
    if (primerEnlace) primerEnlace.focus();
  }

  if (botonMenu && menu) {
    botonMenu.addEventListener('click', function () {
      if (menu.classList.contains('esta-abierta')) cerrarMenu(false);
      else abrirMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) cerrarMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('esta-abierta')) cerrarMenu(true);
    });

    document.addEventListener('click', function (e) {
      if (menu.classList.contains('esta-abierta') && !e.target.closest('.encabezado')) cerrarMenu(false);
    });
  }

  /* ---------- Filtro de productos ---------- */
  var filtros = document.querySelectorAll('.filtro');
  var productos = document.querySelectorAll('.producto');
  var estadoFiltro = document.getElementById('filtro-estado');

  filtros.forEach(function (filtro) {
    filtro.addEventListener('click', function () {
      var categoria = filtro.getAttribute('data-filtro');

      filtros.forEach(function (f) { f.setAttribute('aria-pressed', String(f === filtro)); });

      var visibles = 0;
      productos.forEach(function (producto) {
        var mostrar = categoria === 'todos' || producto.getAttribute('data-categoria') === categoria;
        producto.hidden = !mostrar;
        if (mostrar) visibles++;
      });

      if (estadoFiltro) {
        estadoFiltro.textContent = categoria === 'todos'
          ? 'Mostrando todos los productos'
          : 'Mostrando ' + visibles + ' producto de ' + filtro.textContent.trim();
      }
    });
  });

  /* ---------- Preseleccionar interés desde enlaces de empleo ---------- */
  var selectInteres = document.getElementById('interes');
  document.querySelectorAll('[data-interes]').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      if (selectInteres) selectInteres.value = enlace.getAttribute('data-interes');
    });
  });

  /* ---------- Validación del formulario ---------- */
  var formulario = document.getElementById('formulario-colabora');
  var estadoForm = document.getElementById('form-estado');

  function validarCampo(input) {
    var error = document.getElementById(input.id + '-error');
    var valido = input.value.trim() !== '' && input.checkValidity();
    input.setAttribute('aria-invalid', String(!valido));
    if (error) error.hidden = valido;
    return valido;
  }

  if (formulario) {
    var obligatorios = formulario.querySelectorAll('input[required]');

    obligatorios.forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input.value.trim() !== '') validarCampo(input);
      });
    });

    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      var primerInvalido = null;

      obligatorios.forEach(function (input) {
        if (!validarCampo(input) && !primerInvalido) primerInvalido = input;
      });

      if (primerInvalido) {
        estadoForm.textContent = '';
        primerInvalido.focus();
        return;
      }

      /* Aquí se conectaría el envío real (Formspree, Netlify Forms, backend propio, etc.). */
      estadoForm.textContent = '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.';
      formulario.reset();
      obligatorios.forEach(function (input) { input.removeAttribute('aria-invalid'); });
    });
  }

  /* ---------- Año del pie ---------- */
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
