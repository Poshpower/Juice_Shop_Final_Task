const { Then } = require("@wdio/cucumber-framework");


Then(/^I enter email address$/, async function () {
    await this.registerPage.inputEmail.waitForDisplayed();
    await this.registerPage.inputEmail.setValue('sola9_89@mailinator.com');
})

Then(/^I enter password$/, async function () {
    await this.registerPage.inputPassword.waitForDisplayed();
    await this.registerPage.inputPassword.setValue('Tester@1');
})

Then(/^I enter password reapeatedly$/, async function () {
    await this.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.registerPage.inputPasswordConfirm.setValue('Tester@1');
})

Then(/^I select security question about elder sibling$/, async function () {
    await this.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestion.click();

    let element = await this.registerPage.securityQeustionOption('eldest siblings middle name');
    await element.waitForDisplayed();
    await element.click();
})

Then(/^I enter answer$/, async function () {
    await this.registerPage.inputAnswer.waitForDisplayed();
    await this.registerPage.inputAnswer.setValue('pppppp');
})

Then(/^I press register button$/, async function () {
    await this.registerPage.buttonRegister.waitForDisplayed();
    await this.registerPage.buttonRegister.click();
})

Then(/^I see message about email must be unique$/, async function () {
    await this.registerPage.errorText.waitForDisplayed();
    await expect(this.registerPage.errorText).toHaveTextContaining('Email must be unique')
})

Then(/^I have registered account$/, async function () {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
    await this.loginPage.linkRegister.waitForDisplayed();
    await this.loginPage.linkRegister.click();
    await this.registerPage.inputEmail.waitForDisplayed();
    await this.registerPage.inputEmail.setValue('sola9_89@mailinator.com');
    await this.registerPage.inputPassword.waitForDisplayed();
    await this.registerPage.inputPassword.setValue('Tester@1');
    await this.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.registerPage.inputPasswordConfirm.setValue('Tester@1');
    await this.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestion.click();

    let element = await this.registerPage.securityQeustionOption('eldest siblings middle name');
    await element.waitForDisplayed();
    await element.click();
    await this.registerPage.inputAnswer.waitForDisplayed();
    await this.registerPage.inputAnswer.setValue('pppppp');
    await this.registerPage.buttonRegister.waitForDisplayed();
    await this.registerPage.buttonRegister.click();
})

