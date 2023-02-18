// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix. Valor em milissegungos
// const umDia = 60 * 60 * 24 * 1000 // um dia em milissegundos

// const data = new Date(2019, 3, 20, 15, 14, 27)

const data = new Date('2019-04-20 20:20:59')

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
console.log(data.toString());
