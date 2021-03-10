//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

//return  Nintendo characters
//depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Mario"
  }
  else if (mod == 1) {
    return "Luigi"
  }
  else if (mod == 2) {
    return "Peach"
  }
  else if (mod == 3) {
    return "Toad"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var characters = sortingHat(name);
  newText = "<p>Lets-a-go! Your new buddy is " + characters + "</p>";
  document.getElementById("output").innerHTML = newText;
})
