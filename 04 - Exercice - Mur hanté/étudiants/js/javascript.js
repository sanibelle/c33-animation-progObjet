let spriteList = [];
const FRAME_COUNT = 6
const tick = () => {
    spriteList.forEach(e => e.tick())
    window.requestAnimationFrame(tick)
}
window.addEventListener('load', () =>{
    for (let i = 1; i <= FRAME_COUNT; i++)
    {
        spriteList.push(new Frame(i))
    }
    tick()
})
