## SEGMENT INTERSECTION

#### Linear interpolation (lerp) formula for two points forming a line. Say AB

```text
    1. A (a, b)
    2. B (c, d)

    Between the x coordinates a and c,
    xab = a + (c - a) * t

    Between the y coordinates b and d, 
    yab = b + (d - b) * t

    where t is a value between 0 and 1 along the line OR 0 to -infinity beyond A or 1 to infinity beyond B
```


#### For two lines say AB and CD to intersect, their x lerp values and y lerp values must be equal.

```text
    3. C (e, f)
    4. D (g, h)

    xcd = e + (g - e) * u
    ycd = f + (h - f) * u

    where u is similar to t but for the line CD

    1. xab = xcd and
    2. yab = ycd
```

#### This implies that

```text
    for x,
    a + (c - a) * t  =  e + (g - e) * u ... 1

    for y,
    b + (d - b) * t  =   f + (h - f) * u ... 2
```

#### make t and u the subjects
    1. making t the subject

```text
    step 1. subtract e from both sides of eqn 1 and f from both sides of eqn 2
    (a - e) + (c - a) * t = (g - e) * u ... 1 | -e
    (b - f) + (d - b) * t = (h - f) * u ... 2 | -f

    step 2. multiply eqn 2 by (g - e)
    (b - f)(g - e) + (d - b)(g - e) * t = (h - f)(g - e) * u ... 2 | * (g - e)

    step 3. replace (g - e) * u in eqn 2 with its corresponding value from eqn 1
    (b - f)(g - e) + (d - b)(g - e) * t = (h-f)(a - e) + (h-f)(c - a) * t ... 2

    step 4. make t the subject
    (b - f)(g - e) - (h-f)(a-e) = (h-f)(c-a)t - (d-b)(g-e)t
    [(b - f)(g -e) - (h - f)(a - e)] / [(h - f)(c - a) - (d - b)(g - e)] = t


    final, 
    t = [(b - f)(g -e) - (h - f)(a - e)] / [(h - f)(c - a) - (d - b)(g - e)]

```


```text
    2. making u the subject

    a + (c - a) * t  =  e + (g - e) * u ... 1
    b + (d - b) * t  =   f + (h - f) * u ... 2

    step 1. subtract a from both sides of eqn 1 and b from both sides of eqn 2
    (c - a)t = (e - a) + (g - e)u ... 1 | -a
    (d - b)t = (f - b) + (h - f)u ... 2 | -b

    step 2. multiply eqn 1 by (d - b)
    (d - b)(c - a)t = (e - a)(d - b) + (g - e)(d - b)u ... 1 | * (d - b)

    step 3. replace (d - b)t in eqn 1 with its corresponding value from eqn 2
    (c - a)(f - b) + (c - a)(h - f)u = (e - a)(d - b) + (g - e)(d - b)u

    step 4. make u the subject
    (c - a)(f - b) - (e - a)(d - b) = (g - e)(d - b)u - (c - a)(h - f)u
    [(c - a)(f - b) - (e - a)(d - b)] / [(g - e)(d - b) - (c - a)(h - f)] = u


    final,
    u = [(c - a)(f - b) - (e - a)(d - b)] / [(g - e)(d - b) - (c - a)(h - f)]
```

#### NB:
    1. t represents the percentage portion along line AB at which AB intersects line CD

    2. u represents the percentage portion along line CD at which CD intersects line AB

    3. Denominators of both t and u will be zero if the lines get parallel to each other. REMEMBER to set an exception to void your program from crashing




### CODE IMPLEMENTATION
```js
    // line coordinates
    const A = {x: 220, y: 120} // A.x = a, A.y = b
    const B = {x: 220, y: 220} // B.x = c, B.y = d
    const C = {x: 50, y: 100}  // C.x = e, C.y = f
    const D = {x: 250, y: 150} // D.x = g, D.y = h

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


    const lerp = (A, B, t) => {
        return A + (B - A) * t
    }
```

