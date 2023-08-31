const {Then} = require("@wdio/cucumber-framework");


Then(/^I wait for (.*?) seconds$/, async function(seconds) {
    await browser.pause(seconds * 1000);
})
