const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    env: {
      user: "automatedUser26@example.com",
      password: "4r4nd0mp4ssw0rd",
    },
    baseUrl: "https://www.demoblaze.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
