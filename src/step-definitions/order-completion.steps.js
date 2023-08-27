const { Then } = require("@wdio/cucumber-framework");


Then(/^I see correct order address$/, async function() {
    await console.log("Step - I see correct order address");
})

Then(/^I see order details$/, async function (dataTable) {
  const expectedOrderDetails = dataTable.hashes();
  await console.log("Step - I see order details");
});

Then(/^I see end total price$/, async function (dataTable) {
  const expectedTotalPriceDetails = dataTable.hashes()[0]; 
  await console.log("Step - I see end total price");
});