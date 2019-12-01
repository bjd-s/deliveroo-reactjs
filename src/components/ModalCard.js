import React from "react"

const ModalCard = props => {
	return (
		<div className="modal-content">
			<button className="modal-item--close" onClick={props.handleModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="#00cdbd"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
				>
					<path d="M18 6L6 18"></path>
					<path d="M6 6L18 18"></path>
				</svg>
			</button>

			<div className="modal-item">
				<div className="modal-item--header">
					<h3>{props.title}</h3>

					<div className="modal-item--header-popular">
						{props.popular ? (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									fill="#f98000"
									stroke="#F98000"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
								</svg>
								<span>Populaire</span>
							</>
						) : null}
					</div>
				</div>

				{props.picture ? (
					<div className="modal-item--picture">
						<img src={props.picture} alt="" />
					</div>
				) : null}

				{props.description ? (
					<p>{props.description}</p>
				) : (
					<p>La description du produit est à venir !</p>
				)}

				<div className="modal-item--buttons-container">
					<button onClick={props.handleModal}>Annuler</button>
					<button
						onClick={() => {
							let newCart = [...props.cart]
							newCart.push(props.item)
							props.setCart(newCart)
							props.handleDiv()
							props.setModal([])
						}}
					>
						Ajouter {props.price}€
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalCard
