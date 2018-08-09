import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart-actions'

let AddTodo = ({ dispatch }) => {
	let input

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					dispatch(addToCart('Coffee 500gm', 1, 250))
					input.value = ''
				}}
			>
				<input
					ref={node => {
						input = node
					}}
				/>
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo