var express = require('express');
var Verifier = require('receiptverifier').receipts.Verifier;
var app = express();
var media = __dirname + '/www';

/*
 * Array of absolute URLs to stores that can issue receipts for your app.
 *
 * Example:
 * installs_allowed_from = ['https://marketplace.firefox.com',
 *                          'https://marketplace-dev.allizom.org']
 *
 * If you don't specify this then the value of the app manifest
 * will be fetched from the client running your app.
 * If you rely on the client
 * then an attacker could hack the client code and issue a fake
 * receipt at a fake domain with a verifier URL that does nothing.
 *
 * */
var installs_allowed_from;

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
  var store = new Verifier({
    onlog: console.log,
    // If this is set it will override the same value from the
    // app manifest. Use this to protect against fraud (see above).
    installs_allowed_from: installs_allowed_from
  });
  var receipts;
  try {
    receipts = req.body.receipts;
  } catch (er) {
    console.log('Error checking receipts: ' + er.toString());
    res.send('BAD_REQUEST', 400);
  }
  if (receipts) {
    store.verifyReceipts(req.body, function (verifier) {
      if (verifier.state.toString() === '[OK]') {
        console.log('Verification success!');
        res.send('OK', 200);
      } else {
        console.log('Verification failure!');
        res.send('PAYMENT_REQUIRED', 402);
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
