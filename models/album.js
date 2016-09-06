var mongoose = require("mongoose");
var Schema = mongoose.Schema;

Song = require("./song.js");

var AlbumSchema = new Schema({
  songs: {type: Schema.Types.ObjectId, ref: 'Song'},
  artistName: String,
  name: String,
  releaseDate: String,
  genres: Array
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
