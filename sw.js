self.addEventListener('fetch', function(e) {
    // ここは空でもOK
  })

  // ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12345'
  },
  { 
　url: '/player.js',
    revision: '12345'
  },
])