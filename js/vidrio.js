/* =====================================================================
   ESTILO VIDRIO — piezas que agrega al inicio (ver css/vidrio.css)
   - La luz de color fija detrás de toda la página.
   - Tres "ventanas" con foto de fondo quieta en el inicio.
   ANDRÉS: para cambiar textos, fotos o botones de una ventana, edita
   VENTANAS. "despues" es el bloque del inicio tras el cual aparece.
   Las fotos van en img/fondos/ (verticales 1080×1920, fondo negro).
   ===================================================================== */
(function(){
  var h = document.documentElement;
  if(!h.classList.contains('vd')) return;

  var VENTANAS = [
    { id: 'vdCelulares', foto: 'img/fondos/bg-camara.webp', despues: '.v3-productos',
      eb: 'Celulares nuevos y seminuevos', titulo: 'El iPhone o Android que quieres, hoy.',
      texto: 'Revisados uno por uno, con garantía y envío en 1 a 2 días a toda Colombia. Paga a cuotas con Sistecrédito.',
      botones: [ { t: 'Ver celulares', clase: 'claro', accion: function(){ go('celulares'); } },
                 { t: 'Comparar modelos', clase: 'vidrio', accion: function(){ startCompareFlow(); } } ] },
    { id: 'vdRelojes', foto: 'img/fondos/bg-relojes.webp', despues: '.comocompras-section',
      eb: 'Relojes', titulo: 'Relojes que combinan contigo.',
      texto: 'Smartwatches y correas para cada estilo, con envío en 1 a 2 días.',
      botones: [ { t: 'Ver relojes', clase: 'claro', accion: function(){ go('relojes'); } } ] },
    { id: 'vdComputadores', foto: 'img/fondos/bg-mac.webp', despues: '.about-block',
      eb: 'Computadores y tablets', titulo: 'Para trabajar, estudiar y crear.',
      texto: 'Pregunta por modelos y configuraciones, y llévalo a cuotas.',
      botones: [ { t: 'Ver computadores', clase: 'claro', accion: function(){ go('computadores'); } },
                 { t: 'Ver tablets', clase: 'vidrio', accion: function(){ go('tablets'); } } ] }
  ];

  function aura(){
    if(document.querySelector('.vd-aura')) return;
    var a = document.createElement('div');
    a.className = 'vd-aura'; a.setAttribute('aria-hidden', 'true');
    a.innerHTML = '<i></i><i></i><i></i>';
    document.body.insertBefore(a, document.body.firstChild);
  }

  function ventana(v){
    if(document.getElementById(v.id)) return;
    var home = document.getElementById('view-home');
    if(!home) return;
    var ancla = home.querySelector(v.despues);
    if(!ancla) return;
    // El bloque del inicio que contiene el ancla (hijo directo de #view-home).
    while(ancla.parentElement && ancla.parentElement !== home) ancla = ancla.parentElement;
    if(ancla.parentElement !== home) return;
    var s = document.createElement('section');
    s.className = 'vd-win'; s.id = v.id;
    s.setAttribute('aria-label', v.eb);
    var bg = document.createElement('div');
    bg.className = 'vd-win-bg'; bg.setAttribute('aria-hidden', 'true');
    bg.style.backgroundImage = 'url("' + v.foto + '")';   // ruta desde la página, no desde el CSS
    var wrap = document.createElement('div'); wrap.className = 'wrap';
    var card = document.createElement('div'); card.className = 'vd-card';
    var eb = document.createElement('span'); eb.className = 'vd-eb'; eb.textContent = v.eb;
    var h2 = document.createElement('h2'); h2.textContent = v.titulo;
    var p = document.createElement('p'); p.textContent = v.texto;
    var btns = document.createElement('div'); btns.className = 'vd-btns';
    v.botones.forEach(function(b){
      var el = document.createElement('button');
      el.type = 'button'; el.className = 'vd-btn ' + b.clase; el.textContent = b.t;
      el.addEventListener('click', function(){ try{ b.accion(); }catch(e){} });
      btns.appendChild(el);
    });
    card.appendChild(eb); card.appendChild(h2); card.appendChild(p); card.appendChild(btns);
    wrap.appendChild(card); s.appendChild(bg); s.appendChild(wrap);
    ancla.after(s);
  }

  function armar(){
    aura();
    VENTANAS.forEach(ventana);
  }
  // Después de que js/v3.js reordena el inicio (también en DOMContentLoaded).
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(armar, 0); });
  else setTimeout(armar, 0);
})();
