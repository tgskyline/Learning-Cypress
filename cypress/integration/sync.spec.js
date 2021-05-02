/// <reference types = "cypress" />

describe('Esperas...',()=>{
    
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

        beforeEach(() => {
        cy.reload()
    })  

    it('Deve esperar o elemento estar disponível',() => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys',() => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')

// Não se pode fazer assertivas que uma seja oposto da outra!
    })

        it('Uso do find',()=>{

//Atenção ao usar um "find" porque le fica preso no primeiro ponto usado
            
            cy.get('#buttonList').click()
            cy.get('#lista li')
                .find('span')
                .should('contain', 'Item 1')
            //cy.get('#lista li')
              //  .find('span')
                //.should('contain', 'Item 2')
            cy.get('#lista li span')
                .should('contain', 'Item 2')
        })

        it.only('Uso do find listacom DOM',()=>{
          
            cy.get('#buttonListDOM').click()
            cy.get('#lista li')
                .find('span')
                .should('contain', 'Item 1')
            //cy.get('#lista li')
              //  .find('span')
                //.should('contain', 'Item 2')
            cy.get('#lista li span')
               .should('contain', 'Item 2')
        
        })


})