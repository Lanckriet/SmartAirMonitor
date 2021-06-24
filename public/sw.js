"use strict";

const CACHE_NAME = "air-monitor-cache-v1";
const FILES_TO_CACHE = ["/index-offline.html", "/css/reset.css", "/css/screen.css", "js/main.js", "js/colour.js"];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(Cache => {
            return Cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", e => {
        e.respondWith(
            fetch(e.request)
                .catch(() => {
                    return caches.open(CACHE_NAME).then(cache => {
                        return cache.match(e.request).then(response => {
                            if (response) {
                                return response;
                            } else {
                                return cache.match("/index-offline.html");
                            }
                        })
                    });
                })
        );
    });

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (CACHE_NAME !== cacheName && cacheName.startsWith("air-monitor-cache")) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});