import React from 'react'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const browserHistory = createBrowserHistory({
	basename: '/'
})
import ReactDOM from 'react-dom'
import TopNavBar from './components/topnavbar.jsx'
import Main from './components/main.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import './assets/scss/main.scss'
const App = () => {
  return (
	  	<Router history={browserHistory}>
		  	<div>
		  		<TopNavBar />
		  		<Main />
		  	</div>
	  	</Router>
  	)
}
ReactDOM.render(<App />, document.getElementById('app'))

