/*
 * action 类型
 */

export const ADD_TO_CART = 'ADD_TO_CART';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export const addToCart = (product, quantity, unitCost) => {
	return {
		type: ADD_TO_CART,
		payload: {
			product,
			quantity,
			unitCost
		}
	}
}