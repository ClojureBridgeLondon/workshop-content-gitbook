## EXERCISE: Modelling People


> #### Note::Model Yourself
> Make a map representing yourself, using only the information about yourself you want to share.
>
> Example information could include: your first name and last names, where you grew up, favourite food.
>
> Add some information directly to the map, then use [assoc](https://clojuredocs.org/clojure.core/assoc) or [merge](https://clojuredocs.org/clojure.core/merge) to add more.
```eval-clojure
{}
```

<!--sec data-title="Reveal answer..." data-id="answer001" data-collapse=true ces-->

```clojure
{:name "Jenny" :age 21 :location "London, UK" :hobbies "cycling"}
```

<!--endsec-->


<hr />

> #### Note::[BONUS]: Model your classmates
> Use the map you made about yourself in previous exercise.
>
> Create a vector of maps containing the first name, last name and hometown of two or three other classmates around you.
>
> Add your map to their information using [conj](http://clojuredocs.org/clojure.core/conj).
```eval-clojure
[{}]
```


<!--sec data-title="Reveal answer..." data-id="answer002" data-collapse=true ces-->

```clojure
[{:name "Jenny" :age 21 :location "London, UK" :hobbies "cycling"}
{:name "Sammy" :age 24 :location "Madrid, Spain" :hobbies "origami"}]
```

<!--endsec-->
