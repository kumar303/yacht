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
  // Simulate how github pages serves the static files.
  res.redirect('/yacht/');
});

app.get('/yacht/', function (req, res) {
  // Swap out the generic index.html with one that
  // knows how to talk to the server side verifier.
  res.sendfile(media + '/server-index.html');
});

app.post('/yacht/verify', function (req, res) {
  var store = new Verifier({ onlog: console.log });
  var receipts = req.param('receipts');
  console.log(receipts);
  if (!receipts) {
    res.send('NO_RECEIPT', 400);
  } else {
    var app = {
      receipts: receipts.split(','),
      manifest: {
        installs_allowed_from: req.param('installs_allowed_from').split(',')
      }
    };
    store.verifyReceipts(app, function (verifier) {
      if (verifier.state.toString() === '[OK]') {
        console.log('Verification success!');
        res.send('OK', 200);
      } else {
        console.log('Verification failure!');
        res.send('INVALID', 403);
      }
    });
  }
});

app.configure(function() {
  app.use('/yacht', express.static(media));
});

var port = process.env['PORT'] || 3000;
app.listen(port);
console.log('Listening on port ' + port);
