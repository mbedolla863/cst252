//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

//assigning the variable outputEl
var outputEl = document.getElementById("output");

//Adding a new element
var new1El = document.createElement("p");

//changing the HTML
new1El.innerHTML = "New and improvied";

//create a new element and add to new Variable
var new2El = document.createElement("p");

//change the html inside new2El
new2El.innerHTML = "Something else";

//append both element at once
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
