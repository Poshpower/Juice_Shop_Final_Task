const { Then } = require("@wdio/cucumber-framework");

Then(/^I open landing page$/, async function () {
    await console.log("Step - I open landing page");
})

Then(/^I press on Account button$/, async function () {
    await console.log("Step - I press on Account button");
})

Then(/^I am on login page$/, async function () {
    await console.log("Step - I am on login page");
})

Then(/^I click on 'Orders and Payment' option$/, async function () {
    await console.log("Step - I click on 'Orders and Payment' option");
})

Then(/^I click on 'My payment Options' option$/, async function () {
    await console.log("Step - I click on 'My payment Options' option");
})

Then(/^I click on 'My Saved Addresses' option$/, async function () {
    await console.log("Step - I click on 'My Saved Addresses' option");
})

Then(/^I press 'forgot password'$/, async function () {
    await this.navigationTest.iPressOnChangePassword();
})

Then(/^I press not yet a customer$/, async function () {
    await console.log("Step - I press not yet a customer");
})

Then(/^I am in register page$/, async function () {
    await console.log("Step - I am in register page");
})

Then(/^I am in order completion page$/, async function () {

    await console.log("Step - I am in order completion page");
})


