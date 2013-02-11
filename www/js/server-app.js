(function() {
  if (navigator.mozApps) {
    var result = navigator.mozApps.getSelf();
    result.onsuccess = function () {
      if (this.result && this.result.receipts) {
        var req = new XMLHttpRequest();
        req.onload = function() {
          if (this.status == 200) {
            console.log('OK ' + this.responseText);
            var el = document.getElementById('app-disabled');
            el.parentNode.removeChild(el);
          } else {
            console.log('Failed: code: ' + this.status + ' response: ' + this.responseText);
          }
        };
        req.onerror = function() {
          console.log('App disabled: Failed to verify receipt on the server');
        }
        req.open('POST', '/yacht/verify', true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send('receipts=' + this.result.receipts.join(',') +
                 '&installs_allowed_from=' + this.result.manifest.installs_allowed_from.join(','));
      } else {
        console.log('App disabled: no receipt on device');
      }
    };
    result.onerror = function () {
      console.log('App disabled: getSelf() failed: ' + (this.error && this.error.name));
    };
  } else {
    console.log('App disabled: navigator.mozApps was not defined');
  }
})();
