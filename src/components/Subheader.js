import React from "react"

const Subheader = props => {
	return (
		<div id="sub-header">
			<div className="sub-header-info">
				<h1>{props.title}</h1>
				<p>{props.text}</p>
			</div>
			<img src={props.picture} alt="Nourriture" />
		</div>
	)
}

export default Subheader
