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
	const timeout = { enter: 800, exit: 400 };
	const navLinks = [
		{ to: "/about", Icon: Me },
		{ to: "/email", Icon: Envelope },
	];
	return (
		<nav id="Navigation" className="flex flex-jc-se flex-ac-center flex-wrap">
			{navLinks.map(({ to, Icon }) => (
				<CSSTransition
					in={to != null}
					timeout={timeout}
					unmountOnExit
					classNames="tIn"
				>
					<NavLink to={to} activeClassName="selected">
						<Icon />
					</NavLink>
				</CSSTransition>
			))}
			{/* <NavLink to="/about" activeClassName="selected">
				<Me />
			</NavLink>
			<NavLink to="/email" activeClassName="selected">
				<Envelope />
			</NavLink> */}
			<Portfolio />
			<FindMe />
			<Linkedin />
			<Twitter />
		</nav>
	);
}

export default Navigation;
