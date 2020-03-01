# Exercise: Programming language ages revisited

Lets take the [programming language ages exercise](/simple-values/exercise-age-of-languages.html) and use a collection for the ages.  Does this change how we work with the numbers?

The programming language ages in a vector collection: `[10 27 26 21 22 22 45 34 59 60]`.


> #### Note::Find the age of the youngest programming language
> How could you find the smallest number?
>
> The ages are not in order, so you cant just get the first value.
>
> If only the values were sorted...
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(first (sort [10 27 26 21 22 22 45 34 59 60]))
```

The [min](https://clojuredocs.org/clojure.core/min) function will simplify our expression but we need to pass the individual numbers

```clojure
(min 10 27 26 21 22 22 45 34 59 60)
```

To use `min` with the vector collection, we would need to use the `apply` function and give `min` and the vector as its arguments.

The `apply` function essentially re-writes the code so that every element in the vector becomes an argument to the `min` function.

```clojure
(apply min [10 27 26  21 22 22 45 34 59 60])

;; becomes

(min 10 27 26 21 22 22 45 34 59 60)
```

There are over 600 functions in `clojure.core` so there is often a function you are looking for to simplify you code

<!--endsec-->

The more languages we have, the more useful a collection becomes.
We could also use a function called `count` to get the total number of items in a collection.

> #### Note::Average age of programming languages updated
> Calculate the average age of the programming languages
> using [local assignment `let`](/assignment/let-local-assignment.html)
> and [`count` function](https://clojuredocs.org/clojure.core/count).
```eval-clojure
()
```

<hr / >

> #### Hint::
> The `apply` function allows a function that takes a single argument, like `+`, to be used with a collection.
```clojure
(apply + [2 3 4])         ;=> 9
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

```clojure
(let [ages [10 27 26 21 22 22 45 34 59 60]]
  (/ (apply + ages) (count ages)))
```

<!--endsec-->
