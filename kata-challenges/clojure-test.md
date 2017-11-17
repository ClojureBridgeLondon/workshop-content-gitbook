# Unit Testing

Clojure includes the [clojure.test]() library that helps you write code that checks your code works correctly.

It provides ways to name and group tests, make assertions, report results, and orchestrate test suites.


## A clojure.test example

We are writing a functional called `capitalize-map-values` which capitalizes the values in a map (assuming they are strings).

To test this function, define a test using `clojure.test/deftest`

```clojure
;; A function in namespace com.example.core
(defn capitalize-map-values
  "Returns a new map with values for keys 'ks' in the map 'm' capitalized."
  [m & ks]
  (reduce (fn [m k] (update-in m [k] clojure.string/capitalize)) m ks))


;; The corresponding test in namespace com.example.core-test
(require '[clojure.test :refer :all])

;; In a real test namespace, you would also :refer all of the target namespace
;; (require '[com.example.core :refer :all])

(deftest test-capitalize-entries
  (let [employee {:last-name "smith"
                  :job-title "engineer"
                  :level 5
                  :office "seattle"}]
    ;; Passes
    (is (= (capitalize-entries employee :job-title :last-name)
           {:job-title "Engineer"
            :last-name "Smith"
            :office "seattle"
            :level 5}))
    ;; Fails
    (is (= (capitalize-entries employee :office)
           {}))))
```

Run the test with the +clojure.test/run-tests+ function:

```clojure
(run-tests)
;; -> {:type :summary, :pass 1, :test 1, :error 0, :fail 1}
;; *out*
;; Testing user
;;
;; FAIL in (test-capitalize-entries) (NO_SOURCE_FILE:13)
;; expected: (= (capitalize-entries employee :office) {})
;;   actual: (not (= {:last-name "smith", :office "Seattle",
;;                    :level 5, :job-title "engineer"} {}))
;;
;; Ran 1 tests containing 2 assertions.
;; 1 failures, 0 errors.
```
