import React from 'react'
import RouterLink from '../ui-components/routerlink.jsx'

class TopNavBar extends React.Component {
	render () {
		return (
			<nav className="navbar is-fixed-top">
				<div className="navbar-end">
					<RouterLink to="/" text="Home" />
					<RouterLink to="/login" text="Login" />
					<RouterLink to="/register" text="Register" />
				</div>
	        </nav>
		)
	}
}
module.exports = TopNavBar