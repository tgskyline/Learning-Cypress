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

    //Definição da forma de locação de elementos na página de acordo com a tag abaixo no arquivo 'index.js' dentro de SUPPORT
    
    // Cypress.SelectorPlayground.defaults({
    //     selectorPriority: ['id', 'class', 'attributes'],
    //   })

    // Página para consulta de JQuery Selector https://www.w3schools.com/jquery/jquery_ref_selectors.asp

    it('using jquery selector', () =>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody >tr:eq(0) td:nth-child(3) >input').click()
    })

})    