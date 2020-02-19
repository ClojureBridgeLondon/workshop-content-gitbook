# EXERCISE: Temperature conversion with `cond`

> #### Note::Write a function which converts temperatures into degrees Celsius.
> The function should take `degrees` and `scale` as arguments, where scale is either fahrenheit or kelvin temperature scales.  If the celsius scale is used, then return the same value
> For example:
```cloure
(temperature-in-celsius 32.0 :fahrenheit)    ;=> 0.0
(temperature-in-celsius 300  :kelvin)        ;=> 26.85
(temperature-in-celsius 22.5 :celsius)       ;=> 22.5
(temperature-in-celsius 22.5 :fake)          ;=> "Unknown scale: :fake"
```
> If an unknown temperature scale is used, an error message should be returned
``` eval-clojure
(defn temperature-in-celsius [temperature scale]
  (cond
    ;; ...
    ))
;;
;; Dont forget to call your function
()
```

<hr />

> #### Hint::Formulas to convert temperatures
> * Fahrenheit to Celsius: `(* (- Fahrenheit 32) 5/9)` = Celsius
> * Kelvin to Celsius:     `(- Kelvin 273.15)` = Celsius


<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

Our function takes two arguments, the temperature in degrees celsius

``` clojure
(defn temperature-in-celsius [temperature scale]
  (cond
    (= scale :celsius)    temperature
    (= scale :fahrenheit) (* (- temperature 32) 5/9)
    (= scale :kelvin)     (- temperature 273.15)
    :else                 (str "Unknown scale: " scale)))

(temperature-in-celsius 32.0 :fahrenheit)    ;=> 0.0
(temperature-in-celsius 300 :kelvin)         ;=> 26.85
(temperature-in-celsius 22.5 :celsius)       ;=> 22.5
(temperature-in-celsius 22.5 :gibberish)     ;=> "Unknown scale: :gibberish"
```
<!--endsec-->
