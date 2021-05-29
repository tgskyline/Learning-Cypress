/// <reference types="cypress" />

describe('Cypress Basic', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const tittle = cy.title()
        //console.log(tittle)

        //cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        // IMPRESSÃO DO title no Log no resolvido
        
        //RESOLVIDO Escrever o Title em campo de texto

        let syncTitle

        cy.title().then(title => {

            console.log(title)

        cy.get('#formNome').type(title) 
        
        syncTitle = title

        })

        cy.get('[data-cy=dataSobrenome]').then($el =>{

            $el.val(syncTitle)
        cy.get('#elementosForm\\:sugestoes').then($el=>{ // lembrar que sempre que houver ":" é necessário colocar mais uma "\"
            cy.wrap($el).type(syncTitle)


            })

        })

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

        
    })

})