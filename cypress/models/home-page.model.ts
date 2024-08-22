export class HomePage {
  elements = {
    emailInput: () => cy.getByData("email-input"),
    submitButton: () => cy.getByData("submit-button"),
    successMessage: () => cy.getByData("success-message"),
  }
}
