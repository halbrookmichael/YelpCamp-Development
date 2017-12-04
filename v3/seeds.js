var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    },
    {
        name: "Tree Heights",
        image: "https://images.pexels.com/photos/216675/pexels-photo-216675.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    },
    {
        name: "Desert Villa",
        image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    }
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err){
       if(err) {
           console.log(err);
       } else {
           console.log("removed campgrounds");
       }
    });
    // Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err) {
                console.log(err);
            } else {
                //Add a few comments
                console.log("added a campground")
                //create a comment
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created comment");
                        }
                    });
            }
        });
    });
    
};

module.exports = seedDB;