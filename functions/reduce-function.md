# `reduce` function

`reduce` is another function that takes a function and collection as arguments.

```clojure
(reduce some-fn ["my" "collection" "of" "values"])
```

`reduce` calls the function using the first values in the collection as arguments to that function. `reduce` does this over and over again until it finally reaches the end of the collection.


> #### Note::Add numbers in a collection
> Use `reduce` with a function that adds numbers together, eg. `[10 20 30 40 50]`
```eval-clojure
()
```

------------------------------------------

> #### Note::Join strings together
> Think of a function that joins strings together and use it with reduce to join the words in a collection
> eg `["h" "e" "l" "l" "o" " " "Clojure"]`
```eval-clojure
()
```

<!--sec data-title="Reveal answers..." data-id="answer001" data-collapse=true ces-->


```clojure
(reduce + [30 60 90])              ;=> 180
(reduce str ["h" "e" "l" "l" "o"]) ;=> "hello"
(reduce str ["h" "e" "l" "l" "o" " " "Clojure"]) ;;=> "hello Clojure"
```

<!--endsec-->
