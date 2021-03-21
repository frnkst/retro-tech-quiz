export {}
describe('Make screenshots for README.md', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.visit('http://localhost:3000')
  })

  it('start page', () => {
    cy.get('input').type('Adam')
    cy.contains('10:00').click()
    cy.contains('Web').click()
    cy.contains('Git').click()
    cy.contains('TS').click()

    cy.screenshot('main_page')
  })


  it('quiz page', () => {
    cy.contains('05:00').click()
    cy.contains('Git').click()
    cy.contains('-->').click()
    cy.get('button').first().click()

    cy.screenshot('quiz_page')
  })

  it('results page', () => {
    cy.contains('05:00').click()
    cy.contains('Git').click()
    cy.contains('-->').click()
    for (let i=0; i<10; i++) {
      cy.get('button').first().click()
      cy.contains('-->').click()
    }

    cy.screenshot('result_page')
  })
})
