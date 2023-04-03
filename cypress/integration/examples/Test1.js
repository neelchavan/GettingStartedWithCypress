/// <reference types="Cypress" />
describe("My first test suite", function () {
  it("My first test case", function () {
    // visit the rahul shetty store
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // in the swearch bar search for 'ca'.
    cy.get("form input[type='search']").type("ca");
    // verify that only 4 products are showing
    cy.get(".products-wrapper .products .product").should("have.length", 4);
    // the 'visibe' in the below cssSelector means show only the visible items
    cy.get(".product:visible").should("have.length", 4);
    // add the third product in the cart.
    cy.get(".products-wrapper .products .product:nth-child(3) button").click();
    // add the second product in the cart.
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    // add the product which have name as 'Cashews' in the cart.
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeggie = $el.find("h4.product-name").text();
        if (textVeggie.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    // go to the cart
    cy.get(".cart-icon").click();
    // click on proceed to checkout button
    cy.get(".cart-preview.active button").click();
    // click on place order button
    // cy.wait(2000);
    // cy.get(".products-wrapper button").eq(1).click();
    cy.contains("Place Order").click();
    // cy.wait(1500);
    // validate if we are on the proceed page.
    cy.get("label").should("have.text", "Choose Country");
  });
});

// npx D:\Neel\VsCodeWorkspace\Cypress\ProjectOne\node_modules\.bin\cypress open
