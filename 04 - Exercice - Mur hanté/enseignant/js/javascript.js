let spriteList = [];

window.addEventListener("load", () => {
    for (let i = 1; i <= 6; i++) {
        spriteList.push(new Frame("frame-" + i + "-evil"));
    }
    tick();
})


const tick = () => {
    spriteList.forEach(f => f.tick())
    window.requestAnimationFrame(tick);
}