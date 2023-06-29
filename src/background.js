import React from "react";
import background from "./images/background.jpg";

export default function Background() {
	return (
		<div
			style={{
				backgroundImage: `url('${background}')`,
				backgroundSize: "cover",
			}}
		>
			Dictionary App{" "}
		</div>
	);
}
