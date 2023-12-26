const CACHE_NAME = "version-1"
const urlsTocache = ['index.html', 'offline.html'];

// install serviceworker
self.addEventListener("install", (event) =>
{
        event.waitUntil(
                caches.open(CACHE_NAME)
                        .then((cache) =>
                        {
                                console.log("opened cache")
                                return cache.addAll(urlsTocache)
                        }))
}

)

// listen for requests
self.addEventListener("fetch", (event) =>
{
        event.respondWith(
                caches.match(event.request)
                        .then(() =>
                        {
                                return fetch(event.request)
                                        .catch(() => caches.match("offline.html"))
                        })
        )
})
// Activate serviceworker
self.addEventListener('activate', (event) =>
{
        const cacheNameWhiteList = [];
        cacheNameWhiteList.push(CACHE_NAME)

        event.waitUntil(
                caches.keys.then((cacheNames) => Promise.all(
                        cacheNames.map((cacheName) =>
                        {
                                if (!cacheNameWhiteList.includes(cacheName))
                                {
                                        return caches.delete(cacheName)
                                }
                        })
                ))
        )
})