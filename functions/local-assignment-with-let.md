# Assignment: `let`

When you are creating functions, you may want to assign names to values in order to reuse those values or make your code more readable.

Inside of a function, however, you should _not_ use `def`, like you would outside of a function. Instead, you should use a special form called `let`.

* Reference: [Assignment let](http://clojurebridge.github.io/community-docs/docs/clojure/let/)

```eval-clojure
(defn average [& values]
  (let [number-of-values (count values)
        sum-of-values    (apply + values)]
    (/ sum-of-values number-of-values)))

(average 1.0 1.0 2.0 3.0 5.0)
```

> #### Note::Define a function to process an address book contact
> Address book contacts are defined in a map
> The return value should be a string of name, address and email
>
> Use a let expression to `get` each value from the contact hash-map
> Then join those values using `clojure.string/join` or `str` function
>
> The call to the function would be
> `(contact-details {:name "Sally" :address "Clojureville" :email "sally@clojurebridge.org"})`
>
```eval-clojure
(defn contact-details [contact]
  "Replace me with your answer"
)
(contact-details {:name "Sally" :address "Clojureville" :email "sally@clojurebridge.org"})
```

<!--sec data-title="Reveal suggested answer..." data-id="answer001" data-collapse=true ces-->

Using `clojure.string/join`

```clojure
(defn contact-details [contact]
  (let [name    (get contact-map :name)
        address (get contact-map :address)
        email   (get contact-map :email)]
    (clojure.string/join ", " name address email)))

(contact-details {:name "Sally" :address "Clojureville" :email "sally@clojurebridge.org"})
```

Using `clojure.string/join`

```clojure
(defn contact-details [contact]
  (let [name    (get contact-map :name)
        address (get contact-map :address)
        email   (get contact-map :email)]
    (str name ", " address ", " email)))

(contact-details {:name "John" :address "Clojureville" :email "sally@clojurebridge.org"})
```


<!--endsec-->
