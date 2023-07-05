document.addEventListener("DOMContentLoaded", () => {
    let jogador = localStorage.getItem('Jogador')
    // console.log(jogador)
    const playername = document.querySelector('.player-name')
    playername.innerHTML = `Player: ${jogador.toUpperCase()}`

    let melhorTempo = document.querySelector('.melhorTempo')

    let timeM = document.querySelector('.timerM')
    let timeS = document.querySelector('.timerS')

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

    let qtdJogadas = 0

    let primeiraCarta = ""
    let segundaCarta = ""

    const criarElemento = (tag, className) => {
        const elemento = document.createElement(tag)
        elemento.className = className
        return elemento
    }

    const currentTime = () =>{
        setInterval(() => {
            let tempoSegundos =  +timeS.innerHTML
            tempoSegundos++
            
            timeS.innerHTML = tempoSegundos
        }, 1000)
    }

    const checarCartoes = () => {
        const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem')
        const segundoPersonagem = segundaCarta.getAttribute('data-personagem')

        if (primeiroPersonagem === segundoPersonagem){
            primeiraCarta.firstChild.classList.add('disable-card')
            segundaCarta.firstChild.classList.add('disable-card')
            primeiraCarta = ""
            segundaCarta = ""

        } else {

            setTimeout(() => {
                primeiraCarta.classList.remove('revelar-carta')
                segundaCarta.classList.remove('revelar-carta')
                primeiraCarta = ""
                segundaCarta = ""
            }, 1500);

            
        }
    }


    function desvirarCarta(evento) {
      
        if (evento.target.parentNode.className.includes('revelar-carta')) {
            return
        }

        if (primeiraCarta === "") {
            evento.target.parentNode.classList.add('revelar-carta')
            primeiraCarta = evento.target.parentNode
        } else if (segundaCarta === "") {
            evento.target.parentNode.classList.add('revelar-carta')
            segundaCarta = evento.target.parentNode

            checarCartoes()
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

        card.setAttribute('data-personagem', personagem)

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
   currentTime()
   
})