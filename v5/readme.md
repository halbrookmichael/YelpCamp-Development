#YelpCamp

* Add landing Page
* Add Campgrounds Page that lists all campgrounds

##Each Campground has:
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

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make our errors go away
* Display comments on campground Show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES

name    url                 verb            desc.
=======================================================
INDEX   /campgrounds        GET     Display all campgrounds
NEW     /campgrounds/new    GET     Display form to create new campground    
CREATE  /campgrounds        POST    Add new campground to DB
SHOW    /campgrounds/:id    GET     Shows info for one campground

NESTED ROUTES

name    url                             verb
=======================================================
NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST


#Style Show Page
* Add sidebar to show page
* Display comments nicely