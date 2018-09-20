# Arithmetic

Computers were designed to run lots of calculations, so its easy to do maths.  You can use the following basic math functions:

* `+` add numbers together
* `-` subtract numbers from each other
* `*` multiply numbers together
* `/` divide numbers

Look at these examples of Clojure code and their equivalent math expression:

```clojure
(+ 1 1)         ;=> 1 + 1 = 2
(- 12 4 1)      ;=> 12 - 4 - 1 = 7
(* 13 2 10 2)   ;=> 13 * 2 * 10 * 2 = 520
(/ 27 9)        ;=> 27 / 9 = 3

;;
(+ 4/3 7/8)   ;=> 53/24
(- 9 4.2 1/2) ;=> 4.3
(/ 27/2 1.5)  ;=> 9.0
```

Math looks a little different in Clojure because `+`, `-`, `*`, `/` are functions, which take numbers as arguments.

------------------------------------------

> #### Info::
> The ClojureScript REPL in this web page does not return values as a Ratio type.  ClojureScript is compiled into JavaScript which does not support a Ratio type.
