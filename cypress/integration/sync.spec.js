/// <reference types = "cypress" />

describe('Esperas...',()=>{
    
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

        beforeEach(() => {
        cy.reload()
    })  

    it('Deve esperar o elemento estar disponível',() => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys',() => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')

// Não se pode fazer assertivas que uma seja oposto da outra!
    })

    it('Uso do find',()=>{

//Atenção ao usar um "find" porque le fica preso no primeiro ponto usado
            
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#lista li')
         //  .find('span')
            //.should('contain', 'Item 2')
        cy.get('#lista li span')
                .should('contain', 'Item 2')
        })

    it('Uso do find listacom DOM',()=>{
          
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#lista li')
        //  .find('span')
            //.should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
        
        })

    it('Uso do Timeout I', ()=>{

        cy.get('#buttonDelay').click()
        //cy.get('#novoCampo',{timeout:1000}).should('exist')
        cy.get('#novoCampo').should('exist')

// Ao Invés de definir timeout em cada pode ser definido para todos pela linha de comanda "defaultCommandtimout":1000 no arquivo cypress.json            

        })

    it('Uso do Timeout II',()=>{

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        //cy.get('#lista li span',{timeout:30000})
            //.should('contain', 'Item 2')
        
        //cy.get('#buttonListDOM').click()
        //cy.get('#lista li span',{timeout:30000})
            
        cy.get('#buttonListDOM').click()
        //cy.wait(5000) //Não usar WAIT
        //cy.get('#lista li span',{timeout:30000})
        cy.get('#lista li span')
            .should('have.length', '1')
        cy.get('#lista li span')
            .should('have.length', '2')

        })
    it('Click Retry- Tentativa de vários click',()=>{

        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value','111')

    })
        
    it.only('Should vs Then',()=>{
        //cy.get('#buttonListDOM').click()
        cy.get('#buttonListDOM').then($el =>{
            //.should('have.length',1)
            //console.log($el)
            expect($el).to.have.length(1)
           //return 2
            cy.get('#buttonList')

//Then aguarda a busca para trazer o resultado, já o Should ele fica executando e tranzendo até get encontrar algo

        })//.and('have.id', 'buttonListDOM')

    })


})