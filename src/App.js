import background from "./images/background.jpg";
import "./App.css";

function App() {
	let imageStyle = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	return (
		<div className="App">
			<body>
				<div className="image" style={imageStyle}>
					<header className="App-header">Dictionary App</header>
				</div>
			</body>
		</div>
	);
}

export default App;
