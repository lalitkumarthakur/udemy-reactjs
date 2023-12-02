// importing React.
import React from "react";

// omporting ReactDom
import ReactDOM from "react-dom/client";

// importing App.css
import "./App.css";

// creating a component named 'Header'
function Header() {
	return (
		<>
			<header>
				<img src="./assets/react.svg" alt="React Image" />
				<h2>Welcome to React Course !</h2>
				<p>We are going to learn React Basics in this course.</p>
			</header>
		</>
	);
}

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			<Header />
		</>
	);
}

export default App;
