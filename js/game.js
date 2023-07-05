document.addEventListener("DOMContentLoaded", () => {
    let jogador = localStorage.getItem('Jogador')
    console.log(jogador)
    const titulo = document.querySelector('h1')
    titulo.innerHTML = `Player: ${jogador.toUpperCase()}`

    const grid = document.querySelector('.grid')


    const criarElemento = (tag, className) => {
        const elemento = document.createElement(tag)
        elemento.className = className
        return elemento
    }

    const createCards = () => {
        // const card = document.createElement('div')
        const card = criarElemento('div', 'card')
        // const front = document.createElement('div')
        const front = criarElemento('div', 'face front')
        // const back = document.createElement('div')
        const back = criarElemento('div', 'face back')

        // card.className = 'card'
        // front.className = 'face front'
        // back.className = 'face back'

        card.appendChild(front)
        card.appendChild(back)

        grid.appendChild(card)
    }

    for(let i =0; i<20;i++){
        createCards()
    }
})