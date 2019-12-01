import React from "react";
import logo from "../img/deliveroo_logo.png";

const Header = props => {
	return (
		<header>
			<div id="top-bar">
				<img src={logo} alt="logo Deliveroo" />
			</div>
		</header>
	);
};

export default Header;
