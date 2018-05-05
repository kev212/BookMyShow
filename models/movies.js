var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  title : String,
  image : String
});

module.exports = mongoose.model("Movie", movieSchema);
