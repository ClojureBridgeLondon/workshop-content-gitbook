# EXERCISE: Convert between time and numbers

Some simple arithmetic to help you practice writing Clojure code.

> #### Note::Calculating Minutes and Seconds
> The human number system is base 10 (i.e. 1,10,100), however, humans represent time in seconds (60), minutes (60), hours (24), etc.
>
> When working with time we often convert between the two representations.
>
> Take a rough guess at the minutes that have elapsed since you woke up today.  For example, 2 hours 25 minutes.
>
> How would you calculate the time elapsed in minutes?
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Assuming its has been 2 hours and 20 minutes since you woke up, lets calculate the minutes:

```clojure
(+ (* 2 60) 25)
```

We add the result of multiplying 2 hours by 60 to get the number of minutes with the 25 minutes

To get the elapsed time in seconds, we can take the expression and wrap it with another expression that multiplies the result by 60.


```clojure
(* (+ (* 2 60) 25) 60)
```

<!--endsec-->


> #### Note::Convert from Minutes to Hours and Minutes
> If the time elapsed is 428 minutes, how long is that in hours and minutes.
>
> First calculate how many hours there are in 428 minutes
>
> `(quot x y)` will give you the whole number part of x divided by y.
>
> Then calculate how many minutes are not part of a whole hour.
>
> `(rem x y)` will give you the remainder of x divided by y.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

Assuming it has been 428 minutes since the workshop started, the number of hours could be calculated like this:

```clojure
(quot 428 60)
;; => 7
```

And the number of minutes calculated like this:

```clojure
(rem 428 60)
;; => 8
```

7 hours is 420 minutes, so there are 8 minutes remaining that do not fit into a whole hour.

So 428 minutes is the same as 7 hours and 8 minutes
<!--endsec-->

------------------------------------------

> ####Info::Representing Time and Dates
> Most programming languages have a way to specifically represent time and dates, typically based around a calendar.  Sometimes these libraries can make it easier to work with time.
>
> Clojure has a library called [`clj-time`](https://github.com/clj-time/clj-time) to help you represent times and dates.
> Or Clojure can also use time and date libraries from its host environment (Java, JavaScript, .Net)
