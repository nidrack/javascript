const alunos = ['nome1', 'nome2', 'nome3']
console.log(alunos)
console.log(alunos[0])
alunos.push('nome4'); //coloca apos o ultimo indice
console.log(alunos)
alunos.unshift('nome5') //coloca no primeiro indice
console.log(alunos)
alunos.pop() //tira o ultimo
console.log(alunos)
console.log(typeof alunos)
console.log(alunos instanceof Array)