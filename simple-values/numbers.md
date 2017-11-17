# Numbers

Clojure has several different types of numbers.

* Integer - are positive and negative whole numbers, including zero.
* Float - decimal numbers, like the value for Pi, 3.141
* Ratio - we know these as fractions, eg 3/4

You write them in Clojure just like we do in every day life.

```clojure
0
12
-42
0.072725
10.5
-99.9

3/4    ;; this is a ratio (a fraction)
```

Numbers can be used by themselves, although they don't do anything useful alone.  So lets do some maths...

> #### Hint::
> Numbers are an example of Immutable values.  Once you create an number, you cannot change it.
>
> It would be a funny world if you could change the value of 1 so that it equalled 2
