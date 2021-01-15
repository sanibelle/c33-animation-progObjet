class Alien{
    constructor(nodeId){
        this.element = document.getElementById(nodeId)
        this.teleport()
        this.score = 0

        this.element.onclick = () => {
            if (timeLeft > 0) {
                this.score++
                document.getElementById('input-score').value = this.score
                this.teleport()
            }
        }
    }

    teleport() {
        this.x = Math.random()*800
        this.y = 400
    }

    tick() {
        if (timeLeft > 0) {
            this.y -=2
            this.element.style.top =  `${this.y}px`
            this.element.style.left = `${this.x}px`
        }
    }
}