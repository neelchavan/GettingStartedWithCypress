/// <reference types="Cypress" />
describe("working with alerts", () => {
  it("confirm and info", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // alerts
    cy.get('[value="Confirm"]').click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get('[value="Alert"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
});
