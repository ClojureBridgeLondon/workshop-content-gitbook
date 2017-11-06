# Collections

A collection is simply a group of things and in Clojure those things do not have to be the same type.

Example collections:
* your library of music on Spotify (or other music streaming service)
* The clothes in your wardrobe or shoe collection
* the different co-ordinates on a map for a hiking route, along with height, type of terrain, etc

So far, we've dealt with discrete pieces of data: one number, one string, one value. When programming, it is more often the case that you want to work with groups of data.

Clojure has great facilities for working with these groups, or *collections*, of data. Not only does it provide four different types of collections, but it also provides a uniform way to use all of these collections together.

![Clojure Data Structrures / Collections](/images/clojure-data-structures-list-vector-map-set.png)

> #### Hint::
> Vectors and Maps are the most common data structures used in Clojure for defining and working with data, so we will just focus on those.
>
> Data structures in Clojure are used instead of defining your own types (which you would do in a language like Java, C++, Scala, etc.)
