const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "tests/e2e/support/e2e.js",
    downloadsFolder: "tests/e2e/downloads",
    fixturesFolder: "tests/e2e/fixtures",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    specPattern: "tests/e2e/specs/**/*.cy.js",
    baseUrl: "http://localhost:9000",
  },

});
