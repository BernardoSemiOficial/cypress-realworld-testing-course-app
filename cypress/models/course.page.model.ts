export class CoursePage {
  elements = {
    challengerAnswer0: () => cy.getByData("challenge-answer-0"),
    buttonNextLesson: () => cy.getByData("next-lesson-button"),
  }
}
