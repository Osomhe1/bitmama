import './App.css';
// import { LoginButton } from './components/LoginButton';
// import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/Navbar';

function App() {

  // const {isLoading, error} = useAuth0();
  return (
    <div className="App">
      {/* {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading....</p>} */}
      {/* {!error && !isLoading && */}
       <>
     
      <NavBar />
      <Profile />
      </>
     
      
     
    </div>
  );
}

export default App;
