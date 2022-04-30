import './App.css';
// import { LoginButton } from './components/LoginButton';
// import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading';

import NavBar from './components/Navbar';

function App() {

  // const {isLoading, error} = useAuth0();
   const { isLoading } = useAuth0()

   if (isLoading) {
     return <Loading />
   }

  return (
    <div className="App">
     

       <>
     
      <NavBar />
      <Routes>
        <
      </Routes>
      
      </>
     
      
     
    </div>
  );
}

export default App;
