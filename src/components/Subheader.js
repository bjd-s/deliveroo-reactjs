import React from "react";
import headerImg from "../img/header-image.jpg";

const Subheader = props => {
	return (
		<div id="sub-header">
			<div className="sub-header-info">
				<h1>{props.title}</h1>
				<p>{props.text}</p>
			</div>
			<img src={headerImg} alt="Nourriture" />
		</div>
	);
};

export default Subheader;
