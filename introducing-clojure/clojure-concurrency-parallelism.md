# Concurrency & Parallelism

Clojure was created to help manage the complexity of concurrency.

* Immutable values allows sharing of data without deadlocks and supports parallel of behaviour
* Futures and promises (advanced topic)
* core.logic (advanced topic)

## Complexity in Concurrency

Lets assume 5 friends have move into a house and each has a bed to make.  Which is the more complex way to organise this?

* 5 people assembling one bed at the same time
* each person assembling their own bed

Think about how to write instructions for several of your friends on how to assemble a bed together, without holding each other up or having to wait for tools.  They would need to coordinate their actions at the right time to assemble the parts of a bed into a finished bed.

Those instructions would be really complicated, hard to write and probably hard to read, too.

With each person building their own bed, the instructions are very simple and no one has to wait for other people to finish or for tools to be available.

![Assemble an Ikea bed](../images/concepts-concurrency-vs-parallelism.png)


## Concurrency Deadlock

When tasks are happening at the same time and use shared resources, then a situation called deadlock often arises.  A classic way to imagine this is with the [dining philosophers problem](https://en.wikipedia.org/wiki/Dining_philosophers_problem)

![Dining Philosophers problem](../images/dining-philosophers-problem.png)

Several philosophers are sat down at dinner.  To eat they need a fork in each hand, however there is only one fork in between each plate of spaghetti.  If each philosopher picks up one fork at the same time then non of them can eat.
