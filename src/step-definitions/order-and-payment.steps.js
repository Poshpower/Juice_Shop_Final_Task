const { Then } = require("@wdio/cucumber-framework");

Then(/^I click add new card button$/, async function () {
    await console.log("Step - I click add new card button");
})

Then(/^I fill in credit card information and submit$/, async function (dataTable) {
    const creditCardInfo = dataTable.hashes()[0]; // Assuming only one row in the table
    await console.log("Step - I fill in credit card information and submit c");
})

Then(/^I see confirmation message about card info$/, async function () {
    await console.log("Step - I see confirmation message about card info");
})

Then(/^I choose saved card$/, async function () {
    await console.log("Step - I choose saved card");
})

Then(/^I place order and pay$/, async function () {
    await console.log("Step - I place order and pay");
})