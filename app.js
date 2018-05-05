var express   = require("express"),
    bodyParser = require("body-parser"),
    mongoose  = require("mongoose"),
    Movies    = require("./models/movies");
    app       = express();

mongoose.connect("mongodb://localhost/bookmyshow");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/movies", function(req, res){
  Movies.find({}, function(err, allMovies){
    if(err){
      console.log(err);
    } else {
      res.render("movies", {movies : allMovies})
    }
  });
});

app.get("/movies/:id", function(req, res){
  Movies.findById(req.params.id, function(err, foundMovie){
    if(err){
      console.log(err);
    } else {
      res.render("show", {movie : foundMovie});
    }
  });
});

app.get("/cinemas", function(req, res){
  res.render("cinemas");
})

var PORT = process.env.PORT || 3000;

app.listen(3000, console.log("server started on 3000"));
