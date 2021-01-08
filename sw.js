self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('cache-v1')
        .then(function(cache) {
          return cache.addAll([
            '/',
            'index.html',
            'player.js',
            'styles.css',
            'app.js',
            'aup.png'
          ]);
        })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // キャッシュがあったのでレスポンスを返す
          if (response) {
            return response;
          }
          // キャッシュがなかったので通常の fetch を行う
          // 重要：リクエストはストリームであり、1度しか読み取れないため複製します。
          // ブラウザーのフェッチに加え、キャッシュで使用するため2つ必要になります。
          var fetchRequest = event.request.clone();
          return fetch(fetchRequest)
            .then(
              function(response) {
                // 有効な応答を受信したかどうかを確認します
                if(!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }
                // 有効な応答を受信したようなので、キャッシュに追加していきます。
                // 重要：リクエストと同様の理由により、レスポンスも複製します。
                var responseToCache = response.clone();
                caches.open('cache-v1')
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });
                  return response;
              }
            );
          }
        )
    );
  });
  
  self.addEventListener('activate', function(event) {
    var cacheKeeplist = ['cache-v2'];
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });