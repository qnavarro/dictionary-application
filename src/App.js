import Dictionary from "./Dictionary";
import background from "./images/background.jpg";

import "./App.css";

function App() {
	return (
		<div className="App">
			<div
				className="content"
				style={{ backgroundImage: `url("${background}")` }}
			>
				<h1> d i c t i o n a r y </h1>
				<br />
				<Dictionary defaultKeyword="glimmer" />
				<br />
				<p>coded by Queenie Navarro</p>
			</div>
		</div>
	);
}

export default App;
