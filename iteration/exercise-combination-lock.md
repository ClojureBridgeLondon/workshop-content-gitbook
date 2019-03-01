# Exercise: Tumbler Wheels Lock combinations

You have just bought a new safe to keep all the riches you will gain from becoming a Clojure developer (hopefully).  The safe has a 3 tumbler wheel combination lock to protect your new found wealth.  Each tumbler wheel has the numbers 0 to 9.

![Combination locks](/images/combination-locks.jpg)


> #### Note:: Represent a single combination lock
> How would you represent the possible numbers in just one of the tumbler wheels
```eval-clojure
[]
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

* The combination is managed by three tumbler wheels
* Each tumbler wheel has the same range of numbers on then, 0 to 9

Each tumbler wheel could have all the numbers it contains within a _Collection_ in Clojure.  The simplest approach would be to put the numbers 0 to 9 into a Vector (an array-like collection).

~~~clojure
[0 1 2 3 4 5 6 7 8 9]
~~~

<!--endsec-->

------------------------------------------

> #### Note::Generating the number range
> As the numbers on the tumbler wheel are just a range between 0 and 9, then rather than type out all the numbers, is there a function to generate all the numbers for us.
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

When we give the range function one argument, it will create all the whole numbers from 0 to the number before that of the argument.  In the following example, we give `range` the argument of 10 and we receive the numbers from 0 to 9.

~~~clojure
(range 10)
~~~

You can also give `range` two arguments, such as '(range 5 15)'.

> Be careful not to call the `range` function by itself, or it will try and generate an infinite range of numbers (until your computer memory is all used up).


<!--endsec-->


------------------------------------------

> #### Note::Create all the Combinations
> Generate all the possible combinations of the lock using three tumbler wheels
> We have given you a bit of a clue
```eval-clojure
(for [tumbler-one (range 10)]
)
```

<!--sec data-title="Reveal answer..." data-id="answer003" data-collapse=true ces-->

~~~clojure
(for [tumbler-1 (range 10)
      tumbler-2 (range 10)
      tumbler-3 (range 10)]
 [tumbler-1 tumbler-2 tumbler-3])
~~~

<!--endsec-->

------------------------------------------

> #### Note::Total number of combinations
> You did the hard work already, now return just the total number of combinations
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer004" data-collapse=true ces-->

Take the code from the combinations and wrap it in the count function

~~~clojure
;; now count the possible combinations
(count
  (for [tumbler-1 (range 10)
        tumbler-2 (range 10)
        tumbler-3 (range 10)]
   [tumbler-1 tumbler-2 tumbler-3]))
~~~

<!--endsec-->

------------------------------------------

> #### Note::Make the combinations harder to guess
> To make our lock harder to break into, we should only allow the combinations where each tumbler wheel has a different number.  So you should exclude combinations like 1-1-1, 1-2-2, 1-2-1, etc.
>
> How many combinations does that give us?
```eval-clojure
()
```

<!--sec data-title="Reveal answer..." data-id="answer005" data-collapse=true ces-->


**Complete the following code to create a 3-tumbler wheel combination lock, where none of the numbers are the same**

> Hint: Beware not to enter (range) without an argument as Clojure may try and evaluate infinity

~~~clojure
(count
 (for [tumbler-1 (range 10)
      tumbler-2 (range 10)
      tumbler-3 (range 10)
      :when (or (= tumbler-1 tumbler-2)
                (= tumbler-2 tumbler-3)
                (= tumbler-3 tumbler-1))]
  [tumbler-1 tumbler-2 tumbler-3]))
~~~

Here is a [suggested example](https://gist.github.com/ab1f8d4561cc2b8b3e51887dd2519a18) of the completed 3-lock challenges.

<!--endsec-->
