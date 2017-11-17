# EXERCISE: Basic arithmetic

Some simple arithmetic to help you practice writing Clojure code.

> #### Note::Workshop Minutes Elapsed in Seconds
> How many seconds have elapsed since you arrived at the workshop today?
>
> Just take a rough guess at the minutes that have elapsed so far
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Assuming its has been 13 minutes since the workshop started:

```clojure
(* 13 60)
```
<!--endsec-->



> #### Note::Convert Seconds back to Minutes & Seconds
> Convert the workshop time elapsed from seconds to minutes and seconds.
> The minutes and the seconds should be separate numbers.
>
> `(quot x y)` will give you the whole number part of x divided by y.
> `(rem x y)` will give you the remainder of x divided by y.
```eval-clojure
()
```


<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

Assuming it has been 424 seconds since the workshop started:

```clojure
(str "Minutes: " (quot 424 60) ", seconds: " (rem 424 60))
```
<!--endsec-->
