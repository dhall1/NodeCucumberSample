# NodeJS Cucumber Examples

This project contains example tests for projects including testing a function, an API, a UI, and a system process.

## Structure

The `.gitignore`, `package-lock.json`, and `package.json` files as well as the `node_modules` directory are used by the NodeJS environment and Git and do not need to be modified.

-   `features/` - Contains the actual tests to perform
    -   `config/` - Contains the YAML files containing environment configuration variables. The file loaded is the value of the environment variable TEST_ENV with ".yml" appended. If TEST_ENV is not provieded, "QA1.yml" is loaded.
    -   `specs/` - Contains the .feature files used to define tests in plain English.
    -   `step_definitions/` - Contains the actual glue code that defines the tests.
    -   `support/` - Contains utility files that may be used across all tests, such as one to load the env.yml file and another to launch a testing browser (Chrome) when testing a UI.

## Example Tests

Tests are composed of two parts, a plain English feature file and the corresponding glue code used to run the test. For information about writing feature files, you can visit the [Cucumber website](https://cucumber.io/docs/gherkin/reference/).

### API

This demonstrates making calls to an API using the Promise-based HTTP client package [axios](https://www.npmjs.com/package/axios) as well as loading a YAML config file using [js-yaml](https://www.npmjs.com/package/js-yaml).

### Simple

This shows simple usage of the Cucumber testing library by testing whether a string equals \"Friday\".

### System Process

This tests using the 'ls' system command to fetch the files and directories in the project's root folder and ensures that the `package.json` file is there.

### UI

Starts up a testable Chrome browser and loads the [Google homepage](https://www.google.com) for testing.

## Environment Configuration Files

Environment Configuration files in a YAML format may be stored under the `features/config/` directory to be loaded by the program. The file that will be loaded is determined by the TEST_ENV environment variable, whose value will be the file name of the config file to load. This file name should not contain the extension ".yml" as the program will add that automatically.