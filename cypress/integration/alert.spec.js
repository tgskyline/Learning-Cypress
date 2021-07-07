/// <reference types = "cypress" />


describe('Work with Alerts', () => {

    // Acessa o site para todos os demais testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.viewport(1000,700)
    })

    // Antes de acessar ele irá recarregar a página para um novo teste
    beforeEach(() => {
        cy.reload()

    })    

    it.only('Alert',()=>{
      //cy.get('#alert').click()
        //cy.on('window:alert', msg => {
          //  console.log(msg)
            //expect(msg).to.be.equal('Alert Simples')
            // No console para gerar um alerta dentro da estrutura HTML window.alert('Mensagem de Teste')    
        //}) 
        cy.clickAlert('#alert','Alert Simples') //Exemplo de como inserir um commad do arquivo command.js
    })
    
    it('Alert com Mock',()=>{
        const stub =cy.stub().as('alerta') //as('alerta da um nome ao "Alias(es)")
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')

        })
         
    })
    
    it('Confirm',()=>{
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
        
    })
    
    it('Deny',()=>{
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
        
    })

    it('Prompt',()=>{
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns('42')
        })
        cy.on('window:confirm', msg => {
          expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
        
    })
    it('Validando Mensagens',()=>{
        const stub = cy.stub().as('alerta')
        cy.on('window:alert',stub)
        cy.get('#formCadastrar').click()
            .then(()=> expect (stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
            
        cy.get('#formNome').type('Tiago')
        cy.get('#formCadastrar').click()
            .then(()=> expect (stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
       
        cy.get('[data-cy=dataSobrenome]').type('Gomes dos Santos')
        cy.get('#formCadastrar').click()
            .then(()=> expect (stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))    

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
    })
})