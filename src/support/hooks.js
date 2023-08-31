const {Before, After} = require('@wdio/cucumber-framework');

Before(async (scenario) => {
    await browser.reloadSession();
    // await browser.maximizeWindow();
})

After(async (scenario) => {
    browser.closeWindow();

})