# Adding values to a Vector

The `conj` function will add a value to an existing vector.

```clojure
(conj [1 2 3] 4)
(conj ["Can" "we" "join"] ["two" "collections"])
(conj ["Can" "we" "join"] "multiple" "values")
(conj ["Mint" "Vanilla"] "Chocolate")
```

A vector is immutable. Once you create a vector, it is not possible to change it.

`conj` like most Clojure functions returns a new vector with the value from the original vector and the new value.


> #### Note::Add values to a vector
> Use the `conj` function to return a new vector with the added value
```eval-clojure
()
```

<hr / >

> #### Hint::
> A common way to remove values from a vector is to use either the [filter](https://clojuredocs.org/clojure.core/filter) or [remove](https://clojuredocs.org/clojure.core/remove) functions.
