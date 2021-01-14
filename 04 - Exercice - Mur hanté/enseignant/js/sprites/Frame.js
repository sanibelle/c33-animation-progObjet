const FADE_STEP = 0.002

class Frame{
    constructor(id) {
        this.element = document.getElementById(id)
        this.opacity = 0
        this.fade  = FADE_STEP
        this.element.onmouseover = () => {
            this.fade = -FADE_STEP*2
        }
        this.element.onmouseleave = () => {
            this.fade = FADE_STEP
        }
    }

    changeOpacity() {
        this.opacity+=this.fade
        if (this.opacity <=0){
            this.opacity = 0
        }
        else if (this.opacity >=1){
            this.opacity = 1
        }

        this.element.style.opacity = this.opacity
    }

    tick(){
        this.changeOpacity()
    }
}