"use strict";

// We will import all the js files from different chapters here so that we do not need to link multiple js chapter's files in out html. This will reduce any harrashment and maintainance issues. Whenever a new chapter is created, their entry js files must be imported here to run them.

import { arrayMethods } from "./array-methods/app.js";
import executeCode from "./destructuring/destructure.js";
import { importExport } from "./import_export/app.js";
import { jsObjects } from "./js-objects/app.js";

const indexCode = () => {
	console.log(`Below is the example of Javascript Methods -`);
	arrayMethods();

	console.log(`\n\n`);
	console.log(`Below is the example of Destructing- `);
	executeCode();

	// console.log(`\n\n`);
	// console.log(`Below is the example of import export- `);
	// importExport();

	console.log(`\n\n`);
	console.log(`Below is the example of javascript objects- `);
	jsObjects();
};

indexCode();
