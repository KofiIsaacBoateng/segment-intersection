const drawDot = (ctx, {x, y}, label) => {
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    ctx.fillStyle = "#222"

    ctx.arc(x, y, 10,0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    
    ctx.fillStyle="#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = "bold 12px Arial"
    ctx.fillText(label, x, y)
}

const lerp = (A, B, t) => {
    return A + (B - A ) * t
}