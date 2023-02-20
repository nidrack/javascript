/* PRIMEIRA RESOLUÇÃO */
/*
const h1 = document.querySelector('.container h1');
//h1.innerHTML = 'Só pra ver mesmo'

const data = new Date();

//h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

function getMesTexto(diaMes) {
    let mesTexto;
    switch (diaMes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
    }
}

function addZeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function getDataCompleta () {
    const nomeDiaSemana = getDiaSemanaTexto(data.getDay()) ;
    const nomeMes = getMesTexto(data.getMonth())
    const numDia = addZeroEsquerda(data.getDate())
    const numAno = data.getFullYear()
    const numHora = addZeroEsquerda(data.getHours())
    const numMinuto = addZeroEsquerda(data.getMinutes())

    return `${nomeDiaSemana}, ${numDia} de `+
            `${nomeMes} de ${numAno} as ${numHora}:${numMinuto} `
}

h1.innerHTML = getDataCompleta()
*/


const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML =  data.toLocaleDateString('pt-BR', {dateStyle: 'full'});

