/* global $ */

console.log('javascript working');

$(function () {
  $('#search-form').submit(search);
});

function search (event) {
  clearResults();

  event.preventDefault();   // so the page doesn't refresh
  var query = $('#query').val();
  var url = 'http://api.giphy.com/v1/gifs/random';
  var key = 'dc6zaTOxFJmzC';
  var params = {
    tag: query,
    api_key: key
  };

  $.get(url, params).done(function (results) {
    // create
    var li = document.createElement('li');
    var img = document.createElement('img');
    // modify
    $(img).attr('src', results.data.image_url);
    $(li).append(img);
    // append
    $('#results').append(li);
  });
}

function clearResults () {
  $('#results').empty();
}

//    SERVE A NUMBER OF GIFS ACCORDING TO SEARCH PHRASE
// var url = 'http://api.giphy.com/v1/gifs/search';
// var key = 'dc6zaTOxFJmzC';
// var params = {
//   q: 'inception',
//   api_key: key,
//   limit: 25,
//   fmt: 'json'
// };
//
// $.get(url, params).done(function (results) {
//   for (var i = 0; i < results.data.length; i++) {
//     // create
//     var li = document.createElement('li');
//     var img = document.createElement('img');
//     // modify
//     $(img).attr('src', results.data[i].images.fixed_height.url);
//     $(li).append(img);
//     // append
//     $('#results').append(li);
//   }
// });
