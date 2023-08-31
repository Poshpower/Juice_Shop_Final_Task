const { Then } = require("@wdio/cucumber-framework");

Then(/^I open landing page$/, async function () {
    await browser.url('');
    await this.basePage.buttonCloseWelcomeBanner.waitForDisplayed();
    await this.basePage.buttonCloseWelcomeBanner.click();
    await this.basePage.buttonDismissCookies.waitForDisplayed();
    await this.basePage.buttonDismissCookies.click();
    await this.basePage.snackBarLanguageChange.waitForDisplayed({ reverse: true });
})

Then(/^I press on Account button$/, async function () {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
})

Then(/^I press log in$/, async function () {
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
})

Then(/^I am on login page$/, async function () {
    await this.loginPage.waitForLoad();
})

Then(/^I press forgot password$/, async function () {
    await this.loginPage.linkForgotPassword;
})


Then(/^I press not yet a customer$/, async function () {
    await this.loginPage.linkRegister.waitForDisplayed();
    await this.loginPage.linkRegister.click();
})

Then(/^I click on 'Orders and Payment' option$/, async function () {
    await this.basePage.buttonOrdersAndPayment.waitForDisplayed();
    await this.basePage.buttonOrdersAndPayment.click();
})

Then(/^I click on 'Orders and Payment' option again$/, async function () {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonOrdersAndPayment.waitForDisplayed();
    await this.basePage.buttonOrdersAndPayment.click();
})

Then(/^I click on 'My payment Options' option$/, async function () {
    await this.basePage.buttonMyPaymentOptions.waitForDisplayed();
    await this.basePage.buttonMyPaymentOptions.click();

})

Then(/^I click on 'My Saved Addresses' option$/, async function () {
    await this.basePage.buttonMySavedAddresses.waitForDisplayed();
    await this.basePage.buttonMySavedAddresses.click();
})

Then(/^I click on new Address button$/, async function () {
    await this.savedAddressesPage.buttonAddAddresses.waitForDisplayed();
    await this.savedAddressesPage.buttonAddAddresses.click();
})

Then(/^I am in register page$/, async function () {
    await console.log("Step - I am in register page");
})

Then(/^I am in order completion page$/, async function () {

    await console.log("Step - I am in order completion page");
})

Then(/^I have logged out$/, async function () {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
})
