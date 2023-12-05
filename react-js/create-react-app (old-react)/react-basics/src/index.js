import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // This is global CSS file.
import App from "./App"; // Importing Parent Component "App.js".

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App /> {/* Declaring Parent component to use it. */}
		{/* React Strict mode to detect error easily. */}
	</React.StrictMode>
);
