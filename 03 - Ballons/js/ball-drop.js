window.addEventListener('load', () => {
    const spriteList = []
    
    for (let i = 0; i < BALL_COUNT; i++) {
        spriteList.push(new Ball(`ball_${i}`))
    }
    
    const tick = () => {
        spriteList.forEach(ball => {
            ball.tickDeLobjetBall()
        })
        window.requestAnimationFrame(tick)
    }
    tick()
})    
