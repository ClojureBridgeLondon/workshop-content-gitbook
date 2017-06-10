# Understanding Scope

Is the code from the previous page still in scope?

```eval-clojure
john
```
No.  The scope of definitions for Klipse is only the page.


We can hide code from the page and include it in the evaluation

<pre class="hidden"><code class="lang-eval-clojure">
(def a  42)
</code></pre>

```eval-clojure
a
```

Lets include some external libs

<pre><code class="lang-eval-clojure" data-external-libs="https://raw.githubusercontent.com/viebel/math.combinatorics/master/src/main/clojure">
(ns my.combinatorics
 (:require [clojure.math.combinatorics :refer [permutations]]))

(permutations [1 2 3])
</code></pre>


