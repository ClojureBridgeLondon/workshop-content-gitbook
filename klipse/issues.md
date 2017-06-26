# Klipse Issues with Gitbook

When using the `gitbook-plugin-sectionx` you can collapse sections of the page.

Using the `gitbook-plugin-klipse` inside a collapse section renders correctly when that section is expanded by default, `data-collapse=false`.

Klipse inside a sectionx - `data-collapse=false`

<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=false ces-->
```eval-clojure
(+ 1 2 3 4)
```
<!--endsec-->

However, when 

Klipse inside a sectionx - `data-collapse=true`

<!--sec data-title="Reveal answer..." data-id="answer003" data-collapse=true ces-->
```eval-clojure
(+ 1 2 3 4)
```
<!--endsec-->

