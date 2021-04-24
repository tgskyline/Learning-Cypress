/// <reference types="cypress" />

describe('Cypress Basic',()=>{
    it('Should visit a page and assert title',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const tittle = cy.title()
        //console.log(tittle)

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Campo')

        cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain','Campo')
    })

//TODO Imprimir log no console
//TODO Escrever o Title em campo de texto

})