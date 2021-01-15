class Zombie {
    constructor(nodeId, imageHeight, imageWidht){
        this.element = document.getElementById(nodeId)
        this.imageHeight = imageHeight
        this.imageWidht = this.element.offsetWidth
        this.x = Math.random()*(900-imageWidht)
        this.y = Math.random()*(500-this.imageHeight)
        this.isMoving = false
        this.yPositionIncrement = 2
        
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        
        this.element.onclick = () => {
            this.isMoving = true
        }
    }

    tick() {
        if (this.isMoving){
            this.y+=this.yPositionIncrement
            this.element.style.top = `${this.y}px`
            this.element.style.left = `${this.x}px`

            if (this.y >= 500-this.imageHeight){
                // this.yPositionIncrement *= -1 
                // ou 
                // this.yPositionIncrement = -2
                // ou
                this.yPositionIncrement = -this.yPositionIncrement
            } else if (this.y <= 0){
                this.yPositionIncrement = -this.yPositionIncrement
            }
        }

    }
}