const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

require('cypress-xpath');

When("Cargando el nombre {string}", (nombre) => {
  cy.get('#userName').clear().should('be.visible').type(nombre);
  cy.wait(500);
});

When("Cargando el email {string}", (email) => {
  cy.get('#userEmail').clear().should('be.visible').type(email);
  cy.wait(500);
});

When("Cargando la dirección 1 {string}", (dir1) => {
  cy.xpath("//textarea[@id='currentAddress']").clear().should('be.visible').type(dir1);
  cy.wait(500);
});

When("Cargando la dirección 2 {string}", (dir2) => {
  cy.xpath("//textarea[@id='permanentAddress']").clear().should('be.visible').type(dir2);
  cy.wait(500);
});

When("Clic en botón Submit", () => {
  cy.get('#submit').should("be.visible").click();
  cy.wait(500);
});
