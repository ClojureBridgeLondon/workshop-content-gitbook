# Optional: Development Tools for Clojure

If you want to continue your Clojure journey after ClojureBridge London, our coaches can help you set up a Clojure environment on your laptop.

> ####Hint::Our coaches can help you set up Clojure tools
> We have [general instructions on installing development tools](/development-environment/) for Linux, MacOSX and Windows.
>
> If something is not clear or does not work, don't hesitate to ask a coach.


A typical Clojure environment consists of:

* Java - usually installed on laptops by default
* Leiningen - for creating and running Clojure projects
* A Clojure aware editor


## Clojure aware editors

There are several editors that support Clojure development:

* [LightTable](https://github.com/ClojureBridgeLondon/curriculum/blob/gh-pages/outline/setup.md) - great for those new to Clojure (default choice)
* [Atom & Protorepl](https://atom.io/packages/proto-repl#installation) - typically used by web & Javascript developers
* [Emacs](https://cider.readthedocs.io/) - for developers that love Emacs
* [Spacemacs](http://spacemacs.org/) - for developers that love Emacs & Vim ([Spacemacs & Clojure book](https://practicalli.github.io/spacemacs/install-spacemacs/) - work in progress)
* [IntelliJ & Cursive](https://cursive-ide.com/userguide/) - typically used by Java developers
* [Microsoft Code](https://code.visualstudio.com/) with [clojureVScode](https://marketplace.visualstudio.com/items?itemName=avli.clojure) or [Clojure Code](https://marketplace.visualstudio.com/items?itemName=jamesnorton.continuum) plugins

> #### Hint::
> If you are new to development of any kind, then we suggest [LightTable](https://github.com/ClojureBridgeLondon/curriculum/blob/gh-pages/outline/setup.md)


## Create a project to save your code

To save the code you write for examples, we suggest using Leiningen (the Clojure build tool) to create a new project.

Once Leiningen is installed, run the following command in a terminal to create a new project.

```bash
lein new playground
```

In your Clojure editor, open the file: `playground/src/playground/core.clj`
