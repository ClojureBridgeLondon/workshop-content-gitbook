# Strengths of Clojure

* **functional programming language** with a data-centric approach (mostly pure)
* **very small syntax** making it quick to learn
* **dynamic runtime & language** - a REPL and dynamic types makes development very quick
* **fast-feedback** approach for development, helping you quickly explore a problem domain
* **Immutable values by default** - data is copied rather than changed
* a modern implementation of **LISP**
* a highly extensible language via **macros** - no need to wait for language designers to add features
* an efficient way to manage state changes via **persistent data structures** & **software transactional memory**

> ####Hint::Avoid state changes means simpler code
In functional programming we avoid changing state as much as possible.  If a function does not change state it always returns the same result when given the same input (arguments).  These are referred to as Pure Functions.  Pure functions are truly modular as they do not affect any other part of the system and do not require complex threading to make a system scale.

## Dynamic Language & runtime environment (REPL)
* quickly explore your problem domain by evaluating code on the fly in the REPL
* new code is compiled as evaluated, no separate compile cycle or wait time
* very small language syntax, extensible via macros

> A lot of the best programmers and the most productive programmers I know are writing everything in Clojure and swearing by it, and then just producing ridiculously sophisticated things in a very short time. And that programmer productivity matters. Adrian Cockcroft - Battery ventures, formally Cloud Architect, Netflix

## Pragmatic Functional Programming
* encourages an immutable approach that helps keep the code simple
* minimising state changes makes scaling your application easy through parallelism
* built-in persistent data structures (List, Map, Vector, Set) give an efficient way of modifying data without side effects
* Concurrency becomes trivial with pure functions & immutable data

## Managed State Changes
* Reference types `atoms` & `refs` for mutable state
* Changes are done safely within Software Transactional Memory (STM), like having an in-memory ACID database managing all state changes under the covers.

## Hosted language with concise interoperability
* Clojure can run on the Java Virtual Machine (JVM), Microsoft Common Language Runtime (CLR) or JavaScript engines via ClojureScript.
* Clojure is compiled to bytecode, giving very high performance (close to Java, C++, etc.)
* Simple syntax to call any other code that runs on the JVM (Java, Scala, JRuby, Jython, etc) or Microsoft CLR.

## A modular / component approach to design
  A typical approach with Clojure is to break a big problem space into small libraries, each with a specific purpose.  This helps deconstruct complex systems into smaller, easier to understand code.  This also helps make these Clojure libraries reusable in many other projects, reducing the development effort.


## ClojureScript

ClojureScript is Clojure that compiles to JavaScript and runs in the browser (JavaScript Engine).  Most of the code and libraries available for Clojure works seamlessly when compiled to JavaScript.

ClojureScript is based heavily on the work done for Google Closures and there is a strong focus on Reactive client-side apps.

There is a common file extension, `.cljc` that signifies Clojure code that will run on the JVM and JavaScript engines.
