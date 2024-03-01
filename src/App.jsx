import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Layout from './components/layout';
import useUserStore from './context/user-context';
import SaideBar from './components/saide-bar';

export default function App() {

  const { isLogged } = useUserStore()

  return (
    isLogged ? <Layout /> : <Login />
  )
}