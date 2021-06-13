/// <reference types = "cypress" />

describe('Work with Alerts', () => {

    // Acessa o site para todos os demais testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // Antes de acessar ele irá recarregar a página para um novo teste
    beforeEach(() => {
        cy.reload()

    })    

    it('Alert',()=>{
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
            // No console para gerar um alerta dentro da estrutura HTML window.alert('Mensagem de Teste')    
        })
    })
    
    it.only('Alert com Mock',()=>{
        const stub =cy.stub().as('alerta') //as('alerta da um nome ao "Alias(es)")
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')

        })
         
    })
})
    