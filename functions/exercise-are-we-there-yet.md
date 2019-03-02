# Exercise: are we there yet

> #### Note::Are we there yet?
> The `filter` can be used to return values from a collection that return `true` when applying a function.
> So to get all the odd values from a collection, you could use `(filter odd? [1 2 3 4])`
>
> Write a function to use with filter that will remove the word `"already"` from the collection: `["are" "we" "already" "there" "yet"]`
>
> The function you write would take an argument that is a string from the collection
> As we want to remove `"already"` then we need to check if the string is not equals
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Define a function that we can use with the `filter` function.

The function checks if the string is not the same as "already".

```clojure
(defn not-already? [pattern]
  (not= "already" pattern))

(filter not-already? ["are" "we" "already" "there" "yet"])
```

The same can be done with an in-line function

```clojure
(filter (fn [pattern] (not= "already" pattern)) ["are" "we" "already" "there" "yet"])
```


Or the short-hand form of an inline function.  The `%` acts as a placeholder for the function argument

```clojure
(filter #(not= "already" %) ["are" "we" "already" "there" "yet"])
```

> ####HINT::When to use inline function
> If you are defining very simple behaviour that is only going to be used once, then an inline function is appropriate.
>
> If you are going to call the function more than once, or there are multiple lines of code, you should use the `defn` function to give that function a name

<!--endsec-->
