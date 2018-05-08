var mongoose = require("mongoose");
    Session  = require("./sessions");

var movieSchema = new mongoose.Schema({
  title : String,
  image : String,
  session : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Session"
    }
  ]
});

module.exports = mongoose.model("Movie", movieSchema);
