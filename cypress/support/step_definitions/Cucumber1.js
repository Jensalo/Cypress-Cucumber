
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('Cargando el nombre', () => {
  cy.get('#userName').clear().should('be.visible').type('Jenifer');
  cy.wait(500);
});

When('Cargando el email', () => {
  cy.get('#userEmail').clear().should('be.visible').type('prueba@prueba.com');
  cy.wait(500);
});

When('Cargando la dirección 1', () => {
  cy.xpath("//textarea[@id='currentAddress']").clear().should('be.visible').type('Dirección1');
  cy.wait(500);
});

When('Cargando la dirección 2', () => {
  const dir2 = 'Dirección2';
  cy.xpath("//textarea[@id='permanentAddress']").clear().should('be.visible').type(dir2);
  cy.wait(500);
});


