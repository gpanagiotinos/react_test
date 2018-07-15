import React from 'react'
import Input from './input.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DropDown extends React.Component {
	constructor (props){
		super (props)
		this.state = {
			click: false,
			select: this.props.select !== undefined ? parseInt(this.props.select) : null,
			placeholder: this.props.placeholder,
			icon: this.props.icon,
			content: this.props.content,
			contenttype: this.props.contenttype,
			name: this.props.name,
			object: false,
			searchable: false,
			searchtext: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
	}
// handle click to open dropdown
handleClick () {
	this.setState((prevState, props)=> ({
		click: !prevState.click,
		searchable: !prevState.searchable,
		content: props.content,
		object: typeof this.props.content[0] === 'object' ? true : false
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
// search in content array
handleSearch (value) {
	if (this.state.object) {
		let filtered = []
		filtered = JSON.parse(JSON.stringify(this.state.content)).reduce((filter, item) => {
			if (item[this.props.name].indexOf(value) !== -1) {
				filter.push(item)
			} else {
				item[this.props.name] = ''
				filter.push(item)
			}
			return filter
		}, [])
		if (filtered.length > 0) {
			this.setState((prevState, props)=> ({
				content: filtered
			}))
		}
	} else {
		let filtered = []
		filtered = this.state.content.reduce((filter, item) => {
			if (item.indexOf(value) !== -1) {
				filter.push(item)
			} else {
				filter.push('')
			}
			return filter
		}, [])
		if (filtered.length > 0) {
			this.setState((prevState, props)=> ({
				content: filtered
			}))
		}
	}
}
// add and remove placeholder
handleDropDownPlaceholder () {
	if (this.state.select !== undefined && this.state.select !== null) {
		if (this.state.object) {
			return <span>{this.state.content[parseInt(this.state.select)][this.state.name]}</span>
		} else {
			return <span>{this.state.content[parseInt(this.state.select)]}</span>
		}
	} else {
		if (this.state.placeholder !== undefined) {
			return <span>{this.state.placeholder}</span>
		} else {
			return null
		}
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
				if (item[this.state.name].length > 0) {
				return <a key={index} className={this.state.select === index ? 'dropdown-item is-active' : 'dropdown-item'} onClick={this.handleSelect.bind(this, index)}>{item[this.state.name]}</a>	
				} else {
					return null
				}
			})
		} else {
			menu = this.state.content.map((item, index) => {
				if (item.length > 0) {
					return <a key={index} className={this.state.select === index ? 'dropdown-item is-active' : 'dropdown-item'} onClick={this.handleSelect.bind(this, index)}>{item}</a>
				} else {
					return null
				}
			})
		}
		return menu
	} else {
		return null
	}
}
handleDropDownSearchable () {
	if (this.state.searchable) {
		return <Input id='searchable' autofocus='true' value='' onChange={this.handleSearch} placeholder={this.state.placeholder} type='text' />
	} else {
		return 	<button className='button' aria-haspopup='true' aria-controls='dropdown-menu'> {this.handleDropDownPlaceholder()} {this.handleDropDownIcon()} </button>
	}
}
render () {
	return (
		<div className={this.state.click ? 'dropdown is-active' : 'dropdown'} onClick={this.handleClick}>	
			<div className='dropdown-trigger'>
				{this.handleDropDownSearchable()}
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