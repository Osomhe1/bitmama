import React, { createContext, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import { initialState, reducer } from './store/reducer'

export const AuthContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
        <Routes>
          <Route path='/login' element={ <Login />} />
          <Route path='/' element={ <Home />} />
        </Routes>
      {/* </Router> */}
    </AuthContext.Provider>
  )
}

export default App
