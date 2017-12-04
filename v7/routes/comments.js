var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = ("../models/campground");
var Comment = ("../models/comment");

//Comments new
router.get("/new", isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err) {
            console.log(err);
        } else {                       //Pass in the value campground
           res.render("comments/new", {campground: campground});
        }
    });
});

//Comments create
router.post("/", isLoggedIn, function(req, res){
    //lookup campground by ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create new comment 
            Comment.create(req.body.comment, function(err, comment){
                if(err) {
                    console.log(err);
                } else {
                     //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect to campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;