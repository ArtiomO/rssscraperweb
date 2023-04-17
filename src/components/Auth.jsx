import { useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthProvider'

export default function SaveAuthToken() {
  const location = useLocation()
  const { setAuth } = useContext(AuthContext)

  var token
  token = location.hash.split('=')
  token = token[1].split('&')
  token = token[0]
  token = decodeURIComponent(token)

  useEffect(() => {
    setAuth({ token })
  }, [token, setAuth])
}

export function useAuth() {
  const { auth } = useContext(AuthContext)

  if (Object.keys(auth).length === 0) {
    return false
  } else {
    return true
  }
}
