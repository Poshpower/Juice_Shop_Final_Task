const { Then } = require("@wdio/cucumber-framework");

Then(/^I enter email address$/, async function () {
    await console.log("Step - I enter email address");
})

Then(/^I enter password$/, async function () {
    await console.log("Step - I enter password");
})

Then(/^I enter password reapeatedly$/, async function () {
    await console.log("Step - I enter password reapeatedly");
})

Then(/^I select security question about elder sibling$/, async function () {
    await console.log("Step - I select security question about elder sibling");
})

Then(/^I enter answer$/, async function () {
    await console.log("Step - I enter answer");
})

Then(/^I press register button$/, async function () {
    await console.log("Step - I press register button");
})

Then(/^I see message about email must be unique$/, async function () {
    await console.log("Step - I press register button");
})


Then(/^I have registered account$/, async function () {
    await console.log("Step - I enter email address");
    await console.log("Step - I enter password");
    await console.log("Step - I enter password reapeatedly");
    await console.log("Step - I select security question about elder sibling");
    await console.log("Step - I enter answer ");
    await console.log("Step - I press register button");
})

