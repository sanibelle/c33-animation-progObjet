class Ball {
    constructor(nodeId) {
        this.y = 5// position en y du ballon
        this.x = Math.floor(Math.random()*400)
        this.element = document.getElementById(nodeId)
    }
    
    tickDeLobjetBall() {
        // pour référer à un attribut/méthode dans l'objet, on doit utiliser this
        if (this.y <= 220) {
            this.element.style.top = `${this.y+=2}px`
            this.element.style.left = `${this.x}px`
        }
    }
}

//0 le javascript est lu
//1 la page html est chargee
//2 la css est appliquee
//3 levent load est déclenché
//4 l'objet ball est créé, ses attributs x, y et element initialisés
//5 Au premier TICK, la position est établie en fonction de x et y