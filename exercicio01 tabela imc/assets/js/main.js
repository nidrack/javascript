/*
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let resultado = ;

function getImc () {
    if (resultado < 18.5) {
        return msg = 'Abaixo do peso'
    } else if (resultado >= 18.5 && resultado < 25) {
        return msg = 'Peso normal'
    } else if (resultado >= 25 && resultado < 30) {
        return msg = 'Sobrepeso'
    } else if (resultado >= 30 && resultado < 35) {
        return msg = 'Obesidade grau 1'
    } else if (resultado >= 35 && resultado < 40) {
        return msg = 'Obesidade grau 2'
    } else {
    return msg = 'Obesidade grau 3'
    }
}

console.log(`Seu índice IMC é ${resultado.toFixed(2)} (${imc()})`)

texto.innerHTML += (`Seu índice IMC é ${resultado} (${imc()})`);
*/

//pega o objeto por id (#id)
const form = document.querySelector('#formulario');

//executa a função event listener do tipo submit
//ao receber o movimento executa outra função sendo "e" o evento
form.addEventListener('submit', (e) => {
    e.preventDefault(); //previne que a página seja recarregada
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = (`Seu índice IMC é ${imc} (${nivelImc})`)

    setResultado(msg, true)
});

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];
    if (imc < 18.5) {
        return nivel[0]
    } else if (imc >= 18.5 && imc < 25) {
        return nivel[1]
    } else if (imc >= 25 && imc < 30) {
        return nivel[2]
    } else if (imc >= 30 && imc < 35) {
        return nivel[3]
    } else if (imc >= 35 && imc < 40) {
        return nivel[4]
    } else {
        return nivel[5]
    }
};

function getImc(peso, altura) {
    const imc = peso / ((altura / 100) ** 2);
    return imc.toFixed(2)
}

function criaP() {
    const p = window.document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
};

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
  
    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }
  
    p.innerHTML = msg;
    resultado.appendChild(p);
};


