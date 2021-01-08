if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          // 登録成功
          console.log('ServiceWorker 登録成功: ', registration.scope);
        })
        .catch(function(err) {
          // 登録失敗 :(
          console.log('ServiceWorker 登録失敗: ', err);
        });
    });
  }