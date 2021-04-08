import React, { useState } from "react";
import "./Cover.css";
import { IconContext } from "react-icons";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Cover() {
	const [on, setOn] = useState(false);

	return (
		<div id="Cover">
			<NavLink to="/home" className="flex flex-center">
				<button
					className={
						on
							? `btn btn--clr-dark btn--bs-power on`
							: `btn btn--clr-dark btn--bs-power off`
					}
					onClick={() => setOn(!on)}
				>
					<span></span>
					<IconContext.Provider
						value={{ className: on ? "icon__power on" : "icon__power off" }}
					>
						<FaPowerOff />
					</IconContext.Provider>
				</button>
			</NavLink>
		</div>
	);
}

export default Cover;
