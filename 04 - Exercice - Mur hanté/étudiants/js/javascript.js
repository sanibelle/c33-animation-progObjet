let spriteList = [];
const FRAME_COUNT = 6
const tick = () => {
    spriteList.forEach(e => e.tick())
    requestAnimationFrame(tick)
}
window.addEventListener('load', () =>{
    for (let i = 1; i <= FRAME_COUNT; i++)
    {
        spriteList.push(new Frame(`frame-${i}-evil`))
    }
    tick()
})
