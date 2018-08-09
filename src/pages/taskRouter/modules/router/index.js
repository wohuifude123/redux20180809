import React from 'react'
import {
	HashRouter as Router,
	Route,
	Link,
	Switch,
	IndexRoute
} from 'react-router-dom'
import {connect} from 'react-redux'
import App from '../components/App'

const Basic = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={App}/>
		</Switch>
	</Router>
)

export default connect()(Basic)