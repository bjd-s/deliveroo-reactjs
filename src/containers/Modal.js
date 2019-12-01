import React from "react"
import ModalCard from "../components/ModalCard"

const Modal = props => {
	return (
		<section className="modal-container">
			{props.modal.map((item, index) => {
				return (
					<ModalCard
						key={index}
						title={item.title}
						popular={item.popular}
						picture={item.picture}
						description={item.description}
						price={item.price}
						item={item}
						setShowModal={props.setShowModal}
						cart={props.cart}
						setCart={props.setCart}
						handleDiv={props.handleDiv}
						handleModal={props.handleModal}
						setModal={props.setModal}
					/>
				)
			})}
		</section>
	)
}

export default Modal
