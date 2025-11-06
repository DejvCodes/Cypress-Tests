describe('Scénář', () => {
    
    beforeEach(() => {
        cy.visit('/textinput');
    })

    it('input btn', () => {
        cy.get('input.form-control');
        cy.get('#newButtonName');
        cy.get('input#newButtonName');

        // cy.get('input#newButtonName').type('David {home} Dejv 17');
        cy.get('input#newButtonName').type('David Dejv 17');

        cy.get('button#updatingButton')
            .click()
            .should('have.text', 'David Dejv 17');
        
        cy.get('button#updatingButton')
            .click()
            .then(btn => {
                // btn - jQuery objekt
                expect(btn).to.have.text('David Dejv 17'); // expect - jQuery objekt, Cypress chainable objekt
                // btn.should('have.text', 'David Dejv 17') // should - Cypress chainable objekt
            });
    })
})     