#YelpCamp

* Add landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

#Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the Campgrounds Page
* Add a better header /title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add navbar to all templates
* Style the new campground form

#Our First Mongo Commands
* mongod - starts demon/process
* mongo - opens Mongo shell
* help - lists basic Mongo features
* show dbs - shows current databases
* use - creates new database, if it exists it will use its
* insert - adds to database
* find - view all items in database
* update - makes corrections to items in db; $set keeps the data from being overridden
* remove - removes/destroys  item fromn db; .limit(#) removes amount specified

acronym: CRUD(create, read, update, destroy)

#Databases

##Intro to Databases
* What is a database?
    * A collection of information/database
    * Has an interface
* SQL(relational) vs NoSQL(non-relational)

#Intro to mongoDB
* What is MongoDB?
* Why are we using it? 
* Let's install it!

#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!