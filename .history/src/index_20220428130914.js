import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Auth0Provider} from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth0/AuthProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory >
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
)

reportWebVitals();
