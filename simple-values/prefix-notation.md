# Infix vs. prefix notation

In Clojure, `+`, `-`, `*` and `/` appear before two numbers. This is called _prefix notation_. What you're used to seeing is called _infix notation_, as the arithmetic operator is in-between the two operands.

Languages such as **JavaScript** use **infix** notation, while **Clojure** only uses **prefix** notation.

Prefix notation is useful for many reasons. Look at this example of an infix expression and the prefix equivalent:

```clojure
Infix:  1 + 2 * 3 / 4 + 5 - 6 * 7 / 8 + 9

Prefix: (+ (- (+ (+ 1 (/ (* 2 3) 4)) 5) (/ (* 6 7) 8)) 9)
```

## The benefits of prefix notation

Imagine both the above expressions are unclear.  However in the prefix version you do not have to ever think about the [precedence of operators](https://en.wikipedia.org/wiki/Order_of_operations).

Because each expression has the operator before all the operands and the entire expression is wrapped in parentheses, all precedence is explicit.

```clojure
Infix:  1 + 2 / 3
Prefix: (+ 1 (/ 2 3))
```

## Less repetitive

Another reason prefix notation can be nice is that it can make long
expressions less repetitive.

With prefix notation, if we plan to use the same operator on many
operands, we do not have to repeat the operator between them.

```clojure
Infix:  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
Prefix: (+ 1 2 3 4 5 6 7 8 9)
```
