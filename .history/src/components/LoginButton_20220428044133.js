
import React from 'react'

export const LoginButton = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (!isAuthenticated && <button 
  onClick={()=> loginWithRedirect()}
  >Login</button>)
}
