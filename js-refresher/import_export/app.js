"use strict";

// Import and Export in Javascript ES6.
// The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import.

// importing a non default value using import keyword.
import { apiKey } from "./util.js";

// importing a default value using import keyword.
import defaultKey from "./util.js";

// Printing the imported values.
console.log(`Api Key =  ${apiKey}`);
console.log(`Default Api Key = ${defaultKey}`); // default is only used when there is only 1 export required in that file.

// The "*" keyword for import and export declarations -
// Sometimes, we require to export multiple (more than 1) values/functions/operations etc to export at once and manually doing becomes hectic task so, we use "*" keyword for that.
// For Example -

// importing everything all at once but using "*".
import * as myCalculator from "./file1.js";

myCalculator.calculator(); // calling calculator arrow function.
myCalculator.calcu();
