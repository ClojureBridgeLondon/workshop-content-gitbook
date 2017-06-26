# Clojure SVG with Hiccup


<!-- <pre><code class="lang-eval-clojure" -->
<!--            data-external-libs="https://raw.githubusercontent.com/weavejester/hiccup/master/src/hiccup/"> -->
<!-- (ns my.graphics -->
<!--  (:require [hiccup.core])) -->
<!-- </code></pre> -->


<pre><code class="lang-eval-clojure" data-external-libs="https://raw.githubusercontent.com/viebel/hiccups/master/src/cljs/,https://raw.githubusercontent.com/viebel/hiccups/master/src/clj/">
    (ns my.ns
      (:require-macros [hiccups.core :as hiccups :refer [html]])
        (:require [hiccups.runtime :as hiccupsrt]))

        </code></pre>

<pre><code class="lang-eval-clojure">
(hiccups/defhtml my-template []
          [:div
              [:a {:href "https://github.com/weavejester/hiccup"}
                    "Hiccup"]])

</code></pre>

SVG graphics with hiccup

```eval-clojure
;; (require '(hiccup.core))

(defn svg [& body-els]
  (html
    [:svg {:width 100 :height 100, :viewbox "0 0 100 100"}
  ~@body-els]))

  (svg [:line {:x1 0 :x2 0 :y1 42 :y2 42}])
```
