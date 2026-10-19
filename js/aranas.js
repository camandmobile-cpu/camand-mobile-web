/* =====================================================================
   ARAÑAS QUE CAMINAN POR LA PANTALLA — solo en temporada "halloween"
   ---------------------------------------------------------------------
   - Entran por un borde, caminan dando vueltas, a veces se quedan quietas
     y luego salen por otro borde. Después de un rato entra otra.
   - Huyen del mouse (o del dedo) si se les acerca.
   - No bloquean clics (pointer-events: none), se pausan con la pestaña
     oculta y no aparecen si el usuario pidió "reducir movimiento".
   - Máximo 3 en computador y 2 en celular. Para quitarlas: cambiar el
     tema en TEMPORADA PAGINA o poner ARANAS_ACTIVAS = false.
   ===================================================================== */
(function(){
  const ARANAS_ACTIVAS = true;
  if(!ARANAS_ACTIVAS) return;

  const reducir = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reducir) return;

  // Vista desde arriba. Las patas van en dos grupos (a / b) que se alternan al caminar.
  const PATA = (x1, y1, x2, y2, x3, y3) => `<path d="M${x1} ${y1} L${x2} ${y2} L${x3} ${y3}"/>`;
  const SVG_ARANA = `<svg viewBox="-30 -30 60 60" width="100%" height="100%" aria-hidden="true">
    <g class="ar-patas" fill="none" stroke="#141018" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <g class="ar-a">${PATA(-4,-6,-14,-16,-18,-27)}${PATA(4,-2,15,-6,25,-10)}${PATA(-4,3,-15,6,-25,12)}${PATA(4,7,13,16,16,27)}</g>
      <g class="ar-b">${PATA(4,-6,14,-16,18,-27)}${PATA(-4,-2,-15,-6,-25,-10)}${PATA(4,3,15,6,25,12)}${PATA(-4,7,-13,16,-16,27)}</g>
    </g>
    <ellipse cx="0" cy="9" rx="8.5" ry="10.5" fill="#141018"/>
    <path d="M-3 5 L0 9 L3 5 M-3 13 L0 9 L3 13" stroke="#ff7a1a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-5" r="6" fill="#1d1724"/>
    <circle cx="-2.4" cy="-8.6" r="1.5" fill="#ff7a1a"/><circle cx="2.4" cy="-8.6" r="1.5" fill="#ff7a1a"/>
  </svg>`;

  const css = document.createElement('style');
  css.textContent = `
  .ar-capa{position:fixed;inset:0;pointer-events:none;z-index:150;overflow:hidden;}
  .ar{position:absolute;left:0;top:0;will-change:transform;filter:drop-shadow(0 3px 3px rgba(0,0,0,.25));}
  .ar svg{display:block;overflow:visible;}
  .ar .ar-a,.ar .ar-b{transform-origin:0 0;}
  .ar.camina .ar-a{animation:arPaso .16s ease-in-out infinite alternate;}
  .ar.camina .ar-b{animation:arPaso .16s ease-in-out infinite alternate-reverse;}
  .ar.corre .ar-a,.ar.corre .ar-b{animation-duration:.08s;}
  @keyframes arPaso{from{transform:rotate(-9deg);}to{transform:rotate(9deg);}}
  html:not([data-temporada="halloween"]) .ar-capa{display:none;}
  @media print{.ar-capa{display:none;}}`;
  document.head.appendChild(css);

  const rnd = (a, b) => a + Math.random() * (b - a);
  let capa = null, aranas = [], raf = null, timer = null, ultimo = 0;
  const raton = { x: -9999, y: -9999, t: 0 };

  function maximo(){ return innerWidth < 700 ? 2 : 3; }
  function activa(){ return document.documentElement.dataset.temporada === 'halloween'; }

  function crear(){
    if(!capa){
      capa = document.createElement('div');
      capa.className = 'ar-capa'; capa.setAttribute('aria-hidden', 'true');
      document.body.appendChild(capa);
    }
    const tam = innerWidth < 700 ? rnd(26, 34) : rnd(30, 42);
    const el = document.createElement('div');
    el.className = 'ar camina';
    el.style.width = el.style.height = tam + 'px';
    el.innerHTML = SVG_ARANA;
    capa.appendChild(el);
    // Entra por un borde al azar, mirando hacia adentro.
    const W = innerWidth, H = innerHeight, m = tam;
    const borde = Math.floor(Math.random() * 4);
    let x, y, dir;
    if(borde === 0){ x = rnd(0.1, 0.9) * W; y = -m; dir = rnd(0.25, 0.75) * Math.PI; }
    else if(borde === 1){ x = W + m; y = rnd(0.15, 0.85) * H; dir = rnd(0.75, 1.25) * Math.PI; }
    else if(borde === 2){ x = rnd(0.1, 0.9) * W; y = H + m; dir = rnd(1.25, 1.75) * Math.PI; }
    else { x = -m; y = rnd(0.15, 0.85) * H; dir = rnd(-0.25, 0.25) * Math.PI; }
    aranas.push({ el, x, y, dir, giro: 0, vel: rnd(55, 85), tam,
      vida: rnd(9, 16),          // segundos antes de buscar la salida
      t: 0, quieta: 0, prox: rnd(1.5, 4), saliendo: false, corre: false });
  }

  function paso(now){
    raf = null;
    if(!activa() || document.hidden){ return; }
    const dt = Math.min(0.05, (now - (ultimo || now)) / 1000); ultimo = now;
    const W = innerWidth, H = innerHeight;
    aranas = aranas.filter(a => {
      a.t += dt;
      // ¿Huir del mouse / dedo?
      const dx = a.x - raton.x, dy = a.y - raton.y, d = Math.hypot(dx, dy);
      const huye = d < 140 && (now - raton.t) < 1500;
      if(huye){
        a.quieta = 0;
        const lejos = Math.atan2(dy, dx);
        let diff = Math.atan2(Math.sin(lejos - a.dir), Math.cos(lejos - a.dir));
        a.dir += diff * Math.min(1, dt * 10);
      } else if(a.quieta > 0){
        a.quieta -= dt;
      } else {
        // Paseo: giros suaves al azar y, de vez en cuando, una pausa.
        a.giro += rnd(-1, 1) * dt * 4; a.giro *= 0.96;
        a.dir += a.giro * dt;
        a.prox -= dt;
        if(a.prox <= 0 && !a.saliendo){ a.quieta = rnd(0.6, 1.8); a.prox = rnd(2, 5); }
        if(a.t > a.vida) a.saliendo = true;
        // Rebota suavemente en los bordes mientras no esté saliendo.
        if(!a.saliendo){
          const mg = 30, cx = W / 2 - a.x, cy = H / 2 - a.y;
          if(a.x < mg || a.x > W - mg || a.y < mg || a.y > H - mg){
            const centro = Math.atan2(cy, cx);
            a.dir += Math.atan2(Math.sin(centro - a.dir), Math.cos(centro - a.dir)) * Math.min(1, dt * 3);
          }
        }
      }
      const moviendo = a.quieta <= 0 || huye;
      const v = huye ? a.vel * 3.2 : a.vel;
      if(moviendo){ a.x += Math.cos(a.dir) * v * dt; a.y += Math.sin(a.dir) * v * dt; }
      a.el.classList.toggle('camina', moviendo);
      if(huye !== a.corre){ a.corre = huye; a.el.classList.toggle('corre', huye); }
      // El dibujo mira hacia "arriba" (-y); se gira para que mire hacia donde camina.
      a.el.style.transform = `translate(${(a.x - a.tam / 2).toFixed(1)}px,${(a.y - a.tam / 2).toFixed(1)}px) rotate(${(a.dir + Math.PI / 2).toFixed(3)}rad)`;
      const fuera = a.x < -80 || a.x > W + 80 || a.y < -80 || a.y > H + 80;
      if(fuera && (a.saliendo || huye || a.t > 2)){ a.el.remove(); return false; }
      return true;
    });
    if(aranas.length) raf = requestAnimationFrame(paso);
  }

  function arrancar(){ if(!raf && aranas.length && !document.hidden){ ultimo = 0; raf = requestAnimationFrame(paso); } }
  function intentarSoltar(){
    if(!activa() || document.hidden) return;
    if(aranas.length < maximo() && Math.random() < 0.6) crear();
    arrancar();
  }
  function encender(){
    if(timer) return;
    // La primera siempre sale; las siguientes, al azar.
    setTimeout(() => { if(activa() && !aranas.length){ crear(); arrancar(); } }, 2500);
    timer = setInterval(intentarSoltar, 7000);
  }
  function apagar(){
    if(timer){ clearInterval(timer); timer = null; }
    if(raf){ cancelAnimationFrame(raf); raf = null; }
    aranas.forEach(a => a.el.remove()); aranas = [];
  }
  function revisar(){ activa() ? encender() : apagar(); }

  addEventListener('pointermove', e => { raton.x = e.clientX; raton.y = e.clientY; raton.t = performance.now(); }, { passive: true });
  addEventListener('pointerdown', e => { raton.x = e.clientX; raton.y = e.clientY; raton.t = performance.now(); }, { passive: true });
  document.addEventListener('visibilitychange', () => { if(!document.hidden) arrancar(); });
  addEventListener('camand:temporada', () => setTimeout(revisar, 0));
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', revisar); else revisar();
})();
