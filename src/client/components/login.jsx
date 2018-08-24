import React from 'react'
import Input from '../ui-components/input.jsx'
import Button from '../ui-components/button.jsx'
import axios from 'axios'
// import ReactDOM from 'react-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
  }
  handleLoginSubmit () {
    console.log(this.state.password, this.state.username)
  }
  handleUsernameInput (value) {
    console.log(value)
    this.setState((prevState, props) => ({
      username: value.target.value
    }))
  }
  render () {
    return (
      <form>
        <div className='columns has-items-centered is-multiline is-mobile'>
          <div className='column is-12 field has-addons'>
            <Input placeholder='username' username={(username) => { this.handleInput(username) }} type='text' />
          </div>
          <div className='column is-12 field has-addons'>
            <Input placeholder='password' password={(password) => { this.handleInput(password) }} type='password' />
          </div>
          <div className='column is-12 field has-addons'>
            <Button onClick={this.handleLoginSubmit} text='Login' bulmatype='is-success' />
          </div>
        </div>
    </form>
    )
  }
}

module.exports = Login
