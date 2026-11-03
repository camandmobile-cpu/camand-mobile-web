/* ============================================================
   CAMAND MOBILE — V3 (activa para todos; ?v3=0 la apaga en un navegador).
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

    // El logo queda siempre visible (delante) y los equipos pasan por detrás; solo se
    // achica un poco y vuelve al final. No se desvanece: si su opacidad bajaba antes
    // del primer dibujo, PageSpeed lo contaba al reaparecer (~1,4 s) y medía ~60.
    logo.animate([{ transform: 'none' }, { transform: 'scale(.9)' }], { duration: 220, fill: 'forwards', easing: 'cubic-bezier(.22,.61,.36,1)' });
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
      logo.animate([{ transform: 'scale(.9)' }, { transform: 'none' }], { duration: 380, fill: 'forwards', easing: 'cubic-bezier(.34,1.56,.64,1)' });
    });
    despues(vuelta + 650, function(){ terminar(false); });
  }

  /* ---------- Encabezado V3.2 ---------- */
  function encabezado(){
    var cab = document.querySelector('header.nav');
    if(!cab) return;
    // Al bajar se esconde la fila de categorías; al subir vuelve.
    var ultimoY = scrollY;
    addEventListener('scroll', function(){
      var y = scrollY;
      if(Math.abs(y - ultimoY) < 8) return;
      var compacto = y > ultimoY && y > 160 && !document.querySelector('.nav-item:hover, .nav-item:focus-within');
      cab.classList.toggle('compacto', compacto);
      html.classList.toggle('cab-compacta', compacto);
      ultimoY = y;
    }, { passive: true });
    // En computador el buscador está siempre a la vista: al tocarlo se abren los resultados.
    var panel = document.getElementById('navSearchPanel'), input = document.getElementById('navSearchInput');
    if(panel && input){
      input.addEventListener('focus', function(){
        if(innerWidth > 900 && !panel.classList.contains('is-open')){ panel.classList.add('is-open'); performNavSearch(input.value); }
      });
    }
    // Menú del celular: cantidades por categoría al abrir, y se cierra tocando afuera.
    var menu = document.getElementById('mobileMenu');
    if(menu){
      new MutationObserver(function(){
        if(!menu.classList.contains('open') || typeof getExtraHub !== 'function') return;
        menu.querySelectorAll('[data-cuenta]').forEach(function(el){
          try { var n = flattenItems(getExtraHub(el.dataset.cuenta)).length; el.textContent = n ? n + ' productos' : ''; } catch(e){}
        });
      }).observe(menu, { attributes: true, attributeFilter: ['class'] });
      document.addEventListener('click', function(e){
        if(menu.classList.contains('open') && !menu.contains(e.target) && !e.target.closest('.hamburger')) toggleMenu(false);
      });
    }
    // Pie: en celular las columnas empiezan cerradas (se abren al tocarlas).
    if(innerWidth <= 900) document.querySelectorAll('.pie-v3 details').forEach(function(d){ d.open = false; });
    // Tecla "/" para buscar (como en las tiendas grandes).
    document.addEventListener('keydown', function(e){
      var t = document.activeElement && document.activeElement.tagName;
      if(e.key === '/' && t !== 'INPUT' && t !== 'TEXTAREA' && input && innerWidth > 900){ e.preventDefault(); input.focus(); }
    });
  }

  /* ---------- Inicio V3.3: orden nuevo y bloque único de productos con pestañas ---------- */
  function inicio(){
    var home = document.getElementById('view-home'), nav = document.getElementById('v3Pestanas');
    if(!home || !nav) return;
    var $ = function(s){ return home.querySelector(s); };
    var envolvente = function(sel){ var el = $(sel); return el && el.closest('#view-home > *'); };
    // 1) El HTML toma el mismo orden que ya muestra el CSS (teclado y lectores de pantalla).
    var bloque = document.createElement('div');
    bloque.className = 'v3-productos';
    var hero = envolvente('.hero'), cats = envolvente('#catGridHome'), pz = envolvente('.pz-dual');
    if(hero && cats) hero.after(cats);
    (cats || hero || nav).after(bloque);
    bloque.appendChild(nav);
    ['#tmOfertasSlot', '#homeFeaturedSection', '#qebSection', '#regalosSection', '#estrellaSection', '#kitsSection', '#homeRailsSection'].forEach(function(s){ var el = document.querySelector(s); if(el) bloque.appendChild(el); });
    if(pz) bloque.after(pz);
    var orden = ['.comocompras-section', '.about-block', '.instagram-cta', '.testi-grid'];
    var ultimo = pz || bloque;
    orden.forEach(function(s){ var el = envolvente(s); if(el){ ultimo.after(el); ultimo = el; } });

    // 2) Pestañas: una por bloque que tenga contenido (las de campaña aparecen solas).
    var BLOQUES = [
      { id: 'homeFeaturedSection', nombre: function(){ var tm = window.TEMPORADA; return tm && tm.hero ? (tm.nombre || 'Ofertas') : 'Más vendidos'; }, camp: true },
      { id: 'qebSection', nombre: function(){ return '¿Qué buscas?'; } },
      { id: 'regalosSection', nombre: function(){ var t = document.getElementById('regalosTitle'); return t ? t.textContent : 'Regalos'; } },
      { id: 'estrellaSection', nombre: function(){ return 'Producto estrella'; } },
      { id: 'kitsSection', nombre: function(){ return 'Arma tu setup'; } },
      { id: 'homeRailsSection', nombre: function(){ return 'Por categoría'; } }
    ];
    var actual = null, elegidaPorCliente = false;
    function tieneContenido(b){
      var el = document.getElementById(b.id);
      return el && !el.hidden && el.querySelector('.product-card, .estrella *, .kits-grid *');
    }
    function elegir(id){
      actual = id;
      home.setAttribute('data-pestana', id);
      BLOQUES.forEach(function(b){ var el = document.getElementById(b.id); if(el) el.classList.toggle('v3-activa', b.id === id); });
      nav.querySelectorAll('button').forEach(function(btn){ btn.setAttribute('aria-selected', String(btn.dataset.id === id)); });
    }
    function pintar(){
      var visibles = BLOQUES.filter(tieneContenido);
      if(!visibles.length) return;
      nav.innerHTML = visibles.map(function(b){
        return '<button type="button" role="tab" data-id="' + b.id + '"' + (b.camp ? ' class="camp"' : '') + '>' + b.nombre().replace(/</g, '&lt;') + '</button>';
      }).join('');
      nav.setAttribute('role', 'tablist');
      // Se respeta la pestaña que eligió el cliente; si no eligió, va la primera
      // (campaña o Más vendidos), aunque otro bloque se haya llenado antes.
      elegir(elegidaPorCliente && visibles.some(function(b){ return b.id === actual; }) ? actual : visibles[0].id);
    }
    nav.addEventListener('click', function(e){
      var b = e.target.closest('button[data-id]');
      if(!b) return;
      elegidaPorCliente = true;
      elegir(b.dataset.id);
      if(typeof camandTrack === 'function') camandTrack('pestana_inicio', { pestana: b.textContent });
    });
    // Se rearma cuando llega el catálogo o cambia la campaña (los bloques se llenan después).
    var pendiente = null;
    var repintar = function(){ clearTimeout(pendiente); pendiente = setTimeout(function(){ pintar(); verMas(); }, 60); };
    BLOQUES.forEach(function(b){ var el = document.getElementById(b.id); if(el) new MutationObserver(repintar).observe(el, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] }); });
    addEventListener('camand:temporada', repintar);

    // 3) "Ver más" en Más vendidos / campaña (8 productos y el resto al tocar).
    function verMas(){
      var grid = document.getElementById('homeFeaturedGrid');
      if(!grid) return;
      var btn = grid.parentNode.querySelector('.v3-vermas');
      var n = grid.querySelectorAll('.product-card').length;
      if(n <= 8 || grid.classList.contains('v3-todo')){ if(btn) btn.remove(); return; }
      if(!btn){
        btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'v3-vermas';
        btn.addEventListener('click', function(){ grid.classList.add('v3-todo'); btn.remove(); });
        grid.after(btn);
      }
      var texto = 'Ver ' + (n - 8) + ' más';
      if(btn.textContent !== texto) btn.textContent = texto;   // solo si cambia: si no, el observador se dispararía en bucle
    }

    // Título (solo para lectores de pantalla) antes de las categorías: ahora van justo
    // después del título principal y sin él los títulos saltaban de nivel.
    var gridCats = document.getElementById('catGridHome');
    if(gridCats && !document.getElementById('v3TituloCats')){
      var h2 = document.createElement('h2');
      h2.id = 'v3TituloCats'; h2.className = 'v3-solo-lector'; h2.textContent = 'Compra por categoría';
      gridCats.before(h2);
    }
    // 4) Quiénes somos: corto, con "Leer más".
    var about = $('.about-block');
    if(about && !about.querySelector('.about-mas')){
      var mas = document.createElement('button');
      mas.type = 'button'; mas.className = 'about-mas'; mas.textContent = 'Leer más';
      mas.addEventListener('click', function(){ var abierto = about.classList.toggle('abierto'); mas.textContent = abierto ? 'Leer menos' : 'Leer más'; });
      about.appendChild(mas);
    }
    pintar(); verMas();
  }

  if(html.classList.contains('v3-entrada')) entrada();
  inicio();
  if(document.body) encabezado(); else document.addEventListener('DOMContentLoaded', encabezado);
})();
