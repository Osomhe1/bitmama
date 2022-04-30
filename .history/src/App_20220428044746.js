import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <LoginButton />
      <LogoutButton />
      
     
    </div>
  );
}

export default App;
