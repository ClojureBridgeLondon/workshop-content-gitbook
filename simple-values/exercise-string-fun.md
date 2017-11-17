# Excercise: Fun with Strings

Let do a simple challenge using strings.

> #### Note::Simple Palendrome Checker
> A [Palendrome](https://en.wikipedia.org/wiki/Palindrome) is a word that is spelt the same whether it is written backwards or forwards.  So when you _reverse_ the word it should still look the same.
> Can you write a simple expression to see if a word is a palendrome.
```eval-clojure
()
```

------------------------------------------

> #### Hint::Clojure.string library
> The `clojure.string` library has some handy functions for manipulating strings.  Try searching for this library with your favourite browser.


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

One possible answer to the simple palendrome exercise

```clojure
(= "radar" (clojure.string/reverse "radar"))
```

You could also use the generic `reverse` function, however this returns a list the individual characters in reverse order, rather than reversing the string as a single value.

To make this work with the general reverse function you would need to join the individual strings that `reverse` returns back into a single string using `apply` or `reduce`

```clojure
(= "radar" (apply str (reverse "radar")))
(= "radar" (reduce str (reverse "radar")))
```


## Bonus challenge

For a very tricky bonus, can you make "A man, a plan, a canal, Panama!" work as a palendrome?  This is tricky, so feel free to skip this.

<!--endsec-->
