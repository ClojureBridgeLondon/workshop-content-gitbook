# Map Update

A value in a map can either be replaced by the `assoc` function or updated using the `update` or `update-in` functions.

## Associating new values with `assoc`

The `assoc` function can be used by assigning a new value to an existing key.

```clojure
(def hello {:count 1 :words "hello"})

(assoc hello :count 0)
;=> {:count 0, :words "hello"}

(assoc hello :words "Hello Clojure World")
;=> {:count 1, :words "Hello Clojure World"}
```


## Updating existing values with `update` & `update-in`

The `update` function applies a function to the existing value to create a new value for a specific key

The `update` function is passed:

* the _map_ to be updated
* the _key_ that points to the value to be updated
* the function that determines how the value will be updated 

The value of specified key will be the first argument of the given function.


```clojure
(def hello {:count 1 :words "hello"})

(update hello :count inc)
;=> {:count 2, :words "hello"}
(update hello :words str ", world")
;=> {:count 1, :words "hello, world"}
```

The `update-in` function works like `update`, but takes a vector of keys to update at a path to a nested map.

```clojure
(def mine {:pet {:age 5 :name "able"}})

(update-in mine [:pet :age] - 3)
;=> {:pet {:age 2, :name "able"}}
```

> #### Note::
```eval-clojure
()
```

<hr />

