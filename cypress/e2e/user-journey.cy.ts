import { CoursePage } from "../models/course.page.model"
import { HomePage } from "../models/home-page.model"

const heroPage = new HomePage()
const coursePage = new CoursePage()

describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  const nextStep = () => {
    coursePage.elements.challengerAnswer0().check()
    coursePage.elements.buttonNextLesson().find("a").click()
  }

  it("a user can find a course on the home page and complete the courses lessons", () => {
    heroPage.elements.sectionCourse0().find("a").contains("Get started").click()
    coursePage.elements.buttonNextLesson().should("exist").click()

    cy.pathnameEqual("/testing-your-first-application/app-install-and-overview")
    nextStep()

    cy.pathnameEqual(
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    nextStep()

    cy.pathnameEqual(
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    nextStep()

    cy.pathnameEqual("/")
    heroPage.elements.sectionCourse0().find("a").contains("Get started").click()
    coursePage.elements.buttonNextLesson().contains("Course Completed").click()
  })
})
