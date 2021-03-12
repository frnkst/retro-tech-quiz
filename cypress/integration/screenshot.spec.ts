//@ts-nocheck
export {}
describe('Screenshot for readme', () => {
  it('take a screenshot', () => {
    cy.viewport('macbook-15')
    cy.visit('http://localhost:3000')

    cy.screenshot('main_page')

    cy.contains('05:00').click()
    cy.contains('Git').click()
    cy.contains('-->').click()

    cy.screenshot('quiz_page')

    cy.visit('http://localhost:3000')
    cy.contains('05:00').click()
    cy.contains('Git').click()
    cy.contains('-->').click()
    cy.contains('-->').click()

    cy.screenshot('result_page')
  })
})
