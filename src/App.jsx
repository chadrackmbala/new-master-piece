import { useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Login from './pages/login'
import Layout from './components/layout';
import useUserStore from './context/user-context';
import SaideBar from './components/saide-bar';
import { Navigate } from 'react-router-dom';

export default function App() {

  const { isLogged, token } = useUserStore()

  useEffect(()=> {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, [])
  return (
    isLogged ? <Layout /> : <Login />
  )
}
