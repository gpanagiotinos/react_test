import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login.jsx'
import './assets/scss/main.scss'
const App = () => {
  return (<div><Login /></div>)
}

ReactDOM.render(<App />, document.getElementById('app'))
