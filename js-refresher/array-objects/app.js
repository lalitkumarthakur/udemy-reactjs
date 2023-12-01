"use strict";
// Importing everthing from map.js file.
import * as map from "./map.js";

// Importing everthing from filter.js file.
import * as filter from "./filter.js";

map.funMap();

const arr = ["Lalu", "Jhalu", "Balu"];

const finalResult = arr.findIndex((item) => {
	return item === "Jhalu";
});

console.log(`Index  = ${finalResult}`);
