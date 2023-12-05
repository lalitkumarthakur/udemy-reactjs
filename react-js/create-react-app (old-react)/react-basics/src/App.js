// import logo from './logo.svg';
import InlineComp from "./components/External-components"; // Imported the external component.
import "./App.css"; // This css file is CSS of App.js file and not the CSS of entire web application (ex- index.js). We will put css which require globally in global css file named as index.css.

function App() {
	return (
		<div className="MainBody">
			<h1> Welcome to React Basic with OLD React.js (create-react-app)</h1>
			<InlineComp /> {/* Applied the External component */}
		</div>
	);
}

export default App;
