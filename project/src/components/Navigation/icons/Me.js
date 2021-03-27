import React from "react";
import me from "../../../images/me.jpeg";

function Me() {
	return (
		<div className="icon-container">
			<div className="icon">
				<div className="me">
					<img src={me} alt="It's Henry" />
				</div>
				<h2>About Me</h2>
			</div>
		</div>
	);
}

export default Me;
