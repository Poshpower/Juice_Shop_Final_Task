const { Then } = require("@wdio/cucumber-framework");



Then(/^I add address information and submit$/, async function (dataTable) {
    let rows = dataTable.raw();

    let countryRow = rows[0];
    let nameRow = rows[1];
    let mobileRow = rows[2];
    let zipRow = rows[3];
    let addressRow = rows[4];
    let cityRow = rows[5];
    let stateRow = rows[6];


    let elementCountry = await this.addressPage.inputCountry;
    await elementCountry.waitForDisplayed();
    await elementCountry.click();
    await elementCountry.setValue(countryRow[1]);

    let elementName = await this.addressPage.inputName;
    await elementName.waitForDisplayed();
    await elementName.click();
    await elementName.setValue(nameRow[1]);

    let elementMobileNumber = await this.addressPage.inputMobileNumber;
    await elementMobileNumber.waitForDisplayed();
    await elementMobileNumber.click();
    await elementMobileNumber.setValue(mobileRow[1]);

    let elementZipCode = await this.addressPage.inputZipCode;
    await elementZipCode.waitForDisplayed();
    await elementZipCode.click();
    await elementZipCode.setValue(zipRow[1]);

    let elementAddress = await this.addressPage.inputAddress;
    await elementAddress.waitForDisplayed();
    await elementAddress.click();
    await elementAddress.setValue(addressRow[1]);

    let elementCity = await this.addressPage.inputCity;
    await elementCity.waitForDisplayed();
    await elementCity.click();
    await elementCity.setValue(cityRow[1]);

    let elementState = await this.addressPage.inputState;
    await elementState.waitForDisplayed();
    await elementState.click();
    await elementState.setValue(stateRow[1]);

    await this.paymentPage.buttonSubmit.waitForDisplayed();
    await this.paymentPage.buttonSubmit.click();

})

// Then(/^I see confirmation message about card info$/, async function () {
//     await this.paymentPage.notificationText.waitForDisplayed();
//     await expect(this.paymentPage.notificationText).toHaveTextContaining(`Your card ending with 5678 has been saved for your convenience.`)})

// Then(/^I choose saved card$/, async function () {
//     await console.log("Step - I choose saved card");
// })

// Then(/^I place order and pay$/, async function () {
//     await console.log("Step - I place order and pay");
// })