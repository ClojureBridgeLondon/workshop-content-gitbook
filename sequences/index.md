# Sequences

* What are sequences
* Functions for sequences
    * `doseq`
    * `dotimes`

### What are sequences?

In Clojure, we can say every data structure is a sequence.

So far, we learned `vector` and `map`, both of which are sequence.

String is also a sequence. When something is **seq-able**, it is a sequence.

## `first` item or not

If something is **seq-able**, it returns the first item in the sequence by the `first` function. This is a good test whether it is a sequence or not.

#### Results of `first`

```clojure
(turtle-names)
;=> [:trinity :neo :oracle :cypher] ; vector
(first (turtle-names))
;=> :trinity                        ; the first item

(:trinity (state))
;=> {:x 0, :y 0, :angle 90, :color [30 30 30]}  ; map
(first (:trinity (state)))
[:x 0]                                          ; the first item

(first "Hello, World!")  ; string
;=> \H                   ; the first item

(first :trinity)         ; keyword is not seq-able
;=> IllegalArgumentException Don't know how to create ISeq from:
clojure.lang.Keyword  clojure.lang.RT.seqFrom (RT.java:528)
```

### Functions for sequences

Clojure is very good at *iterate* over a sequence.

There are many functions that interact on sequences.

For example, `doseq`, `dotimes`, `for`, `loop`, `doall`, or `dorun`.

We already saw `map` and `reduce` functions in "Functions that takes other functions" section. These are also functions for sequences.

#### `doseq`

The `doseq`(for **do a sequence**) is one of well-used functions for sequences, and works quite similar to `map` function. The
function repeatedly evaluates given body form with each element in the given sequence.

The `doseq` function takes bindings as arguments. The arguments might be an odd-looking vector: `[name sequence]`. When each element of a sequence is iterated over, the element is assigned to the name one by one.

```clojure
;; doseq example
(doseq [n (turtle-names)] (forward n 40))
```

#### EXERCISE 1

* [Turtles Walk](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE-SAMPLES.md) (more function study) 
    - section 5 and later
* [Snowflakes](https://github.com/ClojureBridge/drawing/blob/master/curriculum/create-something.md) (animation)
    - step 4 and later
* [Twinkle Twinkle Little Star](https://github.com/ClojureBridge/tones/blob/master/curriculum/01-piano-chords.md) (making sounds)
    - `chord` function and later

#### `dotimes`

The `dotimes`(for **do number of times**) is another well-used
function for sequences. Like `doseq`, the function repeatedly
evaluates given body form. The difference is the binding in the
argument. The `dotimes` takes: `[name max-integer]`.

The `dotimes` function is the closest to so-called for-loop in other
programming languages. This function allows us an index access to
the given sequence by a combination with `nth`.

```clojure
;; assuming there are multiple turtles
(def names (turtle-names))
(dotimes [n (count names)] (right (nth names n) (* 45 n)))
```

#### EXERCISE 2

* [Turtles Walk](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE-SAMPLES.md) (more function study)
    - section 6 and later
* [Snowflakes](https://github.com/ClojureBridge/drawing/blob/master/curriculum/create-something.md) (animation)
    - step 5-4 and later
* [Twinkle Twinkle Little Star](https://github.com/ClojureBridge/tones/blob/master/curriculum/01-piano-chords.md) (making sounds)
    - complete Twinkle Little Star section

