#### Map Extraction with Keys and Vals

`keys` and `vals` are functions that return all the keys and all the values in the map respectively.

The order of the keys or values returned is not guaranteed, so we could have gotten `(:firstname :lastname)` or `(:lastname :firstname)`.

Lets get the keys:

```eval-clojure
(keys {:firstname "Sally" :lastname "Brown"})
```

Now lets get the values:

```eval-clojure
(vals {:firstname "Sally" :lastname "Brown"})
```

> #### Note::Get the Keys & Values from the map of yourself
> Use the map you made about yourself in previous exercise and extract the keys & values from that.
>
> Create a vector of maps containing the first name, last name and hometown of two or three other classmates around you.
>
> Add your map to their information using [conj](http://clojuredocs.org/clojure.core/conj).
```eval-clojure
()
```

<!--sec data-title="Example answer..." data-id="answer001" data-collapse=true ces-->

> #### Todo::Provide example answer


<!--endsec-->
