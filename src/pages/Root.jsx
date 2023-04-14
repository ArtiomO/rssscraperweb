import Footer from '../components/Footer'
import Navbartop from '../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <Navbartop />
      <div className='app'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
