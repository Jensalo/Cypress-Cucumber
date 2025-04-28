import './commands';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Previene que errores no controlados detengan la prueba
});
