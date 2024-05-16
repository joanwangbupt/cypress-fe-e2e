const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  projectId: 'p5wwmw',
  defaultCommandTimeout: 60000,
  viewportWidth: 1200,
  viewportHeight: 800,
  requestTimeout: 60000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  responseTimeout: 80000,
  video: false,
  env:{

  },

  e2e: {
    specPattern: 'cypress/e2e/*.feature',
    baseUrl:'http://www.google.com',

    //setupNodeEvents

    async setupNodeEvents(on, config) {

      on('task', {
        log(message) {
          console.log(message);

          return null;
        }
      })

      //env configFile setting
      const version = config.env.version || 'default'
      config.env = require(`./cypress/config/${version}.json`)
      //config.baseUrl = config.env.baseUrl

      await preprocessor.addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', browserify.default(config))

      return config
    },

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    
    retries: {
      runMode: 1,
    },

  },
});
