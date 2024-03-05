import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Layout from './components/layout'
import Events from './pages/events'
import Profile from './pages/profile'
import Settings from './pages/setttings'
import Clubs from './pages/clubs'

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
			{
				path: "/clubs",
				element: <Clubs />
			},
			{
				path: "/settings",
				element: <Settings />
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
