# Strings

A [String](http://clojurebridge.github.io/community-docs/docs/clojure/string/) can contain any simple value such as numbers, letters or special characters.

A string is surrounded with double quotation marks, `""`.

Strings are used a lot for content (e.g. blogs), user interfaces (e.g. menus) as well any other simple data (e.g. names, email addresses).

## Example strings

```clojure
;; writing a string.  A string just evaluates to itself.
"Hello, World!"

;; create a string from other strings and numbers with the str function
(str "It's lunchtime in"
     " "
     1
     " "
     "hour" )

;; Strings can include special characters if you put the `\` character before them
(str "I am a"
     " "
     "\'functional \'"
     " "
     "programmer")
```

## Working with strings

There are many functions that work with strings, especially in the `clojure.string` library

* [`str`](https://clojuredocs.org/clojure.core/str) - join values into a string

* [`clojure.string/includes?`](https://clojuredocs.org/clojure.string/includes_q) - does a string include another string (returns true or false)
* [`clojure.string/replace`](https://clojuredocs.org/clojure.string/replace) - replace part of the string with a different string
* [`clojure.string/split`](https://clojuredocs.org/clojure.string/split) - split a string based on a matching pattern (regex)
* [`clojure.string/subs`](https://clojuredocs.org/clojure.core/subs) - get part of a string

------------------------------------------

> #### Hint::
> Be careful if you copy/pasting Clojure code from a website that uses the stylised double quotes.  These stylised quotes are actually a different character, so your string would not evaluate correctly.
