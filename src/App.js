import Background from "./background";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
	return (
		<div className="App">
			<body>
				<div className="overlay"></div>
				<div className="content">
					<h1>Dictionary App</h1>
					<Dictionary />
				</div>
				<Background />
			</body>
		</div>
	);
}

export default App;
