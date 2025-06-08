const CACHE_NAME = 'my-pwa-cache-v1';
// const URLS_TO_CACHE = [
//     '/',
//     '/index.html',
//     '/card.html',
//     '/weakWordList.html',
//     '/wordList.html',
//     '/style/style.css',
//     '/style/card.css',
//     '/style/index.css',
//     '/style/wordList.css',
//     '/script/words.js',
//     '/script/card/main.js',
//     '/script/weakWordList/main.js',
//     '/script/wordList/main.js',
//     '/registration.js'
// ];

const URLS_TO_CACHE = [
    '/',
    '/target1900_cache_test/index.html',
    '/target1900_cache_test/card.html',
    '/target1900_cache_test/weakWordList.html',
    '/target1900_cache_test/wordList.html',
    '/target1900_cache_test/style/style.css',
    '/target1900_cache_test/style/card.css',
    '/target1900_cache_test/style/index.css',
    '/target1900_cache_test/style/wordList.css',
    '/target1900_cache_test/script/words.js',
    '/target1900_cache_test/script/card/main.js',
    '/target1900_cache_test/script/weakWordList/main.js',
    '/target1900_cache_test/script/wordList/main.js',
    '/target1900_cache_test/registration.js'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(resp => {
            return resp || fetch(event.request);
        })
    );
});