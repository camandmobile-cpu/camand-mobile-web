// Genera una página real por producto (camandmobile.com/producto/<slug>/)
// a partir de la pestaña CATALOGO PAGINA de la Hoja de Google, más el
// sitemap.xml. Así Google puede indexar cada producto por separado.
// Lo corre GitHub Actions cada día (.github/workflows/productos.yml); no
// hay que ejecutarlo a mano. Node 20+, sin dependencias.
import { mkdir, rm, writeFile, readFile } from 'node:fs/promises';

const SITIO = 'https://camandmobile.com';
const WHATSAPP = '573122265799';
const GA_ID = 'G-DDZ8LL1MTK';      // Google Analytics 4 (mismo de index.html)
const META_PIXEL = '1601620134984140'; // Pixel de Meta (mismo de js/campanas.js)
// Mismo link CSV que usa index.html (SHEET_CSV_URL). Si lo cambias allá, cámbialo aquí.
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVTMXRy1SKrWUR512KBjjWJ0__CcP5g19K2QK7YfVSr5FBeH8PZHMxBAeCKdxQuawOgi-IjsfF4Pvp/pub?gid=1802395348&single=true&output=csv';

function parseCSV(texto){
  const filas = []; let fila = [], campo = '', comillas = false;
  for(let i = 0; i < texto.length; i++){
    const c = texto[i];
    if(comillas){
      if(c === '"' && texto[i + 1] === '"'){ campo += '"'; i++; }
      else if(c === '"') comillas = false;
      else campo += c;
    } else if(c === '"') comillas = true;
    else if(c === ',') { fila.push(campo); campo = ''; }
    else if(c === '\n' || c === '\r'){
      if(c === '\r' && texto[i + 1] === '\n') i++;
      fila.push(campo); filas.push(fila); fila = []; campo = '';
    } else campo += c;
  }
  if(campo !== '' || fila.length){ fila.push(campo); filas.push(fila); }
  const cab = (filas.shift() || []).map(k => k.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ''));
  return filas.filter(f => f.some(v => String(v).trim())).map(f => Object.fromEntries(cab.map((k, i) => [k, f[i] ?? ''])));
}
// Igual que parsearPrecio() de index.html.
function parsearPrecio(valor){
  let t = String(valor || '').trim().replace(/[^\d.,]/g, '');
  if(!t) return 0;
  const pc = t.lastIndexOf(','), pp = t.lastIndexOf('.');
  let dec = null;
  if(pc > -1 && pp > -1) dec = pc > pp ? ',' : '.';
  else if(pc > -1 || pp > -1){
    const sep = pc > -1 ? ',' : '.', pos = pc > -1 ? pc : pp;
    const rep = t.indexOf(sep) !== t.lastIndexOf(sep), desp = t.length - pos - 1;
    if(!rep && desp > 0 && desp <= 2) dec = sep;
  }
  const entero = dec ? t.slice(0, t.lastIndexOf(dec)) : t;
  return Number(entero.replace(/[^\d]/g, '')) || 0;
}
// Igual que camandSlug() de index.html: nombre (con almacenamiento) + condición.
const slug = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90);
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cop = n => '$' + Math.round(n).toLocaleString('es-CO');
const img = (url, w) => /res\.cloudinary\.com\/.+\/upload\//i.test(url) ? url.replace(/\/upload\//i, `/upload/w_${w},q_auto,f_auto,c_limit/`) : url;

// Corrige tildes frecuentes que vienen sin acento en la Hoja (igual que fixSpecTildes de js/tienda.js).
const tildes = t => String(t).replace(/\banos\b/g,'años').replace(/\bcamara(s?)\b/gi,(x,pl)=>(x[0]==='C'?'C':'c')+'ámara'+pl)
  .replace(/\bbateria\b/gi,x=>(x[0]==='B'?'B':'b')+'atería').replace(/\bautonomia\b/gi,x=>(x[0]==='A'?'A':'a')+'utonomía');

function pagina(p){
  const titulo = `${p.nombre}${p.cond ? ' ' + p.cond : ''} | Camand Mobile Bogotá`;
  const desc = `Compra ${p.nombre}${p.cond ? ' ' + p.cond.toLowerCase() : ''} por ${cop(p.precio)} en Camand Mobile. Entrega en 1 a 2 días hábiles, envíos a toda Colombia. Paga contraentrega, con tarjeta a cuotas o Sistecrédito.`;
  const url = `${SITIO}/producto/${p.slug}/`;
  const tienda = `/#/p/${p.slug}`;
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola Camand Mobile, quiero comprar: ${p.nombre}${p.cond ? ' (' + p.cond + ')' : ''} — ${cop(p.precio)}`)}`;
  const ld = {
    '@context': 'https://schema.org', '@type': 'Product', name: p.nombre, description: p.esp ? tildes(p.esp) : desc,
    image: p.imagenes.length ? p.imagenes : undefined, brand: p.marca ? { '@type': 'Brand', name: p.marca } : undefined,
    itemCondition: /nuevo/i.test(p.cond) && !/semi/i.test(p.cond) ? 'https://schema.org/NewCondition' : (p.cond ? 'https://schema.org/RefurbishedCondition' : undefined),
    offers: { '@type': 'Offer', url, priceCurrency: 'COP', price: p.precio, availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Camand Mobile' } }
  };
  const specs = [p.cond, p.alm, p.ram && p.ram + ' RAM', p.cam, p.bat].filter(Boolean);
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titulo)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${url}">
<meta property="og:type" content="product"><meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}">
${p.imagenes[0] ? `<meta property="og:image" content="${esc(img(p.imagenes[0], 1200))}">` : ''}
<link rel="icon" href="/img/camand-logo.png">
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());
var cmC=null;try{cmC=JSON.parse(localStorage.getItem('camand_cookie_consent_v1')||'null');}catch(e){}
gtag('consent','default',{analytics_storage:cmC&&cmC.analytics?'granted':'denied',ad_storage:'denied'});
gtag('config','${GA_ID}');</script>
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
<style>body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif;background:#fbfbfd;color:#1d1d1f}a{color:inherit}
.top{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#fff;border-bottom:1px solid #eee}.top img{height:30px}
main{max-width:1000px;margin:0 auto;padding:28px 20px 60px;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
@media(max-width:760px){main{grid-template-columns:1fr}}.foto{background:#f5f5f7;border-radius:24px;padding:24px;display:flex;justify-content:center}
.foto img{max-width:100%;max-height:440px;object-fit:contain}h1{font-size:clamp(26px,4vw,40px);letter-spacing:-.03em;margin:0 0 12px}
.specs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 16px}.specs span{font-size:13px;font-weight:600;background:#fff;border:1px solid #e5e5ea;border-radius:100px;padding:5px 10px}
.precio{font-size:34px;font-weight:800;margin:0 0 6px}.antes{color:#a1a1a6;text-decoration:line-through;font-size:18px;margin-right:8px}
p.info{color:#6e6e73;line-height:1.5}.btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.b{display:inline-block;padding:14px 22px;border-radius:100px;font-weight:700;text-decoration:none}.b1{background:#1d1d1f;color:#fff}.b2{border:1.5px solid #1d1d1f}
footer{text-align:center;color:#6e6e73;font-size:13px;padding:24px}
.ck{position:fixed;left:12px;right:12px;bottom:12px;max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e5ea;border-radius:16px;padding:14px 16px;box-shadow:0 10px 30px rgba(0,0,0,.12);font-size:13px;color:#424245;display:none}
.ck b{color:#1d1d1f}.ck div{display:flex;gap:8px;margin-top:10px;justify-content:flex-end}.ck button{border:1.5px solid #1d1d1f;background:#fff;border-radius:100px;padding:8px 16px;font-weight:700;cursor:pointer}.ck button.ok{background:#1d1d1f;color:#fff}</style></head><body>
<div class="top"><a href="/"><img src="/img/camand-logo.png" alt="Camand Mobile"></a><a href="/">Ver toda la tienda →</a></div>
<main><div class="foto">${p.imagenes[0] ? `<img src="${esc(img(p.imagenes[0], 900))}" alt="${esc(p.nombre)}">` : ''}</div>
<div><h1>${esc(p.nombre)}</h1>${specs.length ? `<div class="specs">${specs.map(s => `<span>${esc(s)}</span>`).join('')}</div>` : ''}
<p class="precio">${p.antes > p.precio ? `<span class="antes">${cop(p.antes)}</span>` : ''}${cop(p.precio)}</p>
<p class="info">Entrega en 1 a 2 días hábiles. Envíos a Bogotá y a toda Colombia. Paga contraentrega, con tarjeta de crédito a cuotas, transferencia o Sistecrédito.</p>
${p.esp ? `<p class="info">${esc(tildes(p.esp))}</p>` : ''}
<div class="btns"><a class="b b1" href="${tienda}">Comprar en la tienda</a><a class="b b2" href="${wa}" rel="noopener">Preguntar por WhatsApp</a></div></div></main>
<footer>Camand Mobile · Tienda virtual en Bogotá · <a href="/">camandmobile.com</a> · <a href="/#/privacidad">Privacidad</a></footer>
<div class="ck" id="ck"><b>Usamos cookies de análisis</b> (Google Analytics y Meta) para entender cómo se usa la tienda. Puedes aceptarlas o rechazarlas. <a href="/#/privacidad">Más información</a>.<div><button type="button" onclick="ckSet(false)">Rechazar</button><button type="button" class="ok" onclick="ckSet(true)">Aceptar</button></div></div>
<script>
function ckPixel(){if(window.fbq)return;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL}');fbq('track','PageView');fbq('track','ViewContent',{content_name:${JSON.stringify(p.nombre).replace(/</g, '\\u003c')},value:${p.precio},currency:'COP'});}
function ckSet(a){try{localStorage.setItem('camand_cookie_consent_v1',JSON.stringify({analytics:a,ts:Date.now()}));}catch(e){}gtag('consent','update',{analytics_storage:a?'granted':'denied'});document.getElementById('ck').style.display='none';if(a)ckPixel();}
if(!cmC)document.getElementById('ck').style.display='block';else if(cmC.analytics)ckPixel();
gtag('event','ver_producto',{origen:'pagina_google',producto:${JSON.stringify(p.nombre).replace(/</g, '\\u003c')}});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;if(a.href.indexOf('wa.me/')>-1){gtag('event','clic_whatsapp',{origen:'pagina_google'});if(window.fbq)fbq('track','Contact');}else if(a.classList.contains('b1')){gtag('event','ir_a_tienda',{origen:'pagina_google'});}},true);
</script></body></html>`;
}

async function main(){
  const texto = process.env.CSV_FILE ? await readFile(process.env.CSV_FILE, 'utf8') : await (await fetch(CSV_URL)).text();
  const filas = parseCSV(texto);
  if(!filas.length || !('nombre' in filas[0])) throw new Error('La Hoja no trajo la columna NOMBRE; no se toca nada.');
  const productos = [], vistos = new Set();
  for(const f of filas){
    if(String(f.disponible || '').trim().toLowerCase() === 'no') continue;
    const base = String(f.nombre || '').trim(), precio = parsearPrecio(f.precio);
    if(!base || !precio) continue;
    const alm = String(f.almacenamiento || '').trim(), cond = String(f.condicion || '').trim();
    const nombre = alm ? `${base} — ${alm}` : base;
    const s = slug(nombre + ' ' + cond);
    if(!s || vistos.has(s)) continue;
    vistos.add(s);
    productos.push({ slug: s, nombre, cond, alm, precio, antes: parsearPrecio(f.precioantes),
      marca: /iphone/i.test(base) ? 'Apple' : String(f.subcategoria || '').trim(),
      ram: String(f.ram || '').trim(), cam: String(f.camara || '').trim(), bat: String(f.bateria || '').trim(),
      esp: String(f.especificaciones || '').trim(),
      imagenes: String(f.imagen || '').split(/[,|]/).map(x => x.trim()).filter(x => /^https?:\/\//i.test(x)) });
  }
  if(productos.length < 5) throw new Error(`Solo ${productos.length} productos; parece un error de la Hoja, no se toca nada.`);
  await rm('producto', { recursive: true, force: true });
  for(const p of productos){
    await mkdir(`producto/${p.slug}`, { recursive: true });
    await writeFile(`producto/${p.slug}/index.html`, pagina(p));
  }
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = [`${SITIO}/`, ...productos.map(p => `${SITIO}/producto/${p.slug}/`)];
  await writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${hoy}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  console.log(`Listo: ${productos.length} páginas de producto + sitemap.xml`);
}
main().catch(e => { console.error(e.message); process.exit(1); });
