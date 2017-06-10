# Map Reduce Sandwich

A common pattern when manipulating lots of data can be described using the Map-Reduce Sandwich analogy.

![Map Reduce Sandwidch](../images/map-reduce-sandwich.png)

## Slide our ingredients

```eval-clojure
(defn slice [item]
  (str "sliced " item))
```

## Map Slide over the ingredients

```eval-clojure
(def prepared-ingredience
  (map slice ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]))
```


## Reduce our ingredients to a sandwich

```eval-clojure
(def make-sandwich
  (reduce str (interpose ", " prepared-ingredience)))

(str "A tasty sandwich made with " make-sandwich)
```

<!--sec data-title="Map Reduce Sandwidch using Threading" data-id="answer001" data-collapse=true ces-->

Here is the same map-reduce sandwich using a slightly different syntax

```clojure
(->> ["bread" "cucumber" "pepper" "tomato" "lettuce" "onion"]
     (map #(str "sliced " %) ,,,)
     (interpose ", " ,,,)
     (reduce str ,,,)
     (str "I have a tasty sandwich made with " ,,,))
```
<!--endsec-->
