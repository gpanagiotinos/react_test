import React from 'react'
import Login from '../components/login.jsx'
import Register from '../components/register.jsx'
export default [
	{
		path: '/login',
		main: () => <Login />
	},
	{
		path: '/register',
		main: () => <Register />
	},
]

