const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const axios = require("axios");
const env = require("../support/env");

Given("I want the {int}th user", function(n) {
	return axios.get(`${env.url1}`).then(response => {
		this.user = response.data[n];
	});
});

Then("the username is {string}", function(username) {
	assert.strictEqual(username, this.user["username"]);
});

When("I search for movies directed by 'James Cameron'", function() {
	const endpoint = `/search?country=US&entity=movie&attribute=directorTerm&term=${encodeURIComponent(
		"James Cameron"
	)}`;
	return axios.get(`${env.url2}${endpoint}`).then(response => {
		this.data = response.data;
	});
});

Then("the list of movies will include 'Avatar'", function() {
	assert.strictEqual(
		true,
		this.data.results.some(movie => {
			return movie.trackName == "Avatar (2009)";
		})
	);
});
