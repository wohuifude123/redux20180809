import { combineReducers } from 'redux'
import cartReducer from './cart-reducer'
import productsReducer from './products-reducer'

const allReducers = {
	products: productsReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer