import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  return isAuthenticated && <button onClick={() => logout()}>Logout</button>
}


function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
     
    </div>
  );
}

export default App;
