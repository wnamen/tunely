/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var template;
var source;

// var source = $('#album-template').text();
//   template = Handlebars.compile(source);



$(document).ready(function() {
  console.log('app.js loaded!');

  source = $('#album-template').html();
  template = Handlebars.compile(source);


  $.get('/api/albums').success(function (albums) {
    console.log(albums);
    albums.forEach(function(album) {

      console.log(album);
      renderAlbum(album);
    });
  });

  $("#new-album-form").submit(function(event){
    event.preventDefault();

    var data = $("#new-album-form").serialize();
    // console.log(album);
    $.post('/api/albums', data, function(album){

      console.log(album);
      renderAlbum(album);
    });

    $(this).trigger("reset");

  });
});

// this function takes a single album and renders it to the page

function renderAlbum(album) {
  console.log('rendering album:', album);
  var albumHtml = template(album);
  $('#albums').prepend(albumHtml);
}
