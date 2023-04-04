/// <reference types="Cypress" />
describe("data driven test", () => {
  it("first data driven test using cypress custom commands", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // go to the shop page
    cy.contains("Shop").click();
    // by product name 'Blackberry' click on the add to cart button.
    // reffer command.js for below method.
    cy.addProductToCartByName("Blackberry");
  });
});
