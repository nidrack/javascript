//objetos iteraveis - possuem indices
//array, strings, etc
let nomes = ['ITAMAR', 'MAILOW']

//retorna índices
for (let i in nomes) {
    console.log(i,nomes[i])
}

//retorna valores
for (let valor of nomes) {
    console.log(valor)
}

nomes.forEach(
    function(valor, indice, lista)  {
    console.log(valor, indice, lista) ;
})


//nome, sobrenome e idade tornam-se como se fosse o índice
