# Celebrity Name Smash

An exercises in string manipulation and extracting values from collections

* Concepts: Strings, Collections
* Functions: `str`, `take`, `count` `apply`, `reduce`
* Libraries: `clojure.string` - `split`, `subs`


> #### Note::Combine Celebrity Names
> Create new names from combining the names of your favourite celebrities (or people you admire).

First we decide how to represent celebrity names.  Using a string for each name is a simple approach

Think of a celebrity name and represent that as a string

```eval-clojure
""
```

We will need to have at least two celebrities in order to combine names.  What is the simplest collection to use to hold two or more strings?

```eval-clojue

```

<!--sec data-title="Suggested answer..." data-id="answer001" data-collapse=true ces-->
A vector is a simple collection to hold two strings.

```clojure
["Brad Pitt" "Angelina Jolie"]
```

A list is also simple, however you would need to `quote` the list to prevent Clojure from calling the first element as a function call: `'("Brad Pitt" "Angelina Jolie")`

<!--endsec-->


Define a name for our collection, so we don't need to copy/paste the collection each time.

```eval-clojure

```

<!--sec data-title="Suggested answer..." data-id="answer002" data-collapse=true ces-->

```clojure
(def celebrity-names ["Brad Pitt" "Angelina Jolie"])
```
<!--endsec-->
