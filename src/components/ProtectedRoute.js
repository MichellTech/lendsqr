import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function ProtectedRoute({ children }) {
  const { state } = useLocation()

  if (!state) {
    return <Navigate to='/' />
  }
  return children
}
export default ProtectedRoute
