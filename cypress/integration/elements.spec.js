/// <reference types = "cypress" />

describe('Work with basic elemets', () => {

    // Acessa o site para todos os demais testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // Antes de acessar ele irá recarregar a página para um novo teste
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    //{backspace} é usado para apagar o texto de acordo com o número de casas

    it('TextFileds',() => {
        cy.get('#formNome')
            .type('Tiago')
            .should('have.value','Tiago')
        cy.get('[data-cy=dataSobrenome]')
            .type('Gomes dos Santos12{backspace}{backspace}')
            .should('have.value','Gomes dos Santos')

    // O uso de "\" no campo #elementosForm\:sugestoes, faz com ele leia somente "\:" do campo 

        cy.get('#elementosForm\\:sugestoes')   
            .type('BláBláBláBláBláBláBláBláBláBláBláBláBláBláBlá')
            .should('have.value', 'BláBláBláBláBláBláBláBláBláBláBláBláBláBláBlá')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')   
            .type('Qualquer')
            .should('have.value','Qualquer')

        cy.get('#elementosForm\\:sugestoes')     
            .clear() // Para limpar o campo

    //{selectall} escreve e logo em seguida apaga e escreve a segunda opção no caso 'acerto'
    //{delay:150} determino um tempo maior entre a escrita do primeiro texto e do segundo

            .type('Erro{selectall}acerto', {delay:150}) 
            .should('have.value','acerto')
    })

    it('RadioButton',()=>{
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')       
            .should('be.not.checked')
    
    // É possivel buscar grupamentos de campos em pesquisa direto JQuery Select        

        cy.get('[name=formSexo]') 
            .should('have.length',2)

    })

    it('CheckBox',()=>{
        //cy.get('#formComidaCarne')
            //.click()
            //.should('be.checked')
        cy.get('[name="formComidaFavorita"]') 
            .click({multiple:true})  
    //TODO validar as opções de combo         
    })

    it('Combo',()=>{
        cy.get('[data-test=dataEscolaridade]')
            .select('2graucomp') //value = 2graucomp e não "2o grau completo"
            .should('have.value','2graucomp')
            
    })

    it.only('Combo Multiplo',()=>{
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Corrida','nada'])
    //TODO validar combo multiplo
    })

})