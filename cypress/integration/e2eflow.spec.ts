export {}

describe('E2E flow', () => {
  it('should play one round from $start to finish', () => {
    cy.visit('http://localhost:3000')

    // Start screen
    cy.get('input[name="player"]').type('Macgyver')
    cy.contains('05:00').click()
    cy.contains('Web').click()
    cy.contains('next').click()

    // Question screen
    for (let i = 0; i < 2; i++) {
      cy.get('button').first().click()
      cy.contains('next').click()
    }
    // Result screen
    cy.contains('Well done!').should('be.visible')
  })
})
