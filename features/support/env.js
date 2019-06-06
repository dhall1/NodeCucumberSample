/**
 * Author Daniel Hall
 * Date Created: 06/05/2019
 */
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

/**
 * Loads the YAML configuration file with the name provided in the environment
 * variable TEST_ENV, or "QA1.yml" if that variable does not exist.
 */
function loadYamlEnvFile() {
	let configFileName = process.env.TEST_ENV || "QA1";
	return yaml.safeLoad(
		fs.readFileSync(
			path.join(__dirname, "..", "config", `${configFileName}.yml`),
			"utf8"
		)
	);
}

module.exports = loadYamlEnvFile();
