/// <reference types="Cypress" />
describe("WebTables", () => {
  it("working with webtables in cypress", () => {
    // open the url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // from the web table find a course that includes 'python' and print the price of that course.
    cy.get("table[name='courses'] td:nth-child(2)").each((el, index, list) => {
      const courseName = el.text();
      if (courseName.includes("Python")) {
        cy.log("We found it");
        console.log("We found it");

        // the 'next()' method in cypress is used to get the immediate next sibling of an element
        cy.log(`price is ${el.next().text()}`);
        const price = el.next().text();
        expect(price).to.equal("25");

        // the 'prev()' method in cypress is used to get the immediate preceding sibling of an element
        cy.log(el.prev().text());
        const preSibling = el.prev().text();
        expect(preSibling).to.equal("Rahul Shetty");
      }
    });
  });
});
