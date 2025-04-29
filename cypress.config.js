const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'rixsry',

  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,

    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, {
        ...config,
        messagesEnabled: true,
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));

      config.darkMediaQuery = true;
      return config;
    },
  },
});
