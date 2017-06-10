# Keywords

Keywords are the strangest of the basic value types, they don’t have a real world analog like numbers, strings, or booleans.

You can think of them as a special type of string, one that’s used for
labels. 

Keywords are often used as the keys of key-value pairs in a map (the map data which we will learn later).


```clojure
:forename
:surname
:date-of-birth
```

> #### Note::Evaluate some Keyword values in the REPL
> Type a keyword into the REPL to see what is returned.
>
> Ensure you start your keyword with a colon, `:`
```eval-clojure
:i-am-a-keyword
```

<hr />

> #### Hint::
> Keywords should make more sense when we start looking at the `map` data structure in Clojure
