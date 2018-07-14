import {NavLink} from 'react-router-dom'
import React from 'react'

class RouterLink extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			to: this.props.to,
			text: this.props.text,
			icon: this.props.icon
		}
	}
	handleLinkIcon () {
		if (this.state.icon !== undefined) {
			return <span className='icon'><i className={'fa fa-' + icon}></i></span>
		} else {
			return null
		}

	}
	render () {
		return (
			<div>
				<NavLink to={this.state.to} className='navbar-item'>{this.handleLinkIcon()}{this.state.text}</NavLink>
			</div>
		)
	}
}
module.exports = RouterLink
