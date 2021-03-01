//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

function myFuncName(x) {
  var results = x ** 2;
  return results;
}

// the used array
var ray = [10, 8, 6, 15, 3, 9];
console.log("My Array", ray);

//test first function which is to square x
var answer = ray.map(myFuncName);
console.log("Array Squared", answer);

// new funtion with the array which is to square root x
var answer2 = ray.map(function(x){
  var results = x ** 0.5;
  return results;
})
console.log("Array Rooted", answer2);

//Document print out
document.writeln("The array being used:", ray, "<br>");
document.writeln("The array squared:", answer, "<br>");
document.writeln("The array sqaure rooted:", answer2, "<br>");
