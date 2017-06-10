# Comparing named & anonymous functions 

The following functions take two strings as arguments and join then together using the `str` function.  An empty string is placed between the two arguments as they are joined together with the `str` function.

As an anonymous function 

```eval-clojure
(
(fn [string1 string2] (str string1 " " string2))
"Hello" "Function"
)
```

As a named function:

```eval-clojure
(defn join-with-space
  [s1 s2]
  (str s1 " " s2))
  
(join-with-space "Hello" "Function")
```

> #### Hint::
> In general its preferable to use named functions in your Clojure code, as this makes your code very easy to read.
>
> Anonymous functions should be used sparingly.
