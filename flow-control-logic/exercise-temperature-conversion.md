# EXERCISE: Temperature conversion with `cond`

> #### Note::Write a function which converts temperatures into degrees Celcius.
>
> The function should take `degrees` and `scale` as arguments
>
> Temperatures are converted from the Fahrenheit or Kelvin scale
``` eval-clojure
(defn to-celcius [degrees scale]
  (cond
    ;; ...
    ))
;; example function calls
(to-celcius 32.0 :fahrenheit)      ;=> 0.0
(to-celcius 300  :kelvin)          ;=> 26.85
(to-celcius 22.5 :celcius)         ;=> 22.5
(to-celcius 22.5 :fake)            ;=> "Unknown scale: :fake"
```

<hr />

> #### Hint::Formulas to convert temperatures
> * Fahrenheit to Celcius: `(* (- Fahrenheit 32) 5/9)` = Celcius
> * Kelvin to Celcius:     `(+ Kelvin 273.15)` = Celcius


<!--sec data-title="Reveal answer..." data-id="answer00" data-collapse=true ces-->

``` clojure
(defn to-celcius [degrees scale]
  (cond
    (= scale :C) degrees
    (= scale :F) (* (- degrees 32) 5/9)
    (= scale :K) (- degrees 273.15)
    :else        (str "Unknown scale: " scale)))

(to-celcius 32.0 :fahrenheit)         ;=> 0.0
(to-celcius 300 :kelvin)          ;=> 26.85
(to-celcius 22.5 :C)         ;=> 22.5
(to-celcius 22.5 :gibberish) ;=> "Unknown scale: :gibberish"
```
<!--endsec-->
