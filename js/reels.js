/* =====================================================================
   REELS ANIMADOS — dentro del Generador de Historias (#/historias)
   ---------------------------------------------------------------------
   Plantilla "Reel animado (video)": con 1 a 10 productos del catálogo
   arma un video vertical 1080×1920 (formato Reel/Historia) con la foto,
   el nombre, el precio actual de la Hoja y los medios de pago, y lo
   descarga en MP4 (Chrome, Edge y Safari; en Firefox sale en WebM).
   - 1 producto  → video de ~8 s.
   - Varios      → ~4 s por producto + cierre con el logo.
   - "Un video por producto" descarga uno por cada producto elegido.
   Usa las mismas fotos de Cloudinary y los mismos fondos que las
   Historias. No lleva música: agrégala al publicar en Instagram (así
   puedes usar audios en tendencia sin problemas de derechos).
   ===================================================================== */
(function(){
  if(typeof STORY === 'undefined') return;

  STORY_MAX_SEL.reel = 10;
  const FPS = 30;
  const DUR_SOLO = 8.0, DUR_ITEM = 4.2, DUR_FIN = 1.8;
  let rafId = null, recording = false;

  // ---------- utilidades ----------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const prog = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
  const easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeBack = p => { const c = 1.6; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); };
  function limpiarNombre(n){
    let s = String(n || '').split('•')[0];
    // "Cubo Apple 20w - Original — 20W" → sin la variante repetida
    const pv = s.split(/\s+—\s+/);
    if(pv.length === 2 && pv[0].toLowerCase().replace(/\s/g, '').includes(pv[1].toLowerCase().replace(/\s/g, ''))) s = pv[0];
    return s
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{25AA}-\u{25FE}]/gu, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function specsCortas(m){
    const t = String(m.esp || m.notes || '').trim();
    if(!t) return '';
    const sep = /;|\n/.test(t) ? /\s*;\s*|\n+/ : /,\s+/;
    const fix = typeof fixSpecTildes === 'function' ? fixSpecTildes : (s => s);
    return t.split(sep).map(s => fix(s.trim().replace(/\.$/, ''))).filter(Boolean)
      .filter(s => !/no originales|replica|generico/i.test(s))
      .slice(0, 2).map(s => s.length > 34 ? s.slice(0, 33).trim() + '…' : s).join('  ·  ');
  }
  function kickerDe(x){
    const manual = ((document.getElementById('storyKicker') || {}).value || '').trim();
    if(manual) return manual.toUpperCase();
    if(x.m.tag) return String(x.m.tag).toUpperCase();
    return String(x.m.cond || 'Nuevo').toUpperCase();
  }
  function fondo(ctx, th, t){
    const g = ctx.createLinearGradient(0, 0, 0, STORY_H);
    g.addColorStop(0, th.bg[0]); g.addColorStop(1, th.bg[1]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, STORY_W, STORY_H);
    // Luz suave que se mueve despacio detrás del producto.
    const cx = STORY_W / 2 + Math.sin(t * 0.7) * 120, cy = 700 + Math.cos(t * 0.5) * 60;
    const r = ctx.createRadialGradient(cx, cy, 40, cx, cy, 760);
    r.addColorStop(0, th.logoWhite ? 'rgba(255,255,255,0.16)' : 'rgba(0,113,227,0.10)');
    r.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = r; ctx.fillRect(0, 0, STORY_W, STORY_H);
  }
  function alpha(ctx, a, fn){ ctx.save(); ctx.globalAlpha *= clamp(a, 0, 1); fn(); ctx.restore(); }

  // ---------- un producto, tiempo local tl (s), duración d ----------
  function escenaProducto(ctx, th, logo, x, img, tl, d, conLogo){
    const k = d / DUR_SOLO;              // comprime los tiempos en reels de varios productos
    const m = x.m;
    // Logo
    if(conLogo) alpha(ctx, prog(tl, 0, 0.4 * k), () => sLogo(ctx, logo, th, 250, 74));
    // Etiqueta
    const pk = easeBack(prog(tl, 0.25 * k, 0.65 * k));
    if(pk > 0) alpha(ctx, prog(tl, 0.25 * k, 0.45 * k), () => {
      ctx.save(); ctx.translate(STORY_W / 2, 352); ctx.scale(pk, pk); ctx.translate(-STORY_W / 2, -352);
      sPill(ctx, kickerDe(x), STORY_W / 2, 326, 30, th.pillBg, th.pillInk, 34, 58);
      ctx.restore();
    });
    // Tarjeta + foto: entra creciendo y luego "flota".
    const pe = easeOut(prog(tl, 0.1 * k, 0.95 * k));
    const s = 0.82 + 0.18 * pe;
    const flot = Math.sin(tl * 1.6) * 10 * pe;
    // Nombre: una línea achicando la letra; si no cabe, dos líneas. Si el nombre
    // ocupa dos líneas o hay precio "Antes", la tarjeta se encoge para que el
    // precio nunca tape los medios de pago.
    const nombre = limpiarNombre(m.n);
    let nSize = 70, nLines = 1;
    for(; nSize >= 52; nSize -= 2){ ctx.font = sFont(nSize, 800); if(ctx.measureText(nombre).width <= 940) break; }
    if(nSize < 52){ nSize = 58; nLines = 2; }
    const extra = (nLines === 2 ? 68 : 0) + (m.pAntes && m.pAntes > m.p ? 64 : 0);
    const cw = 820, ch = 640 - extra, cx0 = (STORY_W - cw) / 2, cy0 = 412;
    const nY = 1092 - extra;
    alpha(ctx, pe, () => {
      ctx.save();
      ctx.translate(STORY_W / 2, cy0 + ch / 2 + flot); ctx.scale(s, s); ctx.translate(-STORY_W / 2, -(cy0 + ch / 2));
      sCard(ctx, th, cx0, cy0, cw, ch, 64);
      ctx.save(); sRound(ctx, cx0, cy0, cw, ch, 64); ctx.clip();
      if(img) sContain(ctx, img, cx0 + 50, cy0 + 40, cw - 100, ch - 80); else sNoImg(ctx, cx0, cy0, cw, ch);
      ctx.restore();
      ctx.restore();
    });
    // Nombre
    const pn = easeOut(prog(tl, 0.7 * k, 1.2 * k));
    const y = nY + nSize + (nLines - 1) * Math.round(nSize * 1.12);
    if(pn > 0) alpha(ctx, pn, () => {
      ctx.save(); ctx.translate(0, (1 - pn) * 40);
      sText(ctx, nombre, STORY_W / 2, nY, 940, nSize, 800, th.ink, nLines, Math.round(nSize * 1.12));
      ctx.restore();
    });
    // Especificaciones cortas
    const sp = specsCortas(m);
    if(sp) alpha(ctx, prog(tl, 1.05 * k, 1.45 * k), () => sText(ctx, sp, STORY_W / 2, y + 20, 960, 31, 600, th.soft, 1));
    // Precio con conteo rápido
    const pp = prog(tl, 1.4 * k, 2.2 * k);
    if(pp > 0){
      const val = Math.round((m.p * easeOut(pp)) / 100) * 100;
      const mm = Object.assign({}, m, { p: pp >= 1 ? m.p : val });
      alpha(ctx, prog(tl, 1.4 * k, 1.6 * k), () => sPrice(ctx, th, mm, STORY_W / 2, y + 86, 116));
    }
    // Medios de pago (aparecen uno por uno), en dos filas centradas
    const filas = [['Paga contraentrega', 'Tarjeta a cuotas'], ['Envío gratis desde $200.000']];
    ctx.font = sFont(30, 800);
    let n = 0;
    filas.forEach((fila, fi) => {
      const yChips = 1392 + fi * 66;
      const anchos = fila.map(c => ctx.measureText(c).width + 52);
      const gap = 14, total = anchos.reduce((a, b) => a + b, 0) + gap * (fila.length - 1);
      let xx = (STORY_W - total) / 2;
      fila.forEach((c, i) => {
        const j = n++;
        const pc = easeBack(prog(tl, (2.3 + j * 0.22) * k, (2.7 + j * 0.22) * k));
        const w = anchos[i];
        if(pc > 0) alpha(ctx, Math.min(1, pc), () => {
          ctx.save(); ctx.translate(xx + w / 2, yChips + 27); ctx.scale(pc, pc); ctx.translate(-(xx + w / 2), -(yChips + 27));
          ctx.font = sFont(30, 800);
          ctx.fillStyle = th.logoWhite ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.06)';
          sRound(ctx, xx, yChips, w, 54, 27); ctx.fill();
          ctx.fillStyle = th.ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(c, xx + w / 2, yChips + 28); ctx.textBaseline = 'alphabetic';
          ctx.restore();
        });
        xx += w + gap;
      });
    });
    // Llamado a la acción con un leve "latido"
    const pcta = easeOut(prog(tl, 3.0 * k, 3.4 * k));
    if(pcta > 0){
      const cta = ((document.getElementById('storyCta') || {}).value || '').trim() || 'Pídelo en camandmobile.com';
      const pulso = 1 + Math.sin(tl * 5) * 0.025 * pcta;
      alpha(ctx, pcta, () => {
        ctx.save(); ctx.translate(STORY_W / 2, 1586); ctx.scale(pulso, pulso); ctx.translate(-STORY_W / 2, -1586);
        sPill(ctx, cta, STORY_W / 2, 1538, 40, th.ctaBg, th.ctaInk, 56, 96);
        ctx.restore();
      });
    }
  }

  function escenaFinal(ctx, th, logo, tl){
    const p = easeOut(prog(tl, 0, 0.5));
    alpha(ctx, p, () => {
      sLogo(ctx, logo, th, 820, 150 * (0.9 + 0.1 * p));
      sText(ctx, 'camandmobile.com', STORY_W / 2, 940, 900, 58, 800, th.ink, 1);
      sText(ctx, 'Envíos a toda Colombia · Paga contraentrega', STORY_W / 2, 1030, 940, 32, 600, th.soft, 1);
      sPill(ctx, 'Escríbenos por WhatsApp', STORY_W / 2, 1130, 38, '#25D366', '#ffffff', 52, 92);
    });
  }

  // ---------- línea de tiempo ----------
  function plan(items){
    if(items.length <= 1) return { dur: DUR_SOLO, items };
    return { dur: items.length * DUR_ITEM + DUR_FIN, items };
  }
  function dibujar(ctx, th, logo, items, imgs, t){
    t = Math.max(0, t || 0); // el reloj de requestAnimationFrame puede empezar un poco antes de t0
    fondo(ctx, th, t);
    if(!items.length){ sLogo(ctx, logo, th, 225, 78); sText(ctx, 'Elige uno o varios productos', STORY_W / 2, 880, 900, 56, 700, th.soft, 2); return; }
    if(items.length === 1){
      escenaProducto(ctx, th, logo, items[0], imgs[0], t, DUR_SOLO, true);
      const fin = prog(t, DUR_SOLO - 0.35, DUR_SOLO);
      if(fin > 0){ ctx.fillStyle = `rgba(0,0,0,${fin * 0.6})`; ctx.fillRect(0, 0, STORY_W, STORY_H); }
      return;
    }
    const i = Math.floor(t / DUR_ITEM);
    if(i < items.length){
      const tl = t - i * DUR_ITEM;
      // logo fijo arriba durante todo el reel
      sLogo(ctx, logo, th, 250, 74);
      escenaProducto(ctx, th, logo, items[i], imgs[i], tl, DUR_ITEM, false);
      // transición: barrido suave entre productos
      const out = prog(tl, DUR_ITEM - 0.25, DUR_ITEM);
      if(out > 0){ ctx.fillStyle = th.bg[1]; ctx.globalAlpha = out; ctx.fillRect(0, 0, STORY_W, STORY_H); ctx.globalAlpha = 1; }
      const inn = 1 - prog(tl, 0, 0.25);
      if(inn > 0 && i > 0){ ctx.fillStyle = th.bg[1]; ctx.globalAlpha = inn; ctx.fillRect(0, 0, STORY_W, STORY_H); ctx.globalAlpha = 1; }
    } else {
      escenaFinal(ctx, th, logo, t - items.length * DUR_ITEM);
    }
  }

  async function cargar(items){
    const [logo, ...imgs] = await Promise.all([storyLoadLogo(), ...items.map(x => storyLoadImage(storyFirstImg(x.m)))]);
    return { logo, imgs };
  }
  function tema(){ return STORY_THEMES[STORY.theme] || STORY_THEMES.negro; }

  // ---------- vista previa en bucle ----------
  function parar(){ if(rafId){ cancelAnimationFrame(rafId); rafId = null; } }
  async function preview(){
    parar();
    const canvas = document.getElementById('storyCanvas');
    if(!canvas) return;
    const items = storySelected();
    const { logo, imgs } = await cargar(items);
    const { dur } = plan(items);
    const ctx = canvas.getContext('2d');
    const t0 = performance.now();
    const paso = now => {
      if(STORY.tpl !== 'reel' || recording) return;
      const v = document.getElementById('view-historias');
      if(!v || !v.classList.contains('active')){ rafId = null; return; }
      dibujar(ctx, tema(), logo, items, imgs, ((now - t0) / 1000) % (dur + 0.6));
      rafId = requestAnimationFrame(paso);
    };
    rafId = requestAnimationFrame(paso);
    const warn = document.getElementById('storyWarn');
    if(warn){
      const sin = items.filter((x, i) => !imgs[i]).map(x => limpiarNombre(x.m.n));
      warn.textContent = sin.length ? `No se pudo usar la foto de: ${sin.join(', ')}. Debe estar en Cloudinary.` : '';
    }
  }

  // ---------- grabar ----------
  function tipoVideo(){
    const op = ['video/mp4;codecs=avc1.42E01E', 'video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm'];
    return op.find(t => window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || '';
  }
  function nombreArchivo(items, ext){
    const base = items.length === 1 ? limpiarNombre(items[0].m.n) : `destacados-${items.length}-productos`;
    return 'reel-camand-' + base.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.' + ext;
  }
  async function grabar(items){
    const tipo = tipoVideo();
    if(!tipo) throw new Error('Este navegador no puede grabar video. Usa Chrome, Edge o Safari.');
    const { logo, imgs } = await cargar(items);
    const { dur } = plan(items);
    const c = document.createElement('canvas'); c.width = STORY_W; c.height = STORY_H;
    const ctx = c.getContext('2d');
    dibujar(ctx, tema(), logo, items, imgs, 0);
    const stream = c.captureStream(FPS);
    const rec = new MediaRecorder(stream, { mimeType: tipo, videoBitsPerSecond: 10000000 });
    const partes = [];
    rec.ondataavailable = e => { if(e.data && e.data.size) partes.push(e.data); };
    const listo = new Promise(r => { rec.onstop = r; });
    // También se muestra en la vista previa mientras graba.
    const vis = document.getElementById('storyCanvas'), vctx = vis && vis.getContext('2d');
    rec.start(250);
    const t0 = performance.now();
    await new Promise(resolve => {
      const paso = now => {
        const t = (now - t0) / 1000;
        dibujar(ctx, tema(), logo, items, imgs, Math.min(t, dur));
        if(vctx) vctx.drawImage(c, 0, 0);
        reelProgreso(Math.min(1, t / dur));
        if(t < dur + 0.15) requestAnimationFrame(paso); else resolve();
      };
      requestAnimationFrame(paso);
    });
    rec.stop();
    await listo;
    stream.getTracks().forEach(tr => tr.stop());
    const ext = /mp4/.test(tipo) ? 'mp4' : 'webm';
    return { blob: new Blob(partes, { type: tipo.split(';')[0] }), name: nombreArchivo(items, ext), ext };
  }
  function reelProgreso(p){
    const b = document.getElementById('reelProgress');
    if(b){ b.hidden = p <= 0 || p >= 1; b.style.setProperty('--p', (p * 100).toFixed(1) + '%'); }
  }
  function descargar(r){
    const a = document.createElement('a');
    a.href = URL.createObjectURL(r.blob); a.download = r.name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  async function conBloqueo(fn){
    if(recording) return;
    recording = true; parar();
    document.querySelectorAll('.reel-actions button').forEach(b => b.disabled = true);
    try{ await fn(); }
    catch(e){ showToast(e.message || 'No se pudo crear el video'); console.warn('[Camand] Reels:', e); }
    finally{
      recording = false; reelProgreso(0);
      document.querySelectorAll('.reel-actions button').forEach(b => b.disabled = false);
      if(STORY.tpl === 'reel') preview();
    }
  }

  window.reelCrear = () => conBloqueo(async () => {
    const items = storySelected();
    if(!items.length) throw new Error('Elige al menos un producto');
    showToast('Grabando el video… deja esta pestaña abierta');
    const r = await grabar(items);
    descargar(r);
    showToast(r.ext === 'mp4' ? 'Video MP4 descargado' : 'Video descargado (WebM). Para Instagram usa Chrome o Safari: sale en MP4');
    if(typeof camandTrack === 'function') camandTrack('crear_reel', { productos: items.length });
  });
  window.reelCrearUnoPorUno = () => conBloqueo(async () => {
    const items = storySelected();
    if(!items.length) throw new Error('Elige al menos un producto');
    for(let i = 0; i < items.length; i++){
      showToast(`Grabando ${i + 1} de ${items.length}…`);
      descargar(await grabar([items[i]]));
      await new Promise(r => setTimeout(r, 600));
    }
    showToast(`Listo: ${items.length} videos descargados`);
  });
  window.reelCompartir = () => conBloqueo(async () => {
    const items = storySelected();
    if(!items.length) throw new Error('Elige al menos un producto');
    const r = await grabar(items);
    const f = new File([r.blob], r.name, { type: r.blob.type });
    if(navigator.canShare && navigator.canShare({ files: [f] })){
      try{ await navigator.share({ files: [f] }); }catch(e){ if(e.name !== 'AbortError') throw e; }
    } else { descargar(r); showToast('Este navegador no permite compartir directo — se descargó'); }
  });
  // Atajo: elige los productos marcados DESTACADO=sí en la Hoja.
  window.reelUsarDestacados = () => {
    const ds = storyAllProducts().filter(x => x.m.dest === true)
      .sort((a, b) => (a.m.ordenDest || 99) - (b.m.ordenDest || 99));
    if(!ds.length){ showToast('No encontré productos marcados como DESTACADO en la Hoja'); return; }
    STORY.sel = ds.slice(0, STORY_MAX_SEL.reel).map(x => x.id);
    storySet('tpl', 'reel');
  };

  // ---------- conexión con el generador existente ----------
  const drawOriginal = window.storyDraw || storyDraw;
  window.storyDraw = async function(){
    const prev = document.querySelector('.story-preview');
    if(prev) prev.classList.toggle('is-reel', STORY.tpl === 'reel');
    if(STORY.tpl === 'reel') return preview();
    parar();
    return drawOriginal.apply(this, arguments);
  };
  // storySet/storyToggle llaman a storyDraw por nombre global: se reasigna.
  try{ storyDraw = window.storyDraw; }catch(e){}
})();
