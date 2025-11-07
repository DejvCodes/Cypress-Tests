describe('Dynamic table', () => {

    beforeEach(() => {
        cy.visit('/dynamictable');
    });

    it.skip('Find CPU at Chrome', () => {
        // each -> Pokud se jedná o Cypress kolekci DOM prvků
        cy.get('div[role="row"] span').each((cell) => {
            if(cell.text() === 'Chrome') {
                cy.log(`Našli jsme: ${cell.text()}`);
                let chromeValues: string[] = [];
                chromeValues.push(cell.next().text());
                chromeValues.push(cell.next().next().text());
                chromeValues.push(cell.next().next().next().text());
                chromeValues.push(cell.next().next().next().next().text());
                
                cy.log('Values of Chrome', chromeValues);

                // forEach -> Pro klasické JS pole
                chromeValues.forEach((value) => {
                    if (value.includes('%')) {
                        cy.log(value);
                        cy.get('p.bg-warning').should('contain', value);
                    }
                })
            }
            // cy.log(cell.text());
        })
    })

    it('Find CPU at Chrome', () => {
        cy.get('div[role="row"]')
            .contains('Chrome')
            .parents('div[role="row"]')
            .within(() => {
                cy.get('span').then((cells) => {
                    const chromeValues: string[] = [];

                    for(let i = 1; i <= 4; i++) {
                        chromeValues.push(cells.eq(i).text());
                    }

                    cy.log('Values of Chrome', chromeValues);

                    chromeValues.forEach((value) => {
                        if (value.includes('%')) {
                            cy.log(`CPU usage: ${value}`);
                            // cy.get('p.bg-warning').should('contain', value); // Error -> díky within

                            // Přesuneme ven pomocí aliasu
                            cy.wrap(value).as('cpuValue');
                        }
                    })
                })
            })

            cy.get('@cpuValue')
                .then(value => {
                    cy.get('p.bg-warning').should('contain', value);
                })
    })
});