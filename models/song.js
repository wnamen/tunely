var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
  name: String,
  trackNumber: Number
});

var Song = model('Song', SongSchema);

module.export = Song;
