import React from 'react'
import Input from '../ui-components/input.jsx'
import DropDown from '../ui-components/dropdown.jsx'
import Button from '../ui-components/button.jsx'
import axios from 'axios'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      roles: []
    }
  }
	componentDidMount() {
		axios.post('http://localhost:3000/user/roles')
		.then((response) =>  {
			this.setState((prevState, props)=> ({
				roles: response.data.roles
			}))
			console.log(this.state.roles)
		})
		.catch((error) => {
			console.log(error)
		})
	}
	render () {
		return (
	      <div className='columns has-items-centered is-multiline is-mobile'>
	        <div className='column is-12 field has-addons'>
	          <Input id='firstname' placeholder='firstname' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input id='lastname' placeholder='lastname' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input id='username' placeholder='username' type='text' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input id='email' placeholder='email' type='email' />
	        </div>
	        <div className='column is-12 field has-addons'>
	          <Input  id='password' placeholder='password' type='password' />
	        </div>
	       	<div className='column is-12 field has-addons'>
	          <DropDown placeholder='Role' icon='angle-down' name='role_name' content={this.state.roles}/>
	        </div>
	       	<div className='column is-12 field has-addons'>
	          <Button text='Submit' bulmatype='is-success' />
	        </div>
	      </div>
		)
	}
}
module.exports = Register
