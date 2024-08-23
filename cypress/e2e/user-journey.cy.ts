describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  const nextStep = () => {
    cy.getByData("challenge-answer-0").check()
    cy.getByData("next-lesson-button").find("a").click()
  }

  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.getByData("next-lesson-button").should("exist").click()

    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/app-install-and-overview"
    )
    nextStep()

    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    nextStep()

    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    nextStep()

    cy.location("pathname").should("equal", "/")
    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.getByData("next-lesson-button").contains("Course Completed").click()
  })
})
