document.addEventListener("DOMContentLoaded", () => {
    let jogador = localStorage.getItem('Jogador')
    console.log(jogador)
    const titulo = document.querySelector('h1')
    titulo.innerHTML = `Player: ${jogador.toUpperCase()}`
})