# Map Reduce Sandwich

A common pattern when manipulating lots of data can be described using the Map-Reduce Sandwich analogy.

![Map Reduce Sandwidch](../images/map-reduce-sandwich.png)


> #### Note::Write the map reduce sandwich
> Write map and reduce functions to create the map reduce sandwich
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer00" data-collapse=true ces-->


## Slice our ingredients

```clojure
(defn slice [item]
  (str "sliced " item))
```

## Map Slice over the ingredients

```clojure
(def prepared-ingredience
  (map slice ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]))
```


## Reduce our ingredients to a sandwich

```clojure
(defn make-sandwich [ingredience]
  (reduce str (interpose ", " ingredience)))

(str "A tasty sandwich made with " (make-sandwich prepared-ingredience))
```


Here is the same map-reduce sandwich using a slightly different syntax

```clojure
(->> ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]
     (map #(str "sliced " %) ,,,)
     (interpose ", " ,,,)
     (reduce str ,,,)
     (str "I have a tasty sandwich made with " ,,,))
```
<!--endsec-->
