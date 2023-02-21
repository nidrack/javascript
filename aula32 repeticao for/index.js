/*
São três partes:
1 - Criar variável de controle [i]
2 - Condição
3 - Incremento

i = index
*/
for (let i = 0; i <= 10; i++) {
    // % operador de resto
    // === operador booleano de exatamente o mesmo valor
    // ? condição ternária da validação do booleano
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}

const frutas = ['Maçã', 'Pêra', 'Uva']
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}