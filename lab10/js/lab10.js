//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

//taking lab 7 js
function sortUserName() {
  var userName = document.getElementById("user-name").value;
  var result = document.getElementById("output");
  console.log("userName =", userName);
  //Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  result.textContent = "your new name is: " + nameSorted;
  return nameSorted;

}



//finding the button element
 var buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

//finging the form element
var inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

//find output element
var outputEl = document.getElementById("output");
console.log("output element:", outputEl);

//add event listener to button
buttonEl.addEventListener("click", function(){
  var inputValue = document.getElementById("user-name").value;
  console.log("your input:", inputValue);
});
