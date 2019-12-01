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
	const [isEmpty, setIsEmpty] = useState(true)
	const [showModal, setShowModal] = useState(false)
	const [modal, setModal] = useState([])
	const [counter, setCounter] = useState(1)

	const handleDiv = () => {
		setIsEmpty(false)
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

			<Subheader
				title={restaurant.name}
				text={restaurant.description}
				picture={restaurant.picture}
			/>

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
					<Cart
						cart={cart}
						handleDiv={handleDiv}
						isEmpty={isEmpty}
						setIsEmpty={setIsEmpty}
						counter={counter}
						setCounter={setCounter}
					/>
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
					setIsEmpty={setIsEmpty}
					isEmpty={isEmpty}
				/>
			)}
		</>
	)
}

export default App
