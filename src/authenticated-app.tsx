import { useAuth } from 'context/auth-context'
import React from 'react'
import { HomePage } from 'views/home/HomePage'

export const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return <div>
    <button onClick={logout}>Logout</button>
    <HomePage />
  </div>
}