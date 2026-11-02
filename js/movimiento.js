/* ============================================================
   CAMAND MOBILE — SISTEMA DE MOVIMIENTO (base)
   Regla principal: el movimiento nunca esconde lo que el cliente
   necesita ver para comprar.
   - Lo que ya está en pantalla cuando se dibuja se muestra de inmediato
     (antes todo .reveal arrancaba invisible y la primera pantalla se veía
     "lavada" en celulares lentos hasta que terminaba de cargar el catálogo).
   - Solo se anima lo que entra al bajar: fundido + desplazamiento leve.
   - Si el sistema del cliente pide "reducir movimiento", no se anima nada.
   - Lo que entra junto (una fila de tarjetas) aparece escalonado.
   Las escenas al desplazarse (parallax, paso a paso) son solo CSS: css/movimiento.css.
   ============================================================ */
(function(){
  var reducir = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var observador = null;
  // Escalonado: lo que entra junto aparece uno tras otro, 40 ms entre cada uno y tope de 6 pasos.
  var PASO_MS = 40, MAX_PASOS = 6;

  function mostrar(entradas){
    var visibles = entradas.filter(function(e){ return e.isIntersecting; }).map(function(e){ return e.target; });
    // En orden de lectura: de arriba hacia abajo y de izquierda a derecha.
    visibles.sort(function(a, b){
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      return (Math.round(ra.top) - Math.round(rb.top)) || (ra.left - rb.left);
    });
    visibles.forEach(function(el, i){
      var paso = Math.min(i, MAX_PASOS - 1);
      if(paso) el.style.setProperty('--mov-retraso', (paso * PASO_MS) + 'ms');
      el.classList.add('in-view');
      observador.unobserve(el);
      // El retraso solo aplica a la entrada; después el hover responde sin espera.
      if(paso) setTimeout(function(){ el.style.removeProperty('--mov-retraso'); }, 700 + paso * PASO_MS);
    });
  }

  function enPantalla(el){
    var r = el.getBoundingClientRect();
    // width 0 = vista oculta (display:none): se observa y se anima al mostrarse.
    return r.width > 0 && r.bottom > 0 && r.top < (window.innerHeight || document.documentElement.clientHeight);
  }

  // tienda.js la llama cada vez que dibuja secciones nuevas.
  window.initScrollReveal = function(){
    var elementos = document.querySelectorAll('.reveal:not(.reveal-bound)');
    if(!elementos.length) return;
    if(reducir || !('IntersectionObserver' in window)){
      elementos.forEach(function(el){ el.classList.add('reveal-bound', 'in-view'); });
      return;
    }
    if(!observador){
      observador = new IntersectionObserver(mostrar, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    }
    elementos.forEach(function(el){
      // Ambas clases en el mismo instante: lo visible nunca alcanza a ocultarse.
      if(enPantalla(el)) el.classList.add('reveal-bound', 'in-view');
      else { el.classList.add('reveal-bound'); observador.observe(el); }
    });
  };
})();
