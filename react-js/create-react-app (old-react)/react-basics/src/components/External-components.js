import React from "react";
// import ReactDOM from "react-dom/client";

// Below is the expample of Inline Component.

// Created a Arraw Function to link in the main component.
const InlineComp = () => {
	return <h3> Hi, This is a Inline component !</h3>;
};

// Created a Main Component.
const Main_function = () => {
	return (
		<div className="InlineComponentContainer">
			<h2> Hi, This is a main function of the inline component! </h2>
			<h2> And this is an external component linked to App.js file.</h2>
			<InlineComp /> {/* Decalred the Inline component to use it. */}
		</div>
	);
};

export default Main_function;
