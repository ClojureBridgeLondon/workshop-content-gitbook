# Calling anonymous functions

Anonymous functions have no name to refer to from elsewhere in your code, so they are defined and called within another expression.

To call an anonymous function, we define that function as the first element of a list.  Remember the first element of a list is a function call.

So the first element of our list is our anonymous function, the second element is the value we pass into the anonymous function.


## Example of calling an anonymous function

In the following example we define an anonymous function and call that function with the argument 7

```eval-clojure
((fn [value] (* value value)) 7)
```

> #### Todo::Add more examples

