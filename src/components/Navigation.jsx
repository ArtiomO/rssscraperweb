import { Link } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Navbartop() {
  const redirectUri = encodeURIComponent(process.env.REACT_APP_OAUTH_CALLBACK_URL)
  const clientId = encodeURIComponent('test-client-id')
  const auth = useAuth()

  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        {auth ? (
          <li>Logged in.</li>
        ) : (
          <li>
            <Link to={process.env.REACT_APP_OAUTH_API_URL + 'v1/login?client_id=' + clientId + '&redirect_uri=' + redirectUri}>Login</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
