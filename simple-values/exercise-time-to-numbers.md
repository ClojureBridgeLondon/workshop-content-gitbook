# EXERCISE: Convert between time and numbers

Some simple arithmetic to help you practice writing Clojure code.

> #### Note::Calculating Minutes and Seconds
> Our number system (1,10,100) is different to the way we represent time (seconds, minutes, hours).  We often need to convert between the two representations.
>
> Take a rough guess at the minutes that have elapsed since you woke up today.  For example, 2 hours 20 minutes.
>
> How would you calculate the time elapsed in minutes?
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Assuming its has been 2 hours and 20 minutes since you woke up, lets calculate the minutes:

```clojure
(+ (* 2 60) 20)
```

We add the result of multiplying 2 hours by 60 to get the number of minutes with the 20 minutes

To get the elapsed time in seconds, we can take the expression and wrap it with another expression that multiplies the result by 60.


```clojure
(* (+ (* 2 60) 20) 60)
```

<!--endsec-->


> #### Note::Convert Seconds to Minutes and Seconds
> Convert the time elapsed from seconds to minutes and seconds.
> The minutes and the seconds should be separate numbers.
>
> `(quot x y)` will give you the whole number part of x divided by y.
> `(rem x y)` will give you the remainder of x divided by y.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

Assuming it has been 424 seconds since the workshop started, the number of minutes could be calculated like this:

```clojure
(quot 424 60)
;; =>
```

And the number of seconds calculated like this:

```clojure
(rem 424 60)
;; =>
```
<!--endsec-->


------------------------------------------

> ####Info::Representing Time and Dates
> Most programming languages have a way to specifically represent time and dates, typically based around a calendar.
>
> Clojure can use [`clj-time`](https://github.com/clj-time/clj-time) or use time and date libraries from its host environment (Java, JavaScript, .Net)
