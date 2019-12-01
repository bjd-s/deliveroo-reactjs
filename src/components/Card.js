import React from "react"

const Card = props => {
	return (
		<div className="card-container">
			<div
				className="card-container-item"
				onClick={() => {
					let newModal = [...props.modal]
					newModal.push(props.meal)
					props.setModal(newModal)
					props.setShowModal(true)
				}}
			>
				<div className="card-container--info">
					<h3>{props.title}</h3>
					<p>{props.description}</p>

					<div className="card-container-supp">
						<span>{props.price}€</span>
						<div className="popular-svg">
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
				</div>
				<div className="card-container--img">
					{props.picture !== undefined ? (
						<img src={props.picture} alt={props.alt} />
					) : (
						undefined
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
