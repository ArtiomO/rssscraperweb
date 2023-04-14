import { Link } from 'react-router-dom'

export default function Navbartop() {

  const redirectUri = encodeURIComponent("http://localhost:3000/oauthcallback")
  const clientId = encodeURIComponent("test-client-id")

  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        <li>
          <Link to={'/account'}> Account </Link>
        </li>
        <li>
          <Link to={"http://localhost:8080/login?client_id=" + clientId + "&redirect_uri=" + redirectUri}> Login </Link>
        </li>
      </ul>
    </div>
  )
}
