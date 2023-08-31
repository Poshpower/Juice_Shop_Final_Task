const BasePage = require("../common/base.page");

class RegisterPage extends BasePage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1[text()="User Registration"]');
    }

    get inputEmail() {
        return browser.$('//input[@id="emailControl"]');
    }

    get inputPassword() {
        return browser.$('//input[@id="passwordControl"]');
    }
    get inputPasswordConfirm() {
        return browser.$('//input[@id="repeatPasswordControl"]');
    }

    get switchShowPasswordAdvice() {
        return browser.$('//span[@class="mat-slide-toggle-content"]');
    }

    get selectionSecurityQuestion() {
        return browser.$('//mat-select[@name="securityQuestion"]');
    }

    get inputAnswer() {
        return browser.$('//input[@id="securityAnswerControl"]');
    }
    get buttonRegister() {
        return browser.$('button#registerButton');
    }
    get linkLogin() {
        return browser.$('#alreadyACustomerLink a[href="#/login"]');
    }

    get errorText() {
        return browser.$('//div[text()="Email must be unique"]');
    }

    async securityQeustionOption(option) {
        return browser.$(`//span[@class="mat-option-text"][contains(text(),"${option}")]`);
    }
}

module.exports = RegisterPage;