# Reading values from a Vector Sequentially

We can read values in a vector sequentially, eg. one after the other, using the functions `first`, `second`, `last` and `rest`.

> #### Note::Get specific values from a vector
> Use the `first`, `second`, `last` and `rest` functions to read values from a vector, for example `[1 2 "three" [4 5] :emoji-smile]`
```eval-clojure
()
```

You can also combine these functions, so the results of one function call can be used by another function call.


> #### Note::How do we get just the third value in a vector?
> Using any of the functions `first`, `second`, `rest`, how to we get the **third** value from the vector `["Birthdays are" "full of" "presents" "that you" "always dreamed" "of having"]`
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

We want the returned answer to be "presents" and there are several ways we could do this

We can call one function and use its return value as an argument to another function.

```clojure
;; rest function returns all values but the first one.
;; the second value can then be returned from the collection
(second
  (rest
    ["Birthdays are" "full of" "presents" "that you" "always dreamed" "of having"]))
```

We can also use a local name to hold some of the values in the collection and then use that name to get the right answer.


```clojure
;; the let function assignees a name to our collection of values
;; then we get the value in third place by using the name.
(let [my-values ["Birthdays are" "full of" "presents"
              "that you" "always dreamed" "of having"]]
      (second (rest my-values)))
```

<!--endsec-->


------------------------------------------

> #### Hint::
>  These functions also work with a list too.
