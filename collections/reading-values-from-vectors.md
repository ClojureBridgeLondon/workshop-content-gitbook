# Reading values from a Vector


Now, take a look at these four functions. `count` gives us a count of the number of items in a vector. `nth` gives us the nth item in the vector. Note that we start counting at 0, so in the example, calling `nth` with the number 1 gives us what we'd call the second element when we aren't programming.

`first` returns the first item in the collection. `rest` returns all except the first item.

Try not to think about that and `nth` at the same time, as they can be confusing.

```clojure
(count [5 10 15])
;=> 3
(nth [5 10 15] 1)
;=> 10
(first [5 10 15])
;=> 5
(rest [5 10 15])
;=> (10 15)
```

> #### Note::Extracting values from vectors
> Experiment with extracting values from a Vector
```eval-clojure
()
```


<!--sec data-title="Vectors & Lists are both sequences" data-id="answer001" data-collapse=true ces-->

A vector is a sequence of values (just like a list).   This makes it possible to compare the values in a list and vector.  If the values in each collection are the same, then the vector and list are considered equal

```clojure
(= '(1 2 3 4) [1 2 3 4])
;; => true

```

If the values are the same in each collection, but in a different order, then the list and vector are not equal.

```clojure

(= '(1 2 3 4) [4 3 2 1])
;; => false
```

<!--endsec-->
