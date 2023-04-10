class HomePage {
  getNameEditBox() {
    return cy.get("[name='name']:nth-child(2)");
  }

  getEmailEditBox() {
    return cy.get("[name='email']");
  }

  getPasswordEditBox() {
    return cy.get("[type='password']");
  }

  getIceCreamCheckbox() {
    return cy.get("#exampleCheck1");
  }

  getEmployedRadioButton() {
    return cy.get("[value='option2']");
  }

  getSubmitButton() {
    return cy.get("[value='Submit']");
  }
}

export default HomePage;
