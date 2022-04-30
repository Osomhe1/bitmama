
import React from 'react'

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <button onClick={() => logout()}>Logout</button>
    )
  )
}
