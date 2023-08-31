const BasePage = require("./common/base.page");

class ProductsPage extends BasePage {
    constructor() {
        super();
    }

    get buttonAddToCart() {
        return browser.$(`//button[@aria-label="Add to Basket"]`);
    }

    async waitForLoad() {
        await this.buttonAddToCart.waitForDisplayed();
    }
}

module.exports = ProductsPage;