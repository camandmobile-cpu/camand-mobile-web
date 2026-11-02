/* ============================================================
   CAMAND MOBILE — V3 (vista previa). Solo se carga con ?v3=1.
   - Etiqueta "Vista previa V3 · salir".
   - Entrada (primera visita del día): pasan unos equipos con un halo de
     color y el logo vuela a su lugar en el encabezado. Botón "Saltar".
     Con "reducir movimiento" solo se ve el logo un instante.
   ============================================================ */
(function(){
  var html = document.documentElement;
  if(!html.classList.contains('v3')) return;

  // ANDRÉS: equipos del desfile de entrada (fotos de Cloudinary, sin fondo).
  // Si uno deja de venderse, cambia su foto aquí.
  var DESFILE = [
    'v1790352270/Iphone_18_pro_max.png',
    'v1788798838/89.png',
    'v1788798838/91.png',
    'v1788796601/82.png'
  ];
  var CLD = 'https://res.cloudinary.com/c5sxh1yw/image/upload/w_360,q_auto,f_auto,c_limit/';
  var COLORES = ['#1f4dff', '#7b4ee6', '#00a9c7', '#ff2e88'];

  function etiqueta(){
    var url = new URL(location.href);
    url.searchParams.set('v3', '0');
    var e = document.createElement('div');
    e.className = 'v3-etiqueta';
    e.innerHTML = 'Vista previa V3 <a href="' + url.pathname + url.search + url.hash + '">salir</a>';
    document.body.appendChild(e);
  }

  function entrada(){
    var splash = document.getElementById('splash-screen');
    var logo = splash && splash.querySelector('.splash-logo-img');
    var logoNav = document.querySelector('header.nav .brand-logo');
    var terminado = false, temporizadores = [];
    var reducir = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

    function despues(ms, fn){ temporizadores.push(setTimeout(fn, ms)); }
    function terminar(rapido){
      if(terminado || !splash) return;
      terminado = true;
      temporizadores.forEach(clearTimeout);
      var cerrar = function(){
        splash.classList.add('hidden');
        splash.style.background = '';
        if(logoNav) logoNav.style.visibility = '';
        document.body.classList.add('loaded');
        html.classList.remove('v3-entrada');
      };
      if(rapido || reducir || !logo || !logoNav || !logo.animate){ cerrar(); return; }
      // El logo viaja hasta el del encabezado; el fondo blanco se desvanece detrás.
      var r = logo.getBoundingClientRect(), d = logoNav.getBoundingClientRect();
      if(!r.width || !d.width){ cerrar(); return; }
      logoNav.style.visibility = 'hidden';
      logo.style.transformOrigin = '0 0';
      logo.animate([
        { transform: 'none' },
        { transform: 'translate(' + (d.left - r.left) + 'px,' + (d.top - r.top) + 'px) scale(' + (d.height / r.height) + ')', filter: 'none' }
      ], { duration: 550, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' });
      var halo = splash.querySelector('.v3-halo');
      if(halo) halo.animate([{ opacity: .35 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
      splash.animate([{ backgroundColor: '#ffffff' }, { backgroundColor: 'rgba(255,255,255,0)' }], { duration: 420, delay: 150, fill: 'forwards' })
        .onfinish = function(){
          cerrar();
          splash.getAnimations().forEach(function(a){ a.cancel(); });
          logo.getAnimations().forEach(function(a){ a.cancel(); });
        };
    }

    if(!splash || !logo){ terminar(true); return; }
    // Seguro: pase lo que pase, a los 4,5 s la tienda queda a la vista.
    despues(4500, function(){ terminar(true); });

    var saltar = document.createElement('button');
    saltar.type = 'button'; saltar.className = 'v3-saltar'; saltar.textContent = 'Saltar';
    saltar.addEventListener('click', function(){ terminar(true); });
    splash.appendChild(saltar);

    if(reducir || !logo.animate){ despues(300, function(){ terminar(true); }); return; }

    // En celular el desfile es más corto: 3 equipos y paso más rápido.
    var movil = window.innerWidth < 700;
    var fotos = DESFILE.slice(0, movil ? 3 : 4), paso = movil ? 220 : 260;
    // En campaña, el halo toma los colores de la campaña.
    var cs = getComputedStyle(html), tmA = cs.getPropertyValue('--tm-a').trim(), tmB = cs.getPropertyValue('--tm-b').trim();
    var colores = (html.dataset.temporada && tmA) ? [tmA, tmB || tmA, tmA, tmB || tmA] : COLORES;

    var capa = document.createElement('div');
    capa.className = 'v3-desfile'; capa.setAttribute('aria-hidden', 'true');
    capa.innerHTML = '<span class="v3-halo"></span>';
    // Cada equipo se pinta en un <canvas> y no en un <img>: es decoración, y así
    // PageSpeed no lo confunde con el contenido principal de la página.
    fotos.forEach(function(f){
      var cv = document.createElement('canvas'), im = new Image();
      im.onload = function(){ cv.width = im.naturalWidth; cv.height = im.naturalHeight; cv.getContext('2d').drawImage(im, 0, 0); };
      im.src = CLD + f;
      capa.appendChild(cv);
    });
    splash.insertBefore(capa, splash.firstChild);
    var halo = capa.querySelector('.v3-halo');

    // El logo se aparta mientras pasan los equipos y vuelve al final.
    logo.animate([{ opacity: 1 }, { opacity: 0, transform: 'scale(.92)' }], { duration: 160, fill: 'forwards' });
    capa.querySelectorAll('canvas').forEach(function(img, i){
      img.animate([
        { opacity: 0, transform: 'translateX(60%) rotate(12deg) scale(.8)' },
        { opacity: 1, transform: 'none', offset: .4 },
        { opacity: 1, transform: 'none', offset: .65 },
        { opacity: 0, transform: 'translateX(-60%) rotate(-12deg) scale(.8)' }
      ], { duration: paso * 2, delay: 120 + i * paso, easing: 'cubic-bezier(.22,.61,.36,1)' });
      despues(120 + i * paso, function(){ halo.style.background = colores[i % colores.length]; });
    });
    var vuelta = 120 + fotos.length * paso + 120;
    despues(vuelta, function(){
      logo.animate([{ opacity: 0, transform: 'scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 380, fill: 'forwards', easing: 'cubic-bezier(.34,1.56,.64,1)' });
    });
    despues(vuelta + 650, function(){ terminar(false); });
  }

  if(html.classList.contains('v3-entrada')) entrada();
  if(document.body) etiqueta(); else document.addEventListener('DOMContentLoaded', etiqueta);
})();
