const { Then } = require("@wdio/cucumber-framework");

// Then(/^I submit '(.*?)' in search bar$/, async function(target) {
//     // await this.basePage.buttonOpenSearch.waitForDisplayed();
//     // await this.basePage.buttonOpenSearch.click();
//     // await this.basePage.searchBar.waitForDisplayed();
//     // await this.basePage.searchBar.setValue(target);
//     // await browser.keys("Enter");
// })

// Then(/^I add items to basket$/, async function() {
//     let rows = dataTable.rows();
//     for await(const row of rows) {
//         let element = await this.productsPage.buttonAddToCart(row[0], row[1]);
//         await element.waitForDisplayed();
//         await element.scrollIntoView({ block: 'center', inline: 'center' });
//         await element.click();
//         let snackbarElement = await this.productsPage.snackBarItemAdded(row[0]);
//         await snackbarElement.waitForDisplayed();
//         await snackbarElement.waitForDisplayed({reverse: true});
//     }
// })

// Then(/^I see items in basket$/, async function() {
//     // let rows = dataTable.hashes();
//     // for await(const row of rows) {
//     //     let element = await this.basketPage.item(row.Name, row.Price);
//     //     await element.waitForDisplayed();
//     // }
// })

Then(/^I add 'Eggfruit Juice' to basket and checkout$/, async function () {
    await this.basePage.buttonOpenSearch.waitForDisplayed();
    await this.basePage.buttonOpenSearch.click();
    await this.basePage.searchBar.waitForDisplayed();
    await this.basePage.searchBar.setValue('Best Juice Shop Salesman Artwork');
    await browser.keys("Enter");

    await this.productsPage.buttonAddToCart.waitForDisplayed();
    await this.productsPage.buttonAddToCart.scrollIntoView({ block: 'center', inline: 'center' });
    await this.productsPage.buttonAddToCart.click();

    await this.basePage.buttonBasket.waitForDisplayed();
    await this.basePage.buttonBasket.click();

    await this.basketPage.buttonCheckOut.waitForDisplayed();
    await this.basketPage.buttonCheckOut.click();


// Then(/^I choose saved address$/, async function () {
//     await console.log("Step - I add address information and submit");
})