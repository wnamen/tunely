/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
var template;
var source;

// var source = $('#album-template').text();
//   template = Handlebars.compile(source);



$(document).ready(function() {
  console.log('app.js loaded!');
  console.log(sampleAlbums);

  source = $('#album-template').html();
  template = Handlebars.compile(source);


$.get('/api/albums').success(function (albums) {
  console.log(albums);
  albums.forEach(function(album) {

    console.log(album);
    renderAlbum(album);
  });
});
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  var albumHtml = template( album );
  $('#albums').prepend(albumHtml);
}
