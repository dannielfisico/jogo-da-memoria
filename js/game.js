document.addEventListener("DOMContentLoaded", () => {
    let jogador = localStorage.getItem('Jogador')
    // console.log(jogador)
    const titulo = document.querySelector('h1')
    titulo.innerHTML = `Player: ${jogador.toUpperCase()}`

    const grid = document.querySelector('.grid')

    const personagens = [
        'cachorro',
        'cavalo',
        'elefante',
        'galo',
        'gato',
        'jacare',
        'macaco',
        'rinoceronte',
        'tatu',
        'tigre'
    ]

    let primeiraCarta = ""
    let segundaCarta = ""

    const criarElemento = (tag, className) => {
        const elemento = document.createElement(tag)
        elemento.className = className
        return elemento
    }


    const desvirarCarta = (evento) => {
        if(evento.target.parentNode.className.includes('revelar-carta')){
            return
        }

        if(primeiraCarta === ""){
            evento.target.parentNode.classList.add('revelar-carta')
            primeiraCarta = evento.target.parentNode
        } else {
            
        }

         
    }



    const createCards = (personagem) => {
        // const card = document.createElement('div')
        const card = criarElemento('div', 'card')
        // const front = document.createElement('div')
        const front = criarElemento('div', 'face front')
        // const back = document.createElement('div')
        const back = criarElemento('div', 'face back')

        // card.className = 'card'
        // front.className = 'face front'
        // back.className = 'face back'

        front.style.backgroundImage = `url(../image/${personagem}.jpg)`

        card.appendChild(front)
        card.appendChild(back)

        card.addEventListener('click', desvirarCarta)

        return card

    }

    



    const loadGame = () => {

        const duplicarPersonagens = [... personagens, ...personagens]

        const embaralharPersonagens = duplicarPersonagens.sort(() => Math.random()-0.5)

        embaralharPersonagens.forEach((personagem) => {
            const cartao = createCards(personagem)
            grid.appendChild(cartao)
        })
    }

   loadGame()
})