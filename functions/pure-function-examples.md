# Pure function Examples

A simple example of a pure function, it only uses data from the argument supplied and returns a deterministic value

```eval-clojure
(defn increment-numbers [number-collection]
  (map inc number-collection))

;; (inc 1)
;; => 2

(increment-numbers [1 2 3 4 5])
```

A pure function that adds up all the numbers in a give collection.

```eval-clojure
(defn sum-numbers
  "Sums up all the numbers in a given collection"
  [collection]
  (reduce + collection))

(sum-numbers [3 5 8 13 21 34])
```

A local anonymous function

```eval-clojure
(let [x 3]
  (fn [y]
    (Math/sqrt (+ (* x x) (* y y)))))
```

