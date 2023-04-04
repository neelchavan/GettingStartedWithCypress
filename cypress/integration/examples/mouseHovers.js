/// <reference types="Cypress" />
describe("Handling mouse hovers in cypress", () => {
  it("let's handle mouse hovers using jquery", () => {
    // open this url in the chrome browser
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // as cypress do not deal with 'Mouse Hover' we have to rely on jquery methods.
    // perform a mouse hover action on the below element using 'show' method of jquery.
    cy.get(".mouse-hover-content").invoke("show");
    // click on the 'Top' option in the mouse hover.
    cy.contains("Top").click();
    // check if we are on top of the page.
    cy.url().should("include", "top");
  });
});
