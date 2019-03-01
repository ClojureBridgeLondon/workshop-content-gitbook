# Clojure development environment guides

Coaches can help you set up development tools on your laptop if you wish to continue discovering Clojure after the ClojureBridge London event.

## Common tools required

| Tool            | Is it installed? | Install guide                       |
|-----------------|------------------|-------------------------------------|
| Java 8 or above | `java -version`  | [Java install](java.html)           |
| Leiningen       | `lein version`   | [Leiningen install](leiningen.html) |
| Git             | `git --version`  | https://git-scm.com/                |

Clojure is a hosted language and runs on top of Java or JavaScript (and other platforms).  The Java Runtime Environment (JRE is needed to run Clojure.

Leiningen is a build tool for running Clojure code, creating and managing projects.

Git can be used to version your Clojure code, so you can go back to earlier versions if you make a mistake.


## Clojure editor choices

**[Install guides](install-guides/index.html)** are provided for all these editors.

<!-- Clojure Editors -->
{% tabs atom="Atom", vscode="VSCode", emacs="Emacs/Spacemacs", intellij="IntelliJ", vim="Vim style"%}

<!-- Atom.io and ProtoREPL -->
{% content "atom" %}

[Atom & ProtoREPL install guide](install-guides/atom-protorepl.html)


[Atom.io](https://atom.io/) is flexible and simple to use editor.  The [ProtoREPL](https://atom.io/packages/proto-repl) plugin adds support for Clojure and ClojureScript.

![Atom.io and ProtoREPL](/images/atom-protorepl-demo.gif)


### Simplified menu and configuration approach

[Atom & Proton install guide](install-guides/atom-proton.html)

Proton offers a simple mnemonic menu as an alternative to the somewhat cumbersome keybindings in Atom.io.  Proton also gives you a simple text configuration to manage all your packages quickly.

![Atom.io proton-mode demo](/images/atom-proton-mode-demo.gif)


<!-- VSCode and Calva -->
{% content "vscode" %}

[VSCode Calva extension](https://marketplace.visualstudio.com/items?itemName=cospaia.clojure4vscode)

![VSCode Calva demo](https://github.com/BetterThanTomorrow/calva/raw/master/assets/howto/features.gif)

[Microsoft VSCode & Calva install guide](install-guides/vscode-calva.html)

<!-- Spacemacs -->
{% content "emacs" %}

[Emacs & Spacemacs install guide](install-guides/emacs-spacemacs.html)

[Spacemacs](https://spacemacs.org/) is a community configuration bring [Emacs](https://www.gnu.org/software/emacs/) and [Vim](https://www.vim.org/) together.  Spacemacs uses a mnemonic menu system that makes it easy to learn.

[Spacemacs, Practicalli](https://practicalli.github.io/spacemacs) guides you through Clojure development, documenting with org-mode, Git version control with Magit, Vim editing modes and dozens of other features.

<iframe width="780" height="480" src="https://www.youtube.com/embed/Uuwg-069NYE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<!-- IntelliJ and Cursive -->
{% content "intellij" %}

* [Cursive install guide](install-guides/intellij-cursive.html)
* [Cursive IDE for IntelliJ](https://cursive-ide.com/)


![Cursive IDE](https://cursive-ide.com/images/cursive-screenshot.png)


{% content "vim" %}
## Using Vim style editing

We don't directly support Vim (although we will do our best to help). You can use Vim with the [fireplace](https://github.com/tpope/vim-fireplace) plugin to work with your Clojure REPL.

Both Spacemacs and Atom/Proton have great support for Vim style editing and so are a viable alternative.

If you wish to use Vim, take a look at some of these articles for help.

* [Clojure and Vim: An overview - its very possible](https://juxt.pro/blog/posts/vim-1.html)
* [Clojure docs: Clojure with Vim and fireplace.vim](http://clojure-doc.org/articles/tutorials/vim_fireplace.html)
* [Writing Clojure in Vim](https://thoughtbot.com/blog/writing-clojure-in-vim)


{% endtabs %}
<!-- End of Clojure editors -->
