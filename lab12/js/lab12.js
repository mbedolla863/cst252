//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

//if formula to 1 to 200
//show results of numbers
for (var i = 1; i<=200; i++) {
  outputEl = document.getElementById("output");
  newEl = document.createElement("p");
  if (i%35 == 0) {
    newEl.innerHTML = i + " -BoomBuzz";
    outputEl.appendChild(newEl);
    console.log("BoomBuzz!");
} else if (i%21 == 0) {
    newEl.innerHTML = i + " - BoomFizz";
    outputEl.appendChild(newEl);
    console.log("BoomFizz!");
} else if (i%15 == 0) {
    newEl.innerHTML = i + " -BuzzFizz";
    outputEl.appendChild(newEl);
    console.log("BuzzFizz!");
} else if (i%7 == 0) {
    newEl.innerHTML = i + " -Boom";
    outputEl.appendChild(newEl);
    console.log("Boom!");
} else if (i%5 == 0) {
    newEl.innerHTML = i + " -Buzz";
    outputEl.appendChild(newEl);
    console.log("Buzz!");
} else if (i%3 == 0) {
    newEl.innerHTML = i + " -Fizz";
    outputEl.appendChild(newEl);
    console.log("Fizz!");
} else {
    newEl.innerHTML = i;
    outputEl.appendChild(newEl);
    console.log(i);
  }
}
