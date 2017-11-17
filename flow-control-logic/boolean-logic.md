# Boolean logic with `and`, `or`, and `not`

You can test multiple conditions using boolean logic.

_Boolean logic_ refers to combining and changing the results of predicates using `and`,`or`, and `not`.

It follows the common sense way you look at things.

Is this _and_ that true? Only if both are true. Is this _or_ that true?

Yes, if either -- or both! -- are. Is this _not_ true? Yes, if it's false.

## Truthy and falsey table


| x     | y     | (`and` x y) | (`or` x y) | (`not` x) | (`not` y) |
| ----- | ----- | --------- | -------- | ------- | ------- |
| false | false | false | false | true  | true  |
| true  | false | false | true  | false | true  |
| true  | true  | true  | true  | false | false |
| false | true  | false | true  | true  | false |


## `and`, `or`, and `not` combination

`and`, `or`, and `not` can be combined to create a more complex condition.

Here is an example containing several conditions for confirming if a calendar year is a leap year.


```eval-clojure
(defn leap-year?
  "Every four years, except years divisible by 100, but yes for years divisible by 400."
  [year]
  (and (zero? (mod year 4))
       (or (zero? (mod year 400))
           (not (zero? (mod year 100))))))
;;
(leap-year? 1984)
```

> ####Note::Try explain this function to another student
> If it seems complicated, take each of the conditions by themselves to see what they do.
> Try the conditions with different years
```eval-clojure
()
```

If you get stuck with the exercise, ask a volunteer to help.
