# ClojureBridge London

Testing an alternative content style for the ClojureBridge curriculum.

This uses 99% of the existing ClojureBridge curriculum content, however instead of slides we are using Gitbook to provide structure and format of the content.

## Navigation with arrow keys

The pages in the workshop can be navigated using the right and left arrow keys, or by pressing the arrows as the side of each page.

## Using Klipse for live evaluation

The Klipse live repl is also included in this website to make the code snippets interactive.  All code examples and exercises are placed in Klipse code snippets.

```eval-clojure
(defn live-evaluation? [opinion]
  (str "Klipse live evaluation is... " opinion))

(live-evaluation? "awesomenessness")
```

> #### Hint::Klipse Hints
> Run [Klipse as a stand-alone editor](http://app.klipse.tech/?eval_only=1) or as [a stand-alone editor with Javascript output](http://app.klipse.tech/)
>
> Klipse can evaluate code from a public [Github Gists](https://gist/github.com)

## Exercises

Exercises are denoted by using the Note callout plugin for github.  Excercises look like:

> #### Note::Create a Clojure project
> Use the Leiningen tool to create a project called **clojure-is-awesomenessness**

## Answers

Answers to questions can be either put into github gists or included directly in the workshop and placed in hidden sections.  An example of an answer in a hidden section is as follows:

<!--sec data-title="Reveal answer..." data-id="answer00" data-collapse=true ces-->

```clj
(defn who-has-the-answer [name])
  (str "Only " name " have the answer"))

(who-has-the-answer "Smarties")
```

> #### Hint::
> Answers are added as fixed code blocks so the students dont accidentally change them and then get confused when the answer doesnt work.

<!--endsec-->
