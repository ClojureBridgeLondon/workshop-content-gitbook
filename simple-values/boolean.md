# Boolean (true or false)

A boolean is a true or false value, and you type them just like that, `true` and `false`.

Often in programming, we need to ask a true or false question, like:

* "Is this class in the current semester?"
* "Is this person's birthday today?"

When we ask those questions, we get a boolean value returned.

## Functions that return boolean values

The functions `true?` and `false?` are used to test if a value is either true or false.

The `=` function is used to compare two values.  If they are equal, then `true` is returned, if not then its `false`

Other functions (also known as predicates) also return `true` or `false`

* `odd?` and `even?` will tell you if a number is odd or even


> #### Note::Evaluate the Boolean values and functions that return boolean values in the REPL
> Type some expressions to test out the truthiness of things.
>
> Look at the [truthiness reference guide](http://clojurebridge.github.io/community-docs/docs/clojure/truthiness/) for more examples
```eval-clojure
;; (true? (= 1 1))
(false? (= 7 (+ 3 3)))
```

------------------------

> #### Hint::
> There is another value `nil`, which behaves like a boolean in terms of __truthiness__.
>
> But, `nil` means no value at all and not a boolean
>
> Boolean values are often used in functions that evaluate a condition, such as `for` or `cond`.
>
> Reference: [Truthiness](http://clojurebridge.github.io/community-docs/docs/clojure/truthiness/)
