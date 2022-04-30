import React, { createContext, useReducer } from 'react'

import './App.css'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading'
import { initialState, reducer } from './store/reducer'

import NavBar from './components/Navbar'

function App() {
  // const {isLoading, error} = useAuth0();
  const { isLoading } = useAuth0()
  const [state, dispatch] = useReducer(reducer, initialState)

  if (isLoading) {
    return <Loading />
  }

  return (
   <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
      ></AuthContext.Provider>
      <>
        <NavBar />
        <Routes>
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </>
    </div>
  )
}

export default App
