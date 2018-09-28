# Numbers

Clojure has several different types of numbers.

* Integer - are positive and negative whole numbers, including zero.
* Float - decimal numbers, like the value for Pi, 3.141

You write them in Clojure just like we do in every day life.

```clojure
0
12
-42
0.072725
10.5
-99.9
```

Numbers can be used by themselves, although they don't do anything useful alone.  So lets do some maths...

> #### Hint::Immutable values
> Numbers are an example of Immutable values.  Immutable means a value cannot change once used.
>
> How do we change anything then?  We can pass numbers to functions and get a new number as a result.
>
> It would difficult to understand the world if anyone could randomly change the value of 1 to equal another number.  We couldn't say for definite how many things we had.
>
> The opposite of Immutable is mutable.
