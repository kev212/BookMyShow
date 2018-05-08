var mongoose = require('mongoose');
    Movie    = require('./movies');

var sessionSchema = new mongoose.Schema({
  studioId : Number,
  type     : String,
  showtime : String,
  price    : Number,
  seatsAvailable : Number,
  seats    : [],
  reservations : [],
  movie    : {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "Movie"
  }
});

module.exports = mongoose.model("Session", sessionSchema);
