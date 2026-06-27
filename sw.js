const CACHE='mibiblia-v23';
const ASSETS=['./','./index.html','./plan.js','./plan_full_a.js','./plan_full_b.js','./plan_full_c.js','./plan_full_guides.js','./bible.json','./bible_index.json','./manifest.json','./icon-192.png','./icon-512.png','./icon-192-maskable.png','./icon-512-maskable.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{
      if(e.request.method==='GET' && e.request.url.startsWith(self.location.origin)){
        const copy=resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy));
      }
      return resp;
    }).catch(()=>caches.match('./index.html')))
  );
});
