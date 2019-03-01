# Rich Terminals

Create [rich Terminal-User-Interface (TUI) apps in ClojureScript](https://github.com/eccentric-j/cljs-tui-template) with commonly used web technologies.

![ClojureScript Terminal User Interface apps](/images/cljs-tui-demo.gif)


### Instant changes from REPL

![cljs-tui REPL demo](/images/cljs-tui-repl-demo.gif)

Connect your editor to the nREPL server and send code changes to your running app without even saving a file. Ideal for changing application state, redefining functions, or debugging.

### Example: Floki - a data browser

![Floki JSON EDN terminal browser](/images/floki-json-edn-terminal-browser.gif)

[Floki terminal browswer for JSON and EDN data](https://github.com/denisidoro/floki)

* [Blog post: ClojureScript Terminal User Interface (TUI) for browsing data](https://eccentric-j.com/blog/5-announcing-cljs-tui-template.html)

### Commonly used web technologies

- Write views in React with the ClojureScript Reagent wrapper.
- Reagent views compose together just like React components

### Create rich applications

- Reagent atoms for simple, local state updates
- Reframe for handling effects and updating shared app state
- Functional programming and data-oriented design for a fast feedback cycle.

### Distribute your applications

Transpile ClojureScript into vanilla JavaScript and distribute your application on NPM for easy installation and quick startup times.
