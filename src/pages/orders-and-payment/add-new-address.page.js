
const BasePage = require("../common/base.page");

class NewAddressPage extends BasePage {
    constructor() {
        super();
    }

    get inputCountry() {
        return browser.$('//mat-label[text()="Country"]/ancestor::mat-form-field//input');
    }

    get inputName() {
        return browser.$('//mat-label[text()="Name"]/ancestor::mat-form-field//input');
    }

    get inputMobileNumber() {
        return browser.$('//mat-label[text()="Mobile Number"]/ancestor::mat-form-field//input');
    }

    get inputZipCode() {
        return browser.$('//mat-label[text()="ZIP Code"]/ancestor::mat-form-field//input');
    }

    get inputAddress() {
        return browser.$('//mat-label[text()="Address"]/ancestor::mat-form-field//textarea');
    }

    get inputCity() {
        return browser.$('//mat-label[text()="City"]/ancestor::mat-form-field//input');
    }

    get inputState() {
        return browser.$('//mat-label[text()="State"]/ancestor::mat-form-field//input');
    }

    get buttonSubmit() {
        return browser.$('//button[@id="submitButton"]');
    }

    async waitForLoad() {
        await this.inputCountry.waitForDisplayed();
        await this.inputName.waitForDisplayed();
        await this.inputMobileNumber.waitForDisplayed();
        await this.inputZipCode.waitForDisplayed();
        await this.inputAddress.waitForDisplayed();
        await this.inputCity.waitForDisplayed();
        await this.inputState.waitForDisplayed();
        await this.buttonSubmit.waitForDisplayed();


    }
}

module.exports = NewAddressPage;