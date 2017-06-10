# Predicate functions

* Higher-order functions often just want to work with a yes/ no function
* Functions that return a boolean (true/ false) are often called *predicate functions*
* Predicate functions often end with a question mark
* You've already seen `even?`

```clojure
(remove even? [1 2 3 4 5 6]) ;=> (1 3 5)

(defn less-than-10? [x] (< x 10))
(filter less-than-10? [8 9 10 11]) ;=> (8 9)
```

> #### Note::Write a predicate function
> Write a function that returns either true or false, based on a given argument (or multiple arguments)
```eval-clojure
()
```
