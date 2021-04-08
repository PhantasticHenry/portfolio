import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<Router>
			<Route exact path="/">
				<Redirect to="/power-button" />
			</Route>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
