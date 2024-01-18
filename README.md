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
    1. t represents the percentage portion along line AB at which AB intersect \
     line CD

    2. u represents the percentage portion along line CD at which CD intersect \
     line AB

