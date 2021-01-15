let timeLeft = 10
window.addEventListener('load', () => {
    const alien = new Alien('alien')
    const tick = () => {
        alien.tick()
        requestAnimationFrame(tick)
    }
    tick()

    const removeOneSecond = () => {
        timeLeft--
        document.getElementById('input-timer').value =  timeLeft
        if (timeLeft > 0 ){
            setTimeout(removeOneSecond, 1000)
        }
            
    }
    removeOneSecond()

})
