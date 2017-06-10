# `if`

In Clojure, the most basic tool we have for the flow control is the `if`
operator. It allows you to choose between two options depending upon a condition.

```eval-clojure
(def condition true)

(if condition
  (str "evaluate first expression if true")
  (str "evaluate second expression if false"))
```

> Reference: [Conditional `if`](http://clojurebridge.github.io/community-docs/docs/clojure/if/)

If your age is less than the legal drinking age, then you can only be served water or soda.

If your age is greater, then you have a wider set of drinks available.

```eval-clojure
(def age 24)
(def legal-drinking-age 21)

(if (< age legal-drinking-age)
  ["water" "soda"]
  ["water" "soda" "beer" "wine"])
```
