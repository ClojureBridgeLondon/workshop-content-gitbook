## Map extraction with `get`

```clojure
(count {:firstname "Sally" :lastname "Brown"})
;=> 2
```

Every collection has a `count` function. Why do you think the answer is two? `count` is returning the number of associations.

Since map is a key-value pair, the key is used to get a value from a
map. 


`get` is a function that returns the value for a given key.

If the key does not exist, then a `nil` value is returned.

```clojure
(get {:firstname "Sally" :lastname "Brown"} :firstname)
;=> "Sally"
(get {:firstname "Sally"} :lastname)
;=> nil
```

> #### Note::
```eval-clojure
()
```

<hr />

A default value can be included with the `get` function, so if a key is not found in the map, that default value is returned.

In this example we add the string "Unknown" to the `get` function call.  That string is returned when the key we asked for is not in the map.

```clojure
(get {:firstname "Sally"} :lastname "Unknown")
;=> "Unknown"
```
> #### Note::
```eval-clojure
()
```

<hr />

> #### Hint::
> When a key is a keyword then that keyword can be used as a function to lookup values in a map.
> `(:firstname {:firstname "Sally" :lastname "Brown"})`
>
> A map can also act like a function when given a keyword as an argument
> `({:firstname "Sally" :lastname "Brown"} :firstname)`
>
> Both of the above work exactly as the `get` function, so if you don't quite follow this then stick with `get`.

