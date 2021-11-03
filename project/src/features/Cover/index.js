import React, { useState } from "react";
import "./Cover.css";
import { IconContext } from "react-icons";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Cover() {
	const [on, setOn] = useState(false);

	return (
		<div id="Cover" className="cover">
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
					value={{
						className: on ? "power on" : "power off",
					}}
				>
					<NavLink to="/welcome" className="flex-center">
						<FaPowerOff />
					</NavLink>
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default Cover;
