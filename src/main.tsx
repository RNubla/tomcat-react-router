import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter basename="/react-demo">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<div>About</div>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
