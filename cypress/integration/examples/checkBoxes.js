/// <reference types="Cypress" />
describe("Working with checkboxes", () => {
  it("test on checkboxes", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // check the checkbox with value 'option1' and assert
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    // uncheck the checkbox with value 'option1' and assert
    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option1");
    // selecting multiple checkboxes
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
    // uncheck multiple checkboxes
    cy.get("input[type='checkbox']").uncheck(["option2", "option3"]);
  });
});
