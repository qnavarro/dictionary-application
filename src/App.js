import Background from "./background";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="overlay"></div>
			<div className="content d-flex">
				<h1> d i c t i o n a r y </h1>
				<br />
				<Dictionary defaultKeyword="glimmer" />
				<br />
				<p>coded by Queenie Navarro</p>
			</div>
			<Background />
		</div>
	);
}

export default App;
