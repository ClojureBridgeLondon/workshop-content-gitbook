# Comments

When we write code, we try to make it as clear as possible.

Doing so is a huge advantage because our code gets read by others (oftentimes more so than by us!), or we come back to our own code to read it later, by which point we may have forgotten each exact detail of the code.

One way that we can clarify our code is annotating it with comments.

Comments are notes that we add to code, for our own sake, that the computer ignores.

```clojure
;; example functions from a previous slide
(print-str "Hello, World!")  ; a well-known hello world
(+ 3 4)                      ; why not 3 + 4? figure out later
```

## Comments style

In Clojure, comments can be started with a semicolon. Everything after a semicolon until the end of that line is a comment that gets ignored by the computer.

The [Clojure style guide](https://github.com/bbatsov/clojure-style-guide) recommends a single semicolon for a comment part way through a line, eg, after the code.  Two comments should be used to comment at the start of a row.

> Reference: [Comment](http://clojurebridge.github.io/community-docs/docs/clojure/comment/)
