import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import ErrorPage from './error'
import AccountPage from './pages/Account'
import LoginPage from './pages/Login'
import { characterLoader } from './components/Character'
import CharacterForm, { action as createAction } from './components/CreateCharacter'
import { AuthProvider } from './context/AuthProvider'
import SaveAuthToken from './components/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/account',
        element: <AccountPage />,
        loader: characterLoader
      },
      {
        path: '/createchar',
        element: <CharacterForm />,
        action: createAction
      },
      {
        path: "/oauthcallback",
        element: <SaveAuthToken />,
      },
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
