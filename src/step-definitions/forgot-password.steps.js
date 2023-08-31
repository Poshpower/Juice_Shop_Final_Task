const { Then } = require("@wdio/cucumber-framework");


Then(/^I enter <email> in forgot email page$/, async function () {
    await this.forgotPasswordPage.inputEmail.waitForDisplayed();
    await this.forgotPasswordPage.inputEmail.setValue("sola9_89@mailinator.com");
})

Then(/^I click on security question field$/, async function () {
    await this.forgotPasswordPage.securityQuestion.waitForDisplayed();
    await this.forgotPasswordPage.securityQuestion.click();
})

Then(/^I see security <question>$/, async function () {
    await this.forgotPasswordPage.securityQuestion.waitForDisplayed();
    const myInput = this.forgotPasswordPage.securityQuestion;
    await expect(myInput).toHaveAttribute('placeholder', "Mother's maiden name?");
})

Then(/^I enter security question$/, async function () {
    await this.forgotPasswordPage.securityQuestion.waitForDisplayed();
    await this.forgotPasswordPage.securityQuestion.setValue("Abina")
})

Then(/^I enter new password and confirm$/, async function () {
    await this.forgotPasswordPage.inputPassword.waitForDisplayed();
    await this.forgotPasswordPage.inputPassword.setValue("asddfff");
    await this.forgotPasswordPage.inputPasswordRepeatedly.waitForDisplayed();
    await this.forgotPasswordPage.inputPasswordRepeatedly.setValue("asddfff");
    await this.forgotPasswordPage.buttonChange.waitForDisplayed();
    await this.forgotPasswordPage.buttonChange.click();
})

Then(/^I see message about succesfully changed password$/, async function () {
    await this.forgotPasswordPage.messageText.waitForDisplayed();
    await expect(this.forgotPasswordPage.messageText).toHaveTextContaining('Your password was successfully changed.')
})
