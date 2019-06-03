# Clojure Essentials

This learning path will teach you some of the essentials of the Clojure programming language.  You do not need to install any Clojure tools to use it, however, you may want to copy your code examples into an editor.


### Navigating the workshop

The pages in the workshop can be navigated using the left-hand menu.  To move a page forwards or backwards use the right or left arrow keys, or press the arrows at the side of each page (or bottom of the page if on a small display).

![Navigate with arrow keys](/images/navigation-arrow-keys.png)


### Evaluating Clojure

Code can be written directly in the pages of this workshop.  The code boxes below allow you to edit the code in the top of the box, with the results evaluated automatically and updated in the results in the bottom of the box.


```eval-clojure
(defn live-evaluation [opinion]
  (str "Clojure live evaluation is... " opinion))

(live-evaluation "awesomenessness")
```

### Exercises

Exercises are denoted by using the Note [callout plugin](https://www.npmjs.com/package/gitbook-plugin-callouts) for gitbook.  Exercises look like:

> #### Note::Create a Clojure project
> Use the Leiningen tool to create a project called **clojure-is-awesomenessness**


### Answers

Suggested answers are included directly in the workshop in hidden sections.  To get the most out of the workshop you should try to solve the answers first and try several alternative approaches to solving each exercise.

An example of an answer in a hidden section is as follows:

<!--sec data-title="Suggested answer. Press the button to reveal" data-id="answer001" data-collapse=true ces-->

```clj
(defn who-has-the-answer [name])
  (str "Only " name " have the answers, allegedly"))

(who-has-the-answers "Smarties")
```
Cultural reference to an [award winning TV advertisement](https://www.youtube.com/watch?v=UA5aLfM9N0E) in 1984 that was created using computer graphics.

We do not endorse smarties or suggest that anyone has all the answers :)

<!--endsec-->
