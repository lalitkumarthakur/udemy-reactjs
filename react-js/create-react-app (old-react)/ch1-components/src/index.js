// This section "Old React is made frpm Trech Gun Youtube channel. This section contains my personal note to make moe and others understand react.js"

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // This is global CSS file.
import App from "./App"; // Importing Parent Component "App.js".

// const MainBody = () => {
// 	render(
// 		<div className="MainBody">
// 			<h1>Welcome to Old React.js Course (create-react-app).</h1>
// 			<p>In this course we will learn React.js Chapter Wise</p>
// 		</div>
// 	);
// }; This code is commented out because it's a bug.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <MainBody /> */}
		<App /> {/* Declaring Parent component to use it. */}
		{/* React Strict mode to detect error easily. */}
	</React.StrictMode>
);
