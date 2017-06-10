# Arithmetic

You can add, subtract, multiply, and divide numbers. 

In Clojure, arithmetic looks a little different than it does when you write it out with pen and paper. 

Look at these examples of Clojure code and their equivalent math expression:

```clojure
(+ 1 1)  ;=> 1 + 1 = 2
(- 12 4) ;=> 12 - 4 = 8
(* 13 2) ;=> 13 * 2 = 26
(/ 27 9) ;=> 27 / 9 = 3
```

> #### Note::Evaluate some Integer values in the REPL
> Type some arithmetic expressions into the REPL to see what is returned
```eval-clojure
(* 6 7)
```

<hr />

## Arithmetic with all number types

So far, we looked at arithmetic operations by integers only.
However, we can use floats or ratios for those operations as well.

See these examples:

```clojure
(+ 4/3 7/8)   ;=> 53/24
(- 9 4.2 1/2) ;=> 4.3
(/ 27/2 1.5)  ;=> 9.0
```

> #### Note::Evaluate some arithmetic expressions in the REPL
> Type some arithmetic expressions into the REPL to see what is returned
```eval-clojure
(* 22/7 7)
```

<hr />

