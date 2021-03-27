import React from "react";
import "./Navigation.css";
import Envelope from "./icons/Envelope";
import Portfolio from "./icons/Portfolio";
import FindMe from "./icons/FindMe";
import Me from "./icons/Me";

function Navigation() {
	return (
		<div id="Navigation">
			<Envelope />
			<Portfolio />
			<FindMe />
			<Me />
		</div>
	);
}

export default Navigation;
