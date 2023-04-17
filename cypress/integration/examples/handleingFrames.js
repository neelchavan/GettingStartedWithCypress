/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("Handeling iframes in cypress", () => {
  it("working with iframes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // to work with frmaes in cypress you first need to install a package called 'cypress-iframe'
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();
    cy.wait(1000);
    cy.iframe().find(".inner-box h1");
    cy.iframe().find(".pricing-title").as("pricing-title");
    cy.iframe().get("@pricing-title").should("have.length", 2);
    cy.iframe().find(".bg-pattern-1");
    cy.get("#courses-iframe").should(
      "have.attr",
      "src",
      "https://www.rahulshettyacademy.com/"
    );
  });
});
