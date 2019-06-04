const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

function loadYamlEnvFile() {
	let configFileName = process.env.TEST_ENV || "QA1";
	return yaml.safeLoad(
		fs.readFileSync(path.join(__dirname, "..", "config", `${configFileName}.yml`), "utf8")
	);
}

module.exports = loadYamlEnvFile();
