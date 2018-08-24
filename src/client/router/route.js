import React from 'react'
import Login from '../components/login.jsx'
import Register from '../components/register.jsx'
import Home from '../components/home.jsx'
export default[
  {
    name: 'Home',
    path: '/home',
    key: 'home',
		role: ['admin', 'user', 'guest'],
    main: () => <Home />
  }, {
    name: 'Login',
    path: '/login',
    key: 'login',
		role: ['admin', 'user', 'guest'],
    main: () => <Login />
  }, {
    name: 'Register',
    path: '/register',
    key: 'register',
		role: ['admin'],
    main: () => <Register />
  }
]
