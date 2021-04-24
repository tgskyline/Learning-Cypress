
it('sem testes, ainda', () => { })

//const getSomething = () => 10;

const getSomething = callback => {
    setTimeout(()=>{
        //console.log('respondendo...')
        callback(12);
    },1000)

}

const system = () =>{
    console.log('init');
    //const something = getSomething ();
    //getSomething(some => console.log('Something is ${some}'));
    getSomething(some => {
        console.log('Something is ${some}')
    //console.log('Something is ${something}');
    console.log('end');
})

}

system();
