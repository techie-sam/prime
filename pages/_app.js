import Layout from '@/components/Layout'
import SideBar from '@/components/SideBar'
import 'styles/globals.css'
export default function App({ Component, pageProps, }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
