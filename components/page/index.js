import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

import styles from './page.module.css'

export default function Page({ children }) {
    return (
        <>
        <Head>
            <title>John's app</title>
            <meta name="description" content="John's app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div>
            { children }
        </div>
        <Footer/>
        </>
    )
}