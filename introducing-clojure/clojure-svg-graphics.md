# SVG Graphics

<!-- Hide the reagent include - too much information at this point
     This code doesnt seem to load without manually freshing the page
     Perhaps there is some interference from the Hiccup library  -->
<pre class="hidden">
  <code class="lang-eval-clojure" data-preamble="(require '[reagent.core :as r])">
  </code>
</pre>

Clojure can be used to generate and manipulate [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

SVG images are _drawn_ from a collection of points and paths and images do not loose any quality when making them larger or smaller.  Using SVG images for the web and responsive design is highly recommended.

## An SVG image (using reagent)

This example of an SVG images is made from:

* a white background
* a green circle and a smaller blue circle
* a white curvy path


```reagent
(defn concentric-circles []
  [:svg {:style {:border "1px solid"
                 :background "white"
                 :width "150px"
                 :height "150px"}}
   [:circle {:r 50, :cx 75, :cy 75, :fill "green"}]
   [:circle {:r 25, :cx 75, :cy 75, :fill "blue"}]
   [:path {:stroke-width 12
           :stroke "white"
           :fill "none"
           :d "M 30,40 C 100,40 50,110 120,110"}]])
```

> #### Note::
> Add another path to the code to make a curvy lambda symbol


<hr />

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->
Add the following path to the above code to make a curvy lambda symbol

```clojure
   [:path {:stroke-width 12
           :stroke "white"
           :fill "none"
           :d "M 75,75 C 50,90 50,110 35,110"}]
```

Or simply replace the code with this complete answer001

```clojure
(defn concentric-circles []
  [:svg {:style {:border "1px solid"
                 :background "white"
                 :width "150px"
                 :height "150px"}}
   [:circle {:r 50, :cx 75, :cy 75, :fill "green"}]
   [:circle {:r 25, :cx 75, :cy 75, :fill "blue"}]
   [:path {:stroke-width 12
           :stroke "white"
           :fill "none"
           :d "M 30,40 C 100,40 50,110 120,110"}]
   [:path {:stroke-width 12
           :stroke "white"
           :fill "none"
           :d "M 75,75 C 50,90 50,110 35,110"}]])
```


<!--endsec-->
