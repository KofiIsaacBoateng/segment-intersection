const drawDot = (I, label) => {
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    ctx.fillStyle = "#222"

    ctx.arc(I.x, I.y, 10,0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    
    ctx.fillStyle="#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = "bold 12px Arial"
    ctx.fillText(label, I.x, I.y)
}

const lerp = (A, B, t) => {
    return A + (B - A ) * t
}


const getIntersection = (A, B, C, D) => {
    // t numerator [(b - f)(g -e) - (h - f)(a - e)]
    const tTop = (A.y - C.y) * (D.x - C.x) - (D.y - C.y) * (A.x - C.x)
    // t denominator  [(h - f)(c - a) - (d - b)(g - e)]
    const tBottom = (D.y - C.y) * (B.x - A.x) - (B.y - A.y) * (D.x - C.x)

    // u numerator [(c - a)(f - b) - (e - a)(d - b)]
    const uTop = (B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y)
    // u denominator [(g - e)(d - b) - (c - a)(h - f)]
    const uBottom = (D.x - C.x) * (B.y - A.y) - (B.x - A.x) * (D.y - C.y)

    if(tBottom != 0){

        const t = tTop / tBottom // ratio along line AB
        const u = uTop / uBottom // ratio along line CD

        if( t >= 0 && t <= 1 && u >= 0 && u <= 1){

            // intersection point in terms of line AB
            const I_AB = {
                x: lerp(A.x, B.x, t),
                y: lerp(A.y, B.y, t),
                offset: t
            }
    
            // intersection point in terms of line CD
            const I_CD = {
                x: lerp(C.x, D.x, u),
                y: lerp(C.y, D.y, u),
                offset: u
            }
    
            // return any of the two above (I_AB or I_CD) depending on which line is intersecting which
    
            return I_AB // In this case, I_AB shall be intersecting CD multiple times
        }
    }
}
