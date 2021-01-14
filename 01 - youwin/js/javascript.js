const RED = 'red'
const GREEN = 'green'
let currentColor = RED
let counter = 0
const nodeFermerPub = document.querySelector("p")

const flasherX = () => {
    if (counter % 10 === 0){
        if (currentColor === GREEN) {
            currentColor = RED
        } else {
            currentColor = GREEN
        }
        nodeFermerPub.style.color = currentColor
        console.log("🚀 ~ file: javascript.js ~ line 14 ~ tick ~ currentColor", currentColor)
    }
    counter++
}

const deplacerImage = () => {
    // Retourne la premiere balise div de la page html
    // On va préférer getElementById
    const node = document.querySelector("div")

    if (node.offsetTop < 100) {
        node.style.top = `${node.offsetTop+ 50}px`
    }
}


const tick = () => {
    flasherX()
    deplacerImage()
    // Comme un setTimeout, mais on a pas de controle sur les millisecondes
    // ET on ne peut pas passer d'arguments en parametres
    // Se rafraichi aux 16ms
    window.requestAnimationFrame(tick)
}
tick()

const fermerPub = () => {
    const node = document.querySelector("div")
    node.style.display = 'none';
}


// troisieme facon dajouter un event
// permet de deplacer le x
nodeFermerPub.onmouseover = () => {
    nodeFermerPub.style.left = `${Math.random()*1230}px`
    nodeFermerPub.style.top = `${Math.random()*660}px`
}