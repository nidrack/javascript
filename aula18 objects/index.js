//const array = [1,2,3];
/*
const pessoa = {
    nome:'mailow',
    sobrenome: 'cão',
    idade: 'velho'
}

console.log(pessoa.nome)
*/

function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala () {
            console.log(`A minha idade é  ${this.idade}`)
        },

        incrementaIdade() {
            this.idade++;
        }
    };
}

const pessoa1 = criarPessoa('otario', 'troxa' , '23');
console.log(pessoa1.idade);

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();