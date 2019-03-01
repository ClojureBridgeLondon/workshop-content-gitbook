# Name Squash


Take your name and the name of another student in the group and create a combined name

> #### Note::A collection of two people
> Create a collection containing your full name and the name of another person (or two imaginary people if you prefer)
>
> Give your collection a name so you can use it in later exercises on this page.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
(def students ["Ada Lovelace" "Anne-Marie Imafidon"])
```

<!--endsec-->

> #### Note::Split first and last names
> Assuming there is a first and last name for each person we need to split them into individual strings first.
>
> Write a function call to split each name in your `students` collection
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

```clojure
(clojure.string/split students #" ")
;;
;; => ["Ada" "Lovelace" "Anne-Marie" "Imafidon"]
```

In JavaScript the above gives a rather messy output of nested collections.

Mapping over the student collection gives cleaner return value

```clojure
(map #(clojure.string/split % #" ") students)
```

We can also flatten the result to make it look nicer

```clojure
(flatten (map #(clojure.string/split % #" ") students))
```

<!--endsec-->



> #### Hint::
> [clojure.string/split](https://clojuredocs.org/clojure.string/split) function will split a string on a given pattern (regular expression), such as a space: `#" "`.

------------------------------------------

> #### Note::Name splitting function
> Write a function called `name-split` that a full name as a string and return two separate strings, one for the first name and one for the last name.
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
    (str "Hello " first-person-first-name second-person-second-name)))
;;
(jumble-names students)
;; => "Hello AdaImafidon"
```

<!--endsec-->

> #### Hint::
> Remember, the `let` function defines local names that you can use for temporary values.
> Using several names with the `let` function can make this challenge a little simpler to solve
