# Strings

A string is any numbers, letters or special characters surrounded with double quotation marks, `""`.

* Reference: [String](http://clojurebridge.github.io/community-docs/docs/clojure/string/)

## Example strings

```clojure
"Hello, World!"
"This is a longer string that I wrote for purposes of an example."
"Aubrey said, \"I think we should go to the Orange Julius.\""
```

In the last example a backslash, `\`, is used to allow us to put special characters inside a string.

## Working with strings

There are many functions that work with strings, especially in the `clojure.string` library

* [clojure.string/str](https://clojuredocs.org/clojure.core/str) - join values into a string
* [clojure.string/split](https://clojuredocs.org/clojure.string/split) - split a string based on a pattern (regex)
* [clojure.string/subs](https://clojuredocs.org/clojure.core/subs) - get part of a string
* [clojure.string/replace](https://clojuredocs.org/clojure.string/replace) - replace part of the string based on a pattern (regex)
* [clojure.string/includes?](https://clojuredocs.org/clojure.string/includes_q) - does a string include another string (true or false)


> #### Note::Create a String of favourite colours
> Use a function to create one string containing the names and favourite colours of each person in the group
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
;; Just simply use a string
"I love purple"

;; Using a function you can create a string and join values to create a string
(str "I love the colour " "purple")
```

<!--endsec-->


------------------------------------------

> #### Note::Does the string contain your favorite colour
> Use one of the functions above to see if a string contains a colour
>
> For example, does the string "Richard of York gave brown bread in vans" contain the colour brown
```eval-clojure
()
```


<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

```clojure
(clojure.string/includes? "Richard of York gave brown bread in vans" "brown")
```
<!--endsec-->


------------------------------------------

> #### Hint::
> Be careful if you copy/pasting Clojure code from a website that uses the stylised double quotes.  These stylised quotes are actually a different character, so your string would not evaluate correctly.
