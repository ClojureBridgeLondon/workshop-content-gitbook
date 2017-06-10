# Impure functions 

Using external values rather than the arguments that were passed

```eval-clojure
(def random-value '(5 4 3 2 1))

(defn impure-increment-numbers [number-collection]
  (map inc random-value))

(impure-increment-numbers '(1 2 3 4 5))
```

Using a global value rather than the argument passed makes this function non-deterministic


## Side effect example

```eval-clojure
(defn print-to-console [value-to-print]
  (println "The value is" value-to-print "- the returned value is below:"))

(print-to-console "a side effect")
```

<!--sec data-title="Other impure examples" data-id="answer001" data-collapse=true ces-->
```clojure
(rand)                         ; reading (from a random number generator) is too
```
<!--endsec-->



## Impurity via host language interoperability

Using code from the host environment is often a source of impurity, especially when that language is very stateful. 

### Java Interop

This example creates a new date object using the Java `Date` class from the host environment.

`(java.util.Date.)` creates a new date object with the current date

```eval-clojure
(:import java.util.Date)

(defn task-complete [task-name]
  (str "Setting task " task-name " completed on " (java.util.Date.)))

(task-complete "hack clojure")
```

## A pure approach to Java Interoperability

Generated numbers can be created outside a function and passed as an argument, keeping the function pure.

```eval-clojure
(:import java.util.Date)

(defn task-complete [task-name completed-date]
  (str "Setting task " task-name " completed on " completed-date))

(task-complete "hack clojure" (java.util.Date.))
```

> #### Hint::
> Where impure functions cannot be avoided, it is common to wrap impure code inside a function in order to keep all your other functions pure.
