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

    it('Using jQuery Selector', () =>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody >tr:eq(0) td:nth-child(3) >input')
        cy.get('[onclick*=\'Francisco\']') // Usar \ antes do ' como caracter de escape
        cy.get("[onclick*='Francisco']") // Usar " antes do [] como caracter de escape
        cy.get('table#tabelaUsuarios td:contains(\'Doutorado\'):eq(0)~td:eq(3)>input ') // Por célula
        cy.get('table#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6)') // Por linha
    })

    it('Using Xpath',() =>{
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/ ..//input[@type='text']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(.,'Doutorado')])[2]/ ..//input[@type='text']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(.,'Doutorado')])[2]/ ..//input[@type='checkbox']")
        cy.xpath("//*[@data-test='data2']")
        cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/ ..//input[@type='text']").type("Funciona")
    })

})    