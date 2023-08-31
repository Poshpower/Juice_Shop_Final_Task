class BasePage {
    constructor() {

    }
    get buttonAccount() {
        return browser.$('//button[@id="navbarAccount"]');
    }

    get buttonBasket() {
        return browser.$('//button[@routerlink="/basket"]');
    }

    get buttonLogin() {
        return browser.$('//button[@id="navbarLoginButton"]');
    }

    get buttonLogout() {
        return browser.$('//button[@id="navbarLogoutButton"]');
    }

    get buttonCloseWelcomeBanner() {
        return browser.$('[aria-label="Close Welcome Banner"]');
    }

    get buttonDismissCookies() {
        return browser.$('[aria-label="dismiss cookie message"]');
    }

    get buttonDismissCookies() {
        return browser.$('[aria-label="dismiss cookie message"]');
    }

    get buttonOrdersAndPayment() {
        return browser.$('//button//span[contains(text(), "Orders")]');
    }

    get buttonMyPaymentOptions() {
        return browser.$('//button//span[contains(text(), "Payment Options")]');
    }

    get buttonMySavedAddresses() {
        return browser.$('//button//span[contains(text(), "saved addresses ")]');
    }

    get buttonLogout() {
        return browser.$('#navbarLogoutButton');
    }

    get snackBarLanguageChange() {
        return browser.$('//*[@class="mat-simple-snack-bar-content"]');
    }

    get buttonOpenSearch() {
        return browser.$('//mat-icon[contains(text(), "search")]');
    }

    get searchBar() {
        return browser.$('//input[@type="text"]');
    }

    get buttonBasket() {
        return browser.$('[routerlink="/basket"]');
    }


}
module.exports = BasePage;