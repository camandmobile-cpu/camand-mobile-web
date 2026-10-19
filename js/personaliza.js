/* =====================================================================
   PERSONALIZA — página #/personaliza (skins, estuches, fundas, hidrogel,
   accesorios Apple) y bloque destacado del inicio.

   ANDRÉS: todo lo que cambia seguido está en PERSONALIZA_CONFIG:
   - Precio de la skin y costos de envío.
   - Precios del hidrogel: "extra" es lo que se SUMA al precio base según
     la calidad. Si lo dejas en null, el sitio muestra "Desde $X" y el
     cliente cotiza por WhatsApp (no se puede agregar al carrito).
   - Fotos de las 6 tarjetas: puedes ponerlas aquí (campo "foto") o desde
     la pestaña "CATEGORIAS PAGINA" de tu Hoja, con estas palabras en la
     columna CATEGORIA: skins, estuches, fundas, accesoriosapple,
     hidrogel, vidrios. La Hoja tiene prioridad.
   - Fundas, cubos 20W y estuches de AirPods con precio salen SOLOS de tu
     catálogo (pestaña CATALOGO PAGINA, categoría Accesorios): basta con
     que el nombre diga "funda", "forro", "case", "cubo apple 20w",
     "AirPods"... Si no hay ninguno, se muestran tarjetas para consultar
     por WhatsApp.
   ===================================================================== */
const PERSONALIZA_CONFIG = {
  // Fondo de la sección Personaliza (y del bloque del inicio). Vacío =
  // fondo animado de colores con collage de tus trabajos. Si pegas aquí
  // el link de una imagen (Cloudinary, horizontal, ~2000 px de ancho),
  // se usa esa imagen con un velo oscuro para que el texto se lea.
  fondoImagen: '',
  skinPrecio: 25000,
  // Celular que aparece en la tarjeta "Celulares" del inicio (se busca por
  // nombre en tu catálogo; debe tener foto en la columna IMAGEN).
  celularDestacado: 'iPhone 18 Pro Max',
  // Productos del estudio de diseño (el único personalizador de la tienda).
  // borde: '' (skin), 'claro' (Acrygel transparente) o 'negro' (reforzado).
  productos: [
    { id:'skin', nombre:'Skin personalizada', corto:'Se adhiere a la tapa, troquel exacto', precio:25000, antes:0,
      nota:'Skin personalizada · instalación fácil en casa', carrito:'Skin personalizada', whatsapp:'una skin personalizada', borde:'' },
    { id:'clasica', nombre:'Estuche Clásica', corto:'Acrygel transparente, anti-amarilleo', precio:34990, antes:41990, impresion:true,
      nota:'Acrygel resistente a caídas · garantía de 1 mes', carrito:'Estuche Clásica', whatsapp:'un estuche Línea Clásica', borde:'claro' },
    { id:'pro', nombre:'Estuche Pro', corto:'Borde negro reforzado, impresión UV', precio:44990, antes:53990,
      nota:'Máxima protección · garantía de 1 mes', carrito:'Estuche Pro', whatsapp:'un estuche Línea Pro', borde:'negro' },
    { id:'3d', nombre:'Estuche 3D', corto:'Cambia de imagen al girar (2 fotos)', precio:54990, antes:65990, dosImagenes:true,
      nota:'Lámina lenticular · garantía de 1 mes', carrito:'Estuche 3D', whatsapp:'un estuche Línea 3D', borde:'negro' }
  ],
  envioBogota: 10000,
  envioNacional: 18000,
  hidrogel: {
    zonas: [
      { id:'pantalla', nombre:'Pantalla', desc:'Frontal, borde a borde', base:25000, pantalla:true },
      { id:'trasera',  nombre:'Trasera completa', desc:'Tapa trasera y laterales', base:25000, pantalla:false },
      { id:'completa', nombre:'Pantalla + trasera', desc:'Protección total del equipo', base:50000, pantalla:true }
    ],
    calidades: [
      { id:'brillante', nombre:'Brillante HD', desc:'Transparencia total, mantiene el color original', extra:0 },
      { id:'mate', nombre:'Mate antihuellas', desc:'Tacto suave, reduce reflejos y huellas', extra:null },
      { id:'antiespia', nombre:'Anti-espía', desc:'Oculta la pantalla desde los lados', extra:null, soloPantalla:true }
    ]
  },
  cards: [
    { key:'skins', badge:'Crea tu skin', color:'#7b4ee6', chipBg:'#f1ebfd', chip:'$25.000', titulo:'Skins personalizadas',
      texto:'Tu foto o diseño impreso en una skin con troquel exacto para bordes, cámaras y logo.',
      puntos:['Se adhieren a la tapa de tu celular','Protegen contra rayones','Para casi cualquier modelo'],
      cta:'Diseñar mi skin', accion:"pzOpenStudio('skin')", foto:'' ,
      icono:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><rect x="8.6" y="3.6" width="3.6" height="3.6" rx="1"/><path d="M8 13c2-2 4 1 6-1s2 2 3 1"/>' },
    { key:'estuches', badge:'Acrygel', color:'#0071e3', chipBg:'#e6f1fd', chip:'Desde $34.990', titulo:'Estuches personalizados',
      texto:'Estuche transparente resistente a caídas, con tu foto. Líneas Clásica, Pro y 3D.',
      puntos:['Anti-amarilleo','Impresión UV de alta definición','Vista previa en el editor'],
      cta:'Diseñar mi estuche', accion:"pzOpenStudio('clasica')", foto:'img/galeria/estuche-02.jpg' },
    { key:'fundas', badge:'Fundas antigolpes', color:'#1d1d1f', chipBg:'#f0f0f2', chip:'Para tu modelo', titulo:'Cases & fundas',
      texto:'Fundas resistentes para el día a día: antigolpes, silicona y transparentes.',
      puntos:['Protección anticaídas','Borde elevado en cámara','Varios colores y estilos'],
      cta:'Ver fundas', accion:"pzScrollTo('pzFundas')", foto:'',
      icono:'<rect x="6" y="2" width="12" height="20" rx="3"/><rect x="8" y="4" width="4" height="4" rx="1.2"/><path d="M6 9h1M17 9h1"/>' },
    { key:'accesoriosapple', badge:'Apple', color:'#e8710a', chipBg:'#fdf0e3', chip:'Cubos 20W · AirPods', titulo:'Accesorios Apple',
      texto:'Cubos de carga rápida de 20W y estuches para AirPods Pro 2, Pro 3 y serie 4.',
      puntos:['Cubo de 20W para iPhone','Estuches para AirPods','Envío a toda Colombia'],
      cta:'Ver accesorios', accion:"pzScrollTo('pzApple')", foto:'',
      icono:'<rect x="5" y="7" width="14" height="13" rx="4"/><path d="M9 7V4M15 7V4"/><circle cx="12" cy="13.5" r="1.4"/>' },
    { key:'hidrogel', badge:'Instalación incluida', color:'#0f7a4d', chipBg:'#e7f6ee', chip:'Desde $25.000', titulo:'Hidrogel',
      texto:'Protección para pantalla y tapa trasera, en el acabado que prefieras, para cualquier dispositivo.',
      puntos:['Pantalla desde $25.000','Trasera completa desde $25.000','Brillante, mate o anti-espía'],
      cta:'Cotizar mi protección', accion:"pzScrollTo('pzHidrogel')", foto:'',
      icono:'<path d="M12 2.5l7.5 3v6c0 4.8-3.3 8.3-7.5 10-4.2-1.7-7.5-5.2-7.5-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>' },
    { key:'vidrios', badge:'Vidrio templado', color:'#0a7ea4', chipBg:'#e5f4f9', chip:'Desde $15.000', titulo:'Vidrios de pantalla',
      texto:'Vidrio blindado resistente a golpes o vidrio sin borde de pantalla a pantalla.',
      puntos:['Blindado $15.000','Sin borde $25.000','Gratis al llevar 2 estuches'],
      cta:'Pedir mi vidrio', accion:"pzVidrioWhatsApp()", foto:'',
      icono:'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M9 6l6 6M9 10l4 4"/>' }
  ],
  marcas: [
    { id:'apple', nombre:'Apple', modelos:['iPhone 11','iPhone 12','iPhone 12 Pro Max','iPhone 13','iPhone 13 Pro','iPhone 13 Pro Max','iPhone 14','iPhone 14 Pro','iPhone 14 Pro Max','iPhone 15','iPhone 15 Pro','iPhone 15 Pro Max','iPhone 16','iPhone 16 Pro','iPhone 16 Pro Max','iPhone 17','iPhone 17 Pro','iPhone 17 Pro Max'] },
    { id:'samsung', nombre:'Samsung', modelos:['Galaxy A06','Galaxy A16','Galaxy A26','Galaxy A36','Galaxy A56','Galaxy S24','Galaxy S24 FE','Galaxy S25','Galaxy S25 Ultra'] },
    { id:'xiaomi', nombre:'Xiaomi', modelos:['Redmi 14C','Redmi 15C','Redmi Note 14','Redmi Note 14 Pro','Redmi Note 15','Poco X7','Xiaomi 15'] },
    { id:'motorola', nombre:'Motorola', modelos:['Moto G05','Moto G15','Moto G35','Moto G75','Edge 50 Fusion','Edge 60'] },
    { id:'otra', nombre:'Otra marca', modelos:['Honor','Tecno','Oppo','Huawei','Realme','Infinix'] }
  ]
};

/* Disposición aproximada de cámaras por marca (fracciones del ancho del
   celular). Solo es una guía visual para la vista previa — el corte real
   se hace con el troquel exacto de cada modelo. */
const PZ_CAMARAS = {
  apple:    { mod:{x:.06,y:.05,w:.44,h:.44,r:.12}, lentes:[{x:.18,y:.17,d:.17},{x:.18,y:.38,d:.17},{x:.38,y:.275,d:.17}] },
  samsung:  { mod:null, lentes:[{x:.16,y:.13,d:.15},{x:.16,y:.32,d:.15},{x:.16,y:.51,d:.15}] },
  xiaomi:   { mod:{x:.06,y:.05,w:.48,h:.40,r:.10}, lentes:[{x:.19,y:.16,d:.16},{x:.41,y:.16,d:.16},{x:.19,y:.35,d:.13}] },
  motorola: { mod:{x:.06,y:.05,w:.42,h:.34,r:.15}, lentes:[{x:.18,y:.16,d:.15},{x:.18,y:.33,d:.12},{x:.37,y:.16,d:.12}] },
  otra:     { mod:{x:.28,y:.06,w:.44,h:.44,r:.22}, lentes:[{x:.41,y:.21,d:.14},{x:.59,y:.21,d:.14},{x:.50,y:.37,d:.12}] }
};

const PZ = { producto:'skin', impresion:'exterior', marca:'apple', capa:0, capas:[{ img:null, zoom:1, x:0, y:0 }, { img:null, zoom:1, x:0, y:0 }], hgZona:'pantalla', hgCalidad:'brillante' };

function pzEsc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* --- Navegación --- */
function pzScrollTo(id){
  const el = document.getElementById(id);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
// Abre la página Personaliza (desde el inicio, el menú o un link) y, si se
// indica, baja hasta una sección — espera a que termine la animación de
// cambio de vista de go() (~450 ms).
function pzOpen(anchor){
  const yaEsta = document.getElementById('view-personaliza').classList.contains('active');
  if(yaEsta){ if(anchor) pzScrollTo(anchor); return; }
  go('personaliza');
  if(anchor) setTimeout(() => pzScrollTo(anchor), 650);
}

/* --- Reels de Instagram con fachada (cargan solo al tocar) --- */
function pzInitReels(){
  // Los reels se muestran directo (sin portada ni botón de play). El
  // navegador los carga solo cuando están cerca de la pantalla (lazy).
  document.querySelectorAll('.pz-reel:not(.pz-ready)').forEach(el => {
    el.classList.add('pz-ready', 'is-direct', 'is-playing');
    const id = encodeURIComponent(el.dataset.reel), label = el.dataset.label || 'Video de Camand Mobile';
    el.innerHTML = `<iframe src="https://www.instagram.com/reel/${id}/embed/" title="${pzEsc(label)}" loading="lazy" scrolling="no" allow="autoplay; encrypted-media; picture-in-picture; clipboard-write" allowfullscreen></iframe>
      <a class="pz-reel-open" href="https://www.instagram.com/reel/${id}/" target="_blank" rel="noopener">Abrir en Instagram</a>`;
  });
}

/* --- 6 tarjetas --- */
function pzCardFoto(c){
  const hoja = (typeof CAT_HOME_PHOTOS !== 'undefined' && CAT_HOME_PHOTOS[c.key]) || '';
  return hoja || c.foto || '';
}
function pzRenderCards(){
  const cont = document.getElementById('pzCards');
  if(!cont) return;
  cont.innerHTML = PERSONALIZA_CONFIG.cards.map(c => {
    const foto = pzCardFoto(c);
    const media = foto
      ? `<img src="${pzEsc(typeof optimizeImageUrl === 'function' ? optimizeImageUrl(foto, 700) : foto)}" alt="${pzEsc(c.titulo)}" loading="lazy">`
      : `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${c.icono || ''}</svg>`;
    return `<article class="pz-card reveal" style="--pz-badge:${c.color};--pz-chip:${c.color};--pz-chip-bg:${c.chipBg};--pz-bg:${c.chipBg};--pz-ink:${c.color};">
      <div class="pz-card-media" onclick="${c.accion}"><span class="pz-card-badge">${pzEsc(c.badge)}</span>${media}</div>
      <div class="pz-card-body">
        <div class="pz-card-top"><h3>${pzEsc(c.titulo)}</h3><span class="pz-card-chip">${pzEsc(c.chip)}</span></div>
        <p>${pzEsc(c.texto)}</p>
        <ul class="pz-checks">${c.puntos.map(p => `<li>${pzEsc(p)}</li>`).join('')}</ul>
        <button type="button" class="pz-btn dark" onclick="${c.accion}">${pzEsc(c.cta)}</button>
      </div>
    </article>`;
  }).join('');
  // Las tarjetas se vuelven a dibujar cuando llegan las fotos de la Hoja:
  // sin esto quedaban invisibles (animación de aparición sin activar).
  if(typeof initScrollReveal === 'function') initScrollReveal();
}

/* --- Bloque doble del inicio: precio "desde" y foto del celular más top --- */
function pzRenderDual(){
  const priceEl = document.getElementById('pzDualPrice');
  if(!priceEl || typeof CATALOG === 'undefined') return;
  const cel = [CATALOG.apple, CATALOG.android].filter(Boolean).flatMap(c => flattenItems(c).map(x => x.m)).filter(m => m.p > 0);
  if(cel.length){
    priceEl.innerHTML = `${cel.length} modelos · desde <b>${formatCOP(Math.min(...cel.map(m => m.p)))}</b>`;
  }
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
  const buscado = norm(PERSONALIZA_CONFIG.celularDestacado);
  const conFotoApple = (CATALOG.apple ? flattenItems(CATALOG.apple).map(x => x.m) : [])
    .filter(m => typeof productImageList === 'function' && productImageList(m).length);
  const conFotoAndroid = (CATALOG.android ? flattenItems(CATALOG.android).map(x => x.m) : [])
    .filter(m => typeof productImageList === 'function' && productImageList(m).length);
  // 1) el celular destacado (ej. iPhone 18 Pro Max); 2) el iPhone más caro con foto; 3) cualquier celular con foto.
  const destacado = [...conFotoApple, ...conFotoAndroid].filter(m => buscado && norm(m.n).includes(buscado)).sort((a, b) => b.p - a.p);
  const conFoto = destacado.length ? destacado
    : (conFotoApple.length ? conFotoApple : conFotoAndroid).slice().sort((a, b) => b.p - a.p);
  if(conFoto.length){
    const url = optimizeImageUrl(productImageList(conFoto[0])[0], 600);
    document.getElementById('pzDualCelImg').innerHTML = `<img src="${pzEsc(url)}" alt="${pzEsc(conFoto[0].n)}" loading="lazy" onerror="this.remove()">`;
  }
}
function pzAplicarFondo(){
  const url = PERSONALIZA_CONFIG.fondoImagen;
  if(!url) return;
  document.querySelectorAll('.pz-fx').forEach(fx => {
    fx.classList.add('has-photo');
    fx.style.backgroundImage = `url('${String(url).replace(/'/g, '%27')}')`;
  });
}

/* --- Estudio de diseño: skins y estuches (Clásica, Pro y 3D) ---
   Es el único personalizador de la tienda: los botones "Diseñar mi
   estuche" de toda la página abren este mismo estudio con la línea
   elegida (pzOpenStudio). Productos y precios en PERSONALIZA_CONFIG.productos. */
function pzProd(){ return PERSONALIZA_CONFIG.productos.find(p => p.id === PZ.producto) || PERSONALIZA_CONFIG.productos[0]; }
function pzCapa(i){ return PZ.capas[i == null ? PZ.capa : i]; }
function pzRenderProductosStudio(){
  const cont = document.getElementById('pzProductos');
  if(!cont) return;
  cont.innerHTML = PERSONALIZA_CONFIG.productos.map(p => `<button type="button" class="pz-prod${p.id === PZ.producto ? ' is-active' : ''}" onclick="pzSetProducto('${p.id}')">
      <b>${pzEsc(p.nombre)}</b><small>${pzEsc(p.corto)}</small><em>${formatCOP(p.precio)}</em></button>`).join('');
}
function pzSetProducto(id){
  if(!PERSONALIZA_CONFIG.productos.some(p => p.id === id)) id = 'skin';
  PZ.producto = id;
  const p = pzProd();
  const phone = document.getElementById('pzPhone');
  phone.dataset.producto = id;
  pzRenderProductosStudio();
  document.getElementById('pzStudioTitle').textContent = p.id === 'skin' ? 'Diseña tu skin en 1 minuto' : 'Diseña tu estuche en 1 minuto';
  document.getElementById('pzStudioEyebrow').textContent = `${p.nombre} · ${formatCOP(p.precio)}`;
  document.querySelector('#pzSkinStudio .pz-price').textContent = formatCOP(p.precio);
  document.getElementById('pzPriceOld').textContent = p.antes ? formatCOP(p.antes) : '';
  document.getElementById('pzPriceNote').textContent = p.nota;
  document.getElementById('pzImpresion').style.display = p.impresion ? '' : 'none';
  document.getElementById('pzPromoNote').style.display = p.id === 'skin' ? 'none' : '';
  document.getElementById('pzShipList').style.display = p.id === 'skin' ? '' : 'none';
  const es3d = !!p.dosImagenes;
  document.getElementById('pz3dTabs').style.display = es3d ? '' : 'none';
  document.getElementById('pzUpload2').style.display = es3d ? '' : 'none';
  document.getElementById('pzUploadTitle').textContent = es3d ? 'Sube tus 2 imágenes' : 'Sube tu foto o diseño';
  if(!es3d){ pzStopFlip(); pzSetCapa(0); }
  if(PZ.capas[0].img) document.getElementById('pzUploadText').innerHTML = `<b>${es3d ? 'Imagen 1 cargada' : 'Foto cargada'}</b> · toca para cambiarla`;
  pzSetError('');
  pzRenderPhoto();
}
function pzSetImpresion(v){
  PZ.impresion = v;
  document.querySelectorAll('#pzImpresion [data-imp]').forEach(b => b.classList.toggle('is-active', b.dataset.imp === v));
}
function pzSetCapa(i){
  PZ.capa = i;
  document.querySelectorAll('#pz3dTabs [data-capa]').forEach(b => b.classList.toggle('is-active', Number(b.dataset.capa) === i));
  const c = pzCapa();
  document.getElementById('pzZoom').value = c.zoom;
  pzStopFlip();
  pzRenderPhoto();
}
let _pzFlipTimer = null;
function pzStopFlip(){
  if(_pzFlipTimer){ clearInterval(_pzFlipTimer); _pzFlipTimer = null; }
  const phone = document.getElementById('pzPhone');
  if(phone) phone.classList.remove('flipping', 'show2');
  const b = document.getElementById('pzFlipBtn');
  if(b) b.classList.remove('is-active');
}
function pzToggleFlip(){
  if(_pzFlipTimer){ pzStopFlip(); pzRenderPhoto(); return; }
  if(!PZ.capas[0].img || !PZ.capas[1].img){ pzSetError('Sube las 2 imágenes para ver el efecto 3D.'); return; }
  pzSetError('');
  const phone = document.getElementById('pzPhone');
  phone.classList.add('flipping');
  document.getElementById('pzFlipBtn').classList.add('is-active');
  pzRenderPhoto();
  _pzFlipTimer = setInterval(() => phone.classList.toggle('show2'), 1300);
}

function pzRenderBrands(){
  const chips = document.getElementById('pzBrandChips');
  if(!chips) return;
  chips.innerHTML = PERSONALIZA_CONFIG.marcas.map(m =>
    `<button type="button" class="pz-chip${m.id === PZ.marca ? ' is-active' : ''}" onclick="pzSetBrand('${m.id}')">${pzEsc(m.nombre)}</button>`).join('');
  const marca = PERSONALIZA_CONFIG.marcas.find(m => m.id === PZ.marca);
  // Menú desplegable de modelos (funciona igual en Android, iPhone y PC).
  // "Otro modelo" muestra el campo para escribirlo a mano.
  const sel = document.getElementById('pzModelSel');
  const input = document.getElementById('pzModel');
  const lista = (marca && marca.id !== 'otra') ? marca.modelos : [];
  sel.innerHTML = `<option value="">Elige tu modelo</option>` + lista.map(n => `<option value="${pzEsc(n)}">${pzEsc(n)}</option>`).join('') + `<option value="__otro">${lista.length ? 'Otro modelo (escribirlo)' : 'Escribir marca y modelo'}</option>`;
  sel.hidden = !lista.length;
  input.hidden = !!lista.length;
  if(!lista.length) sel.value = '__otro';
  if(!sel.dataset.ready){
    sel.dataset.ready = '1';
    sel.addEventListener('change', () => {
      const otro = sel.value === '__otro';
      input.hidden = !otro;
      if(otro){ input.value = ''; input.focus(); }
      pzSetError('');
    });
  }
  input.placeholder = PZ.marca === 'apple' ? 'Ej. iPhone 15 Pro Max' : PZ.marca === 'samsung' ? 'Ej. Galaxy A56' : PZ.marca === 'xiaomi' ? 'Ej. Redmi Note 14' : PZ.marca === 'motorola' ? 'Ej. Moto G75' : 'Escribe marca y modelo';
}
function pzSetBrand(id){
  PZ.marca = id;
  document.getElementById('pzPhone').dataset.brand = id;
  pzRenderBrands();
  pzDrawCamera();
  pzSetError('');
}
function pzDrawCamera(){
  const phone = document.getElementById('pzPhone');
  const cam = document.getElementById('pzCam');
  if(!phone || !cam) return;
  const W = phone.clientWidth;
  const L = PZ_CAMARAS[PZ.marca] || PZ_CAMARAS.otra;
  let html = '';
  if(L.mod){
    html += `<div style="position:absolute;left:${L.mod.x*W}px;top:${L.mod.y*W}px;width:${L.mod.w*W}px;height:${L.mod.h*W}px;border-radius:${L.mod.r*W}px;background:rgba(29,29,31,.88);box-shadow:0 0 0 1.5px rgba(255,255,255,.35)"></div>`;
  }
  L.lentes.forEach(l => {
    html += `<i style="left:${(l.x - l.d/2)*W}px;top:${(l.y - l.d/2)*W}px;width:${l.d*W}px;height:${l.d*W}px"></i>`;
  });
  cam.style.cssText = 'left:0;top:0;width:100%;height:100%';
  cam.innerHTML = html;
}
function pzLayout(c){
  // Tamaño y posición de una capa (foto) dentro del celular, en px de la vista previa.
  c = c || pzCapa();
  const phone = document.getElementById('pzPhone');
  const W = phone.clientWidth, H = phone.clientHeight;
  const iw = c.img.naturalWidth, ih = c.img.naturalHeight;
  const s = Math.max(W/iw, H/ih) * c.zoom;
  const w = iw*s, h = ih*s;
  const maxX = Math.max(0, (w - W)/2), maxY = Math.max(0, (h - H)/2);
  c.x = Math.min(maxX, Math.max(-maxX, c.x));
  c.y = Math.min(maxY, Math.max(-maxY, c.y));
  return { W, H, w, h, left:(W - w)/2 + c.x, top:(H - h)/2 + c.y };
}
function pzRenderPhoto(){
  const phone = document.getElementById('pzPhone');
  if(!phone || !phone.clientWidth) return;
  const es3d = !!pzProd().dosImagenes;
  [0, 1].forEach(i => {
    const el = document.getElementById(i === 0 ? 'pzPhoneImg' : 'pzPhoneImg2');
    const c = PZ.capas[i];
    // Visible: la capa activa; en modo "ver efecto" se ven las dos (CSS alterna).
    const visible = !!c.img && (i === PZ.capa || (es3d && phone.classList.contains('flipping')));
    el.style.display = visible ? 'block' : 'none';
    if(!c.img) return;
    const L = pzLayout(c);
    el.style.width = L.w + 'px'; el.style.height = L.h + 'px';
    el.style.left = L.left + 'px'; el.style.top = L.top + 'px';
  });
  phone.classList.toggle('has-img', !!pzCapa().img || (phone.classList.contains('flipping') && !!PZ.capas[0].img));
}
function pzCenter(){ const c = pzCapa(); c.x = 0; c.y = 0; c.zoom = 1; document.getElementById('pzZoom').value = 1; pzRenderPhoto(); }
function pzLoadFile(file, capa){
  if(!file) return;
  if(!/^image\//.test(file.type)){ pzSetError('Elige un archivo de imagen (JPG o PNG).'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      Object.assign(PZ.capas[capa], { img, zoom:1, x:0, y:0 });
      document.getElementById(capa === 0 ? 'pzPhoneImg' : 'pzPhoneImg2').src = img.src;
      document.getElementById(capa === 0 ? 'pzUploadText' : 'pzUploadText2').innerHTML = capa === 0
        ? `<b>${pzProd().dosImagenes ? 'Imagen 1 cargada' : 'Foto cargada'}</b> · toca para cambiarla`
        : `<b>Imagen 2 cargada</b> · toca para cambiarla`;
      pzSetError('');
      pzSetCapa(capa);
      if(img.naturalWidth < 900) pzSetError('Tu foto es de baja resolución: puede verse borrosa impresa. Si tienes la original, súbela.');
    };
    img.onerror = () => pzSetError('No pudimos abrir esa imagen. Prueba con otra foto.');
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
function pzInitDrag(){
  const phone = document.getElementById('pzPhone');
  if(!phone || phone.dataset.dragReady) return;
  phone.dataset.dragReady = '1';
  // Arrastre con dedo (Android/iPhone) o mouse; dos dedos = zoom.
  const punteros = new Map();
  let start = null, pinch = null;
  phone.addEventListener('pointerdown', e => {
    if(!pzCapa().img) return;
    pzStopFlip(); pzRenderPhoto();
    punteros.set(e.pointerId, { x:e.clientX, y:e.clientY });
    try { phone.setPointerCapture(e.pointerId); } catch(err){}
    const c = pzCapa();
    if(punteros.size === 1){ start = { px:e.clientX, py:e.clientY, x:c.x, y:c.y }; pinch = null; }
    if(punteros.size === 2){
      const [a, b] = [...punteros.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), zoom: c.zoom };
      start = null;
    }
    phone.classList.add('dragging');
  });
  phone.addEventListener('pointermove', e => {
    if(!punteros.has(e.pointerId)) return;
    punteros.set(e.pointerId, { x:e.clientX, y:e.clientY });
    const c = pzCapa();
    if(pinch && punteros.size >= 2){
      const [a, b] = [...punteros.values()];
      c.zoom = Math.min(3, Math.max(1, pinch.zoom * Math.hypot(a.x - b.x, a.y - b.y) / (pinch.d || 1)));
      document.getElementById('pzZoom').value = c.zoom;
    } else if(start){
      c.x = start.x + (e.clientX - start.px);
      c.y = start.y + (e.clientY - start.py);
    }
    pzRenderPhoto();
  });
  const end = e => {
    punteros.delete(e.pointerId);
    if(punteros.size === 1){ const [p] = [...punteros.values()]; const c = pzCapa(); start = { px:p.x, py:p.y, x:c.x, y:c.y }; pinch = null; }
    if(!punteros.size){ start = null; pinch = null; phone.classList.remove('dragging'); }
  };
  phone.addEventListener('pointerup', end);
  phone.addEventListener('pointercancel', end);
  phone.addEventListener('wheel', e => {
    if(!pzCapa().img) return;
    e.preventDefault();
    const c = pzCapa();
    c.zoom = Math.min(3, Math.max(1, c.zoom - e.deltaY * 0.0015));
    document.getElementById('pzZoom').value = c.zoom;
    pzRenderPhoto();
  }, { passive:false });
  document.getElementById('pzZoom').addEventListener('input', e => { pzCapa().zoom = Number(e.target.value) || 1; pzRenderPhoto(); });
  document.getElementById('pzFile').addEventListener('change', e => { pzLoadFile(e.target.files && e.target.files[0], 0); e.target.value = ''; });
  document.getElementById('pzFile2').addEventListener('change', e => { pzLoadFile(e.target.files && e.target.files[0], 1); e.target.value = ''; });
  window.addEventListener('resize', () => { pzDrawCamera(); pzRenderPhoto(); });
}
function pzSetError(msg){ const el = document.getElementById('pzError'); if(el) el.textContent = msg || ''; }
function pzModelo(){
  const sel = document.getElementById('pzModelSel');
  if(sel && !sel.hidden && sel.value && sel.value !== '__otro') return sel.value;
  return (document.getElementById('pzModel').value || '').trim();
}
function pzMarcaNombre(){ const m = PERSONALIZA_CONFIG.marcas.find(x => x.id === PZ.marca); return m && m.id !== 'otra' ? m.nombre : ''; }
function pzEquipo(){ return (pzMarcaNombre() + ' ' + pzModelo()).trim(); }
function pzValidarSkin(necesitaFoto){
  if(!pzModelo()){
    pzSetError('Elige o escribe el modelo de tu celular para hacerlo a la medida exacta.');
    const sel = document.getElementById('pzModelSel'), inp = document.getElementById('pzModel');
    (inp.hidden ? sel : inp).focus();
    return false;
  }
  if(necesitaFoto && !PZ.capas[0].img){ pzSetError(pzProd().dosImagenes ? 'Sube la imagen 1 de tu estuche 3D.' : 'Sube la foto o el diseño que quieres.'); return false; }
  if(necesitaFoto && pzProd().dosImagenes && !PZ.capas[1].img){ pzSetError('El estuche 3D lleva 2 imágenes: sube también la imagen 2.'); return false; }
  pzSetError('');
  return true;
}
// Dibuja el diseño final (foto + guía de cámaras + borde del estuche) en
// un canvas, para descargarlo, enviarlo por WhatsApp o como miniatura.
function pzRenderCanvas(ancho, capaIdx){
  const capa = pzCapa(capaIdx == null ? 0 : capaIdx);
  const L = pzLayout(capa);
  const k = ancho / L.W;
  const c = document.createElement('canvas');
  c.width = Math.round(L.W*k); c.height = Math.round(L.H*k);
  const ctx = c.getContext('2d');
  const r = 46*k*(L.W/280);
  const forma = () => {
    ctx.beginPath();
    ctx.moveTo(r,0); ctx.arcTo(c.width,0,c.width,c.height,r); ctx.arcTo(c.width,c.height,0,c.height,r);
    ctx.arcTo(0,c.height,0,0,r); ctx.arcTo(0,0,c.width,0,r); ctx.closePath();
  };
  forma(); ctx.fillStyle = '#ffffff'; ctx.fill(); ctx.save(); ctx.clip();
  ctx.drawImage(capa.img, L.left*k, L.top*k, L.w*k, L.h*k);
  const cam = PZ_CAMARAS[PZ.marca] || PZ_CAMARAS.otra;
  const W = c.width;
  if(cam.mod){
    const m = cam.mod;
    ctx.beginPath();
    if(ctx.roundRect) ctx.roundRect(m.x*W, m.y*W, m.w*W, m.h*W, m.r*W); else ctx.rect(m.x*W, m.y*W, m.w*W, m.h*W);
    ctx.fillStyle = 'rgba(29,29,31,.88)'; ctx.fill();
  }
  cam.lentes.forEach(l => { ctx.beginPath(); ctx.arc(l.x*W, l.y*W, l.d*W/2, 0, Math.PI*2); ctx.fillStyle = '#0b0b0f'; ctx.fill(); });
  ctx.restore();
  const borde = pzProd().borde;
  if(borde){
    forma();
    ctx.lineWidth = (borde === 'negro' ? 16 : 12) * k * (L.W/280);
    ctx.strokeStyle = borde === 'negro' ? '#111114' : 'rgba(255,255,255,.75)';
    ctx.stroke();
  }
  return c;
}
function pzNombreArchivo(extra){
  return ('camand-' + pzProd().id + '-' + pzEquipo() + (extra || '')).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-') + '.jpg';
}
function pzDescargarCanvas(canvas, nombre){
  canvas.toBlob(blob => {
    if(!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = nombre;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }, 'image/jpeg', 0.92);
}
function pzDownloadDesign(){
  if(!pzValidarSkin(true)) return;
  if(pzProd().dosImagenes){
    pzDescargarCanvas(pzRenderCanvas(1000, 0), pzNombreArchivo('-imagen-1'));
    setTimeout(() => pzDescargarCanvas(pzRenderCanvas(1000, 1), pzNombreArchivo('-imagen-2')), 600);
  } else {
    pzDescargarCanvas(pzRenderCanvas(1000, 0), pzNombreArchivo(''));
  }
}
function pzSkinNombre(){
  const p = pzProd();
  const extra = p.impresion ? ` (impresión ${PZ.impresion})` : (p.dosImagenes ? ' (2 imágenes)' : '');
  return `${p.carrito}${extra} — ${pzEquipo()}`;
}
function pzAddSkinToCart(btn){
  if(!pzValidarSkin(true)) return;
  let thumb = '';
  try { thumb = pzRenderCanvas(110, 0).toDataURL('image/jpeg', 0.7); } catch(e){ thumb = ''; }
  const p = pzProd();
  const pref = p.id === 'skin' ? 'skin_' : 'est_';
  const id = pref + (p.id + '_' + PZ.marca + '_' + pzModelo()).replace(/[^a-zA-Z0-9]+/g,'_') + '_' + Date.now().toString(36);
  addToCart(id, pzSkinNombre(), p.precio, thumb, 'Personalización', btn);
}
function pzSkinWhatsApp(){
  if(!pzValidarSkin(false)) return;
  const p = pzProd();
  const tiene = PZ.capas[0].img;
  let msg = `Hola Camand Mobile, quiero ${p.whatsapp} (${formatCOP(p.precio)}) para mi ${pzEquipo()}.`;
  if(p.impresion) msg += `\nImpresión: ${PZ.impresion}.`;
  msg += `\n\n${tiene ? 'Ya armé mi diseño en la página y te lo envío por aquí.' : (p.dosImagenes ? 'Te envío por aquí las 2 imágenes que quiero.' : 'Te envío por aquí la foto que quiero.')}`;
  if(p.id === 'skin') msg += `\nEnvío: Bogotá ${formatCOP(PERSONALIZA_CONFIG.envioBogota)} · resto del país ${formatCOP(PERSONALIZA_CONFIG.envioNacional)}`;
  msg += `\n\n¿Me confirmas para apartarlo?`;
  window.open(waLink(msg), '_blank', 'noopener');
}
// Abre el estudio con un producto ya elegido (skin, clasica, pro, 3d).
function pzOpenStudio(prod){
  pzSetProducto(prod || 'skin');
  pzOpen('pzSkinStudio');
  setTimeout(() => { pzDrawCamera(); pzRenderPhoto(); }, 700);
}
function pzVidrioWhatsApp(){
  window.open(waLink('Hola Camand Mobile, quiero un vidrio de protección (blindado $15.000 o sin borde $25.000). Mi celular es: '), '_blank', 'noopener');
}

/* --- Hidrogel --- */
function pzHgSel(){
  const H = PERSONALIZA_CONFIG.hidrogel;
  const zona = H.zonas.find(z => z.id === PZ.hgZona) || H.zonas[0];
  let cal = H.calidades.find(c => c.id === PZ.hgCalidad) || H.calidades[0];
  if(cal.soloPantalla && !zona.pantalla){ cal = H.calidades[0]; PZ.hgCalidad = cal.id; }
  const precio = cal.extra == null ? null : zona.base + cal.extra;
  return { zona, cal, precio };
}
function pzRenderHg(){
  const H = PERSONALIZA_CONFIG.hidrogel;
  const zonasEl = document.getElementById('pzHgZonas');
  if(!zonasEl) return;
  const { zona, cal, precio } = pzHgSel();
  zonasEl.innerHTML = H.zonas.map(z => `<button type="button" class="pz-option${z.id === zona.id ? ' is-active' : ''}" onclick="PZ.hgZona='${z.id}';pzRenderHg()"><b>${pzEsc(z.nombre)}</b><small>${pzEsc(z.desc)}</small><em>Desde ${formatCOP(z.base)}</em></button>`).join('');
  document.getElementById('pzHgCalidades').innerHTML = H.calidades.map(c => {
    const off = c.soloPantalla && !zona.pantalla;
    const etiqueta = c.extra == null ? 'Precio según equipo' : (c.extra === 0 ? 'Incluido' : '+' + formatCOP(c.extra));
    return `<button type="button" class="pz-option${c.id === cal.id ? ' is-active' : ''}" ${off ? 'disabled title="Solo para pantalla"' : ''} onclick="PZ.hgCalidad='${c.id}';pzRenderHg()"><b>${pzEsc(c.nombre)}</b><small>${pzEsc(c.desc)}</small><em>${off ? 'Solo pantalla' : etiqueta}</em></button>`;
  }).join('');
  document.getElementById('pzHgTitle').textContent = `${zona.nombre} · ${cal.nombre}`;
  document.getElementById('pzHgPrice').textContent = precio == null ? 'Desde ' + formatCOP(zona.base) : formatCOP(precio);
  document.getElementById('pzHgNote').textContent = precio == null
    ? 'El precio exacto depende de tu equipo y el acabado. Te lo confirmamos por WhatsApp en minutos. Instalación incluida.'
    : 'Instalación incluida, sin burbujas.';
  document.getElementById('pzHgCart').disabled = precio == null;
}
function pzHgDevice(){ return (document.getElementById('pzHgDevice').value || '').trim(); }
function pzHgAddToCart(btn){
  const { zona, cal, precio } = pzHgSel();
  if(precio == null) return;
  if(!pzHgDevice()){ document.getElementById('pzHgDevice').focus(); document.getElementById('pzHgDevice').placeholder = 'Escribe tu dispositivo para continuar'; return; }
  const nombre = `Hidrogel ${zona.nombre} (${cal.nombre}) — ${pzHgDevice()}`;
  addToCart('hidrogel_' + (zona.id + '_' + cal.id + '_' + pzHgDevice()).replace(/[^a-zA-Z0-9]+/g,'_'), nombre, precio, '', 'Personalización', btn);
}
function pzHgWhatsApp(){
  const { zona, cal, precio } = pzHgSel();
  const disp = pzHgDevice() || '(mi dispositivo es: )';
  const msg = `Hola Camand Mobile, quiero agendar instalación de hidrogel.\n\n• Zona: ${zona.nombre}\n• Calidad: ${cal.nombre}\n• Dispositivo: ${disp}\n• Precio en la página: ${precio == null ? 'desde ' + formatCOP(zona.base) : formatCOP(precio)}`;
  window.open(waLink(msg), '_blank', 'noopener');
}

/* --- Fundas y accesorios Apple (desde tu catálogo) --- */
function pzBuscarAccesorios(re, excluir){
  if(typeof flattenAllProducts !== 'function') return [];
  const accLabel = CATALOG.accesorios ? CATALOG.accesorios.label : '';
  const otrosLabel = CATALOG.otros ? CATALOG.otros.label : '';
  return flattenAllProducts().filter(({ catLabel, marca, m }) => {
    if(catLabel !== accLabel && catLabel !== otrosLabel) return false;
    const txt = m.n + ' ' + marca;
    return re.test(txt) && !(excluir && excluir.test(txt));
  });
}
function pzTile(icono, titulo, texto, msg){
  return `<a class="pz-tile" href="${waLink(msg)}" target="_blank" rel="noopener">
    <span class="pz-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icono}</svg></span>
    <b>${pzEsc(titulo)}</b><span>${pzEsc(texto)}</span><em>Consultar por WhatsApp →</em></a>`;
}
function pzRenderProductos(){
  const fundasGrid = document.getElementById('pzFundasGrid');
  if(!fundasGrid) return;
  const ICO_FUNDA = '<rect x="6" y="2" width="12" height="20" rx="3"/><rect x="8" y="4" width="4" height="4" rx="1.2"/>';
  const ICO_CUBO = '<rect x="6" y="8" width="12" height="13" rx="2.5"/><path d="M10 8V3M14 8V3"/>';
  const ICO_AIRPODS = '<rect x="5" y="7" width="14" height="13" rx="4"/><path d="M5 12h14"/><circle cx="12" cy="15.5" r="1"/>';

  const fundas = pzBuscarAccesorios(/\b(fundas?|forros?|cases?|carcasas?|silicon[ae]?|antigolpes?|armor|magsafe)\b/i, /air ?pods?|personaliz|acrygel|skin|vidrio|hidrogel|cargador|cable/i).slice(0, 8);
  fundasGrid.innerHTML = fundas.map(({ catLabel, marca, m }) => productCardHTML(catLabel, marca, m)).join('');
  document.getElementById('pzFundasTiles').innerHTML = [
    pzTile(ICO_FUNDA, 'Transparente antigolpes', 'Deja ver el color de tu equipo, con esquinas reforzadas.', 'Hola Camand Mobile, quiero una funda transparente antigolpes. Mi celular es: '),
    pzTile(ICO_FUNDA, 'Silicona', 'Tacto suave, interior afelpado, varios colores.', 'Hola Camand Mobile, quiero una funda de silicona. Mi celular es: '),
    pzTile(ICO_FUNDA, 'Antigolpes reforzada', 'Máxima protección para el día a día.', 'Hola Camand Mobile, quiero una funda antigolpes reforzada. Mi celular es: ')
  ].join('');

  const cubos = pzBuscarAccesorios(/(cubo|cargador|adaptador)[^|]{0,30}(apple|iphone|20\s?w)|apple[^|]{0,20}20\s?w/i);
  const airpods = pzBuscarAccesorios(/air ?pods?/i);
  const apple = [...cubos, ...airpods.filter(a => !cubos.includes(a))].slice(0, 8);
  document.getElementById('pzAppleGrid').innerHTML = apple.map(({ catLabel, marca, m }) => productCardHTML(catLabel, marca, m)).join('');
  const tiles = [];
  if(!cubos.length) tiles.push(pzTile(ICO_CUBO, 'Cubo Apple 20W', 'Carga rápida USB-C para iPhone y iPad.', 'Hola Camand Mobile, quiero un cubo Apple de 20W.'));
  tiles.push(
    pzTile(ICO_AIRPODS, 'Estuche AirPods Pro 2', 'Protege tu estuche de carga de golpes y rayones.', 'Hola Camand Mobile, quiero un estuche para AirPods Pro 2. ¿Qué diseños tienen?'),
    pzTile(ICO_AIRPODS, 'Estuche AirPods Pro 3', 'Diseños y colores para el modelo más reciente.', 'Hola Camand Mobile, quiero un estuche para AirPods Pro 3. ¿Qué diseños tienen?'),
    pzTile(ICO_AIRPODS, 'Estuche AirPods 4', 'Ajuste exacto para AirPods serie 4.', 'Hola Camand Mobile, quiero un estuche para AirPods 4. ¿Qué diseños tienen?')
  );
  document.getElementById('pzAppleTiles').innerHTML = tiles.join('');
  if(typeof initScrollReveal === 'function') initScrollReveal();
}

/* --- Galería, FAQ y enlaces --- */
function pzRenderGallery(){
  const g = document.getElementById('pzGallery');
  if(!g || typeof GALLERY_PHOTOS === 'undefined') return;
  g.innerHTML = GALLERY_PHOTOS.slice(0, 8).map((src, i) =>
    `<button type="button" onclick="openLightbox(${i})" aria-label="Ampliar trabajo ${i+1}"><img src="${pzEsc(src)}" alt="Trabajo personalizado Camand Mobile ${i+1}" loading="lazy"></button>`).join('');
}
const PZ_FAQ = [
  ['¿Cuánto cuesta una skin y cuánto vale el envío?', `La skin personalizada cuesta ${formatCOP(PERSONALIZA_CONFIG.skinPrecio)}. El envío vale ${formatCOP(PERSONALIZA_CONFIG.envioBogota)} en Bogotá y ${formatCOP(PERSONALIZA_CONFIG.envioNacional)} al resto del país, y es gratis en compras desde ${formatCOP(FREE_SHIPPING_THRESHOLD)}.`],
  ['¿Para qué celulares hacen skins?', 'Para casi cualquier modelo de Apple, Samsung, Xiaomi, Motorola y otras marcas. Si no ves el tuyo en la lista, escríbelo igual o pregúntanos por WhatsApp.'],
  ['¿Qué foto debo usar?', 'La foto original, en la mejor calidad posible. Evita capturas de pantalla o fotos reenviadas por WhatsApp, porque pierden calidad. Si nos la envías por WhatsApp, mándala como "Documento" para que no se comprima.'],
  ['¿Cuánto tarda mi pedido?', 'De 1 a 2 días hábiles desde que confirmas tu diseño y el pago. Antes de producir te enviamos la vista previa para que la apruebes.'],
  ['¿Por qué piden un anticipo?', 'Porque tu skin o estuche lleva tu foto y no se puede vender a otra persona. El anticipo cubre los materiales y pone tu diseño en producción.'],
  ['¿Cuánto cuesta el hidrogel?', 'Desde $25.000 para pantalla y desde $25.000 para la trasera completa. El precio sube según la calidad que elijas (mate, anti-espía, etc.). La instalación está incluida.'],
  ['¿Cómo puedo pagar?', 'Transferencia, Nequi, tarjeta de crédito (recargo del 6%) o Sistecrédito. Te confirmamos el método al finalizar por WhatsApp.']
];
function pzRenderFaq(){
  const el = document.getElementById('pzFaq');
  if(!el) return;
  el.innerHTML = PZ_FAQ.map(([q, a]) => `<div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      <span class="faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.6M12 16.6h.01"/></svg></span>
      <span class="faq-q-text">${pzEsc(q)}</span>
      <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="faq-a-wrap"><div class="faq-a"><ul><li>${pzEsc(a)}</li></ul></div></div>
  </div>`).join('');
}

function renderPersonaliza(){
  if(!document.getElementById('view-personaliza')) return;
  pzRenderCards();
  pzRenderProductos();
  pzRenderHg();
  pzRenderDual();
  if(typeof initScrollReveal === 'function') initScrollReveal();
}

(function pzInit(){
  if(!document.getElementById('view-personaliza')) return;
  document.getElementById('pzShipBog').textContent = formatCOP(PERSONALIZA_CONFIG.envioBogota);
  document.getElementById('pzShipNac').textContent = formatCOP(PERSONALIZA_CONFIG.envioNacional);
  document.getElementById('pzNoModel').href = waLink('Hola Camand Mobile, no encuentro mi modelo de celular en la página de skins. Mi celular es: ');
  document.getElementById('pzFinalWa').href = waLink('Hola Camand Mobile, quiero personalizar mi celular. Tengo esta idea: ');
  pzAplicarFondo();
  pzRenderBrands();
  pzSetProducto((PERSONALIZA_CONFIG.productos.find(p => p.id === 'skin') || {}).id);
  pzInitDrag();
  pzInitReels();
  pzRenderGallery();
  pzRenderFaq();
  renderPersonaliza();
  // La vista previa necesita el tamaño real del celular, que solo existe
  // cuando la página está visible: se recalcula al abrirla.
  new MutationObserver(() => {
    if(document.getElementById('view-personaliza').classList.contains('active')){ pzDrawCamera(); pzRenderPhoto(); }
  }).observe(document.getElementById('view-personaliza'), { attributes:true, attributeFilter:['class'] });
  // Si alguien entra directo a #/skins, baja al estudio.
  if(location.hash === '#/skins') setTimeout(() => pzScrollTo('pzSkinStudio'), 700);
})();
