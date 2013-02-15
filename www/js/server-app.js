(function() {
  if (navigator.mozApps) {
    var result = navigator.mozApps.getSelf();

    result.onsuccess = function () {
      if (this.result && this.result.receipts) {
        var app = {};
        // Make the App object into something we can JSONify.
        for (var attr in this.result) {
          app[attr] = this.result[attr];
        }

        var req = new XMLHttpRequest();
        req.onload = function() {
          if (this.status == 200) {
            console.log('OK ' + this.responseText);
            // The receipt is valid! Remove the disabled banner.
            // Pro tip: on a real paid app you'd probably want to be more
            // clever here like load premium content from the server.
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
        req.setRequestHeader("Content-type", "application/json");
        req.send(JSON.stringify(app));

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
