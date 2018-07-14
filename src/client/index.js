import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import TopNavBar from './components/topnavbar.jsx'
import Main from './components/main.jsx'
import './assets/scss/main.scss'
const App = () => {
  return (
	  	<Router>
		  	<div>
		  		<TopNavBar />
		  		<Main />
		  	</div>
	  	</Router>
  	)
}
ReactDOM.render(<App />, document.getElementById('app'))

