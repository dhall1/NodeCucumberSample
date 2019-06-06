/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const seleniumWebdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

/**
 * Sets up a chrome driver we can use to fetch a webpage and test
 * that is the object to add the driver to
 */
function setupChrome(that) {
	chrome.setDefaultService(
		new chrome.ServiceBuilder(chromedriver.path).build()
	);
	that.driver = new seleniumWebdriver.Builder()
		.withCapabilities(seleniumWebdriver.Capabilities.chrome())
		.build();
};


module.exports = setupChrome;