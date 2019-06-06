/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const assert = require("assert");
const { Given, Then } = require("cucumber");

/**
 * Use the Chrome driver to load Google's homepage.
 */
Given("I visit google.com", function() {
	return this.driver.get("https://www.google.com");
});

/**
 * Examine the title of the page and assert it is right.
 */
Then("the title should contain Google", function() {	
	return this.driver.getTitle().then(title => {
		assert(title.includes("Google"));
	});
});
