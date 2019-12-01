import React from "react"

const Counter = props => {
	return (
		<div className="cart-counter">
			{props.counter < 1 ? (
				props.setIsEmpty(true)
			) : (
				<button
					onClick={() => {
						props.setCounter(props.counter - 1)
					}}
				>
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
				</button>
			)}

			<span>{props.counter}</span>

			<button
				onClick={() => {
					props.setCounter(props.counter + 1)
				}}
			>
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
			</button>
		</div>
	)
}

export default Counter
