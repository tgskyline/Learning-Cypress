// <reference types = "cypress" />

describe('Work with Dinamic Tests', () => {

    // Acessa o site para todos os demais testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // Antes de acessar ele irá recarregar a página para um novo teste
    beforeEach(() => {
        cy.viewport(1000,950)
        cy.reload()

    }) 

        const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
        foods.forEach( food=>{
        const sports = ['natacao', 'futebol', 'Corrida', 'Karate', 'nada']
        sports.forEach( sport=>{
        
            it(`Dinamic Test ${food} e ${sport}`,()=>{
                cy.get('#formNome').type('Tiago')
                cy.get('#formSobrenome').type('Gomes dos Santos')
                cy.get(`[name=formSexo][value=M]`).click()
                cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click()
                cy.get('#formEscolaridade').select('Doutorado')
                cy.get('#formEsportes').select(`${sport}`)
                cy.get('#elementosForm\\:sugestoes').type('Melhorar esse formulário...')
                cy.get('#formCadastrar').click()
                cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        })
    })
    })

            it.only('Deve selecionar todos usando o each',()=>{
                cy.get('#formNome').type('Tiago')
                cy.get('#formSobrenome').type('Gomes dos Santos')
                cy.get(`[name=formSexo][value=M]`).click()

                cy.get('[name=formComidaFavorita]').each($el =>{
                    // $el.click()
                    if ($el.val() !=='vegetariano')
                    cy.wrap($el).click()

                })

                cy.get('#formEscolaridade').select('Doutorado')
                cy.get('#formEsportes').select(`Corrida`)
                cy.get('#elementosForm\\:sugestoes').type('Melhorar esse formulário...')
                cy.get('#formCadastrar').click()
                cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
                // cy.clickAlert('#formCadastrar','Tem certeza que voce eh vegetariano?')

            })
})        
  