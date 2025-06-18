const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://portal-mdc.front.oke.luby.me/',
    supportFile: 'cypress/support/e2e.js',
  },
});
