# let - local assignment

We can assign a name to a simple value or a collection using the `let` function

Names that we assign can only be used within the let function.

```clojure
(let [title     "A local shop"
      sub-title "for local people"]
  (str title ", " sub-title))
```


> #### Note::How many fruit
> Assign the names of fruit to the number of fruit you have.
>
> Then return the total number of fruit
```eval-clojure
()
```


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

We have 9 apples and 15 oranges.  So in total we have 24 fruit in total

```clojure
(let [apples   9
      oranges 15]
  (+ apples oranges))

;; => 24
```

<!--endsec-->
