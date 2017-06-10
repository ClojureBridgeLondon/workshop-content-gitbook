# Vector Update

The `conj` function will add a value to an existing vector.

Actually `conj` like most Clojure functions returns a new vector with the value from the original vector and the new value.  

A vector is immutable. Once you create a vector, it is not possible to change it.


> #### Note::Add values to a vector
> Use the `conj` function to return a new vector with the added value
```eval-clojure
()
```

<hr / >

> #### Hint::
> A common way to remove values from a vector is to use either the [filter](https://clojuredocs.org/clojure.core/filter) or [remove](https://clojuredocs.org/clojure.core/remove) functions.
