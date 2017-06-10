# Assign results to symbols

You can assign more than simple values to symbols. 

> #### Note::Experiment with the following code in the REPL
```eval-clojure
(def mangoes 4)
(def oranges 12)
(def fruit (+ mangoes oranges))
(def average-fruit-amount (/ fruit 2))
average-fruit-amount
```

<hr />

> #### Hint::
> Look at the last line, see how symbols return the value they point to.
>
> Symbols (names we define) do not need to be in parentheses as they are a value and not a function call.
