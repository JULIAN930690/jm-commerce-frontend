const CACHE_NAME = "mi-mercado-cache-v1.2";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/offline.html",
  "/logo192.png",
  "/favicon.ico",
  "/promo-ropa.jpg",
  "/promo-celulares.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match("/offline.html").then(response =>
          response ||
          new Response("<h1>Offline</h1><p>Contenido no disponible.</p>", {
            headers: { "Content-Type": "text/html" }
          })
        )
      )
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response =>
        response ||
        fetch(event.request).catch(() => {
          if (event.request.destination === "image") {
            return caches.match("/logo192.png");
          }
          return new Response("Recurso no disponible", {
            status: 503,
            statusText: "Service Unavailable"
          });
        })
      )
    );
  }
});
