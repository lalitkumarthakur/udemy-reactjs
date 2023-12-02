"use strict";

// filter() methods in JS.
// thet are used to filter anything from a array. For example -

export let cost = [99, 199, 299, 399, 499, 599, 699, 799, 899, 999, 1000]; // So, we delared a array named 'cost' which contains prices of items in a web application.

// Now we want to filter out/ remove those items whose cost is more than 799. So,
// We will use filter() method to do this as show below -

export function filterItems() {
	return cost.filter((numbers) => {
		//  We need to explicitly declare retuen to capture the array returned by filter else it will return undefined.
		return numbers < 800;
	});
}
