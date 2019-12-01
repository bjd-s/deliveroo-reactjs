import React from "react"
import Counter from "./Counter"

const Cart = props => {
	return (
		<div className="cart-container">
			<div className="cart-card">
				<button
					className={
						props.isEmpty === false
							? "cart-disabled cart-isActive"
							: "cart-disabled"
					}
				>
					Valider mon panier
				</button>

				{props.isEmpty === true ? (
					<div className="cart-empty">
						<p>Votre panier est vide</p>
					</div>
				) : (
					props.cart.map((pick, index) => {
						return (
							<div className="cart-content" key={index}>
								<Counter
									counter={props.counter}
									setCounter={props.setCounter}
									setIsEmpty={props.setIsEmpty}
									isEmpty={props.isEmpty}
								/>
								<span className="cart-item-title">
									{pick.title}
								</span>
								<span className="cart-item-amount">
									{pick.price}
								</span>
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}

export default Cart
