
const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("Abrir el navegador principal", () => {
  cy.visit("https://demoqa.com/text-box");
});

Then('Validar el nombre de la página', () => {
  cy.title().should('eq', 'DEMOQA');
  cy.wait(1000);
});
