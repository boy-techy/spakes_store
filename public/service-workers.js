console.log("File execution");
let cacheName = "static-v1";

const filesToCache = [
    '/',
    'static/media/fontawesome-webfont.af7ae505.woff2',
    'static/js/bundle.js',
    'static/media/background.7ab85542.jpg'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache)
        })
    );
});

const removeUnusedCache = () => {
    caches.keys().then(function (cacheNames) {
        return Promise.all(
            cacheNames.map(function (cacheName) {
                if (filesToCache.indexOf(cacheName) === -1) {
                    return caches.delete(cacheName);
                }
            })
        );
    })
};

self.addEventListener('activate', function (event) {
    // event.waitUntil(removeUnusedCache());
    console.log("Activate hook", self);
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                return cachedResponse || fetch(event.request).then(fetchResponse => {
                    // cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });

            })
        })
    );
});