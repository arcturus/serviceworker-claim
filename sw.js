importScripts('bower_components/serviceworkerware/dist/sww.js');

var worker = new ServiceWorkerWare();

// Just for logging purposes
worker.use(function(req, res) {
  console.log('SWW:: Requesting url ' + req.url);
  return null;
});

// Claim!
worker.use({
  onActivate: function(e) {
    e.waitUntil(self.clients.claim());
  }
});

worker.init();
