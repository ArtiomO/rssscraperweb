import { useContext } from 'react'

export function useAuth() {
    const { auth } = useContext(AuthContext)
  
    if (Object.keys(auth).length === 0) {
      return false
    } else {
      return true
    }
  }