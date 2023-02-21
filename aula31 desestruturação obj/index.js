const pessoa = {
    nome: 'Primeiro',
    sobrenome: 'Nome',
    idade: 30,
    endereco: {
        logradouro: 'Rua',
        nomeRua: 'Mangueiras',
        numero: 'SN'
    }
};

const {
    nome = 'Outro', 
    sobrenome = 'Coisa',
    endereco : {nomeRua, numero},
    endereco
} = pessoa;

console.log(nome,sobrenome, nomeRua, numero, endereco);
