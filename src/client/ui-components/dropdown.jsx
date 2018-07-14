import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DropDown extends React.Component {
	constructor (props){
		super (props)
		this.state = {
			click: false,
			select: this.props.select !== undefined ? parseInt(this.props.select) : null,
			placeholder: this.props.select !== undefined ? this.props.content[parseInt(this.props.select)] : this.props.placeholder,
			icon: this.props.icon,
			content: this.props.content,
			contenttype: this.props.contenttype,
			trackby: this.props.trackby,
			name: this.props.name,
			object: typeof this.props.content[0] === 'object' ? true : false
		}
		this.handleClick = this.handleClick.bind(this)
	}
// handle click to open dropdown
handleClick () {
	this.setState(prevState=> ({
		click: !prevState.click
	}))
}
// handle select one of dropdown items
handleSelect (index) {
	if (index === this.state.select) {
			this.setState((prevState, props)=> ({
				select: null,
				placeholder: props.placeholder
			}))
	} else {
		if (this.props.placeholder !== undefined) {
			this.setState((prevState, props)=> ({
				select: index,
				placeholder: this.state.object ? prevState.content[index][props.name] : prevState.content[index]
			}))
		} else {
			this.setState(prevState=> ({
				select: index
			}))
		}
	}
}
// add and remove placeholder
handleDropDownPlaceholder () {
	if (this.state.placeholder !== undefined) {
		return <span>{this.state.placeholder}</span>
	} else {
		return null
	}
}
// add and remove icon
handleDropDownIcon () {
	if (this.state.icon !== undefined) {
		if (this.state.placeholder !== undefined) {
			return 	<span className="icon is-small"><FontAwesomeIcon icon={['fas', this.state.icon]} /></span>
		} else {
			return 	<span className="icon"><FontAwesomeIcon icon={['fas', this.state.icon]} /></span>
		}
	} else {
		return null
	}
}
// handle dynamic rendering of dropdown contents
handleDropDownContent () {
	if (typeof this.state.content !== undefined) {
		let menu = ''
		if (this.state.object) {
			menu = this.state.content.map((item, index) => {
				return <a key={index} className={this.state.select === index ? 'dropdown-item is-active' : 'dropdown-item'} onClick={this.handleSelect.bind(this, index)}>{item[this.state.name]}</a>
			})
		} else {
			menu = this.state.content.map((item, index) => {
				return <a key={index} className={this.state.select === index ? 'dropdown-item is-active' : 'dropdown-item'} onClick={this.handleSelect.bind(this, index)}>{item}</a>
			})
		}
		return menu
	} else {
		return null
	}
}
render () {
	return (
		<div className={this.state.click ? 'dropdown is-active' : 'dropdown'} onClick={this.handleClick}>	
			<div className='dropdown-trigger'>
				<button className='button' aria-haspopup='true' aria-controls='dropdown-menu'>
					{this.handleDropDownPlaceholder()}
					{this.handleDropDownIcon()}
				</button>
			</div>
			<div className='dropdown-menu'>
				<div className='dropdown-content'>
					{this.handleDropDownContent()}
				</div>
			</div>
		</div>
	)
}
}
module.exports = DropDown