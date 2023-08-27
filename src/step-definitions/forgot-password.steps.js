const { Then } = require("@wdio/cucumber-framework");

Then(/^I press forgot password$/, async function () {
    await console.log("Step -I press 'forgot password'n");
})

Then(/^I enter email in forgot email page$/, async function () {
    await console.log("Step - I enter email in forgot email page'n");
})

Then(/^I click on security question field$/, async function () {
    await console.log("Step - I click on security question field'n");
})

Then(/^I see security question$/, async function () {
    await console.log("Step - I see security question");
})

Then(/^I enter security question$/, async function () {
    await console.log("Step - I enter security question'n");
})

Then(/^I enter new password and confirm$/, async function () {
    await console.log("Step - I enter new password and confirm'n");
})

Then(/^I see message about succesfully changed password$/, async function () {
    await console.log("Step - I see message about succesfully changed password");
})