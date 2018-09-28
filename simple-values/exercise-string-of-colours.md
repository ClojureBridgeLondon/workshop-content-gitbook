# Exercise: Strings of colours

> #### Note::A String of favourite colours
> Create a string containing the names and favourite colours of each person near you.
>
> For example: "Our favourite colours are green and purple"
```eval-clojure
""
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
;; Just simply use a string
"We all love purple"

;; Using a function you can create a string and join values to create a string
(str "My favorite colours are" " " "green" " " "and" " ""purple")
```

<!--endsec-->

------------------------------------------

> #### Note::Does the string contain your favorite colour
> Use a function to see if a string contains a colour.  See the Hint below if you are not sure how to start
>
> For example, does the string "Rachel of York gave brown bread in vans" contain the colour brown?
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

```clojure
(clojure.string/includes? "Rachel of York gave brown bread in vans" "brown")
```
<!--endsec-->

------------------------------------------

> ####Hint::The [`clojure.string`](https://clojuredocs.org/clojure.string)`clojure.string` library
> Remember that there are specific functions you can use in the `clojure.string` library
* [clojure.string/split](https://clojuredocs.org/clojure.string/split) - split a string based on a pattern (regex)
* [clojure.string/subs](https://clojuredocs.org/clojure.core/subs) - get part of a string
* [clojure.string/replace](https://clojuredocs.org/clojure.string/replace) - replace part of the string based on a pattern (regex)
* [clojure.string/includes?](https://clojuredocs.org/clojure.string/includes_q) - does a string include another string (true or false)
