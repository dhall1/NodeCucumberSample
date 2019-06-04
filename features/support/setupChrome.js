const seleniumWebdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

// Sets up a chrome driver we can use to fetch a webpage and test.
// that is the object to add the driver to
module.exports = function(that) {
	chrome.setDefaultService(
		new chrome.ServiceBuilder(chromedriver.path).build()
	);
	that.driver = new seleniumWebdriver.Builder()
		.withCapabilities(seleniumWebdriver.Capabilities.chrome())
		.build();
};
