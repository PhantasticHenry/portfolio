import React from "react";
import me from "../../../images/me.jpeg";

function Me() {
	return (
		<div className="icon-container">
			<div className="icon">
				<div className="me">
					<img src={me} alt="It's Henry" />
				</div>
				<h3>About Me</h3>
			</div>
		</div>
	);
}

export default Me;
