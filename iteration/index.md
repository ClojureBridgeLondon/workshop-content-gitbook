# Iteration

Iteration is the art of processing all the values in a collection and doing something with each of those values in turn.

We have already used `map`, `reduce` & `apply` to iterate over the values in a collection.

## `for` function

The `for` function helps us work with each value in a collection.

As an example, we can use the `for` function to generate the mathematical squares for the numbers 1 to 9

```eval-clojure
(for [number (range 1 10)]
  (* number number))
```

In the above example, `number` is a local name that is used to refer in turn to each value in our collection.

## assignment & conditions

We can assign additional local names within the `for` function, using the `:let` directive.  Each iteration the name in the `:let` is bound to a new value.

Conditions can be used to filter our results using `:when`, only returning values that match the condition.

```eval-clojure
(for [number [0 1 2 3 4 5]
      :let [result (* number 3)]
      :when (even? result)]
  result)
```


<!--sec data-title="Theory: List Comprehension..." data-id="answer001" data-collapse=true ces-->
## List comprehension

In Clojure, list comprehension is via the [for](https://clojuredocs.org/clojure.core/for) function

* Clojure docs: [for](https://clojuredocs.org/clojure.core/for)
* Reference: [List Comprehension in Clojure](https://practicalli.github.io/clojure/thinking-functionally/list-comprehension.html) - Clojure, practicalli
<!--endsec-->


<!--sec data-title="Theory: for is a macro..." data-id="answer002" data-collapse=true ces-->
## `for` is a macro

Macros can be used just like functions.  However, before a macro runs it alters its code to new Clojure code.

A macro can let us write short-cuts in our code, like we did with the `:let` and `:where` lines in the second example on this page.

Macros are a very powerful way of keeping the language of Clojure as simple as possible.  Macros also let developers extend Clojure without having to wait for the language designers.

Macros are very powerful so developers are encouraged to keep their use to a minimum.  Most Clojure developers will never need to write a macro.
<!--endsec-->

> #### Hint::Iteration & Recursion
> In simple terms, an iterative function is one that loops to repeat some part of the code and a recursive function is one that calls itself again to repeat the code.
>
> Read more about recursion at [Recursion 101 by PurelyFunctional.tv](https://purelyfunctional.tv/courses/recursion-101/)
