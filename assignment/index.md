# Assignment with `def`

If we had to type the same values over and over, it would be very
hard to write a program. What we need are names for values, so we
can refer to them in a way we can remember. This is called
assignment. 

## Assigning names to values: `def`

We can assign a name to value using `def`.

When a name is assigned a value, that name is called a *symbol*.

> Reference: [Assignment def](http://clojurebridge.github.io/community-docs/docs/clojure/def/)

```clojure
(def mangoes 3)
(def oranges 5)
(+ mangoes oranges)
;=> 8
```

> #### Note::Evaluate some assignment expressions in the REPL
> Type an assignment expression using the `def` function into the REPL.
>
> Then type the name of the symbol you have just created on the next line to see what is returned.
```eval-clojure
(def jenny-likes "Jenny likes Clojure")
jenny-likes
```

<hr />

> #### Hint::
> Using meaningful names for your symbols will make your code easier to understand.  Naming things well can be hard though.


