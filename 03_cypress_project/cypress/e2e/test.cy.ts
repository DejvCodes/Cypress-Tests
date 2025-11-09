describe('Scénář', () => {

    beforeEach(() => {
        cy.visit('http://www.uitestingplayground.com/textinput');
    })

    it('test', () => {
        cy.get('input');  // Podle HTML tagu
        cy.get('.form-control');  // Podle class
        cy.get('#newButtonName'); // Podle ID
        cy.get('input#newButtonName.form-control'); // Kombinace
        // cy.get('[fullwidth]'); // Podle atributu bez hodnoty
        cy.get('[placeholder="MyButton"]'); // Podle atributu s hodnotou  
        cy.get('.btn.btn-primary'); // Podle atributut s více hodnotami
    })

    it.only('test2 - find element', () => {
        // get - najde element(y) podle selektoru (např. třídy, ID, atributy)
        // contains - najde elementy podle textu, case sensitive
        // find - hledá element(y) uvnitř už nalezeného elementu

        // Contains - najde první výskyt na stránce
        //          - hlídat malá a velká písmena
        //          - zapnutí a vypnutí case sensitive
        
        // cy.contains("Button That Should Change it's Name Based on Input Value");
        // cy.contains("Button That Should Change it's Name Based on Input value"); // Error
        // cy.contains("button that should change it's name based on input value", {matchCase: false});

        // Najdi prvek, který je type button a ma text 'Button...'
        cy.contains('[type="button"]', "Button That Should Change it's Name Based on Input Value");

        // Vyber prvek .form-group, nekdě uvnitř má text 'Set New Button Name'
        cy.contains('.form-group', "Set New Button Name"); 

    })
})

// "http://www.uitestingplayground.com"
// "https://www.globalsqa.com"
// "https://the-internet.herokuapp.com"
// "https://www.playground.bondaracademy.com/pages/iot-dashboard"