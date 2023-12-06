// import logo from './logo.svg';
import ExternalComp from "./components/External-components"; // Imported the external component.
import "./App.css"; // This css file is CSS of App.js file and not the CSS of entire web application (ex- index.js). We will put css which require globally in global css file named as index.css.

function App() {
	return (
		<div className="ParentBody">
			<h1>Welcome to React Basic with OLD React.js (create-react-app)</h1>
			<h2> Ch1- Components in React.js</h2>
			<p>
				<strong>What is Components in React.js?</strong>
				<br />
				<strong>Components</strong> are independents and reusable bits of code.
				They serve the same purpose as <strong>Javascript Function</strong>, but
				<strong>work in isolation and return HTML. </strong>
				<br />
				Components are in 2 types - Class Components and Function Components. We
				genrally use Functional Components in Mordern React.js.
			</p>
			<p> Here's an Example- </p>
			<h2>
				This file is App.js which acts as main Page Component in index.js file.{" "}
			</h2>
			<ExternalComp /> {/* Applied the External component */}
		</div>
	);
}

export default App;
