# Exercise: Anonymous functions - are we ready

> #### Note::Are we there yet?
> The `filter` can be used to return values from a collection that return `true` when applying a function.
> So to get all the odd values from a collection, you could use `(filter odd? [1 2 3 4])`
>
> Write a function to use with filter that will remove the word `"we"` from the collection: `["are" "we" "there" "yet"]`
>
> The function you write would take an argument that is a string from the collection
> As we want to remove `"we"` then we need to check if the string is not equals
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

We can define a named function that we can use in a separate `filter` function.  Use defn if you want to use the function several times.


```clojure
(defn is-we? [pattern]
  (not= "we" pattern))

(filter is-we? ["are" "we" "there"])
```

The same can be done in-line with an anonymous function

```clojure
(filter (fn [pattern] (not= "we" pattern)) ["are" "we" "there"])
```


Or the short-hand form of anonymous function.  The `%` acts as a placeholder for the function argument

```clojure
(filter #(not= "we" %) ["are" "we" "there"])
```

<!--endsec-->
