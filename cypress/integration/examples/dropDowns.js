/// <reference types="Cypress" />
describe("working with dropdown", () => {
  it("static and dynamic dropdowns", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // in the static dropdown select the 'Option2' and verify the selection
    cy.get("select").select("Option2").should("have.value", "option2");

    // dynamic dropdowns
    // type ind and select the option which have value as 'India'
    cy.get("#autocomplete").type("ind");
    cy.get("#ui-id-1 li div").each(($el, index, $list) => {
      const countryName = $el.text();
      if (countryName === "India") {
        cy.wrap($el).click();
      }
    });
    // assert if 'India' have been selected
    cy.get("#autocomplete").should("have.value", "India");
  });
});
