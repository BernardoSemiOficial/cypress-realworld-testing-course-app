import { HomePage } from "../models/home-page.model"

const heroPage = new HomePage()

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("deve ter o titulo Testing Next.js Applications with Cypress no elemento h1 da página home", () => {
      heroPage.elements
        .heroHeading()
        .contains("Testing Next.js Applications with Cypress")
    })

    it("deve ter 3 itens 4 Courses, 25+ Lessons e Free and Open Source", () => {
      heroPage.elements.heroDts().eq(0).contains("4 Courses")
      heroPage.elements.heroDts().eq(1).contains("25+ Lessons")
      heroPage.elements.heroDts().eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      heroPage.elements
        .sectionCourse0()
        .find("a")
        .contains("Get started")
        .click()
      // heroPage.elements.sectionCourse0().within(() => {
      //   cy.get("a[href='/testing-your-first-application']").click()
      // })
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      heroPage.elements
        .sectionCourse1()
        .find("a")
        .contains("Get started")
        .click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      heroPage.elements
        .sectionCourse2()
        .find("a")
        .contains("Get started")
        .click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
