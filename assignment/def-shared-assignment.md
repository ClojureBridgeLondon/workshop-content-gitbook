# def - shared assignment


```clojure
(def mangoes 3)
(def sally "Hello, I am Sally and I think Clojure is lots of fun")
(def total (+ 1 2 3 4 5))
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

We can use `def` to give a name to something we already know, like a string

```clojure
(def jenny-loves "Jenny loves rhubarb crumble and vanilla custard")
```

We can also use `def` to give a name to something we don't know yet, eg. a calculation.

In the following example, we use `def` to give names to the number of each type of fruit.

Then we use a `def` to define the name `total-fruit` and calculating the sum of mangoes and oranges.

We also use a `def` to define the name average-fruit-amount with the result of another calculation.

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
