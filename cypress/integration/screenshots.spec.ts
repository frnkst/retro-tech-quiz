export {}
describe('Make screenshots for README.md', () => {
  it('should take a screenshots', () => {
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
