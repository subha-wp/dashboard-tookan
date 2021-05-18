import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Tookan Dashboard</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPNwNOy0PN682ddPalVptnSymc7RlKotE"></script>
        </Head>
      <Header />
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
