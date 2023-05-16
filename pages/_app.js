import SideBar from '@/components/SideBar'
import 'styles/globals.css'
export default function App({ Component, pageProps }) {
  console.log(Component)
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
