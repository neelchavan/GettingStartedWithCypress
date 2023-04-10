/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";

describe("First test via page object model", () => {
  before(function () {
    cy.visit("https:///rahulshettyacademy.com/angularpractice/");
  });

  it("This is HomePage test", () => {
    const hp = new HomePage();
    hp.getNameEditBox().type("neel");
    hp.getEmailEditBox().type("neel@gmail.com");
    hp.getPasswordEditBox().type("7769983575");
    hp.getIceCreamCheckbox().click();
    hp.getSelectDropdown().select("Female");
    hp.getEmployedRadioButton().click();
    hp.getDatePicker().type("1999-06-26");
    hp.getSubmitButton().click();
    cy.log("All steps executed");
    cy.get(".alert-success").should("be.visible");
  });
});
