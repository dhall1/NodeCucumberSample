/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const axios = require("axios");
const env = require("../support/env");

/**
 * Fetches the user data and then returns the nth user.
 */
Given("I want the {int}th user", function(n) {
	return axios.get(`${env.url1}`).then(response => {
		return response.data;
	}).then(data => {
		this.user = data[n];
	});
});

/**
 * Assert the username equals the expected.
 */
Then("the username is {string}", function(username) {
	assert.strictEqual(username, this.user["username"]);
});

/**
 * Fetch a list of movies directed by James Cameron.
 */
When("I search for movies directed by 'James Cameron'", function() {
	const endpoint = `/search?country=US&entity=movie&attribute=directorTerm&term=${encodeURIComponent(
		"James Cameron"
	)}`;
	return axios.get(`${env.url2}${endpoint}`).then(response => {
		this.data = response.data;
	});
});

/**
 * Assert that the list contains a movie named "Avatar".
 */
Then("the list of movies will include 'Avatar'", function() {
	assert.strictEqual(
		true,
		this.data.results.some(movie => {
			return movie.trackName.includes("Avatar");
		})
	);
});
