import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Events from './pages/events'
import Profile from './pages/profile'
import Settings from './pages/settings'
import Clubs from './pages/clubs'
import Actus from './components/actus'
import Actu from './components/actu'
import Home from './pages/home'

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
				path: "/home",
				element: <Home />
			},
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
				element: <Clubs />,
				children: [
					{
						path: "clubs/medicine",
						element: <Home />
					},
					{
						path: "clubs/law",
						element: <Events />
					},
					{
						path: "clubs/computer-science",
						element: <Profile />
					},
					{
						path: "clubs/economy",
						element: <Profile />
					},
				]
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
