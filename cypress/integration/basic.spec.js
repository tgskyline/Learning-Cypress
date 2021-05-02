/// <reference types="cypress" />

describe('Cypress Basic',()=>{
    it.only('Should visit a page and assert title',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const tittle = cy.title()
        //console.log(tittle)

        //cy.pause()

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Campo')

        cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain','Campo')

// IMPRESSÃO DO title no Log no resolvido

        cy.title().then(title=>{

            console.log(title)
        })   
    })

//TODO Imprimir log no console
//TODO RESOLVIDO Escrever o Title em campo de texto


    it('Should find and interact with an element',()=>{
      cy.visit('https://wcaquino.me/cypress/componentes.html')
     
      cy.get('#buttonSimple')
        .click()
        .should('have.value','Obrigado!')

    
    })

})