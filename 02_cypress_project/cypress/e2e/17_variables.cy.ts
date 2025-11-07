describe('Environment variable', () => {

    it('', () => {
        cy.log(Cypress.env('firstVariable'));
        cy.log(Cypress.env('secondVariable'));

        // cy.visit(Cypress.env('demoqa'));
        cy.visit(Cypress.env('herokuapp'));
    })
})