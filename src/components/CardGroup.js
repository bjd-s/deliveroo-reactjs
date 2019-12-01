import React from "react"
import Card from "./Card"

const CardTitle = props => {
	return (
		<>
			<h2>{props.title}</h2>
			<div className="menu-item-container">
				<div className="menu-item-container">
					{props.menu.map((meal, index) => {
						return (
							<Card
								key={index}
								title={meal.title}
								description={meal.description}
								price={meal.price}
								picture={meal.picture}
								popular={meal.popular}
								meal={meal}
								setShowModal={props.setShowModal}
								modal={props.modal}
								setModal={props.setModal}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default CardTitle
