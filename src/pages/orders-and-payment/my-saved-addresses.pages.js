const BasePage = require("../common/base.page");

class MySavedAddressPage extends BasePage {
    constructor() {
        super();
    }

    get buttonAddAddresses() {
        return browser.$('//button//span[contains(text(), "New Address")]');
    }

    get addressTableRow() {
        return browser.$$("//mat-card/mat-table/mat-row");

    }
    get addressTableCell() {
        return browser.$$("//mat-card/mat-table/mat-row/mat-cell[1]");
    }

    get addressName() {

        return browser.$$(`(//mat-row[@role='row'])//mat-cell`);

    }


    async getRowCount() {
        let row = browser.$$("//mat-card/mat-table/mat-row")
        return row.length;
    }

    async getCellCount() {
        let cell = browser.$$(`(//mat-row[@role='row'])//mat-cell`);
        return cell.length;
    }

    async getCellValue(row, colunm) {
        return browser.$$(`(//mat-row[@role='row'])['${row}']//mat-cell['${colunm}']`).getText;
    }

    async getTableValues(row, colunm) {
        let cells = browser.$(`(//mat-row[@role='row'])['${row}']//mat-cell['${colunm}']`)
        return cells.getText;
    }

    async waitForLoad() {
        await this.buttonAddAddresses.waitForDisplayed();
        await this.addressTableRow.waitForDisplayed();
        await this.addressTableCell.waitForDisplayed();

    }
}

module.exports = MySavedAddressPage;
