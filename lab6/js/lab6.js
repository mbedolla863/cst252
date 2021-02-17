//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: February 16


// Define Variables
myTransport = [" Longboard", " Motorcycle", " Hyundai", " Shoes"];

myMainRide = {
  make: "Hyundai",
  model: "Elantra",
  color: "White",
  year: 2015,
}

// output
document.writeln("Place To Place: " + myTransport + "<br>");
document.writeln("My Main Wheels: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
