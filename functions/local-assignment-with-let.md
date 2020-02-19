# Assignment: `let`

When you are creating functions, you may want to assign names to values in order to reuse those values or make your code more readable.

Inside of a function, however, you should _not_ use `def`, like you would outside of a function. Instead, you should use a special form called `let`.

* Reference: [Assignment let](http://clojurebridge.github.io/community-docs/docs/clojure/let/)

```eval-clojure
(defn average [values]
  (let [c (count values)
        s (apply + values)]
    (/ s c)))

(average [1.0 1.0 2.0 3.0 5.0])
```
