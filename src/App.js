import React, { useState, useEffect } from "react"
import axios from "axios"

import Header from "./components/Header"
import Subheader from "./components/Subheader"
import CardTitle from "./components/CardGroup"
import Cart from "./components/Cart"

import Modal from "./containers/Modal"

import "./App.css"

const App = () => {
	const [restaurant, setRestaurant] = useState({})
	const [menu, setMenu] = useState({})
	const [cart, setCart] = useState([])
	const [isEmpty, setIsEmpty] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [modal, setModal] = useState([])

	const handleDiv = () => {
		setIsEmpty(true)
		setShowModal(false)
	}
	const handleModal = () => {
		setShowModal(false)
		setModal([])
	}

	const fetchData = async () => {
		const response = await axios.get("https://deliveroo-api.now.sh/menu")
		setRestaurant(response.data.restaurant)
		setMenu(response.data.menu)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const keys = Object.keys(menu)
	return (
		<>
			<Header />

			<Subheader title={restaurant.name} text={restaurant.description} />

			<div className="content">
				<div className="main">
					<div className="main-item">
						{keys.map((category, index) => {
							return (
								<div className="menu-item" key={index}>
									<CardTitle
										title={category}
										menu={menu[keys[index]]}
										setShowModal={setShowModal}
										modal={modal}
										setModal={setModal}
									/>
								</div>
							)
						})}
					</div>
					<Cart cart={cart} handleDiv={handleDiv} isEmpty={isEmpty} />
				</div>
			</div>

			{showModal && (
				<Modal
					setShowModal={setShowModal}
					modal={modal}
					cart={cart}
					setCart={setCart}
					handleDiv={handleDiv}
					handleModal={handleModal}
					setModal={setModal}
				/>
			)}
		</>
	)
}

export default App
