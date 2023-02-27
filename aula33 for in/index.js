let frutas = ['MAÇÃ', 'PÊRA', 'ABACAXI']

for (let i in frutas) {
    console.log(i,frutas[i])
}

const pessoa = {
    nome: 'Fulano',
    sobrenome: 'de Tal',
    idade: 30
}

for (let a in pessoa) {
    console.log(a, pessoa[a])
}

//nome, sobrenome e idade tornam-se como se fosse o índice
