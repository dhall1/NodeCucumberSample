/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const { After, Before } = require("cucumber");
const setupChrome = require("../support/setupChrome");

/**
 * Sets up the chrome driver for UI tasks.
 */
Before({ tags: "@UI" }, function() {
	setupChrome(this);
});

/**
 * Destroys the chrome driver previously set up for UI tasks.
 */
After({ tags: "@UI" }, function() {
	this.driver.quit();
});
