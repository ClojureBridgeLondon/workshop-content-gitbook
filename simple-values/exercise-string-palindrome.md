# Exercise: Fun with Palindromes

These exercises will give you more experience using strings and the [`clojure.string`](https://clojuredocs.org/clojure.string) library.

> #### Note::Simple Palindrome Checker
> A [Palindrome](https://en.wikipedia.org/wiki/Palindrome) is a word that is spelt the same whether it is written backwards or forwards.  So when you _reverse_ the word it should still look the same.
>
> Can you write a simple expression to see if a word, e.g. "radar", is a palindrome.
>
> You will need to reverse the word and compare (see if it is equal) to the original word.
```eval-clojure
()
```

------------------------------------------

> #### Hint::Clojure.string library
> The [`clojure.string`](https://clojuredocs.org/clojure.string) library has some handy functions for manipulating strings.
>
> Using functions on strings that are not part of the [`clojure.string`](https://clojuredocs.org/clojure.string) library can give 'interesting' results.

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Using a function called `reverse` in the [`clojure.string`](https://clojuredocs.org/clojure.string) library
```clojure
;; Is the reverse of the string "radar" equal to the string "radar"
(= "radar" (clojure.string/reverse "radar"))
```

You could use the generic `reverse` function in `clojure.core`, however this returns a list the individual characters in reverse order, rather than reversing the string as a single value.

<!--endsec-->
