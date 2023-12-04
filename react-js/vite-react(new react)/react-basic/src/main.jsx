// This is the main file of react.js when all other files like components are imported then finally rendered with virtual DOM and sent to the browser for final Preview.

// importing React.
import React from "react";

// omporting ReactDom
import ReactDOM from "react-dom/client";

// importing App.jsx file and naming as 'App'
import App from "./App.jsx"; // App.jsx is a component which the the body of this react application and need to be imported into this file.

// importing index.css file
import "./index.css";

// Creating a root elrement.
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App /> {/* Applying/calling the 'App' here to execute it's contents. */}
	</React.StrictMode>
);
