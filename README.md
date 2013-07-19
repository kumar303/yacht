# Private Yacht

This is an [open web app](https://developer.mozilla.org/en/Apps/)
that provides you with a virtual private yacht.
Set sail!

This is a demo of how to create a paid app for the Firefox Marketplace
and how to use the JavaScript receipt checking library to verify the receipt.
Check out the
[receipt verifier library](https://github.com/mozilla/receiptverifier)
for more info on how to use it. This app invokes the library in
[www/js/app.js](https://github.com/kumar303/yacht/blob/master/www/js/app.js).
This same JavaScript library can also be used server side via NodeJS. See below for
instructions on how to set that up.

The app is hosted right here on
[github pages](http://kumar303.github.com/yacht/)
(see [manifest.webapp](http://kumar303.github.com/yacht/manifest.webapp))
but you must pay for it on the
[Firefox Marketplace dev site](https://marketplace-dev.allizom.org/app/private-yacht/)
(no real money is used on the dev site).
In order to actually make a payment on the dev server you have to
[apply some webpay settings](https://github.com/mozilla/webpay#setting-up-desktop-b2g)
to your B2G device.

# WARNING

In a popular paid app you'd probably want to use a server side receipt checker.
In the Dev section below you'll find instructions for how to verify the receipts
in NodeJS from this repository.
There is also a
[Python library](http://receipts.readthedocs.org/en/latest/).
If you aren't using server side receipt checking
an attacker can run your app in an apps-enabled browser
(such as the nightly build of Firefox) and fiddle with the JavaScript
using the console to gain access to the app. This would be harder to do
on Android, a B2G phone, or similar open web device.
For full protection, you'd want to define `installs_allowed_from`
in `server.js` which will limit which stores can claim to issue a receipt for your
app.
There is an open bug ([770666](https://bugzilla.mozilla.org/show_bug.cgi?id=770666))
that will make the server whitelist more effective when fixed.

# Dev

First, make sure you clone the repo with all submodules:

    git clone --recursive git://github.com/kumar303/yacht.git

## Hosting on Github Pages

If you want to install the app to [github pages](http://pages.github.com/),
you can deploy it easily using [volo](https://github.com/volojs/volo).
Install the dependencies:

    npm install

Make sure the dependency bin dir is on your path:

    export PATH="./node_modules/.bin/:${PATH}"

Now you should be able to type the `volo` command.
Build the app like:

    volo build

Deploy it to github pages like:

    volo ghdeploy

This just automates the process of copying all your static files to the gh-pages
branch and pushing to github. You could also do that manually without volo.

## Hosting the NodeJS app

You can run the Private Yacht app from NodeJS to boost security with server side
receipt checks.

Set up your node environment:

    npm install

Start the dev server like this:

    npm start

Now you'll see the app running at [http://localhost:3000/](http://localhost:3000/)
and you can find the manifest at
[http://localhost:3000/yacht/manifest.webapp](http://localhost:3000/yacht/manifest.webapp).


# Mortar

The Private Yacht was built with [Mortar](http://jlongster.github.com/mortar).

"Mortar" is a code name for an Open Web App Bootstrap.
This project aims to make it easy and quick to start writing Open Wep Apps.

It's a combination of HTML5 tricks (HTML/CSS), js libraries, and
a little bit of management commands that make it really easy to write and deploy apps.

This should just be a template: you should download this and
hack it up to be whatever you like. You can delete or add as much stuff as you want.

View the official site [here](http://jlongster.github.com/mortar).

# html5boilerplate

This is a fork from the
[html5boilerplate](http://html5boilerplate.com/) project, and many of the HTML5
tricks come from there, so the appropriate authors deserve credit for those.

We don't need to target older browsers, however, so a bunch of IE 6/7
stuff has been removed and we've added things like marketplace libraries,
[require.js](http://requirejs.org/), and [volo](https://github.com/volojs/volo).
Any of those things can be simply ignored though.

h1. Back-end server

This is just a front-end template, but you'll most likely need to set up a
server for your app. I highly recommend the
[server-configs](https://github.com/h5bp/server-configs) project from the
h5b crew which provides really helpful templates for server configurations.
That should help you get set up quickly.

Apache's `.htaccess` file is already included here since that's the most popular.
