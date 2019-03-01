# Klipse

Lets create some code with klipse

```eval-clojure
(def john {:firstname "John" :lastname "Stevenson"})

(:firstname john)
```

Code is styled with style/website.css inline with single backtick marks as in the following code `(+ 1 2 3)`.

And code can be shown without klipse using the usual triple backtick and optional name of the programming language

```clj

(+ 1 2 3)
```

And code in an earlier part of the page in Klipse should be available in latter klipse sections

```eval-clojure
john
```


Can we hide klipse away from prying eyes

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true data-show=true ces-->

```clojure
(str "fixed code answers that can be copied into klipse")
```

<!--endsec-->


Lets use a gist with klipse - collapse false

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=false ces-->

<pre><code class="lang-eval-clojure" data-gist-id="viebel/8cb19d258fea39a64146721ce50603d0">
</code></pre>

<!--endsec-->

collapse true

<!--sec data-title="Reveal answer..." data-id="answer003" data-collapse=true ces-->

<pre><code class="lang-eval-clojure" data-gist-id="viebel/8cb19d258fea39a64146721ce50603d0">
</code></pre>

<!--endsec-->



<hr />

App idea: simple app that tracks how many times I mistakenly used defn instead of def or vice versa
