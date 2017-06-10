# `map` function

> `map` is a function that takes another function, along with a
> collection. It calls the function provided to it on each member of
> the collection, then returns a new collection with the results of
> those function calls. This is a weird concept, but it is at the core
> of Clojure and functional programming in general.

```clojure
(map count ["a" "abc" "abcdefg"]) ;=> (1 3 7)
(map even? [0 1 2 3 4])           ;=> (true false true false true)
```

> References:
> [count](http://clojuredocs.org/clojure.core/count),
> [even?](http://clojuredocs.org/clojure.core/even_q)

