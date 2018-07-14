import React from 'react'
import Login from './login.jsx'
import Register from './register.jsx'
import { Route } from 'react-router-dom'
import routes from '../router/route.js'
class Main extends React.Component {
	render () {
		return (
			<div className="columns is-multiline is-mobile">
				<div className="column is-12">
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.main}
						/>
					))}
				</div>
			</div>
		)
	}
}
module.exports = Main