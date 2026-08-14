self.addEventListener("install", function() {
    console.log("Massup installé");
});

self.addEventListener("fetch", function(event) {
    event.respondWith(fetch(event.request));
});
