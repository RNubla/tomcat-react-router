import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink } from "react-router";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<h1>Home</h1>
		</>
	);
}

export default App;
