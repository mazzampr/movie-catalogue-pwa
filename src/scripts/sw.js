self.addEventListener('install', (event) => {
    console.log('Installing service worker...');

    //TODO: Chacing App shell resource
});

self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker...');

    //TODO: Delete old chaces
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));

    // TODO: Add/get fetch request to/from resource
});