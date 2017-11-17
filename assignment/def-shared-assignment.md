# def - shared assignment


```clojure
(def mangoes 3)
(def sally "Hello, I am Sally and I think Clojure is lots of fun")
```

> #### Note::Assign your name to your favourite thing
> Type an assignment expression using the `def` function into the REPL.
>
> Use your name and assign it to a string that describes one of your favourite things (that you are happy to share)
>
> On the next line, type the name used in the assignment to see the value your name points to.
```eval-clojure
()
```

<hr />

> #### Hint::
> Using meaningful names for your symbols will make your code easier to understand.  Naming things well can be hard though.


## Assign results to symbols

You can also assign the results of functions to symbols, which is very useful for calculations.

> #### Note::How Many Fruits do you have?
> Create a `def` function for each type of fruit (eg. mangoes, apples, oranges).
>
> Create another `def` that adds up the total number of fruit
> Create another `def` that is the average number of fruit
```eval-clojure
()
```

<hr />

 <!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Ask your group leader if you get stuck

An answer to the favorite things exercise

```clojure
(def jenny-loves "Jenny loves rubarb crumble and vanilla custard")
```


Answer to the Fruits exercies

```clojure
(def mangoes 4)
(def oranges 12)
(def total-fruit (+ mangoes oranges))
(def average-fruit-amount (/ total-fruit 2))
average-fruit-amount
```

<!--endsec-->


> #### Hint::
> Look at the last line, see how symbols return the value they point to.
>
> Symbols (names we define) do not need to be in parentheses as they are a value like numbers and strings and not a function call.
>
> Reference: [Assignment def](http://clojurebridge.github.io/community-docs/docs/clojure/def/)
