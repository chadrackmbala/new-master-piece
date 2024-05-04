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
import Administration from './pages/administration'
import Home from './pages/home'
import Medecine from './pages/medecine'
import Law from './pages/law'
import ComputerScience from './pages/computer-science'
import Economy from './pages/economy'
import Registre from './components/register'
import UpdataData from './pages/update-data'
import Admin from './components/admin'
import SignUp from './pages/sign-up'

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
						path: "medecine",
						element: <Medecine />
					},
					{
						path: "law",
						element: <Law />
					},
					{
						path: "computer-science",
						element: <ComputerScience />
					},
					{
						path: "economy",
						element: <Economy />
					},
				]
			},
			{
				path: "/administration",
				element: <Administration />,
				children: [
					
					{
						path: "admin",
						element: <Admin />
					},
				]
			},
			{
				path: "/update-data",
				element: <UpdataData />
			},
		]
	},
	{
		path: "/sign-up",
		element: <SignUp />
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
