const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs-extra');
const path = require('path');
const { addCucumberPreprocessor } = require("@badeball/cypress-cucumber-preprocessor");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
