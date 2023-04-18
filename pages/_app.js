import '../styles.css'
import Layout from '../components/Layout'
import { AuthProvider } from '../context/AuthProvider'

export default function RssScraperApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  )
}