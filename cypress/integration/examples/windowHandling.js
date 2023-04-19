/// <reference types="Cypress" />
describe("working with window handling", () => {
  it("opening child window in cypress", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // in cypress we can work on child window if we remove the 'target' attributes.
    // below step opens the new tab in the same page
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com/", () => {
      // assert if we have moved to the new page
      cy.url().should("include", "qaclickacademy");
    });
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // assert we have navigated back to the home page
    cy.url().should("include", "Automation");
  });
});
