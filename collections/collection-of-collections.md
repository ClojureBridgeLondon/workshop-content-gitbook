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

A simple model of the Star Wars characters and vehicles

```eval-clojure
(def sci-fi
  {:starwars
    {:characters
      {:jedi   ["Luke Skywalker"
                "Obiwan Kenobi"]
       :sith   ["Darth Vader"
                "Darth Sideous"]
       :droids ["C3P0"
                "R2D2"
                "BB-8"]}
       :ships
         {:rebel-alliance  ["Millenium Falcon"
                            "X-wing figher"]
          :imperial-empire ["Intergalactic Cruser"
                            "Destroyer"]}}})
```

## Traversing maps

The `get` function will return the value of a given key in a map.

Using our sci-fi example we can get values of a map.

```eval-clojure
(get sci-fi :starwars)
```

If we just wanted data from deeper inside the map, for example just the characters or only jedi characters, we could have a get function for each level.

`(get (get (get sci-fi :starwars) :characters) :jedi)`

This is a little verbose and not so nice to read.  So we can use the `get-in` function

```eval-clojure
(get-in sci-fi [:starwars :characters :jedi])
```

Hopefully you find the `get-in` easier to understand when you are dealing with nested maps.
