"use strict";

// Importing everthing from map.js file.
import * as map from "./map.js";

// Importing everthing from filter.js file.
import * as filter from "./filter.js";

export let arrayMethods = () => {
	map.funMap(); // called funMap function from map.js file.
	console.log(filter.filterItems()); // called filterIrtems function from filter.js file and printing the retuened value.

	//findIndex() Method -
	const arr = ["Lalu", "Jhalu", "Balu"];

	const finalResult = arr.findIndex((item) => {
		return item === "Jhalu";
	});

	console.log(`Index  = ${finalResult}`);
};
