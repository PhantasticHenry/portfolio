import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./features/AboutMe";

function App() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 1024);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => {
			window.removeEventListener("resize", updateMedia);
		};
	}, updateMedia);

	return (
		<div className="device-container">
			<div className={isDesktop ? "device macbook" : "device ipad silver"}>
				<div className="top-bar"></div>
				<div className="sleep"></div>
				<div className="volume"></div>
				<div className="camera"></div>
				<div className="sensor"></div>
				<div className="speaker"></div>
				<div className="screen">
					<Router>
						<Navigation />
						<Switch>
							<Route exact path="/about-me" component={AboutMe} />
						</Switch>
					</Router>
				</div>
				<div className="home"></div>
				<div className="bottom-bar"></div>
			</div>
		</div>
	);
}

export default App;
