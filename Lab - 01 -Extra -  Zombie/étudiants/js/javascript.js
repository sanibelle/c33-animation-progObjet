window.addEventListener("load", () => {
    let spriteList = []

    spriteList.push(new Zombie("zombie1", 240, 150))
    spriteList.push(new Zombie("zombie2", 203, 180))
    const tick = () => {
        spriteList.forEach(s => {
            s.tick()
        })
        window.requestAnimationFrame(tick)
    }
    tick()
})