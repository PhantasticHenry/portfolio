import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./features/AboutMe";
import Cover from "./features/Cover";
import Email from "./features/Email";
import { CSSTransition } from "react-transition-group";

function App() {
	const timeout = { enter: 800, exit: 400 };
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1500);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 1500);
		setIsMobile(window.innerWidth < 800);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		console.log("innerWidth = ", window.innerWidth);
		return () => {
			window.removeEventListener("resize", updateMedia);
		};
	});

	function deviceClassName() {
		// consider switch case ???
		if (isMobile) {
			return "mobile";
		} else if (isDesktop) {
			return "device macbook";
		} else {
			return "device ipad silver";
		}
	}

	// let routes = (
	// 	<Switch location={location}>
	// 		<Route exact path="/power-button" component={Cover} />
	// 		<Route exact path="/home" children={<Navigation />} />
	// 		<Route exact path="/about-me" children={<AboutMe />} />
	// 	</Switch>
	// );
	const routes = [
		{ path: "/power-button", Component: Cover },
		{ path: "/home", Component: Navigation },
		{ path: "/about", Component: AboutMe },
		{ path: "/email", Component: Email },
	];

	return (
		<div className="device-container">
			<div className={deviceClassName()}>
				{isDesktop ? (
					<>
						<div className="top-bar"></div>
						<div className="sleep"></div>
						<div className="volume"></div>
						<div className="camera"></div>
						<div className="sensor"></div>
						<div className="speaker"></div>
					</>
				) : null}
				<div className="screen">
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							{({ match }) => (
								<CSSTransition
									in={match != null}
									timeout={timeout}
									// timeout={500}
									classNames="page"
									unmountOnExit
								>
									<div className="page">
										<Component />
									</div>
								</CSSTransition>
							)}
						</Route>
					))}
				</div>
				<div className="home"></div>
				<div className="bottom-bar"></div>
			</div>
		</div>
	);
}

export default App;
