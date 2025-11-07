import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://www.uitestingplayground.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      firstVariable: 'First Variable - Test',
      demoqa: "https://demoqa.com/",
      herokuapp: "https://the-internet.herokuapp.com/",
    }
  },
  pageLoadTimeout: 60000,
});
