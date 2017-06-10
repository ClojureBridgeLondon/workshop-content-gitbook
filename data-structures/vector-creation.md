## Vector Creation

Instead of writing a vector with square brackets, you can also use the vector function to create a vector. All arguments are collected and placed inside a new vector.

`conj` takes a vector and some other values, and returns a new vector with the extra value added. `conj` is short for conjoin, which means to join or combine.

This is what we're doing: we're joining the extra value to the vector. `conj` can be used with any kind of collection. Right now the only kind of collection we've encountered is a vector.

```clojure
(vector 5 10 15)
;=> [5 10 15]

(conj [5 10] 15)
;=> [5 10 15]
```

> #### Note::Evaluate some vectors in the REPL
> Use the `vector` function to create some vectors
```eval-clojure
(vector " ")
```
