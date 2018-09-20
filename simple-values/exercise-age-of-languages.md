# Simple Arithmetic: Ages of programming languages


> #### Note::Ages of programming Languages
> Clojure was 10 years old in 2017, so its age can be represented as the number `10`
>
> Can you write some simple Clojure to calculate the total number of years from all the following languages
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
> You can use the list of years here as a convenience
> `10 27 26 21 22 22 45 34 59 60`
```eval-clojure
()
```

<!--sec data-title="Example answer..." data-id="answer001" data-collapse=true ces-->
The simplest way to calculate the total is to simply add the age of each language together

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
>
> For example, you could simply divide the total age of all languages by 10, as there are 10 languages.
```eval-clojure
()
```

------------------------------------------


<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

We first add up the ages of all the language ages.  Then we divide that total age with the number of languages

```clojure
(/ (+ 10 27 26  21 22 22 45 34 59 60)
   10)
```

<!--endsec-->
