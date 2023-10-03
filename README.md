# cypress-fe-e2e
UI automation
First created on 10/03/2023


# cypress-fe-e2e
E2e tests for frontend (Cypress). This project contains automated E2E tests and the associated tools that support them. 

# Getting started
1. git clone from https://github.com/joanwangbupt/cypress-fe-e2e.git
2. Run "npm install" to setup initially.
3. Copy "cypress.env.sample.json" and rename it to "cypress.env.json". Update the sensitive information such as
   login credentials that are present in the copied file.
4. Go to the cypress/config folder and make a copy of the sample-uat.json and sample-stage.json files.
   Rename the copied file to uat.json and stage.json. Review the contents of the file and make any necessary updates
   to sensitive information.
5. Run a test against UAT with command: npm run cy:open; Run a test against Stage with command: npm run cy:open-stage.

# For the new cctests
Please follow these steps to ensure smooth integration of your code:
1. Place your cctest under cypress/e2e and make sure that the folder, js file and feature file share the same name.
2. Add static data that is used by your tests to cypress/fixtures.
3. Add common steps to cypress/support/step_definitions to ensure the steps can be reused.
4. Add custom commands to cypress/support/commands and integrate them by adding the command file to e2e.js.
5. Add the element selection to cypress/support/pages.
6. Once you’ve added the environment variables to the uat.json/stage.json files, make sure to include them in the
   sample-uat.json/sample stage.json files as well to enable seamless synchronization with others.
   Ensure that any sensitive information is masked with asterisks. The sensitive info should be passed directly from the author.