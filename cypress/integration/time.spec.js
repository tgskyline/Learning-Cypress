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
            cy.get('#resultado > span').should('contain','15/07/2021')

            // cy.clock()
            // cy.get('#buttonNow').click()
            // cy.get('#resultado > span').should('contain','31/12/1969')

            const dt = new Date(2021,7,11,12,30,50)
            cy.clock(dt.getTime())
            cy.get('#buttonNow').click()
            cy.get('#resultado > span').should('contain','11/08/2021')

        })

        it.only('Goes to the future',()=>{
            cy.get('#buttonTimePassed').click()
            cy.get('#resultado > span').should('contain','1626')
            cy.get('#resultado > span').invoke('text').then(t =>{
                const number = parseInt(t)
                cy.wrap(number).should('gt', 1626346103301) //'gt' significa maior que (grea then)
            })

            cy.clock() //reseta o tempo
            cy.get('#buttonTimePassed').click()
            cy.get('#resultado > span').invoke('text').then(t =>{
                const number = parseInt(t)
                cy.wrap(number).should('lte', 0) //'lte' significa menor ou igual (les then or equal)
            })

            // cy.wait(1000) //Para o tempo
            // cy.get('#buttonTimePassed').click()
            // cy.get('#resultado > span').invoke('text').then(t =>{
            //     const number = parseInt(t)
            //     cy.wrap(number).should('lte', 1000) //'gte' significa maior ou igual (grea then or equal)
            // })

            cy.tick(5000)
            cy.get('#buttonTimePassed').click()
            cy.get('#resultado > span').invoke('text').then(t =>{
                const number = parseInt(t)
                cy.wrap(number).should('gte', 5000)
            })

            cy.tick(10000)
            cy.get('#buttonTimePassed').click()
            cy.get('#resultado > span').invoke('text').then(t =>{
                const number = parseInt(t)
                cy.wrap(number).should('gte', 15000)
            })

    })    

})        