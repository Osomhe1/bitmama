import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
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


// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))
