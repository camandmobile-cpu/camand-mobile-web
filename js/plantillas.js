/* =====================================================================
   PLANTILLAS DE DISEÑO DEL ESTUDIO (skins y estuches)
   Para quien no tiene foto propia: diseños dibujados aquí mismo (sin
   descargar nada). Primero salen los de la campaña del mes; los
   generales siempre están. Para agregar uno nuevo, copia un bloque de
   PZ_PLANTILLAS y cambia el dibujo.
   ===================================================================== */
function pzRng(seed){ let s = seed >>> 0; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
function pzCorazon(c, x, y, r){
  c.beginPath(); c.moveTo(x, y + r * 0.35);
  c.bezierCurveTo(x, y - r * 0.3, x - r, y - r * 0.3, x - r, y + r * 0.2);
  c.bezierCurveTo(x - r, y + r * 0.7, x - r * 0.2, y + r * 1.05, x, y + r * 1.35);
  c.bezierCurveTo(x + r * 0.2, y + r * 1.05, x + r, y + r * 0.7, x + r, y + r * 0.2);
  c.bezierCurveTo(x + r, y - r * 0.3, x, y - r * 0.3, x, y + r * 0.35); c.fill();
}
function pzMurcielago(c, x, y, s){
  c.save(); c.translate(x, y); c.scale(s, s); c.beginPath();
  c.moveTo(0, -4); c.quadraticCurveTo(6, -14, 10, -6); c.quadraticCurveTo(20, -18, 40, -4);
  c.quadraticCurveTo(30, -2, 28, 8); c.quadraticCurveTo(22, 2, 16, 6); c.quadraticCurveTo(10, 2, 6, 10); c.quadraticCurveTo(2, 4, 0, 6);
  c.quadraticCurveTo(-2, 4, -6, 10); c.quadraticCurveTo(-10, 2, -16, 6); c.quadraticCurveTo(-22, 2, -28, 8);
  c.quadraticCurveTo(-30, -2, -40, -4); c.quadraticCurveTo(-20, -18, -10, -6); c.quadraticCurveTo(-6, -14, 0, -4); c.fill(); c.restore();
}
function pzCalabaza(c, x, y, r){
  c.fillStyle = '#3a7d2c'; c.fillRect(x - r * 0.08, y - r * 1.15, r * 0.16, r * 0.4);
  [[-0.45, 0.62], [0.45, 0.62], [0, 0.7]].forEach(([dx, w], i) => {
    c.fillStyle = i === 2 ? '#ff8f3a' : '#ff7a1a';
    c.beginPath(); c.ellipse(x + dx * r, y, r * w, r * 0.9, 0, 0, Math.PI * 2); c.fill();
  });
  c.fillStyle = '#1a0f05';
  c.beginPath(); c.moveTo(x - r * 0.45, y - r * 0.2); c.lineTo(x - r * 0.15, y - r * 0.05); c.lineTo(x - r * 0.42, y + r * 0.05); c.fill();
  c.beginPath(); c.moveTo(x + r * 0.45, y - r * 0.2); c.lineTo(x + r * 0.15, y - r * 0.05); c.lineTo(x + r * 0.42, y + r * 0.05); c.fill();
  c.beginPath(); c.moveTo(x - r * 0.5, y + r * 0.3); c.quadraticCurveTo(x, y + r * 0.75, x + r * 0.5, y + r * 0.3); c.quadraticCurveTo(x, y + r * 0.5, x - r * 0.5, y + r * 0.3); c.fill();
}
function pzCopo(c, x, y, r){
  c.save(); c.translate(x, y); c.lineWidth = Math.max(2, r * 0.12); c.lineCap = 'round';
  for(let i = 0; i < 6; i++){ c.rotate(Math.PI / 3); c.beginPath(); c.moveTo(0, 0); c.lineTo(0, r); c.moveTo(0, r * 0.55); c.lineTo(r * 0.25, r * 0.75); c.moveTo(0, r * 0.55); c.lineTo(-r * 0.25, r * 0.75); c.stroke(); }
  c.restore();
}
function pzFondo(c, w, h, a, b){ const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, a); g.addColorStop(1, b); c.fillStyle = g; c.fillRect(0, 0, w, h); }

const PZ_PLANTILLAS = [
  { id:'calabazas', nombre:'Calabazas', temas:['halloween'], dibujar(c, w, h){
      pzFondo(c, w, h, '#16111c', '#000'); const r = pzRng(7);
      for(let y = 120; y < h; y += 260) for(let x = (y / 260 % 2) * 120 + 90; x < w; x += 240) pzCalabaza(c, x + (r() - .5) * 40, y + (r() - .5) * 40, 62 + r() * 18);
      c.fillStyle = '#2a1240'; for(let i = 0; i < 9; i++) pzMurcielago(c, r() * w, r() * h, 1.2 + r());
  } },
  { id:'luna', nombre:'Noche de brujas', temas:['halloween'], dibujar(c, w, h){
      pzFondo(c, w, h, '#2a1240', '#07040c'); c.fillStyle = '#ffcf6a'; c.beginPath(); c.arc(w * 0.62, h * 0.32, w * 0.3, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#07040c'; const r = pzRng(3); for(let i = 0; i < 14; i++) pzMurcielago(c, r() * w, h * 0.12 + r() * h * 0.6, 1.4 + r() * 2.2);
      c.fillStyle = '#ff7a1a'; c.font = `900 ${w * 0.16}px Inter, Arial, sans-serif`; c.textAlign = 'center'; c.fillText('BOO!', w / 2, h * 0.86);
  } },
  { id:'black', nombre:'Camand Black', temas:['blackfriday'], dibujar(c, w, h){
      c.fillStyle = '#000'; c.fillRect(0, 0, w, h); c.strokeStyle = '#ffd60a'; c.lineWidth = 26;
      for(let i = -h; i < w + h; i += 120){ c.beginPath(); c.moveTo(i, 0); c.lineTo(i + h * 0.5, h); c.stroke(); }
      c.fillStyle = '#000'; c.fillRect(0, h * 0.4, w, h * 0.22); c.fillStyle = '#ffd60a';
      c.font = `900 ${w * 0.17}px Inter, Arial, sans-serif`; c.textAlign = 'center'; c.fillText('CAMAND', w / 2, h * 0.5); c.fillText('BLACK', w / 2, h * 0.585);
  } },
  { id:'nieve', nombre:'Nieve', temas:['navidad'], dibujar(c, w, h){
      pzFondo(c, w, h, '#c81d36', '#6d0b1b'); c.strokeStyle = 'rgba(255,255,255,.9)'; const r = pzRng(11);
      for(let i = 0; i < 46; i++) pzCopo(c, r() * w, r() * h, 18 + r() * 34);
  } },
  { id:'pinos', nombre:'Pinos', temas:['navidad'], dibujar(c, w, h){
      pzFondo(c, w, h, '#0f5132', '#062b1b'); const r = pzRng(5);
      for(let y = 200; y < h; y += 300) for(let x = (y / 300 % 2) * 110 + 110; x < w; x += 220){
        c.fillStyle = '#1f8a4c'; c.beginPath(); c.moveTo(x, y - 110); c.lineTo(x + 75, y + 60); c.lineTo(x - 75, y + 60); c.fill();
        c.fillStyle = '#ffd166'; c.beginPath(); c.arc(x, y - 112, 12, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#e0263b'; for(let k = 0; k < 3; k++){ c.beginPath(); c.arc(x + (r() - .5) * 80, y + (r() - .2) * 70 - 20, 8, 0, Math.PI * 2); c.fill(); }
      }
  } },
  { id:'corazones', nombre:'Corazones', temas:['amor', 'madres'], dibujar(c, w, h){
      pzFondo(c, w, h, '#ffd1e3', '#ff6fa0'); const r = pzRng(9);
      for(let i = 0; i < 34; i++){ c.fillStyle = r() > .5 ? '#ff4f8b' : '#ffffff'; pzCorazon(c, r() * w, r() * h, 26 + r() * 46); }
  } },
  { id:'flores', nombre:'Flores', temas:['madres', 'amor'], dibujar(c, w, h){
      pzFondo(c, w, h, '#fff1e6', '#f6c9a8'); const r = pzRng(13);
      for(let i = 0; i < 26; i++){ const x = r() * w, y = r() * h, s = 30 + r() * 40, col = ['#e45d8f', '#f59e0b', '#c084fc'][i % 3];
        c.fillStyle = col; for(let k = 0; k < 5; k++){ const a = k * Math.PI * 2 / 5; c.beginPath(); c.arc(x + Math.cos(a) * s * .6, y + Math.sin(a) * s * .6, s * .45, 0, Math.PI * 2); c.fill(); }
        c.fillStyle = '#ffd166'; c.beginPath(); c.arc(x, y, s * .32, 0, Math.PI * 2); c.fill(); }
  } },
  { id:'confeti', nombre:'Confeti', temas:['newyear'], dibujar(c, w, h){
      pzFondo(c, w, h, '#0b1220', '#1e3a8a'); const r = pzRng(17), cols = ['#2997ff', '#ffb02e', '#ffffff', '#ff4f8b'];
      for(let i = 0; i < 220; i++){ c.save(); c.translate(r() * w, r() * h); c.rotate(r() * Math.PI); c.fillStyle = cols[i % 4]; c.fillRect(-10, -4, 20 + r() * 16, 8); c.restore(); }
  } },
  { id:'degradado', nombre:'Degradado', temas:[], dibujar(c, w, h){
      pzFondo(c, w, h, '#12061f', '#12061f');
      [['#ff3d9a', .2, .2], ['#7b4ee6', .85, .25], ['#ffb02e', .3, .75], ['#22d3ee', .8, .85]].forEach(([col, x, y]) => {
        const g = c.createRadialGradient(x * w, y * h, 0, x * w, y * h, w * .75); g.addColorStop(0, col); g.addColorStop(1, 'rgba(18,6,31,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h); });
  } },
  { id:'lunares', nombre:'Lunares', temas:[], dibujar(c, w, h){
      c.fillStyle = '#111114'; c.fillRect(0, 0, w, h); c.fillStyle = '#f5f5f7';
      const paso = w / 9, rr = w * 0.018; let fila = 0;
      for(let y = paso / 2; y < h; y += paso, fila++) for(let x = (fila % 2) * paso / 2 + paso / 2; x < w; x += paso){ c.beginPath(); c.arc(x, y, rr, 0, Math.PI * 2); c.fill(); }
  } }
];
function pzPlantillaCanvas(p, w, h){ const cv = document.createElement('canvas'); cv.width = w; cv.height = h; p.dibujar(cv.getContext('2d'), w, h); return cv; }
function pzRenderPlantillas(){
  const cont = document.getElementById('pzPlantillas');
  if(!cont) return;
  const tm = window.TEMPORADA;
  const lista = PZ_PLANTILLAS.filter(p => !p.temas.length || (tm && p.temas.includes(tm.id)));
  lista.sort((a, b) => (b.temas.length > 0) - (a.temas.length > 0));
  cont.innerHTML = lista.map(p => {
    const mini = pzPlantillaCanvas(p, 90, 190).toDataURL('image/png');
    return `<button type="button" class="pz-plantilla" onclick="pzUsarPlantilla('${p.id}')" title="${tmEsc(p.nombre)}"><img src="${mini}" alt=""><span>${tmEsc(p.nombre)}</span></button>`;
  }).join('');
}
function pzUsarPlantilla(id){
  const p = PZ_PLANTILLAS.find(x => x.id === id);
  if(!p) return;
  const capa = PZ.capa || 0;
  const img = new Image();
  img.onload = () => {
    Object.assign(PZ.capas[capa], { img, zoom: 1, x: 0, y: 0 });
    document.getElementById(capa === 0 ? 'pzPhoneImg' : 'pzPhoneImg2').src = img.src;
    document.getElementById(capa === 0 ? 'pzUploadText' : 'pzUploadText2').innerHTML = `<b>Plantilla "${tmEsc(p.nombre)}"</b> · toca para subir tu foto`;
    pzSetError('');
    pzSetCapa(capa);
    camandTrack('usar_plantilla', { plantilla: id });
  };
  img.src = pzPlantillaCanvas(p, 900, 1930).toDataURL('image/jpeg', 0.92);
}
pzRenderPlantillas();
window.addEventListener('camand:temporada', pzRenderPlantillas);
