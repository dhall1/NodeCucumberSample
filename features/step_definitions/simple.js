const assert = require("assert");
const { Given, When, Then } = require("cucumber");

function isItFriday(day) {
	return day === "Friday" ? "TGIF" : "Nope";
}

Given("today is {string}", function(day) {
	this.today = day;
});

Given("today is Friday", function() {
	this.today = "Friday";
});

When("I ask whether it's Friday yet", function() {
	this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function(expectedAnswer) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});
