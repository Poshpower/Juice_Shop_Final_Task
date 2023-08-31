const BasePage = require("../common/base.page");


class ForgotPasswordPage extends BasePage {
    constructor() {
        super();
    }

    get inputEmail() {
        return browser.$('//input[@id="email"]');

    }

    get securityQuestion() {
        return browser.$('#securityAnswer');
    }

    get inputPassword() {
        return browser.$('//input[@id= "newPassword"]');
    }

    get inputPasswordRepeatedly() {
        return browser.$('//input[@id= "newPasswordRepeat"]');
    }

    get buttonChange() {
        return browser.$('//button[@id="resetButton"]');
    }

    get messageText() {
        return browser.$('//div[@class="confirmation"]');
    }

    async waitForLoad() {
        await this.inputEmail.waitForDisplayed();
        await this.securityQuestion.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.inputPasswordRepeatedly.waitForDisplayed();
        await this.buttonChange.waitForDisplayed();
    }
}
module.exports = ForgotPasswordPage;

