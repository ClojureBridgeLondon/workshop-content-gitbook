# `cond`

The `if` function takes one condition.  If there are multiple conditions to test for then `if` is not the best option.

`cond` function can evaluate multiple conditions

```clojure
(cond
  predicate1 expression-to-evaluate-when-predicate1-is-true
  predicate2 expression-to-evaluate-when-predicate2-is-true
  ...
  :else      expression-to-evaluate-when-all-above-are-false)
```

> Reference: [Conditional `cond`](http://clojurebridge.github.io/community-docs/docs/clojure/cond/)

To create the position function with `cond`

```eval-clojure
(def number 0)

(cond
  (= number 1) "1st"
  (= number 2) "2nd"
  (= number 3) "3rd"
  :else   (str number "th"))
```

Here is another example of using `cond`

```eval-clojure
(def x 0)

(cond
  (< x 10)    "x is smaller than 10"
  (< 10 x 20) "x is between 10 and 20"
  (< 20 x 30) "x is between 20 and 30"
  (< 30 x 40) "x is between 30 and 40"
  :else       "x is bigger than 40")
```

