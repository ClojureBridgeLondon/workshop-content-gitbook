# Truthiness

When testing the truth of an expression, Clojure considers the
values `nil` and `false` to be false and everything else to be true.
Here are some examples:

> Reference: [Truthiness](http://clojurebridge.github.io/community-docs/docs/clojure/truthiness/)


```eval-clojure
(if "anything other than nil or false is considered true"
  "A string is considered true"
  "A string is not considered true")
```

```eval-clojure
(if nil
  "nil is considered true"
  "nil is not considered true")
```

```eval-clojure
(if (get {:a 1} :b)
  "expressions which evaluate to nil are considered true"
  "expressions which evaluate to nil are not considered true")
```
