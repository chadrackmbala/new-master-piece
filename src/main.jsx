import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Layout from './components/layout'
import Events from './pages/events'
import Profile from './pages/profile'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/profile",
				element: <Profile />
			},
			{
				path: "/events",
				element: <Events />
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
