const assert = require("assert");
const { When, Then } = require("cucumber");
const { exec } = require("child_process");

When("I run the ls command", function() {
	return new Promise((resolve, reject) => {
		exec("ls", (err, stdout, stdin) => {
			if (err) {
				reject(err);
			} else {
				this.value = stdout;
				resolve(stdout);
			}
		});
	});
});

Then("the list of files will contain the package.json file", function() {
	assert(this.value.includes('package.json'));
});
