# Private Yacht

This is an [open web app](https://developer.mozilla.org/en/Apps/)
that provides you with a virtual private yacht.
Set sail!

The app is hosted right here on
[github pages](http://kumar303.github.com/yacht/)
but you must pay
for it on the
[Mozilla Marketplace dev site](https://marketplace-dev.allizom.org/app/private-yacht/)
(no real money is used on the dev site).

This is a demo of how to create a paid app for the Mozilla Marketplace
and how to use the JavaScript receipt checking library to verify the receipt.
Check out the
[receipt verifier library](https://github.com/mozilla/receiptverifier)
for more info on how to use it. This app invokes the library in
[www/js/app.js](https://github.com/kumar303/yacht/blob/master/www/js/app.js).
This JavaScript library can be used server side via NodeJS. See below for
instructions on how to set that up.

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
However, an attacker could still fiddle with the JavaScript in this repo
and probably make the app work. If you introduce a strong server component
to your app (e.g. check the server periodically and possibly issue tokens)
you can mitigate this.

# Dev

First, make sure you clone the repo with all submodules:

`git clone --recursive git://github.com/kumar303/yacht.git`

## Hosting on Github Pages

If you want to install the app to [github pages](http://pages.github.com/),
you can deploy it easily using [volo](https://github.com/volojs/volo).
Install the executable locally:

`npm install -g volo`

Build the app like:

`volo build`

Deploy it to github pages like:

`volo ghdeploy`

This just automates the process of copying all your static files to the gh-pages
branch and pushing to github. You could also do that manually without volo.

## Hosting the NodeJS app

You can run the Private Yacht app from NodeJS to boost security with server side
receipt checks.

Set up your node environment:

`npm install`

Start the dev server like this:

`npm start`

Now you'll see the app running at [http://localhost:3000/](http://localhost:3000/).


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
