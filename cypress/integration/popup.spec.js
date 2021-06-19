/// <reference types = "cypress" />

describe('Work with Pop-Up', () => {
    it('Deve preencher Pop-Up diretamente',()=>{
        cy.visit('https://wcaquino.me/cypress/frame.html')        
        cy.get('#otherButton').click()   
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!') 
    })
})

    it.only('Deve verificar se o Pop-Up foi invocado',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
        cy.window().then(win =>{
            cy.stub(win, 'open').as('WinOpen')
        })               
        cy.get('#buttonPopUp').click()
        cy.get('@WinOpen').should('be.called')
    })  


})    



