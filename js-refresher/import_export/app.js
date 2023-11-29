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