const { Then } = require("@wdio/cucumber-framework");

Then(/^I click on new Address button$/, async function () {
    await console.log("Step - I click on new Address button");
})

Then(/^I add address information and submit$/, async function (dataTable) {
    const addressInfo = dataTable.hashes()[0];
    await console.log("Step - I add address information and submit");
})

Then(/^I choose saved address$/, async function () {
await console.log("Step - I choose saved address");

})