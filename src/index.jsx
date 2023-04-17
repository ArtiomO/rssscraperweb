import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import ErrorPage from './error'
import { AuthProvider } from './context/AuthProvider'
import SaveAuthToken from './components/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/oauthcallback',
        element: <SaveAuthToken />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
