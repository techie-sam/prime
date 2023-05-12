import 'styles/globals.css'
export default function App ({ Component, pageProps }) {
    console.log(<Component/>)
  return (
    <div>
        <Component {...pageProps}/>
    </div>
  )
}
