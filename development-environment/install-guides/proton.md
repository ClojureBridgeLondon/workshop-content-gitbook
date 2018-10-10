# Atom Proton

> #### TODO:: work in progress, corrections and pull requests welcome

[Proton-mode](https://github.com/dvcrn/proton) gives a Spacemacs-like experience to the Atom editor

Proton-mode provides a mnemonic menu and set of keybindings that offer an effective alternative to the interesting keybindings with Atom and ProtoREPL.  It also provides modal editing features, simplifying keybindings.

[![Proton-mode](/images/proton-mode.gif)](/images/proton-mode.gif)

## Install Atom.io

Follow the instructions for your operating system


<!--sec data-title="Ubuntu Linux" data-id="ubuntulinux" data-collapse=true ces-->
Download the latest `.deb` file from Atom.io

Once downloaded, double-click the `.deb` file to install.

To run atom, press the `Super` key and type `atom`, or open a terminal and type the command `atom`.
<!--endsec-->

<!--sec data-title="RedHat Linux" data-id="redhatlinux" data-collapse=true ces-->
Download the latest `.rpm` file from Atom.io

Once downloaded, double-click the `.rpm` file to install.

To run atom, press the `Super` key and type `atom`, or open a terminal and type the command `atom`.
<!--endsec-->

<!--sec data-title="MacOSX" data-id="macosx" data-collapse=true ces-->
Pull request welcome
<!--endsec-->

<!--sec data-title="Windows" data-id="windows" data-collapse=true ces-->
Pull request welcome
<!--endsec-->


## Install Proton

Required packages

* [ink](https://atom.io/packages/ink) - Proto REPL dependency used for inline display and the REPL output.
* [proto-repl](https://github.com/jasongilman/proto-repl) - Clojure REPL, autocompletion, etc.
* [Proton-mode](https://github.com/dvcrn/proton) - Spacemacs style menu and keybindings to make Atom easier to use (included Vim / Emacs keybinding support)

Recommended packages

* [lisp-paredit](https://atom.io/packages/lisp-paredit) - to manage your `()`
* [proto-repl-charts](https://github.com/jasongilman/proto-repl-charts) - graphs and charts
* tool-bar - displays a REPL tool bar
* highlight-selected - highlights selected keywords throughout an editor


## Download the sample project

We have created an example Clojure project called "Welcome To ClojureBridge" to test your development tools.

<!--sec data-title="Download project as a zip file" data-id="gitzip" data-collapse=true ces-->

[Download the "Welcome To ClojureBridge" zip file](https://github.com/ClojureBridgeLondon/welcometoclojurebridge/archive/master.zip) and extract all the files.
<!--endsec-->

<!--sec data-title="Clone the project from Github" data-id="gitclone" data-collapse=true ces-->
If you are comfortable using the git version control tool and the command line, then you can clone the project using git

```bash
git clone https://github.com/ClojureBridge/welcometoclojurebridge
```
<!--endsec-->


## Test your editor with a clojure project

`SPC f f` and navigate to the `core.clj` file in the `welcometoclojurebridge` project.

`, s i` to start a Clojure REPL and display the REPL in a new window.
