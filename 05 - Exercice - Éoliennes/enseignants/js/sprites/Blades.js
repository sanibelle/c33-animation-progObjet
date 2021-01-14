class Blades {
    constructor(id) {
        this.element = document.getElementById(id);
        this.deg = Math.random() * 360;
        this.element.style.transform = "rotate(" + this.deg + "deg)";
    }

    tick() {
        this.deg += speed;
        this.element.style.transform = "rotate(" + this.deg + "deg)";
    }
}