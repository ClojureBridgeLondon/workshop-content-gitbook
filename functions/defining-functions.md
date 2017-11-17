# Defining functions

![Defining functions](/images/function-definition.png)

* We use `defn` to define a named function, `fn` for an anonymous function.
* We give a function a *name* so we call it several times in different places
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

## Zero or more Arguments

Functions can take any number of arguments, from zero to everything.

The arguments become names for the value passed to the function.  Those names can only be used within the function definition itself.

The `&` followed by a name will hold all the arguments passed to the function that are not given to another name

```eval-clojure
(defn infinite-arguments [name & other-details]
  (str "Hello " name ". Thanks for these details about you: " other-details))
(infinite-arguments "John" "jr0cket" :loves-clojure :loves-spacemacs)
```
