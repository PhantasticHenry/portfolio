import React, { useState } from "react";
import "./Button.css";
import { IconContext } from "react-icons";
import { FaPowerOff } from "react-icons/fa";

function PowerBtn() {
	const [on, setOn] = useState(false);
	const [show, setShow] = useState(false);
	return (
		<div className="btn__container">
			<button
				// className="btn btn--clr-dark btn--bs-power"
				className={
					on
						? `btn btn--clr-dark btn--bs-power on`
						: `btn btn--clr-dark btn--bs-power off`
				}
				// onClick={() => setOn(!on)}
				onMouseUp={() => setOn(!on)}
				// onMouseUp={() => setShow(!show)}
			>
				<span></span>
				<IconContext.Provider
					value={{ className: on ? "icon__power on" : "icon__power off" }}
				>
					<FaPowerOff />
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default PowerBtn;
