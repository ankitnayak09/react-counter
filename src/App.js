import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const handleDecrement = () => {
		if (count === 0) return;
		setCount(count - 1);
	};

	const handleIncrement = () => {
		if (count === 10) return;
		setCount(count + 1);
	};

	return (
		<div className="App">
			<div className="container">
				<button onClick={handleDecrement}>-</button>
				<h1>{count}</h1>
				<button onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
}

export default App;
