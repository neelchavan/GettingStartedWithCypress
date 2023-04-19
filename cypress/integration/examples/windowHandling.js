/// <reference types="Cypress" />
describe("working with window handling", () => {
  it("opening child window in cypress", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // in cypress we can work on child window if we remove the 'target' attributes.
    // below step opens the new tab in the same page
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // assert if we have moved to the new page
    cy.url().should("include", "qaclickacademy");
    // navigate to the back page
    cy.go("back");
    // assert we have navigated back to the home page
    cy.url().should("include", "Automation");
  });
});
