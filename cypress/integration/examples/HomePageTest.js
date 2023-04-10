/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";

describe("First test via page object model", () => {
  it("This is HomePage test", () => {
    const hp = new HomePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    hp.getNameEditBox().type("neel");
    hp.getEmailEditBox().type("neel@gmail.com");
    hp.getPasswordEditBox().type("7769983575");
    hp.getIceCreamCheckbox().click();
    hp.getEmployedRadioButton().click();
    hp.getSubmitButton().click();
    cy.log("All steps executed");
    cy.get(".alert-success").should("be.visible");
  });
});
