//
//Author: Miguel Bedolla <mbedolla@csumb.edu>
// Created: March 22 2021

// function Vehicle(make, model, year, color, extras, name) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.extras = extras;
//   this.name = name;
//   this.info = function() {
//     return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " called " + this.name;
//   }
// }

// this is the NEW class method
class Vehicle {
  constructor(make, model, year, color, extras, name) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
}
info() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " called " + this.name;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Honda", "Accord", 1999, "Black", "a tiny spoiler", "CoolKid"));
vehicles.push(new Vehicle("Hyundai", "Elantra", 2015, "White", "a working CD player", "ol' Reliable"));
vehicles.push(new Vehicle("Yamaha", "YZF R6", 2020, "Blue", "a speed of 160mph", "Blitz"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}

//Hangman psudeocoding
