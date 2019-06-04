const assert = require("assert");
const { Given, Then, After, Before } = require("cucumber");
const setupChrome = require("../support/setupChrome");

Before({ tags: "@UI" }, function() {
	setupChrome(this);
});

Given("I visit google.com", function() {
	return this.driver.get("https://www.google.com");
});

Then("the title should contain Google", function() {
	return this.driver.getTitle().then(title => {
		assert(title.includes("Google"));
	});
});

After({ tags: "@UI" }, function() {
	this.driver.quit();
	// Always return a completed and resolved promise
	return Promise.resolve();
});
