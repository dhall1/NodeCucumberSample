/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const assert = require("assert");
const { Given, When, Then } = require("cucumber");

/**
 * Determines whether the given day is "Friday".
 * @param {string} day the given day
 */
function isItFriday(day) {
	return day === "Friday" ? "TGIF" : "Nope";
}

/**
 * Sets the today variable.
 */
Given("today is {string}", function(day) {
	this.today = day;
});

/**
 * Sets the today variable to "Friday".
 */
Given("today is Friday", function() {
	this.today = "Friday";
});

/**
 * Determines whether the day is Friday or not.
 */
When("I ask whether it's Friday yet", function() {
	this.actualAnswer = isItFriday(this.today);
});

/**
 * Asserts that the answer is the expected value.
 */
Then("I should be told {string}", function(expectedAnswer) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});
