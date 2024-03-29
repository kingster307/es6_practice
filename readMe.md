# es6 Practice Problem

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

------------------------------

## project planning 

# data models / constructors 
---------------
name: super constructor 
--------------------
* name 
* buildYear

name: parks ---- 3 parks
---------------
* size 
* number of trees


## methods 
-------------
* treeDensity 
    * number of trees/park area
      * for each park

* averageParkAge
    * sum of all ages/number of parks
      * for each park

* thousandTrees
    * name of the parks that have more than 1000 trees


-----------------------------------------------------------------------------------------------------------


# data models / constructors 
------------------
streets ---- 4 streets
------------------
* sizeClassification
    * default is normal 

## methods 
-------------
* averageParkStreet & total
    * sum of all street lengths / num of streets
      

* set Street Classification 
    * tiny/small/normal/big/huge
        * default is normal
