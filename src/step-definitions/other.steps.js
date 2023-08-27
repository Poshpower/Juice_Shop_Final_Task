const {Then} = require("@wdio/cucumber-framework");

Then(/^I have logged out$/, async function() {
    await console.log("Step - I press log out");
})
