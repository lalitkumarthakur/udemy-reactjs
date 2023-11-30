"use strict";
export let result = 0;
export let userSelection;
export let num1;
export let num2;
export const calculator = () => {
	// Declating variable and taking input.
	num1 = parseInt(prompt(`Please Enter a First Number =`));
	num2 = parseInt(prompt(`Please Enter a Second Number =`));
	userSelection = parseInt(
		prompt(`Please Select \n \
1 for Addition \n \
2 for Substraction \n \
3 for Division \n \
4 for Multplication \n \
5 for Average \n \=`)
	);
};

export function calcu() {
	if (userSelection === 1) {
		result = num1 + num2;
		alert(`Addition = ${result}`);
	} else if (userSelection === 2) {
		result = num1 - num2;
		alert(`Sunstraction = ${result}`);
	} else if (userSelection === 3) {
		result = num1 / num2;
		alert(`Division = ${result}`);
	} else if (userSelection === 4) {
		result = num1 * num2;
		alert(`Multipliction = ${result}`);
	} else if (userSelection === 5) {
		result = num1 + num2 / 2;
		alert(`Average = ${result}`);
	} else {
		alert("Inavlid Entry!Please Try again! ");
	}
}
