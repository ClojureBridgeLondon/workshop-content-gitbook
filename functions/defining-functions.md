# Defining functions

> #### Todo::
> Klipsify

* We use `defn` to define a function.
* We give it a *name* so we may call it later i.e. `add`
* A Vector is used to specify the function's *arguments* i.e. `[x y]`
* A String can be provided for a description e.g. `"Adds together..."`
* The *body* is the form (thing in parentheses) that follows i.e. `(+ x y)` 
* We call the function by creating a form with it's name and arguments i.e. `(add 1 2)`

```eval-clojure
(defn add                        ; name
  "Adds together two numbers"    ; documentation
  [x y]                          ; arguments
  (+ x y))                       ; body

(add 1 2)         ;=> 3 
(add (add 1 2) 4) ;=> 7
```

