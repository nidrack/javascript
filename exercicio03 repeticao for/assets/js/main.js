const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' }
]

const container = document.querySelector('.container')

const div = document.createElement('div')

container.appendChild(div)

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i])
}

function criarElementos() {
    for (let i = 0; i < elementos.length; i++) {
        /* MINHA SOLUÇÃO
        const a = document.createElement(elementos[i].tag)
        a.innerHTML = elementos[i].texto
        container.appendChild(a)
        */

        let { tag, texto } = elementos[i];
        let a  = document.createElement(tag);
        a.innerHTML = texto
        div.appendChild(a)
        console.log(`Elemento ${tag} criado!`)
        
    }
}

criarElementos()