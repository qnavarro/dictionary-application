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
				<p>
					coded by{" "}
					<a
						href="https://github.com/qnavarro/dictionary-application.git"
						target="_blank"
						rel="noreferrer"
					>
						Queenie Navarro
					</a>
				</p>
			</div>
		</div>
	);
}

export default App;
