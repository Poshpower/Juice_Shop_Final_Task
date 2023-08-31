const { Then } = require("@wdio/cucumber-framework");

Then(/^I click add new card button$/, async function () {
    await this.paymentPage.buttonAddNewCard.waitForDisplayed()
    await this.paymentPage.buttonAddNewCard.click();
})

Then(/^I fill in credit card information and submit$/, async function (dataTable) {
    const creditCardInfo = dataTable.hashes()[0];
    console.log(creditCardInfo["Card Number"]);

    await this.paymentPage.inputName.waitForDisplayed();
    await this.paymentPage.inputName.click();
    await this.paymentPage.inputName.setValue(creditCardInfo["Name"]);

    await this.paymentPage.inputCardNumber.waitForDisplayed();
    await this.paymentPage.inputCardNumber.click();
    await this.paymentPage.inputCardNumber.setValue(creditCardInfo["Card Number"]);

    await this.paymentPage.selectExpiryMonth.waitForDisplayed();
    await this.paymentPage.selectExpiryMonth.click();

    let elementExpiryMonth = await this.paymentPage.selectExpiryMonth;
    await elementExpiryMonth.selectByVisibleText(creditCardInfo["Expirity Month"]);

    await this.paymentPage.selectExpiryYear.waitForDisplayed();
    await this.paymentPage.selectExpiryYear.click();

    let elementExpiryYear = await this.paymentPage.selectExpiryYear;
    await elementExpiryYear.selectByVisibleText(creditCardInfo["Exirty year"]);

    await this.paymentPage.buttonSubmit.waitForDisplayed();
    await this.paymentPage.buttonSubmit.click();
})

Then(/^I see confirmation message about card info$/, async function () {
    await this.paymentPage.notificationText.waitForDisplayed();
    await expect(this.paymentPage.notificationText).toHaveTextContaining(`Your card ending with 5678 has been saved for your convenience.`)})

// Then(/^I choose saved card$/, async function () {
//     await console.log("Step - I choose saved card");
// })

// Then(/^I place order and pay$/, async function () {
//     await console.log("Step - I place order and pay");
// })