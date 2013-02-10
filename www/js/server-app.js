(function() {
  if (navigator.mozApps) {
    var result = navigator.mozApps.getSelf();
    result.onsuccess = function () {
      if (this.result) {
        $.post('/verify', this.result)
         .done(function() {
           $('#app-disabled').remove();
         })
         .fail(function() {
           console.log('App disabled: Failed to verify receipt on the server');
         });
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
