//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16

//sortUserName - function that sorts out Username

function sortUserName() {
  var userName = window.prompt("Welcome! Please tell me your name so I can give you a new one.");
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
  return nameSorted;
}

//Output
document.writeln("From now on, this is your new name: ","<br>", sortUserName(), "</br>");
