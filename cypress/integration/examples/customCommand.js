/// <reference types="Cypress" />

describe("Data driven test", () => {
  //var productNames;
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("first data driven test using cypress custom commands", function () {
    // open the url
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // go to the shop page
    cy.contains("Shop").click();

    // based on product name click on the add to cart button.
    // reffer command.js for below method 'addProductToCartByName'
    this.data.productNames.forEach((ele) => {
      cy.log(ele);
      cy.addProductToCartByName(ele);
    });

    // looping through json
    for (let x in this.data) {
      cy.log(x);
    }
  });
});
