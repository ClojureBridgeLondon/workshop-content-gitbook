# Simple Arithmetic: Calculating Ages of programming languages

Clojure is 10 years old this year (2017), so its age can be represented as `10`

> #### Note::How many years of programming?
> What is the total number of years from all the following languages
> * Clojure (10 years)
> * Haskell (27 years)
> * Python (26 years)
> * Javascript (21 years)
> * Java (22 years)
> * Ruby (22 years)
> * C (45 years)
> * C++ (34 years)
> * Lisp (59 years)
> * Fortran (60 years)
>
> You can copy the list of years here as a convienience
> `10 27 26 21 22 22 45 34 59 60`
```eval-clojure
()
```

<!--sec data-title="Example answer..." data-id="answer001" data-collapse=true ces-->
The simplest way to calculate the total is to simply add the agest of the languages together

```clojure
(+ 10 27 26 21 22 22 34 45 59 60)
```

As there are two values the same, we could also calculate the total as follows

```clojure
(+ 10 27 26 21 (* 22 2) 34 45 59 60)
```
<!--endsec-->


> #### Note::Average age of programming languages
> Calculate the average age of the 10 programming languages
```eval-clojure
()
```

------------------------------------------

> #### Hint::Counting values
> You can simply divide the total age of all languages by 10.
>
> If you want to try something more advanced, then you can count the number of languages is to put them in a collection, eg.
> `[10 27  26  21 22 22 45 34 59 60]`
>
> The `count` function will tell you how many things are in a collection


<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

We first add up the ages of all the language ages.  Then we divide that total age with the number of languages

```clojure
(/ (+ 10 27 26  21 22 22 45 34 59 60) 10)
```

In a more advance clojure way we can also do

```clojure
(/ (+ 10 27 26  21 22 22 45 34 59 60)
   (count [10 27 26  21 22 22 45 34 59 60]))
```

<!--endsec-->


------------------------------------------

> #### Note::Find the age of the youngest programming language
> How could you find the smallest number?
>
> The ages are not in order, so you cant just get the first value

```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer003" data-collapse=true ces-->

```clojure
(first (sort [10 27 26 21 22 22 45 34 59 60]))
```

A more advanced approach (we cover in the [functions](/functions/) section) would be to use [map](https://clojuredocs.org/clojure.core/map) to call the [min](https://clojuredocs.org/clojure.core/min) function on each element of the collection.


<!--endsec-->
