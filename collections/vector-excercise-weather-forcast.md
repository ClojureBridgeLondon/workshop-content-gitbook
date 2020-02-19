# Exercises Weather Forecast

> #### Note::Make a vector
> Make a vector of the high temperatures for the next 7 days in the town where you live.
> Then use the `nth` function to get the high temperature for Thursday.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
;; A vector of the temperatures for the next week
[9 2 -3 4 5 9 4]

;; assuming the first temperature is for Monday, then to get Thursday we can write
(nth [9 2 -3 4 5 9 4] 3)
```

Remember that the index of a vector starts at zero

<!--endsec-->
