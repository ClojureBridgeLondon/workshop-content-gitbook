# ClojureBridge London

Testing an alternative content style for the ClojureBridge curriculum.

This uses 99% of the existing ClojureBridge curriculum content, however instead of slides we are using Gitbook to provide structure and format of the content.


## Using this workshop

Here are a few of the key points to using the content of this workshop.

### Navigation with arrow keys

The pages in the workshop can be navigated using the right and left arrow keys, or by pressing the arrows as the side of each page.

### Using Klipse for live evaluation

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

### Exercises

Exercises are denoted by using the Note `callout` plugin for github.  Exercises look like:

> #### Note::Create a Clojure project
> Use the Leiningen tool to create a project called **clojure-is-awesomenessness**

There are other `callout` box styles available, including: Info, Hint, Warning, Tag, Comment, Success, Caution, Quote and Danger.


### Answers

Answers to challenges could be included as links to Github Gists, however this requires clicking out of the workshop website (or opening a new tab/window).

To keep answers included directly in the workshop they can be placed in hidden sections.  An example of an answer in a hidden section is as follows:

<!--sec data-title="Suggested answer..." data-id="answer001" data-collapse=true ces-->

```clj
(defn who-has-the-answer [name])
  (str "Only " name " have the answer"))

(who-has-the-answer "Smarties")
```

> #### Hint::
> Answers are added as fixed code blocks so the students dont accidentally change them and then get confused when the answer doesnt work.

<!--endsec-->

> #### Warning:: Klipse not rendering in collapse sections
> When included Klipse inside a collapse section, the Klipse boxes do not show their content correctly.  It would seem the CSS is not evaluated in time before the section is collapsed.  If you expand the section and resize the browswer, then klipse will render the content correctly (thats not a great experience).
>
> See the [klipse section](/klipse/) for examples of this issue.
