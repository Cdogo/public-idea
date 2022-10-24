import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

import styles from './page.module.css'

export default function Page({ children }) {
    return (
        <>
        <Head>
            <title>Public Idea</title>
            <meta name="description" content="Public Idea a place to share ideas that you don't know how to do." />
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