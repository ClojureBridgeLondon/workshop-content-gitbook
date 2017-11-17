# EXERCISE: Find the average energy plan

> #### Note::Find the average cost of energy plans
> Write a function that takes the yearly cost of energy plans from several providers
>
> The function should return the average of cost of those energy plans.
```eval-clojure
()
```


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->
```clojure
(defn average-plan-cost [energy-plan-costs]
  (/ (reduce + energy-plan-costs) (count energy-plan-costs)))

(average-plan-cost [10 12])
;; => 11

(average-plan-cost [250 190 270 180 220 240 200 210 220 230])
;; => 221
```

<!--endsec-->


> #### Hint::
> The functions `reduce` and `count` should help you solve this challenge
>
> Using a vector of numbers to represent the energy plan costs is probably the simplest approach
