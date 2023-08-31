const BasePage = require('./common/base.page');

class BasketPage extends BasePage {
    constructor() {
        super();
    }

    get buttonCheckOut() {
        return browser.$('//button[@id="checkoutButton"]');
    }

    async waitForLoad() {
        await this.buttonCheckOut.waitForDisplayed();
    }
}
module.exports = BasketPage;