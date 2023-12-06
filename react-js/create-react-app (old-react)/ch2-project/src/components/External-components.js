import React from "react";
// import ReactDOM from "react-dom/client";

import "./External-components.css";

// Below is the expample of Inline Component.

// Created a Arraw Function to link in the main component.
const InlineComp = () => {
	return (
		<div className="Inline-component">
			<h3> Hi, This is a Inline component !</h3>
		</div>
	);
};

// Created a Main Component.
const Main_function = () => {
	return (
		<div className="External-Component-Container">
			<h2> This is an external component linked to App.js file.</h2>
			<InlineComp /> {/* Decalred the Inline component to use it. */}
		</div>
	);
};

export default Main_function;
