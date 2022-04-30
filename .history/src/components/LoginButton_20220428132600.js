import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

 const LoginButton = () => {

    const { loginWithRedirect, } = useAuth0()

  return (
      (
        <>
              <h1>Login</h1>
</>
    )
  )
}

export default LoginButton
