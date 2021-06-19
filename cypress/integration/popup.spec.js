/// <reference types = "cypress" />

describe('Work with Pop-Up', () => {
    it('Deve preencher Pop-Up diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it('Deve verificar se o Pop-Up foi invocado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('WinOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@WinOpen').should('be.called')
    })

    describe.only('With links...', () => {
        beforeEach(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        it('Check Pop-Up URL', () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html')
        })
    

        it('Should acess Pop-Up Dinamically - Deve acessar o Popup Dinamicamente',()=>{
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
        })        
    })
    
        it('Should force link on same page / Deve forçar o link na mesma página', () =>{
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield').type('Quero ver se funciona')    
        })
    })    
})
