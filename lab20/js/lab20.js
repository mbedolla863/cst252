//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: April 27, 2021
//

var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

// Endpoint format: http://xkcd.com/614/info.0.json

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  // get data via ajax from numbersapi
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
      // console.log(data);
      var imageUrl = data.img;
      var title = data.title;
      var alt = data.alt;
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      console.log("My new html: ", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a happy day! :-)");
  })

}

// start things off
getComic();

// $.ajax({
//   url: "https://xkcd.com/614/info.0.json",
//   method: "GET",
//   success: function(data) {
//     $("h1").html(data.title);
//     $(".education").html(data.alt);
//     var nawImage = $("<img>");
//     newImage.attr("src", data.img);
//     $("biography").append(newImage);
//   }
// })
