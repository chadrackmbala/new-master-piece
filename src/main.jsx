import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Layout from './components/layout'
import Events from './pages/events'
import Profile from './pages/profile'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/events",
				element: <Events />
			},
			{
				path: "/profile",
				element: <Profile />
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
