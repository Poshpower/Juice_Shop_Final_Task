const {Then} = require("@wdio/cucumber-framework");


Then(/^I have logged in$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
    await this.loginPage.waitForLoad();
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue('sola9_89@mailinator.com');
    await this.loginPage.inputPassword.waitForDisplayed();
    await this.loginPage.inputPassword.setValue('asddfff');
    await this.loginPage.buttonLogin.waitForDisplayed();
    await this.loginPage.buttonLogin.click();
    await this.basePage.buttonBasket.waitForDisplayed();
})
