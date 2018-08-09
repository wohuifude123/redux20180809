import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart-actions'

let AddTodo = ({ dispatch }) => {
	let input = '';
	
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					dispatch(addToCart(input.value, 1, 250))
					input.value = ''
				}}
			>
				<input
					ref={node => {
						console.log('输入的 value ==', node )
						input = node
					}}
				/>
				<button type="submit">
					添加购物数据
				</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo