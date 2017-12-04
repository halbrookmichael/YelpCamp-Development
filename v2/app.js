var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Compile schema into a model
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//         name: "Herkimer Diamond KOA", 
//         image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg",
//         description: "This is one of the most luxurious campgrounds in Idaho"
//         }, 
//             function(err, campground){
//                 if(err){
//                     console.log("error");
//             } else {
//                 console.log(campground);
//             }
// });

app.get("/", function(req, res){
    res.render("landing"); 
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

// Create - add new campgrounds to DB
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            console.log(err);
        } else {
            //redirect back to campgrounds
    res.redirect("/campgrounds");
        }    
    });
});

// SHOW - shows more info about one campground (needs to be last)
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render the show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server has Started!");
});