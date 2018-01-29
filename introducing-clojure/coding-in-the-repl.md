# Coding in the Clojure REPL

Clojure gives you fast feedback as you develop your code, thanks to the Clojure REPL.

![Klipse in action with Clojure](/images/klipse-clojure-snippet.gif)

Clojure code is entered in the top input box and the result is instantly shown in the box underneath.

> #### Note::Try the Clojure REPL in the browser
> Change the numbers in this Clojure code to see the REPL in action
>
> Remember to keep the numbers inside the `()` and after the `+`
```eval-clojure
(+ 1 2 3)
```


## Using a REPL in this workshop

For this workshop there is a REPL on each web page.  This uses a ClojureScript project called [Klipse](https://www.klipse.tech).

Your Clojure aware editor also has a REPL that works in the same way.  You type in code and you can evaluate it.


> #### Hint::"REPL" - **R**ead, **E**val, **P**rint, **L**oop
> A REPL is a way to interactively evaluate your code and get instant results.
* _Read_ - the code is read to see if it is correct.
* _Evaluate_ - the code is compiled into something the computer can understand and run through
* _Print_ - the result is printed to the screen
* _Loop_ - we go back to the start and do it all again
>
> All this happens almost instantly in the REPL, so all you really see is the result printed to the screen.
>
> Most editors also allow you to evaluate code directly in the editor window.
>
> In LightTable you can press <kbd>Ctrl</kbd> - <kbd>Enter</kbd> at the end of a line of Clojure code, after the final closed parentheses, `)`.
