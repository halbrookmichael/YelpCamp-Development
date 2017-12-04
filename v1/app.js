var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Jellystone Park Larkspur", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
            {name: "Herkimer Diamond KOA", image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg"},
            {name: "Bend-Sunriver RV Campground", image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg"}
         ];

app.get("/", function(req, res){
    res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
     res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server has Started!");
});