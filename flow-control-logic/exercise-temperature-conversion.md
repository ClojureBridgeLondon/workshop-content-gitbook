# EXERCISE: Temperature conversion with `cond`

> #### Note::Write a function which converts temperatures into degrees Celcius.
> The function should take `degrees` and `scale` as arguments, where scale is either fahrenheit or kelvin temperature scales.  If the celcius scale is used, then return the same value
> For example:
```cloure
(temperature-in-celcius 32.0 :fahrenheit)    ;=> 0.0
(temperature-in-celcius 300  :kelvin)        ;=> 26.85
(temperature-in-celcius 22.5 :celcius)       ;=> 22.5
(temperature-in-celcius 22.5 :fake)          ;=> "Unknown scale: :fake"
```
> If an unknown temperature scale is used, an error message should be returned
``` eval-clojure
(defn temperature-in-celcius [temperature scale]
  (cond
    ;; ...
    ))
;;
;; Dont forget to call your function
()
```

<hr />

> #### Hint::Formulas to convert temperatures
> * Fahrenheit to Celcius: `(* (- Fahrenheit 32) 5/9)` = Celcius
> * Kelvin to Celcius:     `(+ Kelvin 273.15)` = Celcius


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Our function takes two arguments, the temperature in degrees celcius

``` clojure
(defn temperature-in-celcius [temperature scale]
  (cond
    (= scale :celcius)    temperature
    (= scale :fahrenheit) (* (- temperature 32) 5/9)
    (= scale :kelvin)     (- temperature 273.15)
    :else                 (str "Unknown scale: " scale)))

(temperature-in-celcius 32.0 :fahrenheit)    ;=> 0.0
(temperature-in-celcius 300 :kelvin)         ;=> 26.85
(temperature-in-celcius 22.5 :celcius)       ;=> 22.5
(temperature-in-celcius 22.5 :gibberish)     ;=> "Unknown scale: :gibberish"
```
<!--endsec-->
