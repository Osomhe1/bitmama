import './App.css';
import  Profile  from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading';

import NavBar from './components/Navbar';

function App() {

  // const {isLoading, error} = useAuth0();
   const { isLoading } = useAuth0()

  //  if (isLoading) {
  //    return <Loading />
  //  }

  return (
    <div className='App'>
      // <Router>
        <NavBar />
        <Routes>
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      {/* </Router> */}
     </div>
  )
}

export default App;


// import React, { createContext, useReducer } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './component/Home'
// import Login from './component/Login'
// import { initialState, reducer } from './store/reducer'

// export const AuthContext = createContext()

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch,
//       }}
//     >
//       <Router>
//         <Routes>
//           <Route path='/login' element={Login} />
//           <Route path='/' element={Home} />
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   )
// }

// export default App
