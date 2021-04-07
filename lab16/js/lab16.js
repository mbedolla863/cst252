//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: March 22 2021

$("#output").append("<button id='button'>Yo! Press this button, come on!");
//alert with cliock event
$("button").click(function() {
  alert("Wow, you actually did it. I can get you to do anything.");
});

//change color to green
$("#button").css("background-color", "#6ef573");
