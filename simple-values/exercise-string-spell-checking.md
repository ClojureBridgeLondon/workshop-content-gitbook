# Excercise: Spell Checking

> #### Note::Fixing spelling mistakes
> One aspect of fixing spelling mistakes is to find and replace incorrect words.
>
> Is there a function in Clojure or one of its libraries we can use to replace the mis-spelt word in these sentences?
>
> "simplicity ovr complexity"
>
> "coed as data as coed"
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Again, the [`clojure.string`](https://clojuredocs.org/clojure.string) library helps us by providing the `replace` function.

```clojure
;; Replace in this string the characters ovr with the characters over

(clojure.string/replace "simplicity ovr complexity" "ovr" "over")
;; => "simplicity over complexity"


(clojure.string/replace "coed as data as coed" "coed" "code")
;; => "code as data as code"
```

<!--endsec-->

------------------------------------------
