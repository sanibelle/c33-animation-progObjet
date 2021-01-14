window.addEventListener('load',() => {
    // 1 est visible
    let currentOpacity = 1
    
    const tick = () => {
        const node = document.querySelector("main")
        currentOpacity-=.02
        node.style.opacity = currentOpacity
        // en une seule ligne, pour les fans de oneliner
        // document.querySelector("main").style.opacity = currentOpacity-=.02
        window.requestAnimationFrame(tick)
    }
    tick()
})