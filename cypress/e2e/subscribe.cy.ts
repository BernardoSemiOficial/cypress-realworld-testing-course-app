class HomePage {
  elements = {
    emailInput: () => cy.getByData("email-input"),
    submitButton: () => cy.getByData("submit-button"),
    successMessage: () => cy.getByData("success-message"),
    errorMessage: () => cy.getByData("server-error-message"),
  }
}

const homePage = new HomePage()

describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    const inputEmail = "email@gmail.com"
    homePage.elements.emailInput().type(inputEmail)
    homePage.elements.submitButton().click()
    homePage.elements
      .successMessage()
      .should("exist")
      .contains(`Success: ${inputEmail} has been successfully subscribed`)
  })

  it("does NOT allow an invalid email address", () => {
    const inputEmail = "email"
    homePage.elements.emailInput().type(inputEmail)
    homePage.elements.submitButton().click()
    homePage.elements.successMessage().should("not.exist")
  })

  it("disallow existing emails", () => {
    const inputEmail = "john@example.com"
    homePage.elements.emailInput().type(inputEmail)
    homePage.elements.submitButton().click()
    homePage.elements
      .errorMessage()
      .should("exist")
      .contains(
        `Error: ${inputEmail} already exists. Please use a different email address.`
      )
  })
})
