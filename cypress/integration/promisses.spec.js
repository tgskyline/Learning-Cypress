import { reject } from "cypress/types/bluebird";

it('sem testes, ainda', () => { })

//const getSomething = () => 10;

//const getSomething = callback => {
const getSomething = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        //console.log('respondendo...')
        callback(13);
    },1000)
})
}

const system = async () =>{
    console.log('init');
    //const something = getSomething ();
    //getSomething(some => console.log('Something is ${some}'));
    //getSomething(some => {
    const some = await getSomething()
    console.log('Something is ${some}')
    //console.log('Something is ${something}');
    console.log('end');
}

system();
