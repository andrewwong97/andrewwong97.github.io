// Kill-switch: replaces the old sw-precache worker. When a browser that still
// has the old worker installed fetches this file, the new worker activates,
// clears every cache, and unregisters itself — so subsequent page loads come
// from the network and pick up the current bundle.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
