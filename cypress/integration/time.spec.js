/// <reference types = "cypress" />

describe('Work with Alerts', () => {

    // Acessa o site para todos os demais testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.viewport(1000,700)
    })

    // // Antes de acessar ele irá recarregar a página para um novo teste
    // beforeEach(() => {
    //     cy.reload()

    // })    

        it('Going back to the post',()=>{
            cy.get('#buttonNow').click()
            cy.get('#resultado > span').should('contain','11/07/2021')

            // cy.clock()
            // cy.get('#buttonNow').click()
            // cy.get('#resultado > span').should('contain','31/12/1969')

            const dt = new Date(2021,7,11,12,30,50)
            cy.clock(dt.getTime())
            cy.get('#buttonNow').click()
            cy.get('#resultado > span').should('contain','11/08/2021')

        })

})        