var express   = require("express"),
    bodyParser = require("body-parser"),
    mongoose  = require("mongoose"),
    Movies    = require("./models/movies");
    Session   = require("./models/sessions");
    app       = express();

mongoose.connect("mongodb://localhost/bookmyshow");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//
// Movies.create({
//    title : "Avengers: Infinity War",
//    image : "https://www.cgv.id/uploads/movie/compressed/18010200.jpg"
// });

//  Session.create({
//    studioId : 1,
//    type     : "2D",
//    showtime : "23:00",
//    price    : 35000,
//    seatsAvailable : 425,
//    seats    : [
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
//    ]
// }, function(err, session){
//   Movies.findOne({title: "Avengers: Infinity War"}, function(err, foundMovie){
//     if(err){
//       console.log(err);
//     } else {
//       foundMovie.session.push(session);
//       foundMovie.save(function(err, data){
//         if(err){
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//       session.movie = foundMovie;
//       session.save();
//     }
//   })
// })

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
  Movies.findById(req.params.id).populate("session").exec(function(err, foundMovie){
    if(err){
      console.log(err);
    } else {
      res.render("show", {movie : foundMovie});
      console.log(foundMovie);
    }
  });
});

// Movies.findOne({title: "Avengers: Infinity War"}).populate("session").exec(function(err, foundMovie){
//   if(err){
//     console.log(err);
//   } else {
//       for(var i=0; i< foundMovie.session.length; i++){
//         for(var j=0; j<foundMovie.session[i].showtime.length; j++){
//           console.log(foundMovie.session[i].showtime[j]);
//         }
//
//       }
//   }
// })

app.get("/select_seats/:id", function(req, res){
  Session.findById(req.params.id).populate("movie").exec(function(err,foundSession){
    res.render("select_seat", {session: foundSession});
  });
});

app.get("/cinemas", function(req, res){
  res.render("cinemas");
});

// POST ROUTES

app.post("/book_now", function(req,res){
  var seats = JSON.parse(req.body.seats);
  var row, col;
  console.log(seats);
  for(var i=0; i< seats.length; i++){
    row = seats[i].seats[0];
    col = seats[i].seats[1];
    // var s = `test ${row}`;
    // console.log(row.toString(10));
    console.log(row + " " + col);
    var query = 'seats.'+row+'.'+col;
    console.log(query);

    Session.findOneAndUpdate({_id:req.body.ses_id},
      {$set:{[query]:1}},
        {new : true, upsert: true}, function(err, session) {
          if(err){
            console.log(err);
          } else {
            console.log(session.seats[row][col]);
          }
      });
    }

    // Session.findOne({_id:req.body.ses_id}, function(err, foundSession){
    //   console.log(foundSession.seats[row][col]);
    //   foundSession.seats[row][col] = 1;
    //   foundSession.save();
    //   // console.log(foundSession.seats[row][col]);
    // })
    // }


  // db.sessions.update(
  //     {price : 40000},
  //     {
  //         $set : {
  //             'seats.2.2': 1
  //         }
  //     }
  // );

  // Session.findById(req.body.ses_id, function(err, foundSession){
  //   foundSession.reservations.push(seats.pop());
  //   console.log(foundSession.reservations);
  // })
  res.redirect("/movies")
  // Session.findById(req.body.ses_id, function(err,foundSession){
  //   // console.log(foundSession);
  // })
});

var PORT = process.env.PORT || 3000;

app.listen(3000, console.log("server started on 3000"));
