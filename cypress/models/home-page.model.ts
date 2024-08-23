export class HomePage {
  elements = {
    emailInput: () => cy.getByData("email-input"),
    submitButton: () => cy.getByData("submit-button"),
    successMessage: () => cy.getByData("success-message"),
    errorMessage: () => cy.getByData("server-error-message"),
    heroHeading: () => cy.getByData("hero-heading"),
    heroDts: () => cy.get("dt"),
    sectionCourse0: () => cy.getByData("course-0"),
    sectionCourse1: () => cy.getByData("course-1"),
    sectionCourse2: () => cy.getByData("course-2"),
  }
}
