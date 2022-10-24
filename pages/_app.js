import Page from '../components/page'


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Page><Component {...pageProps} /></Page>
}

export default MyApp
