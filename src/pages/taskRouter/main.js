import React from 'react'
import ReactDOM from "react-dom";


import { Provider } from 'react-redux'
import store from './modules/store.js';
import Router from './modules/router';

console.log("initial state: ", store.getState());

const element = document.getElementById('taskRouter');
//
// store.dispatch(addToCart('Coffee 500gm', 1, 250));

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,element
);
