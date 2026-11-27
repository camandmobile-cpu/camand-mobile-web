/* =====================================================================
   NAVIDAD — decoración de la página solo en temporada "navidad"
   ---------------------------------------------------------------------
   - Inicio: el bloque "Campaña del mes" se vuelve una noche de Navidad
     (estrellas, luna, nieve, colinas con pinos y regalos que se pueden
     tocar para ir a los regalos) + cuenta regresiva a Navidad.
   - Trineo de Santa que cruza la pantalla de vez en cuando (como las
     arañas de Halloween). No bloquea clics.
   - Luces de colores colgando bajo el menú y gorro de Santa en el logo.
   - Cinta de bastón de caramelo, barra superior verde y dorado, moño en
     los productos de la campaña y nieve visible sobre fondo blanco.
   - Todo se apaga solo cuando la Hoja cambia de tema, se pausa con la
     pestaña oculta y respeta "reducir movimiento".
   Para quitarlo: cambia el tema en TEMPORADA PAGINA o NAVIDAD_ACTIVA = false.
   ===================================================================== */
(function(){
  const NAVIDAD_ACTIVA = true;
  if(!NAVIDAD_ACTIVA) return;

  const reducir = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const activa = () => document.documentElement.dataset.temporada === 'navidad';

  /* ---------- Dibujos ---------- */
  // Trineo con Santa y dos renos, mirando a la derecha.
  const RENO = (x, nariz) => `<g transform="translate(${x} 0)">
      <g class="nv-patas" stroke="#5a3417" stroke-width="3" stroke-linecap="round">
        <path class="nv-pa" d="M8 52 L2 66"/><path class="nv-pb" d="M14 53 L18 67"/>
        <path class="nv-pa" d="M30 52 L36 65"/><path class="nv-pb" d="M26 53 L22 67"/>
      </g>
      <path d="M4 44 Q-4 40 -6 48" stroke="#7a4a22" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="19" cy="46" rx="18" ry="9" fill="#8b5a2b"/>
      <ellipse cx="19" cy="49" rx="11" ry="4.5" fill="#c08a55"/>
      <path d="M32 42 Q36 32 40 27" stroke="#8b5a2b" stroke-width="8" stroke-linecap="round" fill="none"/>
      <ellipse cx="44" cy="25" rx="8.5" ry="6" fill="#8b5a2b" transform="rotate(-14 44 25)"/>
      <path d="M38 20 Q34 8 28 6 M35 13 L29 14 M42 19 Q44 7 50 3 M44 11 L50 10" stroke="#d9a764" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="45" cy="22" r="1.5" fill="#1b1b1b"/>
      <path d="M37 33 Q42 36 46 31" stroke="#e0263b" stroke-width="3" fill="none"/>
      <circle cx="41" cy="35" r="1.8" fill="#ffd166"/>
      ${nariz ? '<circle class="nv-nariz" cx="52.5" cy="25" r="3.4" fill="#ff2d3f"/>' : '<circle cx="52" cy="25" r="2.3" fill="#3a2414"/>'}
    </g>`;
  const SVG_TRINEO = `<svg viewBox="0 0 300 80" aria-hidden="true">
    <path d="M86 30 Q140 50 196 41 M150 40 Q190 46 250 41" stroke="#ffd166" stroke-width="1.4" fill="none"/>
    ${RENO(140, false)}${RENO(198, true)}
    <g class="nv-trineo">
      <ellipse cx="44" cy="32" rx="16" ry="14" fill="#2f7d4f"/>
      <rect x="34" y="12" width="11" height="11" rx="1.5" fill="#ffd166"/><path d="M39.5 12v11M34 17.5h11" stroke="#e0263b" stroke-width="2"/>
      <rect x="46" y="15" width="9" height="9" rx="1.5" fill="#5aa9ff"/><path d="M50.5 15v9" stroke="#fff" stroke-width="1.8"/>
      <ellipse cx="76" cy="34" rx="13" ry="14" fill="#d42a3c"/>
      <path d="M64 37h24" stroke="#1b1b1b" stroke-width="3.4"/><rect x="73" y="35" width="6" height="4.4" rx="1" fill="#ffd166"/>
      <circle cx="80" cy="17" r="7" fill="#f6cba5"/>
      <path d="M73 18 Q74 31 81 30 Q88 29 87 18 Q83 22 80 21 Q77 22 73 18Z" fill="#fff"/>
      <path d="M72 14 Q76 1 92 4 Q86 7 87 13Z" fill="#d42a3c"/><path d="M71 14.5 Q80 11 88.5 13.5" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>
      <circle cx="93" cy="5" r="3.2" fill="#fff"/>
      <path d="M86 28 Q96 22 100 12" stroke="#d42a3c" stroke-width="5.5" stroke-linecap="round" fill="none"/><circle cx="100.5" cy="10.5" r="3.2" fill="#fff"/>
      <path d="M26 36 L100 36 Q110 36 110 46 L110 54 Q110 61 102 61 L36 61 Q26 61 24 50 Z" fill="#d42a3c"/>
      <path d="M30 42 Q66 48 106 42" stroke="#ffd166" stroke-width="2.2" fill="none"/>
      <circle cx="68" cy="52" r="3" fill="#ffd166"/>
      <path d="M40 61v9M96 61v9" stroke="#ffd166" stroke-width="3"/>
      <path d="M14 70 L104 70 Q118 70 120 60 Q121 54 115 55" stroke="#ffd166" stroke-width="3.6" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
  const SVG_GORRO = `<svg viewBox="0 0 64 52" aria-hidden="true"><path d="M8 40 Q14 10 40 6 Q58 4 60 26 Q52 16 44 18 Q30 22 30 40Z" fill="#e0263b"/><path d="M40 6 Q50 5 56 14" stroke="#ff5a6b" stroke-width="3" fill="none" opacity=".6"/><rect x="2" y="36" width="36" height="12" rx="6" fill="#fff"/><circle cx="59" cy="29" r="6" fill="#fff"/></svg>`;
  const REGALO = (c, cinta, w, h, tapa) => `<svg viewBox="0 0 ${w} ${h + 16}" aria-hidden="true">
      <rect x="2" y="${16 + tapa}" width="${w - 4}" height="${h - tapa}" rx="3" fill="${c}"/>
      <rect x="0" y="16" width="${w}" height="${tapa + 2}" rx="3" fill="${c}" style="filter:brightness(1.12)"/>
      <rect x="${w / 2 - 4}" y="16" width="8" height="${h}" fill="${cinta}"/>
      <path d="M${w / 2} 16 Q${w / 2 - 16} 0 ${w / 2 - 14} 14 Z M${w / 2} 16 Q${w / 2 + 16} 0 ${w / 2 + 14} 14 Z" fill="${cinta}"/>
      <circle cx="${w / 2}" cy="16" r="3.4" fill="${cinta}"/>
    </svg>`;
  const PINO = (luces) => `<svg viewBox="0 0 60 90" aria-hidden="true">
      <rect x="26" y="74" width="8" height="14" fill="#5a3417"/>
      <path d="M30 4 L52 40 L42 40 L56 62 L44 62 L58 80 L2 80 L16 62 L4 62 L18 40 L8 40Z" fill="#14532d"/>
      <path d="M30 4 L40 20 Q30 24 20 20Z M18 40 Q30 46 42 40 L38 34 Q30 38 22 34Z M16 62 Q30 68 44 62 L40 56 Q30 60 20 56Z" fill="#eaf4ff" opacity=".9"/>
      ${luces ? '<g class="nv-pino-luces"><circle cx="24" cy="30" r="2.4" fill="#ffd166"/><circle cx="36" cy="44" r="2.4" fill="#ff4f6b"/><circle cx="22" cy="52" r="2.4" fill="#5aa9ff"/><circle cx="40" cy="66" r="2.4" fill="#ffd166"/><circle cx="18" cy="72" r="2.4" fill="#7ee08a"/></g>' : ''}
      <path d="M30 0 l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="#ffd166"/>
    </svg>`;
  const MONO = `<svg viewBox="0 0 48 40" aria-hidden="true"><path d="M24 20 Q6 2 2 12 Q0 22 24 20 Z M24 20 Q42 2 46 12 Q48 22 24 20Z" fill="#e0263b"/><path d="M24 20 L14 38 L18 30 L22 36Z M24 20 L34 38 L30 30 L26 36Z" fill="#c21d30"/><circle cx="24" cy="20" r="5" fill="#ff4f6b"/></svg>`;

  /* ---------- Estilos (se agregan solo en Navidad) ---------- */
  const css = document.createElement('style');
  css.id = 'navidadCss';
  css.textContent = `
  html[data-temporada="navidad"]{--nv-rojo:#e0263b;--nv-rojo2:#b5172a;--nv-verde:#14532d;--nv-oro:#ffd166;--nv-noche:#0b1d33;}

  /* Barra superior verde con dorado y cinta de bastón de caramelo */
  html[data-temporada="navidad"] .top-bar,html.v3[data-temporada="navidad"] .top-bar{background:linear-gradient(90deg,#0b1d33,#14335a 50%,#0b1d33);}
  html[data-temporada="navidad"] .top-bar-msg{color:var(--nv-oro);font-weight:700;}
  html[data-temporada="navidad"] .cinta{background:repeating-linear-gradient(-45deg,#d42a3c 0 18px,#c01f31 18px 36px);color:#fff;}
  html[data-temporada="navidad"] .cinta-item{color:#fff;font-weight:700;}
  html[data-temporada="navidad"] .cinta-item::before{background:var(--nv-oro);box-shadow:0 0 8px var(--nv-oro);}
  html[data-temporada="navidad"] .cinta-item b{color:var(--nv-oro);}
  html[data-temporada="navidad"] nav.links button.nav-pz{background:linear-gradient(90deg,#e0263b,#b5172a);color:#fff;}

  /* Luces bajo el menú (con espacio reservado: no caen sobre el banner) */
  html[data-temporada="navidad"] #app{padding-top:calc(var(--stack-h) + 20px);}
  .nv-luces{position:absolute;left:0;right:0;top:100%;height:26px;pointer-events:none;z-index:2;}
  .nv-luces svg{position:absolute;inset:0 0 auto 0;width:100%;height:16px;}
  .nv-luces i{position:absolute;top:7px;width:8px;height:12px;margin-left:-4px;border-radius:50% 50% 50% 50%/40% 40% 60% 60%;background:var(--c);
    box-shadow:0 0 8px 2px var(--c);animation:nvBrillo 1.6s ease-in-out infinite alternate;animation-delay:var(--d);}
  .nv-luces i::before{content:"";position:absolute;left:1.5px;top:-3px;width:5px;height:4px;border-radius:1px;background:#3c4a3f;}
  @keyframes nvBrillo{from{opacity:1;}to{opacity:.35;}}
  @media (max-width:700px){ .nv-luces{height:20px;} .nv-luces i{width:6px;height:9px;margin-left:-3px;top:6px;box-shadow:0 0 6px 1px var(--c);} }

  /* Gorro de Santa en el logo */
  html[data-temporada="navidad"] header .brand{position:relative;overflow:visible;}
  .nv-gorro{position:absolute;width:30px;left:-6px;top:-4px;transform:rotate(-24deg);pointer-events:none;z-index:2;filter:drop-shadow(0 2px 2px rgba(0,0,0,.18));}
  .nv-gorro svg{display:block;width:100%;height:auto;}

  /* Inicio: noche de Navidad */
  html[data-temporada="navidad"] #view-home .hero{background:radial-gradient(120% 90% at 50% 0%,#17406b 0%,#0e2a4b 45%,#0b1d33 100%);
    color:#fff;border-radius:30px;margin-top:22px;padding:58px 24px 150px;overflow:hidden;isolation:isolate;box-shadow:0 30px 60px -30px rgba(11,29,51,.7);}
  html[data-temporada="navidad"] #view-home .hero > .nv-escena{position:absolute;inset:0;z-index:0;pointer-events:none;}
  html[data-temporada="navidad"] #view-home .hero .eyebrow,html.v3[data-temporada="navidad"] #view-home .hero .eyebrow{color:var(--nv-oro);font-weight:800;letter-spacing:.12em;}
  html[data-temporada="navidad"] #view-home .hero h1{color:#fff;text-shadow:0 4px 30px rgba(0,0,0,.35);}
  html[data-temporada="navidad"] #view-home .hero p.sub{color:#d7e3f2;}
  html[data-temporada="navidad"] #view-home .hero .tm-hero-btn{background:linear-gradient(180deg,#ef3a4e,#c81d31);color:#fff;box-shadow:0 14px 30px -12px rgba(224,38,59,.9);}
  html[data-temporada="navidad"] #view-home .hero .tm-hero-btn:hover{background:linear-gradient(180deg,#ff5063,#d42a3c);box-shadow:0 18px 34px -12px rgba(224,38,59,1);}
  html[data-temporada="navidad"] #view-home .tm-hero-cta{display:inline-block;}
  .nv-extra{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin-top:14px;}
  .nv-btn2{display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(255,255,255,.55);background:rgba(255,255,255,.08);color:#fff;border-radius:100px;padding:13px 22px;
    font:inherit;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s,transform .2s;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);}
  .nv-btn2:hover{background:rgba(255,255,255,.2);transform:translateY(-2px);}
  .nv-btn2 svg{width:17px;height:17px;}
  .nv-cuenta{display:flex;justify-content:center;gap:10px;margin:22px auto 0;flex-wrap:wrap;}
  .nv-cuenta-lbl{width:100%;text-align:center;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--nv-oro);margin-bottom:2px;}
  .nv-cuenta div{min-width:64px;padding:9px 10px 7px;border-radius:14px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);text-align:center;}
  .nv-cuenta b{display:block;font-size:24px;line-height:1;font-variant-numeric:tabular-nums;color:#fff;}
  .nv-cuenta small{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#b9c9de;}
  .nv-cuenta.nv-hoy .nv-cuenta-lbl{font-size:20px;letter-spacing:.04em;text-transform:none;}

  /* Cielo quieto: la tarjeta pasa por encima de las estrellas al bajar (efecto ventana). */
  html[data-temporada="navidad"] #view-home .hero > .nv-cielo{position:absolute;inset:0;z-index:-1;pointer-events:none;
    background:radial-gradient(120% 90% at 50% 0%,#17406b 0%,#0e2a4b 45%,#0b1d33 100%);}
  @supports (clip-path:inset(0 round 30px)){
    html[data-temporada="navidad"] #view-home .hero{clip-path:inset(0 round 30px);}
    html[data-temporada="navidad"] #view-home .hero > .nv-cielo{position:fixed;background:radial-gradient(110% 80% at 50% 20%,#17406b 0%,#0e2a4b 48%,#0b1d33 100%);}
  }
  @media (max-width:700px){ @supports (clip-path:inset(0 round 24px)){ html[data-temporada="navidad"] #view-home .hero{clip-path:inset(0 round 24px);} } }
  .nv-estrella{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;opacity:.8;animation:nvTitila 2.6s ease-in-out infinite alternate;}
  .nv-estrella.g{width:3px;height:3px;box-shadow:0 0 6px 1px rgba(255,255,255,.8);}
  @keyframes nvTitila{from{opacity:.15;}to{opacity:1;}}
  .nv-luna{position:absolute;right:9%;top:34px;width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 38% 38%,#fffbe8,#ffe9a8 60%,#f5d27a);
    box-shadow:0 0 50px 18px rgba(255,233,168,.28);}
  .nv-luna::after{content:"";position:absolute;left:18px;top:22px;width:10px;height:10px;border-radius:50%;background:rgba(220,190,110,.35);box-shadow:16px 10px 0 -2px rgba(220,190,110,.3);}
  .nv-sombra{position:absolute;top:44px;left:0;width:150px;opacity:.95;animation:nvCruza 16s linear infinite;animation-delay:2s;transform:translateX(-200px);}
  .nv-sombra svg{width:100%;height:auto;display:block;filter:brightness(0) invert(.08);}
  @keyframes nvCruza{0%{transform:translate(-200px,40px) rotate(-6deg);}100%{transform:translate(calc(var(--w,1200px) + 60px),-30px) rotate(-6deg);}}
  .nv-nieve{position:absolute;left:0;right:0;top:-100%;height:200%;opacity:.9;
    background-image:radial-gradient(2.5px 2.5px at 20px 30px,#fff 50%,transparent 51%),radial-gradient(2px 2px at 110px 90px,#fff 50%,transparent 51%),
      radial-gradient(3px 3px at 170px 20px,rgba(255,255,255,.9) 50%,transparent 51%),radial-gradient(1.6px 1.6px at 60px 140px,#fff 50%,transparent 51%),
      radial-gradient(2.4px 2.4px at 150px 170px,rgba(255,255,255,.85) 50%,transparent 51%);
    background-size:200px 200px;animation:nvCae 14s linear infinite;}
  .nv-nieve.b{background-size:300px 300px;opacity:.55;animation-duration:22s;filter:blur(.6px);}
  @keyframes nvCae{from{transform:translateY(0);}to{transform:translateY(50%);}}
  .nv-colinas{position:absolute;left:0;right:0;bottom:0;height:150px;}
  .nv-colinas svg.nv-suelo{position:absolute;inset:auto 0 0 0;width:100%;height:150px;}
  .nv-pino,.nv-regalo{position:absolute;bottom:0;}
  .nv-pino svg,.nv-regalo svg{display:block;width:100%;height:auto;}
  .nv-pino-luces circle{animation:nvBrillo 1.2s ease-in-out infinite alternate;}
  .nv-pino-luces circle:nth-child(2n){animation-delay:.6s;}
  .nv-regalos{position:absolute;bottom:14px;display:flex;align-items:flex-end;gap:2px;pointer-events:auto;cursor:pointer;background:none;border:0;padding:0;}
  .nv-regalos .nv-regalo{position:relative;transition:transform .25s cubic-bezier(.3,1.6,.5,1);}
  .nv-regalos:hover .nv-regalo,.nv-regalos:focus-visible .nv-regalo{transform:translateY(-8px) rotate(-3deg);}
  .nv-regalos:hover .nv-regalo:nth-child(2){transform:translateY(-12px) rotate(4deg);}
  .nv-regalos .nv-tip{position:absolute;bottom:100%;left:50%;transform:translate(-50%,6px);white-space:nowrap;background:#fff;color:#0b1d33;font-size:12.5px;font-weight:800;
    padding:6px 11px;border-radius:100px;opacity:0;transition:opacity .2s,transform .2s;box-shadow:0 8px 20px -8px rgba(0,0,0,.5);}
  .nv-regalos:hover .nv-tip,.nv-regalos:focus-visible .nv-tip{opacity:1;transform:translate(-50%,-6px);}
  .nv-regalos.l{left:4%;} .nv-regalos.r{right:4%;}
  .nv-regalos .nv-regalo:first-child{animation:nvSalto 4s ease-in-out infinite;}
  .nv-regalos.r .nv-regalo:last-child{animation:nvSalto 4s ease-in-out 2s infinite;}
  @keyframes nvSalto{0%,86%,100%{transform:translateY(0);}90%{transform:translateY(-10px) rotate(-4deg);}94%{transform:translateY(0) rotate(2deg);}}
  @media (max-width:700px){
    html[data-temporada="navidad"] #view-home .hero{padding:40px 16px 118px;border-radius:24px;margin-top:14px;}
    .nv-luna{width:34px;height:34px;top:12px;right:14px;box-shadow:0 0 30px 10px rgba(255,233,168,.25);}
    .nv-luna::after{left:9px;top:11px;width:6px;height:6px;box-shadow:9px 6px 0 -1px rgba(220,190,110,.3);}
    html[data-temporada="navidad"] #view-home .hero .eyebrow{padding:0 34px;}
    .nv-colinas,.nv-colinas svg.nv-suelo{height:116px;}
    .nv-regalos.l{left:2%;} .nv-regalos.r{right:2%;}
    .nv-btn2{padding:12px 18px;font-size:14px;}
    .nv-cuenta div{min-width:56px;}
    .nv-cuenta b{font-size:20px;}
    .nv-sombra{width:110px;}
  }

  /* Trineo que cruza toda la pantalla */
  .nv-vuelo{position:fixed;left:0;top:0;z-index:-1;pointer-events:none;width:240px;will-change:transform;}
  .nv-vuelo svg{display:block;width:100%;height:auto;overflow:visible;filter:drop-shadow(0 8px 10px rgba(0,0,0,.18));}
  .nv-vuelo .nv-chispa{position:absolute;left:12px;top:60%;width:6px;height:6px;border-radius:50%;background:#ffd166;box-shadow:0 0 10px 3px rgba(255,209,102,.9);
    animation:nvChispa .9s ease-out forwards;}
  @keyframes nvChispa{from{opacity:1;transform:translate(0,0) scale(1);}to{opacity:0;transform:translate(var(--cx),var(--cy)) scale(.2);}}
  .nv-patas .nv-pa{animation:nvGalope .32s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:top center;}
  .nv-patas .nv-pb{animation:nvGalope .32s ease-in-out infinite alternate-reverse;transform-box:fill-box;transform-origin:top center;}
  @keyframes nvGalope{from{transform:rotate(-22deg);}to{transform:rotate(22deg);}}
  .nv-nariz{animation:nvNariz .8s ease-in-out infinite alternate;}
  @keyframes nvNariz{from{filter:drop-shadow(0 0 1px #ff2d3f);}to{filter:drop-shadow(0 0 6px #ff2d3f);}}
  @media (max-width:700px){ .nv-vuelo{width:160px;} }

  /* Nieve de toda la página: visible también sobre blanco */
  html[data-temporada="navidad"] .tm-p.fall{display:none;}   /* la nieve va solo dentro de la tarjeta de noche */

  /* Productos de la campaña: moño de regalo y botones rojos */
  html[data-temporada="navidad"] #homeFeaturedSection .pc-media,html[data-temporada="navidad"] #regalosSection .pc-media{position:relative;}
  html[data-temporada="navidad"] #homeFeaturedSection .pc-media::after,html[data-temporada="navidad"] #regalosSection .pc-media::after{content:"";position:absolute;right:8px;top:6px;width:38px;height:32px;
    background:url("data:image/svg+xml,${encodeURIComponent(MONO.replace(' aria-hidden="true"', ' xmlns="http://www.w3.org/2000/svg"'))}") center/contain no-repeat;pointer-events:none;
    filter:drop-shadow(0 3px 3px rgba(0,0,0,.15));transform:rotate(12deg);}
  html[data-temporada="navidad"] #homeFeaturedSection .pc-add,html[data-temporada="navidad"] #regalosSection .pc-add,
  html.v3[data-temporada="navidad"] #homeFeaturedSection .product-card .pc-add,html.v3[data-temporada="navidad"] #regalosSection .product-card .pc-add{background:linear-gradient(180deg,#ef3a4e,#c81d31);}
  html[data-temporada="navidad"] .v3-pestanas button.camp[aria-selected="true"]{background:linear-gradient(90deg,#e0263b,#b5172a);color:#fff;border-color:transparent;}
  html[data-temporada="navidad"] #homeFeaturedTitle::before{content:"";display:inline-block;width:.9em;height:.9em;margin-right:.35em;vertical-align:-.08em;
    background:url("data:image/svg+xml,${encodeURIComponent(REGALO('#e0263b', '#ffd166', 40, 34, 9).replace(' aria-hidden="true"', ' xmlns="http://www.w3.org/2000/svg"'))}") center/contain no-repeat;}

  @media (prefers-reduced-motion: reduce){
    .nv-nieve,.nv-sombra,.nv-vuelo,.nv-estrella,.nv-luces i,.nv-pino-luces circle,.nv-regalos .nv-regalo{animation:none !important;}
    .nv-sombra,.nv-vuelo{display:none;}
  }
  html:not([data-temporada="navidad"]) .nv-luces,html:not([data-temporada="navidad"]) .nv-gorro,html:not([data-temporada="navidad"]) .nv-vuelo,
  html:not([data-temporada="navidad"]) .nv-escena,html:not([data-temporada="navidad"]) .nv-cielo,html:not([data-temporada="navidad"]) .nv-extra{display:none !important;}
  @media print{.nv-luces,.nv-vuelo,.nv-escena,.nv-cielo{display:none !important;}}`;

  /* ---------- Piezas ---------- */
  const COLORES = ['#ff3b4f', '#ffd166', '#36d07a', '#4fa8ff', '#ff7ad9'];
  function luces(){
    const header = document.querySelector('header.nav');
    if(!header) return;
    let el = header.querySelector('.nv-luces');
    if(!el){ el = document.createElement('div'); el.className = 'nv-luces'; el.setAttribute('aria-hidden', 'true'); header.appendChild(el); }
    const n = Math.max(8, Math.round(innerWidth / (innerWidth < 700 ? 34 : 48)));
    let wire = '';
    for(let i = 0; i < n; i++) wire += `${i ? '' : 'M0 2 '}Q${i * 100 + 50} 18 ${(i + 1) * 100} 2 `;
    let html = `<svg viewBox="0 0 ${n * 100} 16" preserveAspectRatio="none"><path d="${wire}" fill="none" stroke="#2f3b33" stroke-width="1.6" vector-effect="non-scaling-stroke"/></svg>`;
    for(let i = 0; i < n; i++) html += `<i style="left:${((i + .5) / n * 100).toFixed(2)}%;--c:${COLORES[i % COLORES.length]};--d:${(-(i % 4) * .4).toFixed(1)}s"></i>`;
    el.innerHTML = html;
  }
  function gorro(){
    const brand = document.querySelector('header .brand');
    if(!brand || brand.querySelector('.nv-gorro')) return;
    const g = document.createElement('span');
    g.className = 'nv-gorro'; g.setAttribute('aria-hidden', 'true'); g.innerHTML = SVG_GORRO;
    brand.appendChild(g);
  }

  function diasParaNavidad(){
    const hoy = new Date(), y = hoy.getFullYear();
    const nav = new Date(y, 11, 25);
    return { hoy, nav, faltan: nav - hoy };
  }
  let cuentaTimer = null;
  function pintarCuenta(el){
    const { hoy, faltan } = diasParaNavidad();
    if(hoy.getMonth() === 11 && hoy.getDate() >= 24){
      el.className = 'nv-cuenta nv-hoy';
      el.innerHTML = `<span class="nv-cuenta-lbl">${hoy.getDate() === 24 ? '¡Esta noche es Nochebuena!' : '¡Feliz Navidad! 🎄'}</span>`;
      return;
    }
    if(faltan <= 0){ el.innerHTML = ''; return; }
    const d = Math.floor(faltan / 864e5), h = Math.floor(faltan / 36e5) % 24, m = Math.floor(faltan / 6e4) % 60, s = Math.floor(faltan / 1e3) % 60;
    const p = n => String(n).padStart(2, '0');
    el.className = 'nv-cuenta';
    el.innerHTML = `<span class="nv-cuenta-lbl">Faltan para Navidad</span><div><b>${d}</b><small>días</small></div><div><b>${p(h)}</b><small>horas</small></div><div><b>${p(m)}</b><small>min</small></div><div><b>${p(s)}</b><small>seg</small></div>`;
  }

  function escena(){
    const hero = document.querySelector('#view-home .hero');
    if(!hero) return;
    if(!hero.querySelector('.nv-escena')){
      const movil = innerWidth < 700;
      let estrellas = '';
      for(let i = 0; i < (movil ? 22 : 46); i++){
        estrellas += `<span class="nv-estrella${Math.random() < .2 ? ' g' : ''}" style="left:${rnd(1, 99).toFixed(1)}%;top:${rnd(2, 96).toFixed(1)}%;animation-delay:${rnd(-3, 0).toFixed(2)}s;animation-duration:${rnd(1.6, 3.6).toFixed(2)}s"></span>`;
      }
      const pinos = movil
        ? [[3, 46, 1], [14, 34, 0], [80, 38, 0], [88, 52, 1]]
        : [[2, 70, 1], [8, 50, 0], [14, 84, 1], [21, 44, 0], [74, 48, 0], [80, 88, 1], [87, 56, 0], [93, 72, 1]];
      const pinosHtml = pinos.map(([x, w, l]) => `<span class="nv-pino" style="left:${x}%;width:${w}px;bottom:${movil ? 22 : 30}px">${PINO(l)}</span>`).join('');
      const g = movil ? .8 : 1.35;
      const regalosL = `<button type="button" class="nv-regalos l" onclick="window.tmVerRegalos && tmVerRegalos()" aria-label="Ver regalos de Navidad"><span class="nv-tip">Ver regalos 🎁</span>
          <span class="nv-regalo" style="width:${46 * g}px">${REGALO('#e0263b', '#ffd166', 46, 40, 10)}</span>
          <span class="nv-regalo" style="width:${34 * g}px">${REGALO('#2f9e5b', '#fff', 34, 30, 8)}</span>
          <span class="nv-regalo" style="width:${28 * g}px">${REGALO('#4fa8ff', '#ff4f6b', 28, 22, 6)}</span></button>`;
      const regalosR = `<button type="button" class="nv-regalos r" onclick="window.pzOpenStudio && pzOpenStudio('clasica')" aria-label="Diseñar un estuche de regalo"><span class="nv-tip">Crea un regalo con su foto ✨</span>
          <span class="nv-regalo" style="width:${30 * g}px">${REGALO('#ffd166', '#e0263b', 30, 26, 7)}</span>
          <span class="nv-regalo" style="width:${50 * g}px">${REGALO('#b5172a', '#fff', 50, 44, 11)}</span>
          <span class="nv-regalo" style="width:${36 * g}px">${REGALO('#14532d', '#ffd166', 36, 30, 8)}</span></button>`;
      const div = document.createElement('div');
      div.className = 'nv-escena'; div.setAttribute('aria-hidden', 'false');
      const cielo = document.createElement('div');
      cielo.className = 'nv-cielo'; cielo.setAttribute('aria-hidden', 'true'); cielo.innerHTML = estrellas;
      div.innerHTML = `<span class="nv-luna"></span>
        ${reducir ? '' : `<span class="nv-sombra">${SVG_TRINEO}</span><span class="nv-nieve b"></span><span class="nv-nieve"></span>`}
        <div class="nv-colinas">
          <svg class="nv-suelo" viewBox="0 0 1200 150" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 70 Q160 30 330 64 T700 58 T1020 50 T1200 66 V150 H0Z" fill="#c9daf0"/>
            <path d="M0 106 Q220 66 470 98 T900 92 T1200 100 V150 H0Z" fill="#eef5fd"/>
            <path d="M0 130 Q300 108 640 126 T1200 122 V150 H0Z" fill="#fff"/>
          </svg>
          ${pinosHtml}${regalosL}${regalosR}
        </div>`;
      hero.insertBefore(div, hero.firstChild);
      hero.insertBefore(cielo, hero.firstChild);
      // Los regalos sí se pueden tocar (el resto de la escena no bloquea clics).
      div.querySelectorAll('.nv-regalos').forEach(b => b.setAttribute('tabindex', '0'));
      hero.style.setProperty('--w', hero.clientWidth + 'px');
    }
    if(!hero.querySelector('.nv-extra')){
      const cta = document.getElementById('tmHeroCta');
      const extra = document.createElement('div');
      extra.className = 'nv-extra';
      extra.innerHTML = `<button type="button" class="nv-btn2" onclick="pzOpenStudio('clasica')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19.5 9l-5.7 1.4L12 16l-1.8-5.6L4.5 9l5.7-1.4Z"/></svg>Estuche con su foto</button>`;
      const cuenta = document.createElement('div');
      cuenta.className = 'nv-cuenta'; cuenta.setAttribute('aria-live', 'off');
      if(cta && cta.parentNode === hero){
        cta.insertAdjacentElement('afterend', extra);
        extra.insertAdjacentElement('afterend', cuenta);
        // El botón principal y el segundo quedan en la misma fila.
        extra.insertBefore(cta, extra.firstChild);
      } else { hero.appendChild(extra); hero.appendChild(cuenta); }
      pintarCuenta(cuenta);
      if(!cuentaTimer) cuentaTimer = setInterval(() => { if(!document.hidden){ const c = document.querySelector('.nv-cuenta'); if(c) pintarCuenta(c); } }, 1000);
    }
  }
  function quitarEscena(){
    document.querySelectorAll('.nv-escena,.nv-cielo,.nv-luces,.nv-gorro,.nv-cuenta').forEach(e => e.remove());
    const extra = document.querySelector('.nv-extra'), cta = document.getElementById('tmHeroCta');
    if(extra){ if(cta && extra.contains(cta)) extra.parentNode.insertBefore(cta, extra); extra.remove(); }
    if(cuentaTimer){ clearInterval(cuentaTimer); cuentaTimer = null; }
  }

  /* ---------- Trineo volando por la pantalla ---------- */
  let vueloTimer = null, enVuelo = false;
  function volar(){
    if(enVuelo || !activa() || document.hidden || reducir) return;
    enVuelo = true;
    const el = document.createElement('div');
    el.className = 'nv-vuelo'; el.setAttribute('aria-hidden', 'true'); el.innerHTML = SVG_TRINEO;
    document.body.appendChild(el);
    const W = innerWidth, H = innerHeight, ancho = W < 700 ? 160 : 240;
    const izqDer = Math.random() < .7;
    const y0 = rnd(H * .18, H * .42), y1 = y0 + rnd(-H * .16, H * .06);
    const dur = Math.max(6500, Math.min(11000, W * 6.5));
    const ini = performance.now();
    let ultimaChispa = 0;
    if(!izqDer) el.querySelector('svg').style.transform = 'scaleX(-1)';
    function paso(now){
      const t = Math.min(1, (now - ini) / dur);
      const x = izqDer ? -ancho + (W + ancho * 2) * t : W + ancho - (W + ancho * 2) * t;
      const y = y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * 50 + Math.sin(t * Math.PI * 6) * 8;
      const ang = Math.cos(t * Math.PI * 6) * 3 + (izqDer ? -4 : 4);
      el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${ang.toFixed(2)}deg)`;
      if(now - ultimaChispa > 70){
        ultimaChispa = now;
        const c = document.createElement('span');
        c.className = 'nv-chispa';
        c.style.left = (izqDer ? 10 : ancho - 16) + 'px';
        c.style.setProperty('--cx', (izqDer ? -1 : 1) * rnd(20, 60) + 'px');
        c.style.setProperty('--cy', rnd(-10, 40) + 'px');
        c.style.background = Math.random() < .3 ? '#fff' : '#ffd166';
        el.appendChild(c);
        c.addEventListener('animationend', () => c.remove());
      }
      if(t < 1 && activa()) requestAnimationFrame(paso);
      else { el.remove(); enVuelo = false; }
    }
    requestAnimationFrame(paso);
  }

  /* ---------- Encender / apagar ---------- */
  let encendida = false, resizeT = null;
  function encender(){
    if(!css.isConnected) document.head.appendChild(css);
    luces(); gorro(); escena();
    if(!encendida){
      encendida = true;
      if(!reducir){
        setTimeout(volar, 4500);
        vueloTimer = setInterval(() => { if(Math.random() < .75) volar(); }, 26000);
      }
    }
  }
  function apagar(){
    if(!encendida && !document.querySelector('.nv-escena')) return;
    encendida = false;
    if(vueloTimer){ clearInterval(vueloTimer); vueloTimer = null; }
    document.querySelectorAll('.nv-vuelo').forEach(e => e.remove());
    quitarEscena();
  }
  function revisar(){ activa() ? encender() : apagar(); }

  addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      if(!activa()) return;
      luces();
      const hero = document.querySelector('#view-home .hero');
      if(hero) hero.style.setProperty('--w', hero.clientWidth + 'px');
    }, 200);
  }, { passive: true });
  addEventListener('camand:temporada', () => setTimeout(revisar, 0));
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', revisar); else revisar();
})();
