var mongoose = require("mongoose");
var Schema = mongoose.Schema;

Song = require("./song.js");

var AlbumSchema = new Schema({
  songs: [Song.schema],
  artistName: String,
  name: String,
  releaseDate: String,
  genres: Array
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
