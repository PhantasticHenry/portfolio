import React, { useState } from "react";
import "./Button.css";
import { IconContext } from "react-icons";
import { FaPowerOff } from "react-icons/fa";

function OnButton() {
	const [on, setOn] = useState(false);
	return (
		<div className="btn__container">
			<button
				className="btn btn--clr-dark btn--bs-power"
				onClick={() => setOn(!on)}
			>
				<span></span>
				<IconContext.Provider
					value={{ className: on ? "icon__power on" : "icon__power" }}
				>
					<FaPowerOff />
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default OnButton;
