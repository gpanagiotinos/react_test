import React from 'react'

class Button extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			text: this.props.text,
			bulmatype: this.props.bulmatype
		}
	}
	render () {
		return (
			<div>
				<a className= {'button ' + this.state.bulmatype}>{this.state.text}</a>
			</div>
			)
	}
}
module.exports = Button