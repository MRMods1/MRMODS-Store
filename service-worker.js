const CACHE_NAME = 'mrmods-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://yt3.googleusercontent.com/S9OBrJ-3VPK8kmNAOe7FktIe8SolU_zDRkDgBQTLuJNFeQUEzrfW3QmV9vlDzj_XU-Ildj4euMU=s160-c-k-c0x00ffffff-no-rj'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
