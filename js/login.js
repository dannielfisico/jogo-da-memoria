const player = document.querySelector('.player-name')
const btnplay = document.querySelector('.btn-play')
const form = document.querySelector('.login-form')


const digitar = (e) => {
    
    if (e.target.value.length > 2) {
        btnplay.removeAttribute('disabled')
    } else {
        btnplay.setAttribute('disabled',"")
    }
    
}

const jogar = (ev) => {
    console.log(player)
    ev.preventDefault();
    localStorage.setItem('Jogador', player.value)
    window.location = './pages/game.html';
}

player.addEventListener('input', digitar)

form.addEventListener('submit', jogar)

