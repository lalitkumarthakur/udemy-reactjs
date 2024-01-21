"use strict";

export const arrayDe = () => {
	// Destructing array -
	// There are situation when we want to pully array elements and store them in array like variable sturucture (seperately). So, see the example to understand -

	const [name1, name2, name3, name4, name5] = [
		"abijit",
		"bikash",
		"calu",
		"dinesh",
		"elvish",
	];
	// In the above example, we store the array elements in their respective array live variables.

	console.log(`Array destructuring - `);
	console.log("First name = ", name1);
	console.log("Second name = ", name2);
	console.log("Third name = ", name3);
	console.log("Fourth name = ", name4);
	console.log("Fifth name = ", name5);
};
