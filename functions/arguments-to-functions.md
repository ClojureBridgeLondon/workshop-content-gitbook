## Anonymous function as an argument to a function

Anonymous functions are useful for functions that take other functions as arguments.

We have seen examples of these functions, `map` and `reduce`.

```eval-clojure
(filter (fn [x] (< x 10)) [8 9 10 11]) ;=> (8 9)
```

> #### Hint::Partial functions
> You can use the `partial` function in some cases to achieve the same affect.  `partial` will wrap a function that requires more arguments than you are defining but are getting by passing the function as an argument to another function.
> 
> The use of `partial` depends on if you need to control the order of the arguments passed to the function that `partial` is wrapping.

<hr />

> #### Todo::Better description of the partial function
