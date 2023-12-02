"use strict";

// map() is Javascript -
// map() are iterative methods in javascript. They are used to loop through each element in Javascript. That create a new array without modifing the original array and retuen that new array for future use. They accept callback function and are different from forEach(). Let's Understnad through exmaple -

// Syntax -
// const newArray = array.map(callback(currentValue[, index[, array]]) {
// 	// return element for newArray, after executing something
//   });

// decalred and exported the array.
export let subjects = ["Physis", "Chemistry", "Biology"];

// exported and declared a function which will be imported in app.js file then called.
export function funMap() {
	// now, map() method creates a new array so we need to store them into a new variable. to capture the new array -

	const newArray = subjects.map((item) => {
		return item + "!";
	});
	console.log(newArray);

	// We can also transform the origonal array into something new like objects. Example -
	const objArray = subjects.map((item) => {
		({ text: item });
	});
	console.log(objArray);
}
