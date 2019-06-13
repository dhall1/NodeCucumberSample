/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const assert = require("assert");
const { When, Then } = require("cucumber");
const { exec } = require("child_process");

/**
 * Runs the ls command and saves the resulting value.
 */
When("I run the ls command", function() {
	return new Promise((resolve, reject) => {
		let cmd = process.platform === "win32" ? "dir" : "ls";
		exec(cmd, (err, stdout, stdin) => {
			if (err) {
				reject(err);
			} else {
				this.value = stdout;
				resolve(stdout);
			}
		});
	});
});

/**
 * Asserts that the returned value includes the expected file.
 */
Then("the list of files will contain the package.json file", function() {
	assert(this.value.includes('package.json'));
});
