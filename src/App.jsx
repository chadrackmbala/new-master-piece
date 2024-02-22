import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import UserContext from './context/user-context';
import Layout from './components/layout';

export default function App() {

  const [email, setEmail] = useState(null);

  const handleLoginSubmit = (emailInput) => {
    setEmail(emailInput);
    console.log("Here :", email);
    console.log("Here :", email);
    alert("Here :", email);
  };

  console.log("Here :", UserContext);

  return (
    email ?
      <UserContext.Provider value={{ isLogged: true, email: email }}>
        <Layout />
      </UserContext.Provider>
      :
      <Login onLoginSubmit={handleLoginSubmit} />
  )
}
