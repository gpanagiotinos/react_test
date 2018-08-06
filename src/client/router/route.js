import React from 'react'
import Login from '../components/login.jsx'
import Register from '../components/register.jsx'
import Home from '../components/home.jsx'
export default [
	{
		name: 'Home',
		path: '/home',
		main: () => <Home />
	},
	{
		name: 'Login',
		path: '/login',
		main: () => <Login />
	},
	{
		name: 'Register',
		path: '/register',
		main: () => <Register />
	},
]
