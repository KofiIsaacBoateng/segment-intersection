// canvas initiation and context creation
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

// lines coordinates
const A = {x: 220, y: 120}
const B = {x: 220, y: 220}
const C = {x: 50, y: 100}
const D = {x: 250, y: 150}

const mouse = {x: 0, y: 0}
let angle = 0

document.onmousemove = (event) => {
    mouse.x = event.x 
    mouse.y = event.y
}

const animate = () => {
    const radius = 50
    A.x = mouse.x - Math.cos(angle) * radius
    A.y = mouse.y + Math.sin(angle) * radius
    B.x = mouse.x + Math.cos(angle) * radius
    B.y = mouse.y - Math.sin(angle) * radius

    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath() 
    ctx.strokeStyle="white"
    ctx.strokeWidth=2

    ctx.moveTo(A.x, A.y)
    ctx.lineTo(B.x, B.y)
    ctx.stroke()
    ctx.moveTo(C.x, C.y)
    ctx.lineTo(D.x, D.y)
    ctx.stroke()

    // draw point indicators - from utils.js
    drawDot(A, "A")
    drawDot(B, "B")
    drawDot(C, "C")
    drawDot(D, "D")

    // point of intersection for each line 
        // let I = { // line AB
        //     x: lerp(A.x, B.x, t),
        //     y: lerp(A.y, B.y, t)
        // }

        // let J = { // line CD
        //     x: lerp(C.x, D.x, t),
        //     y: lerp(C.y, D.y, t)
        // }

    const I = getIntersection(A, B, C, D)

    if(I){
        drawDot(I, "I")
    }

    angle-=0.01
    requestAnimationFrame(animate)
}


animate()



