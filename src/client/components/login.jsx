import React from 'react'
import Input from '../ui-components/input.jsx'
import axios from 'axios'
// import ReactDOM from 'react-dom'

class Login extends React.Component {
  componentDidMount () {
    console.log('comp mount')
    axios.post('http://localhost:3000/user/create')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <div className='columns has-items-centered is-multiline is-mobile'>
        <div className='column is-12 field has-addons'>
          <Input placeholder='username' type='text' />
        </div>
        <div className='column is-12 field has-addons'>
          <Input placeholder='password' type='password' />
        </div>
      </div>
    )
  }
}

module.exports = Login
