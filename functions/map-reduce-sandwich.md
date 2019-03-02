# Map Reduce Sandwich

A common pattern when manipulating lots of data can be described using the Map-Reduce Sandwich analogy.

![Map Reduce Sandwich](../images/map-reduce-sandwich.png)


> #### Note::Write the map reduce sandwich
> Write map and reduce functions to create the map reduce sandwich
```eval-clojure
()
```

---

> ####Hint::
> Define a collection of strings where each string represents an ingredient.
>
> Then you could write a `sliced` function that adds the string "sliced" to the start of each ingredient.
>
> You could then use the `reduce` function with a function to join all the "sliced ingredient" names into a sandwich (string), perhaps with a comma as a separator interposed between the sliced ingredients.

<!--sec data-title="Reveal answer..." data-id="answer00" data-collapse=true ces-->

## Our ingredients

```clojure
["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]
```

## Slice our ingredients

```clojure
(defn slice [item]
  (str "sliced " item))
```

## Map Slice over the ingredients

```clojure
(def prepared-ingredients
  (map slice ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]))
```


## Reduce our ingredients to a sandwich

```clojure
(defn make-sandwich [ingredients]
  (reduce str (interpose ", " ingredients)))

(str "A tasty sandwich made with " (make-sandwich prepared-ingredients))
```


## map-reduce sandwich using a slightly different syntax (threading macro)

```clojure
(->> ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]
     (map #(str "sliced " %) ,,,)
     (interpose ", " ,,,)
     (reduce str ,,,)
     (str "I have a tasty sandwich made with " ,,,))
```
<!--endsec-->
