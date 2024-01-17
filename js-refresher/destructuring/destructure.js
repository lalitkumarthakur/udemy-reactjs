"use strict";
import { arrayDe } from "./array_destructure.js";
import { objectDe } from "./object_destructure.js";
import { functionDe } from "./function_paramater_lists_destructure.js";

function executeCode() {
	objectDe();
	console.log(`\n\n`);
	arrayDe();
	console.log(`\n\n`);
	functionDe();
}

executeCode();
