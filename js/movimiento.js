/* ============================================================
   CAMAND MOBILE — SISTEMA DE MOVIMIENTO (base)
   Regla principal: el movimiento nunca esconde lo que el cliente
   necesita ver para comprar.
   - Lo que ya está en pantalla cuando se dibuja se muestra de inmediato
     (antes todo .reveal arrancaba invisible y la primera pantalla se veía
     "lavada" en celulares lentos hasta que terminaba de cargar el catálogo).
   - Solo se anima lo que entra al bajar: fundido + desplazamiento leve.
   - Si el sistema del cliente pide "reducir movimiento", no se anima nada.
   La etapa "Movimiento" agregará aquí el scroll suave, el escalonado de
   tarjetas y las escenas fijas/parallax. Estilos: css/movimiento.css.
   ============================================================ */
(function(){
  var reducir = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var observador = null;

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
      observador = new IntersectionObserver(function(entradas){
        entradas.forEach(function(e){
          if(e.isIntersecting){ e.target.classList.add('in-view'); observador.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    }
    elementos.forEach(function(el){
      // Ambas clases en el mismo instante: lo visible nunca alcanza a ocultarse.
      if(enPantalla(el)) el.classList.add('reveal-bound', 'in-view');
      else { el.classList.add('reveal-bound'); observador.observe(el); }
    });
  };
})();
