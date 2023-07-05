const player = document.querySelector('.player-name')
const btnplay = document.querySelector('.btn-play')
let nomeJogador = null

const digitar = (e) => {
    nomeJogador = e.target.value.toUpperCase().trim()
    console.log(nomeJogador.length)
    if (nomeJogador.length > 2) {
        btnplay.removeAttribute('disabled')
    } else {
        btnplay.setAttribute('disabled',"")
    }
    
}



player.addEventListener('input', digitar)

