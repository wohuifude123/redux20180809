import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
	render(){
		return (
			<div className={'left_layout'}>
				<Footer />
				<AddTodo />
			</div>
		)
	}
}

export default App;
