# Comparing Values in Vectors

Two vectors are considered equal if they have the same values in the same order

```clojure
(= [1 2 3] [1 2 3])
(= [1 2 3] [4 5 6])
(= [1 2 3] [3 2 1])
(= ["Hello" "World"] ["Hello" "World" "Wide" "Web"])
(= '(1 2 3) [1 2 3])
```

------------------------------------------

> #### Note::Which of the above example vectors are equal
```eval-clojure
()
```


------------------------------------------

<!--sec data-title="Comparing sequences" data-id="answer001" data-collapse=true ces-->

A vector is a sequence of values, just like a list.   This makes it possible to compare the values in a list and vector.  If the values in each collection are the same, then the vector and list are considered equal

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
