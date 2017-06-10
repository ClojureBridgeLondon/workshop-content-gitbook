## Map Creation

`assoc` and `dissoc` are paired functions: they associate and disassociate items from a map. 

See how we add the last name "Brown" to the map with `assoc`, and then we remove it with `dissoc`. 

`merge` merges two maps together to make a new map.

```clojure
(assoc {:first "Sally"} :last "Brown")
;=> {:first "Sally", :last "Brown"}

(dissoc {:first "Sally" :last "Brown"} :last)
;=> {:first "Sally"}

(merge {:first "Sally"} {:last "Brown"})
;=> {:first "Sally", :last "Brown"}
```

> #### Note::
```eval-clojure
()
```
