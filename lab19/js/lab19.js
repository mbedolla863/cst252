//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: March 22 2021

//URL
//URL = "https://meowfacts.herokuapp.com/"
//URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
//URL = "https://api.kanye.rest/"
URL = "https://randomfox.ca/floof/?ref=apilist.fun"

//click to button
$('#activate').click(getFox);

function getFox() {
  $.ajax({
    //ENDPOINT
    url: URL,
    //type
    type: "GET",
  })
  //if succeeds
  .done(function(data) {
    console.log(data);
    var imageUrl = data.image;
    var imageHtml = "<img src='" + imageUrl + "'>";
    console.log(imageUrl);
    $("#output").html(imageHtml);
  })
}

getFox()
