// Prior builds registered a service worker (service-worker.js at the site
// root) that precached specific webpack chunks. Those chunk names change on
// every build, so returning visitors would get stuck on stale bundles.
// CRA 5 no longer emits a service-worker.js, so this module now just
// unregisters any previously registered worker and clears its caches.
export default function unregister() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((r) => r.unregister());
  });
  if (window.caches && caches.keys) {
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
  }
}
