const CACHE_NAME = "task-manager-v2";

const ASSETS_TO_CACHE = [
  "/",
  "index.html",
  "pages/explore.html",
  "pages/flashcard.html",
  "pages/study.html",
  "css/styles.css",
  "css/materialize.min.css",
  "js/materialize.min.js",
  "js/ui.js",
  "img/code.jpg",
  "img/cs.jpg",
  "img/csci-331.jpg",
  "img/csci-663.webp",
  "img/geo.jpg",
  "img/inf-360.png",
  "img/inf-652.jpg",
  "img/inf-654.jpg",
  "img/info.png",
  "img/web.jpg",
];

self.addEventListener("install", (event) => {
  console.log("Service worker: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service worker: caching files");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("service Worker: Deleting old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching...", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});