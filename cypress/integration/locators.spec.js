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

    it('...', () =>{


    })

})    