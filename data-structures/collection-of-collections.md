# Collections of Collections

Simple values such as numbers, keywords, and strings are not the
only types of things you can put into collections. You can also put
other collections into collections, so you can have a vector of
maps, or a list of vectors, or whatever combination fits your data.

## Vector of Maps

```eval-clojure
(def characters
  [{:name "Snoopy"
    :species "dog"}
   {:name "Woodstock"
    :species "bird"}
   {:name "Charlie Brown"
    :species "human"}])

;;(:name (first characters))
;;=> "Snoopy"

(map :name characters)
```

## Maps of Maps & Vectors

A simple model of the Starwars characters and vehicles

```eval-clojure
{:starwars {
  :characters {
    :jedi   ["Luke Skywalker"
               "Obiwan Kenobi"]
    :sith   ["Darth Vader"
             "Darth Sideous"]
    :droids ["C3P0"
             "R2D2"
             "BB-8"]}
  :ships {
    :rebel-alliance  ["Millenium Falcon"
                      "X-wing figher"]
    :imperial-empire ["Intergalactic Cruser"
                        "Destroyer"]}}}
```

