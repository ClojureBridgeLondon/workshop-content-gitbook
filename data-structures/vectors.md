# Vectors

A vector is a collection type that may contain values of different types, or it can be empty.

Vectors are the most commonly used collection for values in Clojure, as its very simple to use.


## Vector Syntax

Vectors are written using square brackets with any number values inside them, separated by spaces.

```clojure
[1 2 3 4 5]
[56.9 60.2 61.8 63.1 54.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]
[]
[1 2 (+ 1 2) 4 5 [6 7 8]]
```

The `vector` function also creates a vector: `(vector 1 2 3)`.

The `conj` function (short for conjoin) will add values to an existing collection.


```clojure
(vector 5 10 15)
;=> [5 10 15]

(conj [5 10] 15)
;=> [5 10 15]
```

> #### Hint::
> `conj` can be used with any kind of collection. Right now the only kind of collection we've encountered is a vector.


<!--sec data-title="Vectors are an indexed collection" data-id="answer001" data-collapse=true ces-->

Each value in a vector is numbered starting at 0, that number is called its index. The index is used to refer to each value when looking them up.

To imagine a vector, imagine a box split into some number of equally-sized compartments. Each of those compartments has a number.

You can put a piece of data inside each compartment and always know where to find it, as it has a number.

Note that the numbers start with 0. That may seem strange, but we usually count from zero when coding.

![Vector](../images/vector.png)

<!--endsec-->
