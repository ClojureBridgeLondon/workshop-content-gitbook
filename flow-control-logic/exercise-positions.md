# EXERCISE: Converting numbers to positions

> #### Note::Convert numbers to positions
> In English we say someone came 1st, rather than someone came 1.
>
> Write a function called  `position`
> with an argument called `number`
>
> if the `number` equals `1`, then the function should return `"1st"`
> If number is not 1, then return an error message, such as:
> "Sorry, the number is not supported"
```eval-clojure
(defn position [number]
  (if ;; condition
      ;; then
      ;; else
  ))
(position 1)
```

<hr />

> #### Hint::
> [`str`](http://clojurebridge-berlin.github.io/community-docs/docs/clojure/str/) can be used to join things together into a string
>
> Positions such as 2nd & 3rd will be incorrect, but this can be fixed in a following exercise.
>
> The linguistic name for this is called [ordinal numbers](https://en.wikipedia.org/wiki/Ordinal_number_(linguistics))


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(defn position [number]
  (if (= 1 number)
    (str number "s")1st"
    (str "Sorry, the number " number " is not supported"))

(position 1)
```
<!--endsec-->
