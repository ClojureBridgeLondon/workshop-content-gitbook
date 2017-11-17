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
> Calculate the average age of the 8 programming languages
```eval-clojure
()
```

------------------------------------------

> #### Note::Find the age of the youngest programming language
```eval-clojure
()
```
