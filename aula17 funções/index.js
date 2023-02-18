/*
function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}

saudacao('Teste');
saudacao('Porra');
*/

function saudacao(nome) {
    return (`Bom dia ${nome}`)
}
const variavel = saudacao('Teste2')

console.log(variavel)

/*
function soma (x,y) {
    return x + y;
}

console.log(soma(4,8))
*/

function soma (x,y) {
    const resultado = x + y ;
    return resultado;
}

console.log(soma(4,8))

// const raiz = (n) => { }  é a mesma coisa de
// const raiz = function (n) {}

const raiz = (n) => { // arrow function
    return n ** 0.5;
};
