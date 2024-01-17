"use strict";

export const objectDe = () => {
	// Destructing object is same consept as array destructering. We we want to pull out value from key-value pair and store them seprately then we perform this method.

	// Example -

	// The key name should be the name of the destruct's variable. They cannot be different. We can assign/declare our own alias for any custom b=variable name which is shown below. -
	const {
		name1: n1,
		name2: n2,
		name3: n3,
		name4: n4,
		name5: n5,
	} = {
		name1: "Lisa",
		name2: "bhavesh",
		name3: "Srijani",
		name4: "tasnim",
		name5: "Raju",
	};

	console.log(`Object destructuring - `);
	console.log("First name = ", n1);
	console.log("2nd name = ", n2);
	console.log("Third name = ", n3);
	console.log("Fourth name = ", n4);
	console.log("Fifth name = ", n5);
};
