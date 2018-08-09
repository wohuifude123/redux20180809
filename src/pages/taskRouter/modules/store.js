import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;