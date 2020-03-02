# Exercise: Spell Checking

> #### Note::Fixing spelling mistakes
> One aspect of fixing spelling mistakes is to find and replace incorrect words.
>
> Is there a function in Clojure or one of its libraries we can use to replace the mis-spelt word in these sentences?
>
> "simplicity ovr complexity"
>
> Or maybe someone has broken letter `h` and you can help with that?
>
> "ello friends. ello Clojurians. ello developers around our world."
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Again, the [`clojure.string`](https://clojuredocs.org/clojure.string) library helps us by providing the `replace` function.

```clojure
;; Replace in this string the characters ovr with the characters over

(clojure.string/replace "simplicity ovr complexity" "ovr" "over")
;; => "simplicity over complexity"


(clojure.string/replace "ello friends. ello Clojurians. ello developers around our world." "ello" "Hello")
;; => "Hello friends. Hello Clojurians. Hello developers around our world."
```

<!--endsec-->

------------------------------------------

> ####Hint::The [`clojure.string`](https://clojuredocs.org/clojure.string)`clojure.string` library
> Remember that there are specific functions you can use in the `clojure.string` library
* [clojure.string/split](https://clojuredocs.org/clojure.string/split) - split a string based on a pattern (regex)
* [clojure.string/subs](https://clojuredocs.org/clojure.core/subs) - get part of a string
* [clojure.string/replace](https://clojuredocs.org/clojure.string/replace) - replace part of the string based on a pattern (regex)
* [clojure.string/includes?](https://clojuredocs.org/clojure.string/includes_q) - does a string include another string (true or false)
