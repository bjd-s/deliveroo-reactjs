import React from "react"

const Cart = props => {
	return (
		<div className="cart-container">
			<div className="cart-card">
				<button
					className={
						props.cart.length !== 0
							? "cart-disabled cart-isActive"
							: "cart-disabled"
					}
				>
					Valider mon panier
				</button>
				{props.isEmpty === false ? (
					<div className="cart-empty">
						<p>Votre panier est vide</p>
					</div>
				) : null}
				{props.cart.map((pick, index) => {
					return (
						<div className="cart-content" key={index}>
							<div className="cart-counter">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="feather feather-plus-circle"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M8 12L16 12"></path>
									</svg>
								</span>
								<span>1</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="feather feather-plus-circle"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M12 8L12 16"></path>
										<path d="M8 12L16 12"></path>
									</svg>
								</span>
							</div>
							<span className="cart-item-title">
								{pick.title}
							</span>
							<span className="cart-item-amount">
								{pick.price}
							</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Cart
