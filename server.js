var express = require('express');
var Verifier = require('receiptverifier').receipts.Verifier;
var app = express();
var media = __dirname + '/www';

app.configure(function() {
  app.use(express.logger({format: 'dev'}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.get('/', function (req, res) {
  res.sendfile(media + '/server-index.html');
});

app.post('/verify', function (req, res) {
  var store = new Verifier({ onlog: console.log });

  // Log the request body.
  console.log(req.body);
  store.verifyReceipts(req.body, function (verifier) {
    if (verifier.state.toString() === '[OK]') {
      console.log('Verification success!');
      res.send('OK', 200);
    } else {
      console.log('Verification failure!');
      res.send('INVALID', 403);
    }
  });
});

app.configure(function() {
  app.use(express.static(media));
});

var port = process.env['PORT'] || 3000;
app.listen(port);
console.log('Listening on port ' + port);
