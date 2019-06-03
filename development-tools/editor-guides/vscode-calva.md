# VSCode and Calva user guide

Open the VSCode editor and start a REPL for your project.  Then add your Clojure project and connect to your REPL.

> ####HINT::MacOSX Keys - Option or Alt
> Depending on the version of Mac computer you use, your Alt key may be called Option
> So `Ctrl+Alt+v e` would be `Ctrl+Option+v e`

## Open Project Folder in VSCode

`Ctrl+k Ctrl+o` to open the Folder that contains your project.  Or using the menu **File** > **Open Folder**

Select the top level of the folder, e.g. `playground` and click **OK**

## Add dependencies to project

Open the `project.cj` file and add the following dependencies

```clojure
(defproject playground "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [nrepl               "0.6.0"]
                 [cider/cider-nrepl   "0.21.2-SNAPSHOT"]
                 ])
```


## Run a REPL for the project using Leiningen.

**Ctrl+`** toggles open the [VSCode Integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).  Or open your operating system terminal.

> ####INFO::Windows GitBash users
> [Configure the Atom internal terminal to use the GitBash shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_configuration).

In the terminal, change to the folder than contains your project, e.g. `cd projects/clojure/playground`

Type the command `lein repl` in the terminal.

![Calva Atom Terminal - Clojure REPL running](/images/vscode-calva-terminal-repl-running.png)


## Connecting to a Remote REPL from Calva

`Ctrl+Alt+v c` will open a command pop-up asking you to enter **host** and **port**. These details were shown when the REPL was run in the terminal.

![Calva - connect to running REPL](/images/vscode-calva-connect-host-and-port.png)

In the bottom left of Atom, check the status of the **nrepl** connection.  If you are connected, then the *disconnected* status should disappear

![Calva - nrepl disconnected](/images/vscode-calva-nrepl-disconnected.png)


## Developing your project ##

Once you have a running REPL, use these commands to help you develop your code.

> ####HINT::MacOSX Keys - Option or Alt
> Depending on the version of Mac computer you use, your Alt key may be called Option
> So `Ctrl+Alt+v e` would be `Ctrl+Option+v e`

| Evaluate code             | Keybinding         | Description                                                 |
|---------------------------|--------------------|-------------------------------------------------------------|
| Namespace                 | `Ctrl+Alt+v n`     | Evaluate the current namespace and change namespace in REPL |
| All code in Namespace     | `Ctrl+Alt+v alt+n` | Evaluate all the code in current namespace                  |
| Outer expression          | `Ctrl+Alt+v SPACE` | Show the result of the top level expression                 |
| Expression                | `Ctrl+Alt+v e`     | Show the result of the current expression                   |
| Expression (send to REPL) | `Ctrl+Alt+v alt+e` | Send expression to the REPL and evaluate                    |
| Pretty print              | `Ctrl+Alt+v p`     | Print expression so its easier to read                      |
| Replace expression        | `Ctrl+Alt+v r`     | Replace the expression with its result                      |
| In the REPL               | `shift+enter`      | Code in the REPL window is evaluated                        |

You can run tests from Calva too...

| Tests to run            | Keybinding           | Description                             |
|-------------------------|----------------------|-----------------------------------------|
| All tests               | `Ctrl+Alt+v Shift+t` | Run all tests in the project            |
| Current Namespace tests | `Ctrl+Alt+v t`       | Run all tests for the current namespace |
| Re-run failing tests | `Ctrl+Alt+v Ctrl+t`  | Run all tests for the current namespace |

> ####HINT::REPL history
> The REPL maintains a history of the code typed in and can be navigated by using the up and down arrow keys.


## Commenting / uncommenting code

Type `;;` at the start of a line to comment out the whole line.

> ####TODO::Comment keybindings ?


## Increase / decrease font size

`Ctrl +` and `Ctrl -` will increase and decrease the size of the whole editor.


## Structured editing - Paredit

Once you get the basics of Clojure development, you can try structural editing which is a way to refactor you code without breaking the structure of Clojure.  Structural editing ensures you dont have uneven parentheses, `()`, `[]`, `{}`, etc.

Please look at the [documentation for Calva Paredit](https://github.com/BetterThanTomorrow/calva-paredit/blob/master/README.md) to make use of Structural editing.
