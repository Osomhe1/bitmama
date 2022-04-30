import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'

function App() {

  const {isLoading, error}=
  return (
    <div className="App">
      <h1>Login</h1>
      {}
      <LoginButton />
      <LogoutButton />
      <Profile />
     
    </div>
  );
}

export default App;
