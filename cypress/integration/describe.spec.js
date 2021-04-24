/// <reference types="cypress" />

it('Título teste externo...',() =>{

})

describe('Subgrupo do teste...', () => {
    describe('Testes segundo nível mais especificos...', () => {
        describe('Testes terceiro nível...', () => {
            it.skip('teste mais especifico...', () =>{
            })
// skip é para não executar determinado teste
        })

        it('teste mais especifico...', () =>{
    })

})

describe('Testes mais especificos...', () => {
    it('teste mais especifico...', () =>{
})

})

    it('teste interno...', () =>{

    })

  })
