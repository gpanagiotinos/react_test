import React from 'react'
import Login from '../components/login.jsx'
import Register from '../components/register.jsx'
import Home from '../components/home.jsx'
export default [
	{
		path: '/home',
		main: () => <Home />
	},
	{
		path: '/login',
		main: () => <Login />
	},
	{
		path: '/register',
		main: () => <Register />
	},
]

