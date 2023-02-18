alert('Teste Alert com mensagem qualquer');
//window é o objeto do método alert, como se fosse window.alert
//window.confirm('Deseja realmente apagar') solicita um valor booleano
//window.prompt('Digite seu nome:') solicita a entrada de um dado
//const confirma = confirm('Realmente deseja cancelar?') a variavel confirma recebe o valor da reposta
//const num = prompt('Digite um número') valor salvo na variavel num
//prompt recebe apenas valores string
const num1 = parseFloat(prompt('Digite um número'))
const num2 = parseFloat(prompt('Digite outro número'))
const resultado = num1 + num2
alert(`O resultado foi ${resultado}`)
