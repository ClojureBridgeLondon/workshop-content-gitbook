## What does Clojure look like?

```eval-clojure
(print-str "Hello, World!")
```
```eval-clojure
(+ 3 4)
```

```eval-clojure
(map inc [1 2 3 4 5])
```

<!--sec data-title="Parentheses ()" data-id="answer001" data-collapse=true ces-->

Notice the parentheses. Parentheses enclose instructions to the
computer in Clojure. A left parenthesis
is the start of the instruction, and a matching right parenthesis is
the end of enclosing instruction. Normally, Clojure code has a lot
of nested parentheses, on other words, nested enclosing instructions.

<!--endsec-->

<!--sec data-title="Calling Functions" data-id="answer002" data-collapse=true ces-->

Next to the parentheses, we see the instructions to the computer. That instruction is normally what we call a _function_.

The functions do all the hard work in Clojure. 

`print-str`, `+` and `forward` are all functions.

When these functions get run, they return a some type of value. 

Clojure functions always return a value.

<!--endsec-->

<!--sec data-title="Arguments" data-id="answer003" data-collapse=true ces-->

Many functions take in _arguments_ which are everything else inside the enclosing parentheses after the function-.

`print-str` takes "Hello, World!" and returns a string.

`+` takes 3 and 4, adds them, and returns 7.

The `map` function takes the `inc` function and a collection `[1 2 3 4 5]` as arguments.  `map` takes a value in turn from the collection and applies the `inc` function on it, returning the result when all values have been processed.

<!--endsec-->


