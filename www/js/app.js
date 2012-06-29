(function() {
    mozmarket.receipts.Prompter({
        storeURL: "https://marketplace-dev.allizom.org/en-US/app/private-yacht/",
        supportHTML: '<a href="mailto:kumar.mcmillan@gmail.com">email kumar.mcmillan@gmail.com</a>',
        verify: true,
        verifierOptions: {onlog: mozmarket.receipts.Verifier.consoleLogger}
    });
})();
