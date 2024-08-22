describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("deve ter o titulo Testing Next.js Applications with Cypress no elemento h1 da página home", () => {
    cy.getByData("hero-heading").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("deve ter 3 itens 4 Courses, 25+ Lessons e Free and Open Source", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})
