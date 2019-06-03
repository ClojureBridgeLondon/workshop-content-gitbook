# Exercise: Name Squash

In this exercise we will write functions to split and join strings together.

Take your name and the name of another student in the group and create a combined name

> #### Note::A collection of two people
> Create a collection of two people.  Each person should have a two part name, eg. "Ada Lovelace"
>
> Give your collection a name so you can use it in later exercises on this page.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(def famous-scientists ["Ada Lovelace" "Anne-Marie Imafidon"])
```

<!--endsec-->

> #### Note::Split first and last names
> Define a function called `name-split`.
> The function should take one argument, which is a string of a persons name, first and last as one string.
> The behaviour of the function splits the names into two strings
> Then call the function with a name to split
```eval-clojure
()
```


<!--sec data-title="Reveal answer..." data-id="answer003" data-collapse=true ces-->

```clojure
(defn name-split
  "Splits a name into first & last names"
  [name]
  (clojure.string/split name #" "))
;;
;; (name-split "Ada Lovelace")
;; =>["Ada" "Lovelace"]
```

<!--endsec-->

> #### Hint::clojure.string/split
> [clojure.string/split](https://clojuredocs.org/clojure.string/split) function will split a string on a given pattern (regular expression), such as a space: `#" "`.

---

> #### Note::Jumble the names
> Write a function to jumble up the first and last names to create a new person
>
> For example, take the first name from the first person and join it with the last name from the second person
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer004" data-collapse=true ces-->

```clojure
(defn jumble-names [names]
  (let [first-person (first names)
        second-person (second names)
        first-person-first-name (first (name-split first-person))
        second-person-second-name (second (name-split second-person))]
    (str "Hello " first-person-first-name " " second-person-second-name)))
;;
(jumble-names famous-scientists)
;; => "Hello AdaImafidon"
```

<!--endsec-->

> #### Hint::
> Remember, the `let` function defines local names that you can use for temporary values.
> Using several names with the `let` function can make this challenge a little simpler to solve
