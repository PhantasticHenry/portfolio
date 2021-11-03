import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Envelope from "./icons/Envelope";
import Portfolio from "./icons/Portfolio";
import FindMe from "./icons/FindMe";
import Me from "./icons/Me";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Navigation() {
	const [hover, setHover] = useState(false);
	const timeout = { enter: 800, exit: 400 };
	const navLinks = [
		{ to: "/about", Icon: Me },
		{ to: "/email", Icon: Envelope },
		{ to: "/#portfolio", Icon: Portfolio },
		{ to: "/#find-me", Icon: FindMe },
		{ to: "/#twitter", Icon: Twitter },
		{ to: "/#linkedin", Icon: Linkedin },
	];

	return (
		<nav
			id="Navigation"
			className="flex flex-jc-se flex-ac-center flex-wrap"
			style={hover ? { background: "pink" } : { background: "" }}
		>
			{navLinks.map(({ to, Icon }) => (
				<CSSTransition
					in={to != null}
					timeout={timeout}
					unmountOnExit
					classNames="nav tIn"
					onMouseOver={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<NavLink to={to} activeClassName="selected">
						<Icon />
					</NavLink>
				</CSSTransition>
			))}
			{/* <div className="nav">
				<Portfolio />
				<FindMe />
				<Linkedin />
				<Twitter />
			</div> */}
		</nav>
	);
}

export default Navigation;
