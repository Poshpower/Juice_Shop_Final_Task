const { Then } = require("@wdio/cucumber-framework");

Then(/^I choose One day delivery$/, async function () {
    await console.log("Step - I choose 'One day delivery'");
})