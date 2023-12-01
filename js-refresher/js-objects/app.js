"use strict";

// Objecta in Javascript.
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

// Declaring a object -

let user = {
	Name: "Lalit",
	age: 34,
	greetfFin() {
		console.log("Hello");
	},
};

console.log(user); // printing the entire object.
console.log(user.Name); // printing a single key value pair.
user.greetfFin(); // callling the function inside the object.
