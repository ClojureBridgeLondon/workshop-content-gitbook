# What does Clojure look like?

## Writing Clojure with parentheses

 Parentheses `( )` are a list in Clojure and define the structure of your code.

 A left parenthesis is the start of the list and needs a matching right parenthesis.  If you have unmatched parentheses then Clojure will not read your code correctly and you will get an error.

 _Editors that support Clojure help you manage your parentheses_

## Calling functions

The first thing in a list is a call to a _function_.

Calling functions make your code do something.  You usually call a function along with one or more values (referred to as arguments).

There are many [built-in functions in Clojure](https://clojure.org/api) and you can also define your own.

Here are some examples of calling functions:

```clojure
(+ 3 4)

(def username "john")

(str "Hello" " " "World!")

(str "Welcome to our website: " (clojure.string/capitalize username))
```

`+`, `str` and `def` are all functions.

When these functions get run, they return a some type of value.

Clojure functions always return a value.


## Function arguments

Many functions take in _arguments_ which are everything else inside the enclosing parentheses after the function-.

```clojure
(str "Hello" " " "World!")
```

In the above example, `str` takes 3 strings as arguments, `"Hello"`, `" "` and `"World!"` and returns the string "Hello, World!" .

```clojure
(+ 3 4)
```

`+` takes 3 and 4, adds them, and returns 7.
