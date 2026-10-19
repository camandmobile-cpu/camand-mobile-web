/* =====================================================================
   CAMPAÑAS, ASESOR DE COMPRA Y MEDICIÓN (auditoría oct 2026)
   ANDRÉS — lo que puedes cambiar aquí:
   - googleResenasUrl: link a tus reseñas de Google (botón bajo los testimonios).
   - metaPixelId: el número de tu Pixel de Meta (Administrador de eventos).
     Solo se activa si el visitante acepta las cookies analíticas.
   - kitsCsvUrl: link CSV publicado de la pestaña "KITS PAGINA" (columnas
     KIT | PRODUCTOS | PRECIO KIT | IMAGEN | DESCRIPCION; en PRODUCTOS los
     nombres separados por | ). Vacío = la sección "Arma tu setup" no aparece.
   Lo demás se maneja desde la Hoja: CAMPAÑA y USO en CATALOGO PAGINA, y la
   pestaña TEMPORADA PAGINA para la campaña del mes.
   ===================================================================== */
const CAMPANAS_CONFIG = {
  googleResenasUrl: 'https://share.google/naZINh4sRmNxgIL0U',
  metaPixelId: '',
  kitsCsvUrl: ''
};

const tmNorm = s => String(s == null ? '' : s).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
const tmEsc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function tmTodos(){
  if(typeof CATALOG === 'undefined') return [];
  return Object.keys(CATALOG).flatMap(k => flattenItems(CATALOG[k]).map(it => ({ ...it, catKey: k, catLabel: CATALOG[k].label })))
    .filter(x => x.m && x.m.n && x.m.p > 0);
}
const tmNum = s => { const m = String(s || '').replace(',', '.').match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : 0; };
const tmGB = s => { const v = tmNum(s); return /tb/i.test(String(s || '')) ? v * 1024 : v; };
const tmUso = (x, palabra) => tmNorm(x.m.uso).includes(palabra);
const tmEsCel = x => x.catKey === 'apple' || x.catKey === 'android';

/* --- Productos de la campaña activa (columna CAMPAÑA) --- */
function tmProductosCampana(todos){
  const tm = window.TEMPORADA;
  if(!tm) return [];
  const claves = [tm.id, tmNorm(tm.nombre), ...(tm.alias || [])].map(tmNorm).filter(Boolean);
  return (todos || tmTodos()).filter(({ m }) => {
    if(!m.campana) return false;
    return String(m.campana).split(/[,|\/]/).map(tmNorm).some(c => c && claves.includes(c));
  }).sort((a, b) => {
    const oa = a.m.ordenDest, ob = b.m.ordenDest;
    if(oa != null && ob != null) return oa - ob;
    if(oa != null) return -1;
    if(ob != null) return 1;
    return (a.m.idxOriginal || 0) - (b.m.idxOriginal || 0);
  });
}

/* --- Hero de campaña + mover la sección de destacados bajo el hero --- */
let _tmHeroOriginal = null, _tmFeaturedHome = null;
function tmAplicarInicio(){
  const tm = window.TEMPORADA;
  const eb = document.getElementById('heroEyebrow'), t = document.getElementById('heroTitle'), sub = document.getElementById('heroSub');
  const cta = document.getElementById('tmHeroCta'), img = document.getElementById('tmHeroImg');
  if(!eb || !t || !sub) return;
  if(!_tmHeroOriginal) _tmHeroOriginal = { eb: eb.innerHTML, t: t.innerHTML, sub: sub.innerHTML };
  const sec = document.getElementById('homeFeaturedSection'), slot = document.getElementById('tmOfertasSlot');
  if(sec && !_tmFeaturedHome) _tmFeaturedHome = { parent: sec.parentNode, next: sec.nextSibling };
  const titulo = document.getElementById('homeFeaturedTitle');
  if(tm && tm.hero){
    eb.textContent = `Campaña del mes · ${tm.nombre || ''}`;
    t.textContent = tm.hero.titulo || '';
    sub.textContent = tm.hero.sub || '';
    cta.innerHTML = tm.hero.cta ? `<button type="button" class="tm-hero-btn" onclick="${tmEsc(tm.hero.accion || 'tmVerOfertas()')}">${tmEsc(tm.hero.cta)}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>` : '';
    img.innerHTML = tm.hero.imagen ? `<img src="${tmEsc(optimizeImageUrl(tm.hero.imagen, 1400))}" alt="${tmEsc(tm.nombre)}" loading="lazy" onerror="this.remove()">` : '';
    if(sec && slot && sec.parentNode !== slot) slot.appendChild(sec);
    if(titulo) titulo.textContent = tm.regalos ? `Selección ${tm.nombre}` : (tm.seccion || `Selección ${tm.nombre}`);
  } else {
    eb.innerHTML = _tmHeroOriginal.eb; t.innerHTML = _tmHeroOriginal.t; sub.innerHTML = _tmHeroOriginal.sub;
    cta.innerHTML = ''; img.innerHTML = '';
    if(sec && _tmFeaturedHome && sec.parentNode !== _tmFeaturedHome.parent) _tmFeaturedHome.parent.insertBefore(sec, _tmFeaturedHome.next);
    if(titulo) titulo.textContent = 'Productos más vendidos';
  }
  // La franja promocional se oculta cuando repite lo mismo que el hero.
  const promo = document.getElementById('tmPromo');
  if(promo) promo.style.display = (tm && tm.hero && tm.promo && tm.promo.accion === tm.hero.accion) ? 'none' : '';
  const reg = document.getElementById('regalosSection');
  if(reg) reg.hidden = !(tm && tm.regalos);
  const rt = document.getElementById('regalosTitle');
  if(rt) rt.textContent = (tm && tm.regalos && tm.seccion) ? tm.seccion : 'Regalos por presupuesto';
}
function tmIrA(id){
  const ir = () => { const el = document.getElementById(id); if(el){ const y = el.getBoundingClientRect().top + scrollY - 96; scrollTo({ top: y, behavior: 'smooth' }); } };
  if(!document.getElementById('view-home').classList.contains('active')){ go('home'); setTimeout(ir, 650); } else ir();
}
function tmVerOfertas(){ camandTrack('ver_campana', { seccion: 'ofertas' }); tmIrA('homeFeaturedSection'); }
function tmVerRegalos(){ const r = document.getElementById('regalosSection'); if(r) r.hidden = false; camandTrack('ver_campana', { seccion: 'regalos' }); tmIrA('regalosSection'); }

/* --- ¿Qué estás buscando? --- */
const QEB_DEFS = [
  { id:'iphone', label:'Quiero iPhone', test: x => x.catKey === 'apple', orden: (a, b) => b.m.p - a.m.p },
  { id:'fotos', label:'El mejor para fotos', test: x => tmEsCel(x) && (tmUso(x, 'foto') || tmNum(x.m.cam) >= 50),
    orden: (a, b) => (tmUso(b, 'foto') - tmUso(a, 'foto')) || (tmNum(b.m.cam) - tmNum(a.m.cam)) || (b.m.p - a.m.p) },
  { id:'jugar', label:'Para jugar', test: x => tmEsCel(x) && (tmUso(x, 'jueg') || tmUso(x, 'gam') || tmGB(x.m.ram) >= 8),
    orden: (a, b) => ((tmUso(b, 'jueg') || tmUso(b, 'gam')) - (tmUso(a, 'jueg') || tmUso(a, 'gam'))) || (tmGB(b.m.ram) - tmGB(a.m.ram)) || (b.m.p - a.m.p) },
  { id:'trabajar', label:'Para trabajar', test: x => tmUso(x, 'trabaj') || x.catKey === 'computadores' || (tmEsCel(x) && tmGB(x.m.ram) >= 6 && tmGB(x.m.alm) >= 128),
    orden: (a, b) => (tmUso(b, 'trabaj') - tmUso(a, 'trabaj')) || (b.m.p - a.m.p) },
  { id:'estudiar', label:'Para estudiar', test: x => tmUso(x, 'estud') || x.catKey === 'computadores' || x.catKey === 'tablets',
    orden: (a, b) => (tmUso(b, 'estud') - tmUso(a, 'estud')) || (a.m.p - b.m.p) },
  { id:'primer', label:'Mi primer celular', test: x => tmEsCel(x) && (tmUso(x, 'primer') || x.m.p <= 800000),
    orden: (a, b) => (tmUso(b, 'primer') - tmUso(a, 'primer')) || (a.m.p - b.m.p) },
  { id:'hasta1m', label:'Hasta $1.000.000', test: x => tmEsCel(x) && x.m.p <= 1000000, orden: (a, b) => b.m.p - a.m.p }
];
const QEB = { sel: null, todos: false };
function renderQeb(){
  const chips = document.getElementById('qebChips'), grid = document.getElementById('qebGrid');
  if(!chips || !grid) return;
  const todos = tmTodos();
  const grupos = QEB_DEFS.map(d => ({ d, items: todos.filter(d.test).sort(d.orden) })).filter(g => g.items.length);
  const sec = document.getElementById('qebSection');
  if(!grupos.length){ sec.hidden = true; return; }
  sec.hidden = false;
  if(!grupos.some(g => g.d.id === QEB.sel)) QEB.sel = grupos[0].d.id;
  chips.innerHTML = grupos.map(g => `<button type="button" role="tab" aria-selected="${g.d.id === QEB.sel}" class="qeb-chip${g.d.id === QEB.sel ? ' is-active' : ''}" onclick="qebElegir('${g.d.id}')">${tmEsc(g.d.label)}<span>${g.items.length}</span></button>`).join('');
  const g = grupos.find(x => x.d.id === QEB.sel);
  const lim = QEB.todos ? 24 : 8;
  grid.innerHTML = g.items.slice(0, lim).map(({ catLabel, marca, m }) => productCardHTML(catLabel, marca, m)).join('')
    + (g.items.length > lim ? `<button type="button" class="qeb-more" onclick="QEB.todos=true;renderQeb()">Ver ${Math.min(g.items.length, 24) - lim} más</button>` : '');
  const auto = ['fotos', 'jugar', 'trabajar', 'primer'].includes(g.d.id) && !g.items.some(x => x.m.uso);
  document.getElementById('qebNote').textContent = auto ? 'Selección automática según cámara, memoria y precio. ¿Dudas? Escríbenos y te asesoramos.' : '';
  initScrollReveal();
}
function qebElegir(id){ QEB.sel = id; QEB.todos = false; camandTrack('buscar_necesidad', { necesidad: id }); renderQeb(); }

/* --- Regalos por presupuesto --- */
const REGALO_RANGOS = [
  { id:'50', label:'Hasta $50.000', min:0, max:50000 },
  { id:'100', label:'Hasta $100.000', min:50001, max:100000 },
  { id:'300', label:'Hasta $300.000', min:100001, max:300000 },
  { id:'500', label:'Hasta $500.000', min:300001, max:500000 },
  { id:'mas', label:'Más de $500.000', min:500001, max:Infinity }
];
const REGALOS = { sel: '50' };
function tmRegaloPersonalizados(rango){
  const prods = (typeof PERSONALIZA_CONFIG !== 'undefined' ? PERSONALIZA_CONFIG.productos : []) || [];
  return prods.filter(p => p.precio >= rango.min && p.precio <= rango.max).map(p => `
    <div class="product-card regalo-pz">
      <div class="pc-media regalo-pz-media" onclick="pzOpenStudio('${p.id}')" role="button" tabindex="0"><span class="pc-tag">Con su foto</span><span class="regalo-pz-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="6" y="2" width="12" height="20" rx="3"/><rect x="8" y="4" width="4" height="4" rx="1.2"/><path d="M9 14c1.5-2 3 1 4.5-.5S15 15 16 14"/></svg></span></div>
      <div class="pc-body"><span class="pc-name">${tmEsc(p.nombre)}${/personaliz/i.test(p.nombre) ? '' : ' con su foto'}</span>
        <div class="pc-price-row">${p.antes ? `<span class="pc-price-old">${formatCOP(p.antes)}</span>` : ''}<span class="pc-price">${formatCOP(p.precio)}</span></div>
        <div class="pc-actions"><button type="button" class="pc-add" onclick="pzOpenStudio('${p.id}')">Diseñar</button></div></div>
    </div>`).join('');
}
function renderRegalos(){
  const chips = document.getElementById('regalosChips'), grid = document.getElementById('regalosGrid');
  if(!chips || !grid) return;
  const todos = tmTodos();
  const rango = REGALO_RANGOS.find(r => r.id === REGALOS.sel) || REGALO_RANGOS[0];
  chips.innerHTML = REGALO_RANGOS.map(r => `<button type="button" role="tab" aria-selected="${r.id === rango.id}" class="qeb-chip${r.id === rango.id ? ' is-active' : ''}" onclick="REGALOS.sel='${r.id}';camandTrack('ver_regalos',{rango:'${r.id}'});renderRegalos()">${r.label}</button>`).join('');
  const items = todos.filter(x => x.m.p >= rango.min && x.m.p <= rango.max)
    .sort((a, b) => (b.m.dest - a.m.dest) || (b.m.p - a.m.p)).slice(0, 8);
  grid.innerHTML = tmRegaloPersonalizados(rango) + items.map(({ catLabel, marca, m }) => productCardHTML(catLabel, marca, m)).join('');
  initScrollReveal();
}

/* --- Producto estrella --- */
function renderEstrella(){
  const sec = document.getElementById('estrellaSection'), card = document.getElementById('estrellaCard');
  if(!sec || !card) return;
  const tm = window.TEMPORADA;
  const buscado = tmNorm((tm && tm.estrella) || (typeof PERSONALIZA_CONFIG !== 'undefined' ? PERSONALIZA_CONFIG.celularDestacado : ''));
  const todos = tmTodos();
  const cand = todos.filter(x => buscado && tmNorm(x.m.n).includes(buscado))
    .sort((a, b) => (productImageList(b.m).length > 0) - (productImageList(a.m).length > 0) || (b.m.p - a.m.p));
  const x = cand[0];
  if(!x){ sec.hidden = true; return; }
  sec.hidden = false;
  const { m, marca, catLabel } = x;
  const id = productId(marca, m), idJs = id.replace(/'/g, "\\'");
  const foto = productImageList(m)[0] || '';
  const nJs = m.n.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const imgJs = foto.replace(/'/g, "\\'"), catJs = catLabel.replace(/'/g, "\\'");
  const specs = [m.cond, m.alm, m.ram ? m.ram + ' RAM' : '', m.cam].filter(Boolean);
  const desc = m.pAntes && m.pAntes > m.p;
  card.innerHTML = `
    <div class="estrella-media" onclick="openProduct('${idJs}')" role="button" tabindex="0">${foto ? `<img src="${tmEsc(optimizeImageUrl(foto, 900))}" alt="${tmEsc(m.n)}" loading="lazy">` : ICON_PHOTO}</div>
    <div class="estrella-body">
      <p class="estrella-kicker">Producto estrella${tm ? ' · ' + tmEsc(tm.nombre) : ''}</p>
      <h2>${tmEsc(m.n)}</h2>
      ${specs.length ? `<div class="pc-specs">${specs.map(s => `<span>${tmEsc(s)}</span>`).join('')}</div>` : ''}
      <div class="estrella-precio">${desc ? `<span class="pc-price-old">${formatCOP(m.pAntes)}</span>` : ''}<b>${formatCOP(m.p)}</b></div>
      <p class="estrella-pago">Paga contraentrega, con tarjeta de crédito a cuotas o con Sistecrédito. Entrega en 1 a 2 días hábiles.</p>
      <div class="estrella-ctas">
        <button type="button" class="tm-hero-btn" onclick="addToCart('${idJs}','${nJs}',${m.p},'${imgJs}','${catJs}',this)">Agregar al carrito</button>
        <button type="button" class="pz-btn outline-dark" onclick="openProduct('${idJs}')">Ver detalles</button>
      </div>
    </div>`;
}

/* --- Kits (pestaña KITS PAGINA) --- */
let _kitsFilas = null;
async function cargarKits(){
  if(!/^https?:\/\//i.test(CAMPANAS_CONFIG.kitsCsvUrl) || !window.Papa) return;
  try{
    const res = await fetch(CAMPANAS_CONFIG.kitsCsvUrl, { cache: 'no-store' });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    _kitsFilas = window.Papa.parse(await res.text(), { header: true, skipEmptyLines: true }).data.map(f => {
      const o = {}; Object.keys(f).forEach(k => { o[tmNorm(k).replace(/[\s_]+/g, '')] = f[k]; }); return o;
    });
    renderKits();
  }catch(e){ console.warn('[Camand] No se pudo leer KITS PAGINA', e); }
}
function renderKits(){
  const sec = document.getElementById('kitsSection'), grid = document.getElementById('kitsGrid');
  if(!sec || !grid) return;
  if(!_kitsFilas || !_kitsFilas.length){ sec.hidden = true; return; }
  const todos = tmTodos();
  const kits = _kitsFilas.map(f => {
    const nombres = String(f.productos || '').split('|').map(s => s.trim()).filter(Boolean);
    const items = nombres.map(n => todos.find(x => tmNorm(x.m.n).includes(tmNorm(n))));
    if(!f.kit || !nombres.length || items.some(i => !i)) return null;
    const suma = items.reduce((s, x) => s + x.m.p, 0);
    const precio = tmNum(String(f.preciokit || '').replace(/[.\s$]/g, '')) || suma;
    return { nombre: String(f.kit).trim(), items, suma, precio, img: String(f.imagen || '').trim(), desc: String(f.descripcion || '').trim() };
  }).filter(Boolean);
  if(!kits.length){ sec.hidden = true; return; }
  sec.hidden = false;
  grid.innerHTML = kits.map((k, i) => `
    <div class="kit-card">
      ${k.img ? `<img src="${tmEsc(optimizeImageUrl(k.img, 700))}" alt="${tmEsc(k.nombre)}" loading="lazy">` : ''}
      <h3>${tmEsc(k.nombre)}</h3>
      ${k.desc ? `<p>${tmEsc(k.desc)}</p>` : ''}
      <ul>${k.items.map(x => `<li>${tmEsc(x.m.n)}</li>`).join('')}</ul>
      <div class="kit-precio">${k.precio < k.suma ? `<span class="pc-price-old">${formatCOP(k.suma)}</span>` : ''}<b>${formatCOP(k.precio)}</b>${k.precio < k.suma ? `<span class="kit-ahorro">Ahorras ${formatCOP(k.suma - k.precio)}</span>` : ''}</div>
      <button type="button" class="tm-hero-btn" onclick="kitAgregar(${i}, this)">Agregar kit</button>
    </div>`).join('');
  window._kitsVista = kits;
}
function kitAgregar(i, btn){
  const k = (window._kitsVista || [])[i];
  if(!k) return;
  const id = 'kit_' + k.nombre.replace(/[^a-zA-Z0-9]+/g, '_');
  addToCart(id, `Kit ${k.nombre} (${k.items.map(x => x.m.n).join(' + ')})`, k.precio, k.img || (productImageList(k.items[0].m)[0] || ''), 'Kits', btn);
}

/* --- Reseñas de Google --- */
function renderResenas(){
  const el = document.getElementById('resenasGoogle');
  if(!el) return;
  if(!/^https?:\/\//i.test(CAMPANAS_CONFIG.googleResenasUrl)){ el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = `<a class="pz-btn outline-dark" href="${tmEsc(CAMPANAS_CONFIG.googleResenasUrl)}" target="_blank" rel="noopener" onclick="camandTrack('ver_resenas')">Ver nuestras reseñas en Google →</a>`;
}

/* --- Generador de Historias: fondo de la campaña --- */
function tmStoryTheme(){
  if(typeof STORY_THEMES === 'undefined') return;
  const seg = document.getElementById('storyThemeSeg');
  const tm = window.TEMPORADA;
  let btn = seg && seg.querySelector('[data-v="temporada"]');
  if(!tm){ if(btn) btn.remove(); if(typeof STORY !== 'undefined' && STORY.theme === 'temporada') STORY.theme = 'claro'; return; }
  const cs = getComputedStyle(document.documentElement);
  const v = n => (cs.getPropertyValue(n) || '').trim();
  const a = v('--tm-a') || '#0071e3', b = v('--tm-b') || '#000', dk = v('--tm-dark') || '#000', on = v('--tm-on-a') || '#fff';
  STORY_THEMES.temporada = { bg: [dk, b], ink: '#ffffff', soft: 'rgba(255,255,255,0.78)', price: '#ffffff', pillBg: a, pillInk: on,
    ctaBg: a, ctaInk: on, card: '#ffffff', cardShadow: 'rgba(0,0,0,0.45)', logoWhite: true, hot: a };
  if(seg && !btn){
    btn = document.createElement('button');
    btn.type = 'button'; btn.dataset.v = 'temporada'; btn.textContent = tm.nombre || 'Temporada';
    btn.onclick = () => {
      const k = document.getElementById('storyKicker');
      if(k && !k.value.trim()) k.value = tm.nombre || '';
      storySet('theme', 'temporada');
    };
    seg.appendChild(btn);
  } else if(btn) btn.textContent = tm.nombre || 'Temporada';
  if(typeof STORY !== 'undefined' && !STORY.opened && STORY.theme === 'claro'){
    STORY.theme = 'temporada';
    const k = document.getElementById('storyKicker');
    if(k && !k.value.trim()) k.value = tm.nombre || '';
  }
}

/* --- Medición: Google Analytics (eventos) + Pixel de Meta --- */
function camandTrack(evento, params){
  const tm = window.TEMPORADA;
  const datos = Object.assign({ campana: tm ? tm.id : 'ninguna' }, params || {});
  try { if(typeof gtag === 'function') gtag('event', evento, datos); } catch(e){}
  try {
    if(typeof fbq === 'function'){
      const mapa = { agregar_carrito: 'AddToCart', finalizar_pedido: 'InitiateCheckout', clic_whatsapp: 'Contact', ver_producto: 'ViewContent' };
      if(mapa[evento]) fbq('track', mapa[evento], datos); else fbq('trackCustom', evento, datos);
    }
  } catch(e){}
}
function cargarMetaPixel(){
  const id = String(CAMPANAS_CONFIG.metaPixelId || '').trim();
  if(!/^\d{6,20}$/.test(id) || window.fbq) return;
  let ok = false;
  try { ok = !!(JSON.parse(localStorage.getItem('camand_cookie_consent_v1') || 'null') || {}).analytics; } catch(e){}
  if(!ok) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', id);
  fbq('track', 'PageView');
  const li = document.getElementById('privacidadMeta');
  if(li) li.hidden = false;
}
// Envuelve las acciones clave para registrar el evento sin cambiar lo que hacen.
(function camandEnvolver(){
  const envolver = (nombre, evento, datos) => {
    const orig = window[nombre];
    if(typeof orig !== 'function') return;
    window[nombre] = function(){ try { camandTrack(evento, datos ? datos.apply(null, arguments) : undefined); } catch(e){} return orig.apply(this, arguments); };
  };
  envolver('addToCart', 'agregar_carrito', (id, n, p) => ({ item: String(n || '').slice(0, 90), value: Number(p) || 0, currency: 'COP' }));
  envolver('checkoutWhatsApp', 'finalizar_pedido', () => ({ value: (typeof cartTotal === 'function' ? cartTotal() : 0), currency: 'COP', items: (typeof cartCount === 'function' ? cartCount() : 0) }));
  envolver('openProduct', 'ver_producto', id => ({ item: String(id || '').slice(0, 90) }));
  envolver('pzOpenStudio', 'abrir_estudio', prod => ({ producto: prod || 'skin' }));
  envolver('pzSkinWhatsApp', 'pedir_personalizado_whatsapp', () => ({ producto: (typeof PZ !== 'undefined' ? PZ.producto : '') }));
  envolver('applyCookieConsent', 'consentimiento_cookies', a => ({ analiticas: !!a }));
  const origConsent = window.applyCookieConsent;
  if(typeof origConsent === 'function'){
    window.applyCookieConsent = function(a){ const r = origConsent.apply(this, arguments); if(a) cargarMetaPixel(); return r; };
  }
  // Cualquier clic a WhatsApp (botón flotante, menú, fichas...)
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href*="wa.me/"]');
    if(a) camandTrack('clic_whatsapp', { origen: (a.className || a.id || 'enlace').toString().slice(0, 40) });
  }, true);
})();

/* --- Ruta #/p/<slug>: llega desde las páginas de producto que ve Google --- */
function camandSlug(s){
  return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90);
}
function camandAbrirSlug(slug){
  const x = tmTodos().find(it => camandSlug(it.m.n + ' ' + (it.m.cond || '')) === slug);
  if(x){ openProduct(productId(x.marca, x.m)); return true; }
  return false;
}
function camandRutaSlug(){
  const m = (location.hash || '').match(/^#\/p\/([a-z0-9-]+)$/);
  if(!m) return;
  if(!camandAbrirSlug(m[1])){
    // El catálogo aún no ha llegado de la Hoja: reintenta unos segundos.
    let n = 0; const t = setInterval(() => { if(camandAbrirSlug(m[1]) || ++n > 20) clearInterval(t); }, 500);
  }
}
window.addEventListener('hashchange', camandRutaSlug);

/* --- Todo junto --- */
function renderCampanas(){
  tmAplicarInicio();
  renderQeb();
  renderRegalos();
  renderEstrella();
  renderKits();
  renderResenas();
  tmStoryTheme();
}
window.addEventListener('camand:temporada', () => { renderCampanas(); if(typeof renderHomeFeatured === 'function') renderHomeFeatured(); });
renderCampanas();
if(typeof renderHomeFeatured === 'function') renderHomeFeatured();
cargarMetaPixel();
window.addEventListener('load', cargarKits);
camandRutaSlug();
