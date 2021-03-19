export {}

describe('E2E flow', () => {
  it('should play one round from start to finish', () => {
    cy.visit('http://localhost:3000')

    // Start screen
    cy.get('input[name="player"]').type('Macgyver')
    cy.contains('05:00').click()
    cy.contains('Git').click()
    cy.contains('-->').click()

    // Question screen
    cy.contains('placeholder question').should('be.visible')
    cy.contains('answer 1').should('be.visible')
    cy.contains('answer 2').should('be.visible')
    cy.contains('answer 3').should('be.visible')
    cy.contains('answer 1').click()
    cy.contains('-->').click()

    // Result screen
    cy.contains('You rock!').should('be.visible')
  })
})
