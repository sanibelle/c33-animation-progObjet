const INITIAL_OPACITY = 0
const MIN_OPACITY = 0
const MAX_OPACITY = 1
const INCREMENT_STEP = 0.002

class Frame{
    constructor(nodeId){
        this.opacityIncrement = INCREMENT_STEP //.002
        this.opacity = INITIAL_OPACITY
        // this.isOver = false
        this.element = document.getElementById(nodeId)
        this.element.style.opacity = this.opacity

        this.element.onmouseover = () => {
            //this.isOver = true
            this.opacityIncrement = -INCREMENT_STEP*4
        }
        this.element.onmouseout = () => {
            //this.isOver = false
            this.opacityIncrement = INCREMENT_STEP
        }
    }

    tick() {
        //  Gestion pour pas aller plus que 1 et moins que 0
        // if (this.isOver) {
        //     this.opacity -= this.opacityIncrement
        // } else {
        //     this.opacity += this.opacityIncrement
        // }
        this.opacity += this.opacityIncrement
        if (this.opacity >= MAX_OPACITY) {
            this.opacity = MAX_OPACITY
        }
        if (this.opacity <= MIN_OPACITY) {
            this.opacity = MIN_OPACITY
        }
        this.element.style.opacity = this.opacity
    }
}