# EXERCISE: Converting numbers to positions continued

> #### Note::Convert numbers to positions
> Extend the positions function to include `2nd` and `3rd`
```eval-clojure
(defn position [number]
  (if ;; condition
      ;; then
      ;; else
  ))
(position 2)
```

<hr />

> #### Hint::
> `if` expressions can be included inside another `if` expression


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(defn position [number]
  (if (= 1 number)
    (str number "st")
    (if (= 2 number)
      (str number "nd")
      (if (= 3 number)
        (str number "rd")
        (str number "th")))))

(position 2)
```

<!--endsec-->

> #### Hint::There is a better way..
> Nesting `if` statements is not the preferred way to write code, so we will see alternative functions next
