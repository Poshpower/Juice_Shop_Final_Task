const BasePage = require("../common/base.page");

class PaymentOptionPage extends BasePage {
    constructor() {
        super();
    }

    get buttonAddNewCard() {
        return browser.$('//mat-expansion-panel-header[@id="mat-expansion-panel-header-0"]');
    }

    get inputName() {
        return browser.$('//mat-label[text()="Name"]/ancestor::mat-form-field//input');
    }

    get inputCardNumber() {
        return browser.$('//mat-label[text()="Card Number"]/ancestor::mat-form-field//input');
    }

    get selectExpiryMonth() {
        // return browser.$('//mat-label[text()="Expiry Month"]/ancestor::mat-form-field//select//child::option[@value="4"]');
        return browser.$('//mat-label[text()="Expiry Month"]/ancestor::mat-form-field//select');
    }

    get selectExpiryYear() {
        // return browser.$('//mat-label[text()="Expiry Month"]/ancestor::mat-form-field//select//child::option[@value="4"]');
        return browser.$('//mat-label[text()="Expiry Year"]/ancestor::mat-form-field//select');
    }

    get buttonSubmit() {
        return browser.$('//button[@id="submitButton"]');
    }

    get notificationText() {
        return browser.$('//span[@class="mat-simple-snack-bar-content"]');
    }

    async waitForLoad() {
        await this.buttonAddNewCard.waitForDisplayed();
        await this.inputName.waitForDisplayed();
        await this.inputCardNumber.waitForDisplayed();
        await this.selectExpiryMonth.waitForDisplayed();
        await this.selectExpiryYear.waitForDisplayed();
        await this.buttonSubmit.waitForDisplayed();
        await this.notificationText.waitForDisplayed();
    }
}

module.exports = PaymentOptionPage;