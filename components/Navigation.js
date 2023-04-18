import Link from 'next/link'

export default function Navbar() {
  const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_CALLBACK_URL)
  const clientId = encodeURIComponent('test-client-id')

  return (
    <section className='navbar'>
      <ul>
        <li>
          <Link href='/'> Home </Link>
        </li>
        <li>
          <Link href={process.env.NEXT_PUBLIC_OAUTH_API_URL + 'v1/login?client_id=' + clientId + '&redirect_uri=' + redirectUri}>Login</Link>
        </li>
      </ul>
    </section>
  )
}
