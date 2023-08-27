const {Then} = require("@wdio/cucumber-framework");

Then(/^I press log in$/, async function() {
    await console.log("Step - I press log in");
})

Then(/^I enter login email$/, async function() {
    await console.log("Step - I enter login email");
})

Then(/^I enter login password$/, async function() {
    await console.log("Step - I enter login password");
})

Then(/^I confirm login$/, async function() {
    await console.log("Step - I confirm login");
})

Then(/^I am logged in$/, async function() {
    await console.log("Step - I am logged in");
})

Then(/^I have logged in$/, async function() {
    await console.log("Step - I am logged in");
})