const initialState = {
	cart: [
		{
			product: 'bread 700g',
			quantity: 2,
			unitCost: 90
		},
		{
			product: 'milk 500ml',
			quantity: 1,
			unitCost: 47
		}
	]
}

const cart = function(state=initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			let cartState = {
				...state,
				cart: [...state.cart, action.payload]
			}
			console.log('cartState = ', cartState)
			return cartState
		}

		default:
			return state;
	}
}

export default cart

