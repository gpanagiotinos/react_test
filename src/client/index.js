import React from 'react'
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom'
import AppWrapper from './components/appwrapper.jsx'
import TopNavBar from './components/topnavbar.jsx'
import Main from './components/main.jsx'
import {Provider} from 'react-redux'
import store from './store/store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import './assets/scss/main.scss'
const browserHistory = createBrowserHistory({basename: '/'})
library.add(fas)
// init window resize
const App = () => {
  return (<Provider store={store}><Router history={browserHistory}>
    <div>
      <AppWrapper />
      <TopNavBar />
      <Main />
    </div>
  </Router></Provider>)
}
ReactDOM.render(<App />, document.getElementById('app'))
