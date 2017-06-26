# Generating Wallpaper


Some fun generating wallpapers with the HTML Canvas & Clojurescript


```eval-clojure
(defn draw-pixel! [canvas x y color]
  (let [ctx (.getContext canvas "2d")
        scale 2]
    (set! (.-fillStyle ctx) color)
    (.fillRect ctx (* scale x) (* scale y) scale scale)))
```

When we want to erase the canvas

```eval-clojure
(defn reset-canvas! [canvas]
  (let [ctx (.getContext canvas "2d")]
    (set! (.-fillStyle ctx) "white")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))))
```


The algorithm is controlled by the geometry of a square:

its x-position named a
its y-position named b
the side of the square named side

<!-- Preamble to add Javascript canvas to page -->
<pre class="language-klipse" 
           data-preamble="
           (def canvas (js/document.getElementById &quot;canvas-1&quot;)) 
           (reset-canvas! canvas)" 
           data-eval-idle-msec="500">

(defn draw-bw-wallpaper! [canvas a b side]
  (let [points 200]
  (dotimes [i points]   
    (dotimes [j points]
      (let [x (+ a (* i (/ side points)))
            y (+ b (* j (/ side points))) 
            c (int (+ (* x x) (* y y)))] 
        (when (even? c)
          (draw-pixel! canvas i j "black")))))))

(draw-bw-wallpaper! canvas 5 5 9)
</code></pre>

<canvas class="canvas" id="canvas-1"></canvas>


<p>The cool thing about this algorithm is that when we modify the side of the square, we get a completly different pattern:</p>

<pre class="language-klipse" 
           data-preamble="
           (def canvas 
             (js/document.getElementById &quot;canvas-2&quot;)) 
             (reset-canvas! canvas)" 
             data-eval-idle-msec="500"><code>

(draw-bw-wallpaper! canvas 5 5 100)
</code></pre>

<canvas class="canvas" id="canvas-2"></canvas>


## Adding Colours

<pre class="language-klipse" data-preamble="(def canvas (js/document.getElementById &quot;canvas-3&quot;)) (reset-canvas! canvas)" data-eval-idle-msec="500"><code>

(defn draw-color-wallpaper! [canvas a b side]
  (let [points 200]
    (dotimes [i points]
      (dotimes [j points]
        (let [x (+ a (* i (/ side points)))
              y (+ b (* j (/ side points)))
              c (int (+ (* x x) (* y y)))
              color  (case (mod c 4)
                       0 "red"
                       1 "green"
                       2 "blue"
                       "white")]
         (draw-pixel! canvas i j color))))))

(draw-color-wallpaper! canvas 5 7 101)
</code></pre>

<canvas class="canvas" id="canvas-3"></canvas>



<p>Again, when we modify the side of the square, we get a completly different pattern:</p>

<pre class="language-klipse" data-preamble="(def canvas (js/document.getElementById &quot;canvas-4&quot;)) (reset-canvas! canvas)" data-eval-idle-msec="500"><code>
(draw-color-wallpaper! canvas 5 7 57)
</code></pre>

<canvas class="canvas" id="canvas-4"></canvas>

<h2 id="grand-finale">Grand Finale</h2>

<p>Someone in <a href="https://www.reddit.com/r/Clojure/comments/67amvu/turing_omnibus_1_algorithm_for_generating/dgqn8t0/">reddit</a> suggested to loop over the value of <code class="highlighter-rouge">side</code> in order to watch all the generated wallpapers like a movie.</p>

<p>Here is the result:</p>

<pre class="language-klipse" data-preamble="(def canvas (js/document.getElementById &quot;canvas-5&quot;)) (reset-canvas! canvas)"><code>
(defonce interval (atom nil))
(defonce side (atom 0))

(def delta 0.5)
(defn step [canvas container]
  (set! (.-innerHTML container) (str "side: " @side) )
  (reset-canvas! canvas)
  (draw-color-wallpaper! canvas 5 5 (swap! side + delta)))

(.clearInterval js/window @interval)
(reset! side 0)
(reset! interval (.setInterval js/window step  500 canvas js/klipse-container)) 
</code></pre>

<canvas class="canvas" id="canvas-5"></canvas>

<!-- Adding style to the canvas -->
<style>
.canvas {
padding: 10px;
width: 800px;
height: 300px;
}
</style>

