# Comments

Comments help to describe the intent of your code.  Why is your code doing what it is doing.  Why did you make the choice to write the code that way.

In Clojure a comment is started by the character: `;`

Clojure ignores any line that starts with `;`, so comments are purely for the developers working with the code.

When we write code, we try to make it as clear as possible.  This helps others understand what was written quickly.  Sometimes we can do this without comments, sometimes comments are very useful.

> ####Hint::
> Developers often come back to code they wrote themselves a while ago and realise they have forgotten why they wrote the code in a particular way.  Good comments give you contexts to understand why the code was written.



```clojure
;; simple examples of functions to intrigue you for the next few pages
(str "Hello" " " "World!")   ; a well-known hello world example
(+ 3 4)                      ; why is this not written as 3 + 4?
```

## Comments style

In Clojure, comments can be started with a semicolon. Everything after a semicolon until the end of that line is a comment that gets ignored by the computer.

The [Clojure style guide](https://github.com/bbatsov/clojure-style-guide) recommends a single semicolon for a comment part way through a line, eg, after the code.  Two comments should be used to comment at the start of a row.

> Reference: [Comment](http://clojurebridge.github.io/community-docs/docs/clojure/comment/)
