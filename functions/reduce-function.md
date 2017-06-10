# `reduce` function


> Let's look at another function that takes a function. This one is
> `reduce`, and it is used to turn collections into a single value.

> `reduce` takes the first two members of the provided collection and
> calls the provided function with those members. Next, it calls the
> provided function again--this time, using the result of the previous
> function call, along with the next member of the collection.
> `reduce` does this over and over again until it finally reaches the
> end of the collection.

```clojure
(reduce + [30 60 90])              ;=> 180
(reduce str ["h" "e" "l" "l" "o"]) ;=> "hello"
```

