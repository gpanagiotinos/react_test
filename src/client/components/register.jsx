import React from 'react'
import Input from '../ui-components/input.jsx'
import DropDown from '../ui-components/dropdown.jsx'
import Button from '../ui-components/button.jsx'
import axios from 'axios'

class Register extends React.Component {
	componentDidMount() {

	}
	render () {
		return (
	      <div className='columns has-items-centered is-multiline is-mobile'>
	        <div className='column is-12 field has-addons'>
	          <Input placeholder='firstname' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input placeholder='lastname' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input placeholder='username' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input placeholder='email' type='email' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input placeholder='password' type='password' />
	        </div>
	       	<div className='column is-12 field has-addons'>
	          <DropDown placeholder='Role' icon='angle-down' select='1' name='name' content={[{id: 1, name: 'george'}, {id: 2, name: 'anna'}]}/>
	        </div>
	       	<div className='column is-12 field has-addons'>
	          <Button text='Submit' bulmatype='is-success' />
	        </div>
	      </div>
		)
	}
}
module.exports = Register