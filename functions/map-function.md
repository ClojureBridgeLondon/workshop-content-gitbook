# `map` function

`map` is a function that takes another function as an argument, along with a collection.

`map` calls the function provided to it on each member of the collection, then returns a new collection with the results of those function calls.

This may feel a strange concept, but it is at the core of Clojure and functional programming.

```eval-clojure
(map even? [0 1 2 3 4])
```

> #### Note::Count the size of words in a collection
> Count the number of characters in each word for a collection of strings
> eg. `["a" "abc" "abcdefg"]`
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(map count ["a" "abc" "abcdefg"])
```

<!--endsec-->

------------------------------------------

> #### Hint::Functions to try with `map`
* [count](http://clojuredocs.org/clojure.core/count)
* [even?](http://clojuredocs.org/clojure.core/even_q)
* [odd?](http://clojuredocs.org/clojure.core/odd_q)
