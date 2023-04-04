// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Based on product name the function should be able to add the product in to the cart
Cypress.Commands.add("addProductToCartByName", (nameOfPrduct) => {
  cy.get("h4 a").each((el, index, list) => {
    let productName = el.text();
    if (productName.includes(nameOfPrduct)) {
      cy.get(".btn.btn-info").eq(index).click();
    }
  });
});
