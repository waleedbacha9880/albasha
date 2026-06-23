const CACHE_NAME = 'al-basha-v1';
const urlsToCache = ['/albasha/', '/albasha/index.html', '/albasha/manifest.json'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
