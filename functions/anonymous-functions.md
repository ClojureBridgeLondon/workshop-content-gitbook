# Anonymous functions

* Reference: [Anonymous Function](http://clojurebridge.github.io/community-docs/docs/clojure/anonymous-function/)

An anonymous function is a function that is defined without a name.

They are useful when you are only going to use the function once or you need to do something special within an expression.

Anonymous functions are often used as an argument to other functions.

The `fn` function is used to define an anonymous function.

```clojure
(fn [arguments] 
  (str "Some behaviour that uses " arguments))
```

> #### Hint::
> `defn` is a macro that combines of both `def` and `fn`.  The `defn` macro to hide the details of definition of a function using `fn`.


