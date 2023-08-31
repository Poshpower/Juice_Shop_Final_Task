const BasePage = require("../common/base.page");

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get inputEmail() {
        // return browser.$('//input[@id="email"]');
        return browser.$('#email');
    }

    get inputPassword() {
        // return browser.$('//input[@id="password"]');
        return browser.$('#password');
    }

    get buttonLogin() {
        return browser.$('button#loginButton');
    }

    get linkForgotPassword() {
        return browser.url("http://159.65.199.191/forgot-password#/forgot-password");
    }

    get linkRegister() {
        return browser.$('//a[@href="#/register"]');
    }

    async waitForLoad() {
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.buttonLogin.waitForDisplayed();
        await this.linkRegister.waitForDisplayed();

    }
}

module.exports = LoginPage;