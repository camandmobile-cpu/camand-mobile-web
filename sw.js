// Service Worker mínimo para Camand Mobile.
//
// A propósito NO guarda en caché el catálogo, los precios ni los banners
// (vienen en vivo desde Google Sheets y siempre deben verse actualizados).
// Su único trabajo es cumplir el requisito técnico de los navegadores para
// ofrecer "Agregar a pantalla de inicio / Instalar" (además del manifest.json).
// Cada solicitud simplemente pasa directo a la red, como si este archivo
// no existiera.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => new Response('', { status: 504 })));
});
